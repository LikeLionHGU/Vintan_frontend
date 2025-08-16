import { styled, Typography } from "@mui/material";
import React from "react";
import TextInput from "../common/TextInput";
import { VerticalBox } from "../../style/CommunalStyle";
import { useReportField } from "../../store/store";

export default function BusinessSection() {
  const bigDivision = useReportField("bigDivision");
  const middleDivision = useReportField("middleDivision");
  const smallDivision = useReportField("smallDivision");
  const detail = useReportField("detail");
  return (
    <Container p={4} gap={3.5}>
      <Typography variant="title2">분석 업종 선택</Typography>
      {/* 주소 입력 부분 */}
      <VerticalBox gap={4}>
        <VerticalBox gap={1.5}>
          <Typography variant="h2">대분류를 선택해주세요</Typography>
          <TextInput placeholder="주소 검색" />
        </VerticalBox>

        {/* 상세 주소 입력 부분 */}
        <VerticalBox gap={1.5}>
          <Typography variant="h2">중분류와 소분류를 선택해주세요</Typography>
          <TextInput placeholder="건물 명 혹은 상세 주소 입력" />
        </VerticalBox>

        {/* 입지 면적 입력 부분 */}
        <VerticalBox gap={1.5}>
          <Typography variant="h2">
            운영 조건을 최대 60자까지 입력하세요(선택). 건너뛰어도 분석
            가능합니다.
          </Typography>
          <TextInput placeholder="주차, 단체석, 애견동반, ㄴ키즈존 등 운영 조건 입력" />
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
