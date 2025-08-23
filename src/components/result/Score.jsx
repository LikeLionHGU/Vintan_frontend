import React from "react";
import DonutChart from "./DonutChart";
import styled from "@emotion/styled";
import { VerticalBox } from "../../style/CommunalStyle";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import CategoryScore from "./CategoryScore";
import { splitSentences } from "../../utils/function";

export default function Score({ analysis, summary }) {
  const theme = useTheme();
  return (
    <Container py={5.5} px={7.5}>
      <Typography variant="title2" mb={1}>
        최종 점수
      </Typography>
      <Typography variant="body1" id="access-description">
        경쟁 강도, 배후/유입, 접근성, 빈땅 창업 스퀘어 평점을 종합하여 입지와
        업종 적합도를 평가했습니다.
      </Typography>
      <Grid container mb={3}>
        <Grid size={4}>
          <ChartContainer>
            <DonutChart score={analysis?.totalScore} />
          </ChartContainer>
        </Grid>
        <Grid size={8}>
          <ChartContainer>
            <CategoryScore finalScore={analysis} />
          </ChartContainer>
        </Grid>
      </Grid>
      <Summary px={4} py={3}>
        <Typography variant="h2" color={theme.palette.primary02.main}>
          요약
        </Typography>
        <Typography variant="body1">{splitSentences(summary)}</Typography>
      </Summary>
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

const Summary = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.grey[100],
}));
