import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { Horizontal, VerticalBox } from "../../../style/CommunalStyle";
import StarRating from "./StarRating";
import Star from "../../../imgs/community/star.svg";
import { useNavigate } from "react-router-dom";

const dummy = {
  totalRate: 4.5,
  clean: 3.6,
  people: 3.2,
  accessbility: 4.1,
  rentFee: 2.1,
  Blind: [
    {
      id: 1,
      rate: 2.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
    {
      id: 2,
      rate: 3.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
    {
      id: 2,
      rate: 3.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
    {
      id: 2,
      rate: 3.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
    {
      id: 2,
      rate: 3.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
    {
      id: 2,
      rate: 3.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
    {
      id: 2,
      rate: 3.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
    {
      id: 2,
      rate: 3.5,
      title: "젊은 사람들이 많은 상권",
      date: "2001.03.22",
      userId: "hyeokkiyaa",
      location: "이빈땅·서울 강동구 상암동",
    },
  ],
};

export default function CommercialRating() {
  const navigate = useNavigate();
  return (
    <Container p={4}>
      <Typography variant="title2">상일동 상권 평점</Typography>
      <TotalInfoContainer position="relative">
        {/* total rate */}
        <VerticalBox gap={2.5} sx={{ width: "320px" }}>
          <Typography variant="display2">{dummy.totalRate}</Typography>
          <StarRating value={dummy.totalRate} />
        </VerticalBox>

        {/* category 별 rate */}
        <VerticalBox
          gap="6px"
          sx={{ borderLeft: "1px solid #ccc", paddingLeft: "33px" }}
        >
          {/* 청결도 */}
          <Horizontal className="category-wrapper">
            <Typography variant="h1">{dummy.clean}</Typography>
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
            <Typography variant="h1">{dummy.people}</Typography>
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
            <Typography variant="h1">{dummy.accessbility}</Typography>
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
            <Typography variant="h1">{dummy.rentFee}</Typography>
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

        <WriteButton onClick={() => navigate("/community/rating/add")}>
          <Typography variant="h2">평점 작성</Typography>
        </WriteButton>
      </TotalInfoContainer>

      <VerticalBox gap={4} py={6}>
        {dummy.Blind.map((item, index) => (
          <BlindRate
            container
            key={index}
            onClick={() => navigate(`/community/rating/detail/${item.id}`)}
          >
            <Grid gap="6px" size={{ md: 3 }}>
              <Typography variant="title3">평균 {item.rate}</Typography>
              <StarRating value={item.rate} width="24px" />
            </Grid>
            <Grid>
              <Typography variant="title3">{item.title}</Typography>
              <Horizontal gap="11px">
                <Typography
                  variant="body1"
                  sx={{ borderRight: "1px solid #ccc", paddingRight: "11px" }}
                >
                  {item.location}
                </Typography>
                <Typography variant="body1">{item.date}</Typography>
              </Horizontal>
            </Grid>
          </BlindRate>
        ))}
      </VerticalBox>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background-color: "#fff";
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);

  .category {
    border-radius: 8px;
    background: #ddf6ed;
    color: #005b3b;
    padding: 4px 12px;
  }

  .category-wrapper {
    justify-content: flex-start;

    > h1 {
      width: 35px;
    }

    > img {
      margin-left: 4px;
      margin-right: 24px;
    }
  }
`;

const TotalInfoContainer = styled(Horizontal)`
  position: relative;
  padding-bottom: 23px;
  border-bottom: 1px solid #ccc;
`;

const WriteButton = styled(Button)`
  border-radius: 6px;
  border: 1px solid #009c64;
  background: #009c64;
  padding: 8px 20px;
  width: 200px;
  color: #fff;
  position: absolute;
  bottom: 23px;
  right: 0;
`;

const BlindRate = styled(Grid)`
  cursor: pointer;
`;
