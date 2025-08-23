import React, { useEffect, useState } from "react";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import PageTitle from "../components/common/PageTitle";
import { Typography, useTheme } from "@mui/material";
import Rival from "../components/result/Rival";
import People from "../components/result/People";
import Accessbility from "../components/result/Accessbility";
import Analyze from "../components/result/Analyze";
import Score from "../components/result/Score";
import { useProgressStore } from "../store/store";
import { getAiReportById } from "../api/report";

export default function Result() {
  const theme = useTheme();

  // eslint-disable-next-line no-unused-vars
  const { reportId } = useProgressStore();
  const [reportData, setReportData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAiReportById(1);
      console.log(response);
      setReportData(response.data);
    };
    fetchData();
  }, []);
  return (
    reportData && (
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
          <Rival
            competitors={reportData.competitors}
            summary={reportData.competitorSummary}
          />
          <People analysis={reportData.floatingPopulationAnalysis} />
          <Accessbility analysis={reportData.accessibilityAnalysis} />
          <Analyze
            analysis={reportData.generalOverviewReport}
            addressName={reportData.addressName}
          />
          <Score
            analysis={reportData.finalScore}
            summary={reportData.finalReportReviewSummary}
          />
        </Vertical>
      </VerticalBox>
    )
  );
}
