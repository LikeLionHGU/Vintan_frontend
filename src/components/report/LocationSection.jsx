import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import TextInput from "../common/TextInput";
import Map from "../../imgs/report/map.svg";
import Building from "../../imgs/report/building.png";
import Codepen from "../../imgs/report/codepen.png";
import { Horizontal, VerticalBox } from "../../style/CommunalStyle";
import { useReportField } from "../../store/store";
import BasicModal from "../common/BasicModal";
import SearchAddress from "./SearchAddress";

export default function LocationSection() {
  const address = useReportField("address");
  const detailAddress = useReportField("detailAddress");
  const area = useReportField("area");

  const [open, setOpen] = useState(false);
  const [areaType, setAreaType] = useState("pyeong");

  const handleClick = (type) => {
    if (areaType !== type) {
      setAreaType(type);
      const areaValue = area.value;
      if (type === "pyeong") {
        area.onChange(areaValue * 0.3025); //m2 -> 평
      } else if (type === "m2") {
        area.onChange(areaValue * 3.3058); //평 -> m2
      }
    }
  };

  return (
    <>
      {open && (
        <BasicModal
          open={open}
          handleClose={() => setOpen(false)}
          modalWidth="550px"
          modalHeight="550px"
        >
          <SearchAddress handleClose={() => setOpen(false)} />
        </BasicModal>
      )}
      <Container p={4} gap={3.5}>
        <Typography variant="title2">분석 입지 정보 입력</Typography>
        {/* 주소 입력 부분 */}
        <VerticalBox gap={4}>
          <VerticalBox gap={1.5}>
            <Typography variant="h2">분석 입지 주소를 입력해주세요</Typography>
            <TextInput
              placeholder="주소 검색"
              icon={Map}
              search={true}
              readOnly={true}
              onClick={() => setOpen(true)}
              {...address}
            />
          </VerticalBox>

          {/* 상세 주소 입력 부분 */}
          <VerticalBox gap={1.5}>
            <Typography variant="h2">
              건물 명이나 층 수 등의 상세한 주소를 입력해주세요(선택).
            </Typography>
            <TextInput
              placeholder="건물 명 혹은 상세 주소 입력"
              icon={Building}
              {...detailAddress}
            />
          </VerticalBox>

          {/* 입지 면적 입력 부분 */}
          <VerticalBox gap={1.5}>
            <Typography variant="h2">
              입지의 면적을 입력해주세요(선택).
            </Typography>
            <Horizontal sx={{ justifyContent: "flex-start" }} gap={2}>
              <TextInput
                placeholder="입지 면적 입력"
                icon={Codepen}
                {...area}
              />
              <Box>
                <AreaTypeButton
                  id="pyeong"
                  onClick={() => handleClick("pyeong")}
                  isFocus={areaType === "pyeong"}
                  sx={{ borderRadius: "6px 0 0 6px" }}
                >
                  <Typography variant="body2">평</Typography>
                </AreaTypeButton>
                <AreaTypeButton
                  id="m2"
                  onClick={() => handleClick("m2")}
                  isFocus={areaType === "m2"}
                  sx={{ borderRadius: "0 6px 6px 0" }}
                >
                  <Typography variant="body2">{"m\u00B2"}</Typography>
                </AreaTypeButton>
              </Box>
            </Horizontal>
          </VerticalBox>
        </VerticalBox>
      </Container>
    </>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
  height: "60vh",
  minHeight: "460px",
}));

const AreaTypeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isFocus",
})(({ theme, isFocus }) => ({
  textTransform: "none",
  minWidth: "44px",
  height: "40px",
  padding: 0,
  border: `1px solid ${theme.palette.grey[500]}`,
  background: `${isFocus ? "#fff" : theme.palette.grey[100]}`,
  color: `${isFocus ? "#000" : theme.palette.grey[500]}`,
}));
