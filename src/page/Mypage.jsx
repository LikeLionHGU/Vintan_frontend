import React, { useEffect, useState } from "react";
import { VerticalBox } from "../style/CommunalStyle";
import { Grid, Typography, useTheme } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import Profile from "../components/mypage/Profile";
import RatingHistory from "../components/mypage/RatingHistory";
import ReportHistory from "../components/mypage/ReportHistory";
import { getMyPageInfo } from "../api/mypage";
import QuestionHistory from "../components/mypage/QuestionHistory";

export default function Mypage() {
  const theme = useTheme();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyPageInfo();
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    data && (
      <VerticalBox>
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
              <ReportHistory data={data} />
              <RatingHistory data={data} />
              <QuestionHistory data={data} />
            </VerticalBox>
          </Grid>
        </Grid>
      </VerticalBox>
    )
  );
}
