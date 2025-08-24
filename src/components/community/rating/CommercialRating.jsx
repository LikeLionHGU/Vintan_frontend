import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import {
  Horizontal,
  HorizontalBox,
  VerticalBox,
} from "../../../style/CommunalStyle";
import StarRating from "./StarRating";
import Star from "../../../imgs/community/star.svg";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../utils/function";

export default function CommercialRating({ data }) {
  const navigate = useNavigate();

  return (
    <Container p={4}>
      <Typography variant="title2">{data?.name} 상권 평점</Typography>
      <TotalInfoContainer position="relative">
        {/* total rate */}
        <VerticalBox gap={2.5} sx={{ width: "320px" }}>
          <Typography variant="display2">{data?.totalRate}</Typography>
          <StarRating value={data?.totalRate} />
        </VerticalBox>

        {/* category 별 rate */}
        <VerticalBox
          gap="6px"
          sx={{ borderLeft: "1px solid #ccc", paddingLeft: "33px" }}
        >
          {/* 청결도 */}
          <Horizontal className="category-wrapper">
            <Typography variant="h1">{formatNumber(data?.clean)}</Typography>
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
            <Typography variant="h1">{formatNumber(data?.people)}</Typography>
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
              {formatNumber(data?.accessibility)}
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
            <Typography variant="h1">{formatNumber(data?.rentFee)}</Typography>
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

        <WriteButton
          onClick={() =>
            navigate(
              `/community/rating/add?code=${data.code}&name=${data.name}`
            )
          }
        >
          <Typography variant="h2">평점 작성</Typography>
        </WriteButton>
      </TotalInfoContainer>

      <VerticalBox gap={4} py={6}>
        {data?.blind.map((item, index) => (
          <BlindRate
            key={index}
            onClick={() =>
              navigate(`/community/rating/${data.code}/detail/${item.id}`)
            }
          >
            <VerticalBox gap="6px" sx={{ width: "320px" }}>
              <Typography variant="title3">평균 {item.rate}</Typography>
              <StarRating value={item.rate} width="24px" />
            </VerticalBox>
            <VerticalBox>
              <Typography variant="title3">{item.title}</Typography>
              <Horizontal gap="11px" sx={{ justifyContent: "flex-start" }}>
                <Typography
                  variant="body1"
                  sx={{ borderRight: "1px solid #ccc", paddingRight: "11px" }}
                >
                  {item.address}
                </Typography>
                <Typography variant="body1">{item.date}</Typography>
              </Horizontal>
            </VerticalBox>
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

const BlindRate = styled(HorizontalBox)`
  cursor: pointer;
`;
