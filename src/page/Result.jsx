import React from "react";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import PageTitle from "../components/common/PageTitle";
import { Typography, useTheme } from "@mui/material";
import Rival from "../components/result/Rival";
import People from "../components/result/People";
import Accessbility from "../components/result/Accessbility";
import Analyze from "../components/result/Analyze";
import Score from "../components/result/Score";

export default function Result() {
  const theme = useTheme();
  return (
    <VerticalBox sx={{ overflow: "auto" }}>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; AI 보고서 &gt; 보고서 결과
      </Typography>
      <PageTitle text="보고서 결과" />
      <Typography variant="body1">
        지연님의 공실에 대한 AI 분석이 완료되었습니다. <br />
        아래 결과에서 확인하세요.
      </Typography>

      <Vertical gap={4}>
        <Rival />
        <People />
        <Accessbility />
        <Analyze />
        <Score />
      </Vertical>
    </VerticalBox>
  );
}
