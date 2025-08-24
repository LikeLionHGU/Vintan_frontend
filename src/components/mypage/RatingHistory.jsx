import { Box, Button, Grid, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  Horizontal,
  HorizontalBox,
  VerticalBox,
} from "../../style/CommunalStyle";
import StarRating from "../community/rating/StarRating";
import Star from "../../imgs/community/star.svg";
import { formatNumber } from "../../utils/function";
import Line from "../../imgs/community/line.png";

export default function RatingHistory({ data }) {
  const theme = useTheme();
  return (
    <Container p={4}>
      <Typography variant="title2">내가 작성한 평점</Typography>
      <Wrapper gap={3} container mt={4.5}>
        <Grid size={4.5} sx={{ borderRight: "1px solid #ccc" }}>
          <VerticalBox justifyContent="flex-start" marginTop="6px">
            <Typography variant="display2" mb={2}>
              {formatNumber(data?.blind.totalRate)}
            </Typography>
            <StarRating
              value={data?.blind.totalRate}
              width="32px"
              marginBottom="6px"
            />
            <Typography variant="caption1" color="#787878">
              평균 평점
            </Typography>
          </VerticalBox>
        </Grid>

        <Grid>
          <VerticalBox gap="6px">
            <Horizontal className="category-wrapper">
              <Typography variant="h1">
                {formatNumber(data?.blind.categoryRate.cleanness)}
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
                {formatNumber(data?.blind.categoryRate.people)}
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
                {formatNumber(data?.blind.categoryRate.reach)}
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
                {formatNumber(data?.blind.categoryRate.rentFee)}
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
      </Wrapper>

      <div
        style={{ borderTop: "1px solid #ccc", width: "100%", height: "1px" }}
      />
      <VerticalBox py={3}>
        <Typography variant="title3">"{data?.blind.title}"</Typography>
        <HorizontalBox gap="11px" alignItems="center" mt="11px" mb={3}>
          <Typography variant="body1">{data?.blind.address}</Typography>
          <Box component="img" src={Line} height="18px" />
          <Typography variant="body1">{data?.blind.date}</Typography>
        </HorizontalBox>
        <Typography variant="h2" mb={1}>
          장점
        </Typography>
        <Typography variant="body1" className="description" mb={3}>
          {data?.blind.positive}
        </Typography>

        <Typography variant="h2" mb={1}>
          단점
        </Typography>
        <Typography variant="body1" className="description">
          {data?.blind.negative}
        </Typography>
      </VerticalBox>

      <div
        style={{ borderTop: "1px solid #ccc", width: "100%", height: "1px" }}
      />

      <HorizontalBox justifyContent="flex-end" pt={4} gap={1}>
        <StyedButton buttonColor={theme.palette.primary02.main}>
          <Typography variant="body2">수정</Typography>
        </StyedButton>
        <StyedButton buttonColor={theme.palette.error.main}>
          <Typography variant="body2">삭제</Typography>
        </StyedButton>
      </HorizontalBox>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: #fff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled(Grid)`
  margin-bottom: 29px;
  .title {
    color: #009c64;
  }

  .category-wrapper {
    justify-content: flex-start;

    img {
      margin-right: 16px;
    }

    h1 {
      width: 40px;
    }
  }

  .category {
    border-radius: 8px;
    background: #ddf6ed;
    color: #005b3b;
    padding: 4px 12px;
  }
`;

const StyedButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "buttonColor",
})(({ theme, buttonColor }) => ({
  width: "70px",
  borderRadius: "6px",
  padding: "8px 20px",
  border: `1px solid ${buttonColor}`,
  color: buttonColor,
}));
