import React from "react";
import { HorizontalBox, VerticalBox } from "../style/CommunalStyle";
import { Typography, useTheme } from "@mui/material";
import PageTitle from "../components/community/PageTitle";

export default function Question() {
  const theme = useTheme();
  return (
    <VerticalBox>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 창업스퀘어 &gt; 질문
      </Typography>
      <HorizontalBox gap={2.5}>
        <PageTitle text="평점" isHere={false} link="/community/rating" />
        <PageTitle text="질문" isHere={true} />
      </HorizontalBox>
      <Typography variant="body1">
        커뮤니티에서 00동 상권의 평점과 장·단점을 확인해보세요.
        <br />
        궁금한 점은 질문게시판에서 직접 물어보고 답을 받아보세요.
      </Typography>
    </VerticalBox>
  );
}
