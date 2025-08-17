import { styled, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import TextInput from "../common/TextInput";
import Map from "../../imgs/report/map.svg";
import { Horizontal, VerticalBox } from "../../style/CommunalStyle";
import { getAddressInfo } from "../../api/report";
import { useReportField } from "../../store/store";

export default function SearchAddress({ handleClose }) {
  const [value, setValue] = useState("");
  const [isFirst, setIsFirst] = useState(true);
  const [addressList, setAddressList] = useState([]);
  const theme = useTheme();
  const addressField = useReportField("address");

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (addressInfo) => {
    addressField.onChange(addressInfo);
    handleClose();
  };

  const onEnterDown = async () => {
    if (isFirst) setIsFirst(false);
    const response = await getAddressInfo(value);
    setAddressList(response.data.results.juso);
  };

  return (
    <>
      <Typography variant="h1" mb={2} mt={6}>
        주소찾기
      </Typography>
      <TextInput
        search={true}
        icon={Map}
        value={value}
        onChange={handleInputValue}
        onEnterDown={onEnterDown}
      />
      <VerticalBox gap={1} mt={1.5}>
        {isFirst === true && (
          <Description px={4.5} py={2} gap={1}>
            <Typography variant="body1">
              <span className="important">건물번호</span> 또는{" "}
              <span className="important">번지수</span>를 같이 입력하면 더
              빨라요!
            </Typography>
            <Typography variant="caption1" color={theme.palette.grey[600]}>
              ㅇㅇ대로 123 (도로명 + 건물번호) <br />
              ㅁㅁㅁㅁ아파트 (건물명, 아파트명) <br />
              ㅇㅇㅇ로1가 234 (동/읍/면/리 + 번지)
            </Typography>
          </Description>
        )}
        {addressList.length !== 0 && (
          <Typography variant="caption1" color={theme.palette.grey[600]}>
            검색결과 {addressList.length}건
          </Typography>
        )}
        {addressList.length !== 0 &&
          addressList.map((itm, index) => (
            <Address
              px="20px"
              py="14px"
              key={index}
              gap={1}
              onClick={() => handleClick(itm.roadAddr)}
            >
              {/* 도로명 */}
              <Horizontal gap={1.5}>
                <Typography variant="caption1" className="title">
                  도로명
                </Typography>
                <Typography variant="caption1">{itm.roadAddr}</Typography>
              </Horizontal>

              {/* 지번 */}
              <Horizontal gap={1.5}>
                <Typography variant="caption1" className="title">
                  지번
                </Typography>
                <Typography variant="caption1">{itm.jibunAddr}</Typography>
              </Horizontal>

              {/* 우편번호 */}
              <Horizontal gap={1.5}>
                <Typography variant="caption1" className="title">
                  우편번호
                </Typography>
                <Typography variant="caption1">{itm.zipNo}</Typography>
              </Horizontal>
            </Address>
          ))}
      </VerticalBox>
    </>
  );
}

const Description = styled(VerticalBox)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.spacing(1),

  ".important": {
    color: theme.palette.primary02.main,
  },
}));

const Address = styled(VerticalBox)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: "#fff",
  borderRadius: "6px",
  cursor: "pointer",

  ".title": {
    color: theme.palette.primary02.main,
    padding: "0 10px",
    backgroundColor: theme.palette.primary04.main,
    borderRadius: "4px",
    width: "75px",
    textAlign: "center",
  },
}));
