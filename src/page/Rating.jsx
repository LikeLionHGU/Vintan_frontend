import React from "react";
import { HorizontalBox, VerticalBox } from "../style/CommunalStyle";
import { Typography, useTheme } from "@mui/material";
import PageTitle from "../components/community/PageTitle";
import CommercialRating from "../components/community/rating/CommercialRating";

export default function Rating() {
  const theme = useTheme();
  return (
    <VerticalBox>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 창업스퀘어 &gt; 평점
      </Typography>
      <HorizontalBox gap={2.5}>
        <PageTitle text="평점" isHere={true} />
        <PageTitle text="질문" isHere={false} link="/community/question" />
      </HorizontalBox>
      <Typography variant="body1">
        커뮤니티에서 원하는 상권의 평점과 장단점을 확인해보세요. <br />
        궁금한 점은 질문게시판에서 직접 물어보고 답을 받아보세요.
      </Typography>
      <CommercialRating />
    </VerticalBox>
  );
}
