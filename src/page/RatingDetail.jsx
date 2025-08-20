import React, { useEffect } from "react";
import { Horizontal, HorizontalBox, VerticalBox } from "../style/CommunalStyle";
import { Box, Button, Grid, styled, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import PageTitle from "../components/community/PageTitle";
import StarRating from "../components/community/rating/StarRating";
import Star from "../imgs/community/star.svg";
import Line from "../imgs/community/line.png";

const dummy = {
  totalRate: 4.25,
  blind: {
    title: "양덕동 카페거리 솔직 후기",
    positive: "분위기 좋은 카페가 많고 주차가 편리함.",
    negative: "주말에는 사람이 너무 많아서 자리가 없음.",
    address: "포항시 북구 양덕동",
    date: "2024.08.19",
    categoryRate: {
      cleanness: 5,
      people: 4,
      reach: 5,
      rentFee: 3,
    },
  },
};

export default function RatingDetail() {
  const theme = useTheme();
  const { id } = useParams();

  return (
    <VerticalBox height="100%">
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 창업스퀘어 &gt; 평점
      </Typography>
      <PageTitle text="평점" isHere={true} />
      <RateWrapper container px={3} py={4}>
        <Grid size={{ md: 3 }}>
          <Typography variant="title3">평균 {dummy.totalRate}</Typography>
          <StarRating value={dummy.totalRate} width="24px" marginTop="6px" />

          <VerticalBox gap="6px" mt={4.5}>
            <Horizontal className="category-wrapper">
              <Typography variant="h1">
                {dummy.blind.categoryRate.cleanness}.0
              </Typography>
              <Box
                component="img"
                src={Star}
                sx={{ height: "20px", width: "20px" }}
                mb="3px"
              />
              <Typography variant="h2" className="category">
                청결도
              </Typography>
            </Horizontal>

            {/* 유동인구, 활기 */}
            <Horizontal className="category-wrapper">
              <Typography variant="h1">
                {dummy.blind.categoryRate.people}.0
              </Typography>
              <Box
                component="img"
                src={Star}
                sx={{ height: "20px", width: "20px" }}
                mb="3px"
              />
              <Typography variant="h2" className="category">
                유동인구, 활기
              </Typography>
            </Horizontal>

            {/* 접근성 */}
            <Horizontal className="category-wrapper">
              <Typography variant="h1">
                {dummy.blind.categoryRate.reach}.0
              </Typography>
              <Box
                component="img"
                src={Star}
                sx={{ height: "20px", width: "20px" }}
                mb="3px"
              />
              <Typography variant="h2" className="category">
                접근성
              </Typography>
            </Horizontal>

            {/* 임대료 */}
            <Horizontal className="category-wrapper">
              <Typography variant="h1">
                {dummy.blind.categoryRate.rentFee}.0
              </Typography>
              <Box
                component="img"
                src={Star}
                sx={{ height: "20px", width: "20px" }}
                mb="3px"
              />
              <Typography variant="h2" className="category">
                임대료
              </Typography>
            </Horizontal>
          </VerticalBox>
        </Grid>
        <Grid size={{ md: 7 }}>
          <Typography variant="title3">"{dummy.blind.title}"</Typography>
          <HorizontalBox gap="11px" alignItems="center" mt="11px" mb={3}>
            <Typography variant="body1">{dummy.blind.address}</Typography>
            <Box component="img" src={Line} height="18px" />
            <Typography variant="body1">{dummy.blind.date}</Typography>
          </HorizontalBox>
          <Typography variant="h2">장점</Typography>
          <Typography variant="body1" className="description">
            {dummy.blind.positive}
          </Typography>

          <Typography variant="h2">단점</Typography>
          <Typography variant="body1" className="description">
            {dummy.blind.negative}
          </Typography>
        </Grid>
        <Grid
          size={{ md: 2 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
          gap={1}
        >
          <StyedButton buttonColor={theme.palette.primary02.main}>
            <Typography variant="body2">수정</Typography>
          </StyedButton>
          <StyedButton buttonColor={theme.palette.error.main}>
            <Typography variant="body2">삭제</Typography>
          </StyedButton>
        </Grid>
      </RateWrapper>
    </VerticalBox>
  );
}

const RateWrapper = styled(Grid)(({ theme }) => ({
  borderRadius: "24px",
  backgroundColor: "#fff",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
  height: "100%",

  "& .category": {
    borderRadius: 8,
    background: "#ddf6ed",
    color: "#005b3b",
    padding: "4px 12px",
  },

  "& .category-wrapper": {
    justifyContent: "flex-start",

    "& > h1": {
      width: "35px",
    },

    "& > img": {
      marginLeft: "4px",
      marginRight: "24px",
    },
  },

  "& .description": {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

const StyedButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "buttonColor",
})(({ theme, buttonColor }) => ({
  width: "70px",
  borderRadius: "6px",
  padding: "8px 20px",
  border: `1px solid ${buttonColor}`,
  color: buttonColor,
}));
