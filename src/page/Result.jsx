import React, { useEffect, useState } from "react";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import PageTitle from "../components/common/PageTitle";
import { Typography, useTheme } from "@mui/material";
import Rival from "../components/result/Rival";
import People from "../components/result/People";
import Accessbility from "../components/result/Accessbility";
import Analyze from "../components/result/Analyze";
import Score from "../components/result/Score";
import { getAiReportById } from "../api/report";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthWrapper";

export default function Result() {
  const theme = useTheme();

  const { session } = useAuth();

  const { reportId } = useParams();
  const [reportData, setReportData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAiReportById(reportId);
      setReportData(response.data);
    };
    fetchData();
  }, [reportId]);
  return (
    reportData && (
      <VerticalBox sx={{ overflow: "auto" }}>
        <Typography variant="caption1" color={theme.palette.grey[600]}>
          홈 &gt; AI 보고서 &gt; 보고서 결과
        </Typography>
        <PageTitle text="보고서 결과" />
        <Typography variant="body1">
          {session.name}님의 공실에 대한 AI 분석이 완료되었습니다. <br />
          아래 결과에서 확인하세요.
        </Typography>

        <Vertical gap={4} mt={2}>
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
