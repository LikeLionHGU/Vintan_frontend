import React from "react";
import DonutChart from "./DonutChart";
import styled from "@emotion/styled";
import { HorizontalBox, VerticalBox } from "../../style/CommunalStyle";
import { Box, Typography } from "@mui/material";
import CategoryScore from "./CategoryScore";

const finalScore = {
  floatingPopulationScore: 85,
  accessibilityScore: 90,
  competitionScore: 75,
  overallReviewScore: 80,
  totalScore: 82,
};

export default function Score() {
  return (
    <Container py={5.5} px={7.5}>
      <Typography variant="title2" mb={1}>
        최종 점수
      </Typography>
      <Typography variant="body1" id="access-description">
        경쟁 강도, 배후/유입, 접근성, 빈땅 창업 스퀘어 평점을 종합하여 입지와
        업종 적합도를 평가했습니다.
      </Typography>
      <HorizontalBox>
        <ChartContainer>
          <DonutChart />
        </ChartContainer>
        <ChartContainer>
          <CategoryScore finalScore={finalScore} />
        </ChartContainer>
      </HorizontalBox>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background-color: "#fff";
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
  width: 99%;
`;

export const ChartContainer = styled(Box)({
  width: "100%",
  height: 330,
  "& .recharts-wrapper:focus, & .recharts-surface:focus, & .recharts-bar-rectangle:focus":
    {
      outline: "none",
    },
  "& :focus": { outline: "none" },
  "& :focus-visible": { outline: "none" },
});
