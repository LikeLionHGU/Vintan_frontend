import { styled, Typography } from "@mui/material";
import React from "react";
import TextInput from "../common/TextInput";
import Map from "../../imgs/report/map.svg";
import Building from "../../imgs/report/building.png";
import Codepen from "../../imgs/report/codepen.png";
import { VerticalBox } from "../../style/CommunalStyle";

export default function LocationSection() {
  return (
    <Container p={4} gap={3.5}>
      <Typography variant="title2">분석 입지 정보 입력</Typography>
      {/* 주소 입력 부분 */}
      <VerticalBox gap={4}>
        <VerticalBox gap={1.5}>
          <Typography variant="h2">분석 입지 주소를 입력해주세요</Typography>
          <TextInput placeholder="주소 검색" icon={Map} search={true} />
        </VerticalBox>

        {/* 상세 주소 입력 부분 */}
        <VerticalBox gap={1.5}>
          <Typography variant="h2">
            건물 명이나 층 수 등의 상세한 주소를 입력해주세요(선택).
          </Typography>
          <TextInput
            placeholder="건물 명 혹은 상세 주소 입력"
            icon={Building}
          />
        </VerticalBox>

        {/* 입지 면적 입력 부분 */}
        <VerticalBox gap={1.5}>
          <Typography variant="h2">
            입지의 면적을 입력해주세요(선택).
          </Typography>
          <TextInput placeholder="건물 명 혹은 상세 주소 입력" icon={Codepen} />
        </VerticalBox>
      </VerticalBox>
    </Container>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
  height: "60vh",
  minHeight: "460px",
}));
