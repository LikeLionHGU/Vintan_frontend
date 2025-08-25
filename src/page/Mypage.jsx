import React, { useEffect, useState } from "react";
import { VerticalBox } from "../style/CommunalStyle";
import { Grid, Typography, useTheme } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import Profile from "../components/mypage/Profile";
import RatingHistory from "../components/mypage/RatingHistory";
import ReportHistory from "../components/mypage/ReportHistory";
import { getMyPageInfo } from "../api/mypage";
import QuestionHistory from "../components/mypage/QuestionHistory";
import NoInfo from "../components/mypage/NoInfo";

export default function Mypage() {
  const theme = useTheme();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyPageInfo();
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);
  return (
    data && (
      <VerticalBox pb={4}>
        <Typography variant="caption1" color={theme.palette.grey[600]}>
          홈 &gt; 마이페이지
        </Typography>
        <PageTitle text="마이페이지" />
        <Grid container spacing={4}>
          <Grid size={4}>
            <Profile data={data} />
          </Grid>
          <Grid size={8}>
            <VerticalBox gap={4}>
              {data.aiReport.length === 0 ? (
                <NoInfo
                  title="AI 보고서 히스토리"
                  isHistory={true}
                  text="분석한 보고서가 없습니다"
                  linkText="AI 보고서 분석하러 가기"
                  link="/report"
                />
              ) : (
                <ReportHistory data={data} />
              )}
              {data.blind === null ? (
                <NoInfo
                  title="내가 작성한 평점"
                  text="작성한 평점이 없습니다"
                  linkText="평점 작성하러 가기"
                  link="/community/rating"
                />
              ) : (
                <RatingHistory data={data} />
              )}
              {data.ask.length === 0 ? (
                <NoInfo
                  title="내가 작성한 질문"
                  text="작성한 질문이 없습니다"
                  linkText="질문하러 가기"
                  link="/community/question"
                />
              ) : (
                <QuestionHistory data={data} />
              )}
            </VerticalBox>
          </Grid>
        </Grid>
      </VerticalBox>
    )
  );
}
