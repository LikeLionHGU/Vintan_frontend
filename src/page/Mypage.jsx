import React, { useEffect, useState } from "react";
import { VerticalBox } from "../style/CommunalStyle";
import { Grid, Typography, useTheme } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import Profile from "../components/mypage/Profile";
import RatingHistory from "../components/mypage/RatingHistory";
import ReportHistory from "../components/mypage/ReportHistory";
import { getMyPageInfo } from "../api/mypage";
import QuestionHistory from "../components/mypage/QuestionHistory";

const dummy = {
  email: "example@email.com",
  id: "exampleUser",
  blind: {
    id: 10,
    totalRate: 4.0,
    title: "내가 쓴 블라인드 리뷰",
    address: "포항시 남구",
    date: "2025.08.15",
    categoryRate: {
      cleanness: 4,
      people: 4,
      reach: 4,
      rentFee: 4,
    },
    positive: "장점입니다.",
    negative: "단점입니다.",
  },
  ask: [
    {
      id: "exampleUser",
      title: "상일동 원래 MZ세대들이 많은가요?",
      countComment: 2,
      date: "2025.08.16",
    },
    {
      id: "exampleUser",
      title: "상일동 원래 MZ세대들이 많은가요?2",
      countComment: 0,
      date: "2025.08.17",
    },
  ],
  name: "김민준",
  point: 500,
  businessNumber: 1234567890,
  aiReport: [
    {
      id: "1",
      address: "포항시 북구 장량로 20",
      reportCount: 3,
      date: "2025.08.20",
    },
    {
      id: "3",
      address: "포항시 남구 지곡로 50",
      reportCount: 3,
      date: "2025.07.11",
    },
    {
      id: "4",
      address: "포항시 남구 지곡로 50",
      reportCount: 3,
      date: "2025.07.11",
    },
    {
      id: "5",
      address: "포항시 남구 지곡로 50",
      reportCount: 3,
      date: "2025.07.11",
    },
    {
      id: "6",
      address: "포항시 남구 지곡로 50",
      reportCount: 3,
      date: "2025.07.11",
    },
  ],
};

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
              <QuestionHistory data={dummy} />
            </VerticalBox>
          </Grid>
        </Grid>
      </VerticalBox>
    )
  );
}
