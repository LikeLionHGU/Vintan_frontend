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
  const regionIdField = useReportField("regionId");
  const addressNameField = useReportField("addressName");

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = async (addressInfo) => {
    addressField.onChange(addressInfo.roadAddr);
    const dataForJson = `${addressInfo.siNm} ${addressInfo.sggNm} ${addressInfo.emdNm}`;
    addressNameField.onChange(`${addressInfo.sggNm} ${addressInfo.emdNm}`);
    await fetchRegionCode(dataForJson, addressInfo.siNm);
    handleClose();
  };

  const fetchRegionCode = async (address, sido) => {
    try {
      const response = await fetch(`/regions/${sido}.json`);
      const data = await response.json();

      // 1) 공백/트림 정규화
      const norm = (s) => s?.replace(/\s+/g, " ").trim() || "";
      const normAddr = norm(address);

      // 2) 전체 아이템 배열로 평탄화
      const allItems = Object.values(data).flat();

      // 보조: 점수 함수 (단어 수와 길이로 구체성 점수)
      const score = (name) => {
        const tokens = norm(name).split(" ").length; // 단어 수: 북구(1) < 북구 양덕동(2)
        return tokens * 1000 + norm(name).length; // 단어 수 > 길이
      };

      // 3) 1순위: 주소가 해당 name으로 "끝나는" 항목(풀매칭) 찾기
      let found = allItems.find((it) => normAddr.endsWith(norm(it.name)));

      // 4) 2순위: 포함되는 모든 후보 중에서 가장 구체적인 것(점수 높은 것)
      if (!found) {
        const candidates = allItems.filter((it) =>
          normAddr.includes(norm(it.name))
        );
        if (candidates.length) {
          candidates.sort((a, b) => score(b.name) - score(a.name));
          found = candidates[0];
        }
      }

      // 5) 3순위: 마지막 단어/두 단어로 재시도 (데이터에 정확히 그 형태가 있을 때)
      if (!found) {
        const parts = normAddr.split(" ");
        const last1 = parts.slice(-1).join(" "); // 예: "양덕동"
        const last2 = parts.slice(-2).join(" "); // 예: "북구 양덕동"
        found =
          allItems.find((it) => norm(it.name) === last2) ||
          allItems.find((it) => norm(it.name) === last1);
      }

      if (found) {
        regionIdField.onChange(parseInt(found.code, 10));
      } else {
        console.warn("해당 주소에 맞는 code를 찾지 못했습니다.", { address });
      }
    } catch (err) {
      console.error("지역 코드 조회 중 오류:", err);
    }
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
        placeholder="주소 검색"
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
              onClick={() => handleClick(itm)}
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
  "> div": {
    justifyContent: "flex-start",
  },

  ".title": {
    color: theme.palette.primary02.main,
    padding: "0 10px",
    backgroundColor: theme.palette.primary04.main,
    borderRadius: "4px",
    width: "75px",
    textAlign: "center",
  },
}));
