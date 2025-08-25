import React from "react";
import {
  Horizontal,
  HorizontalBox,
  VerticalBox,
} from "../../style/CommunalStyle";
import { Box, styled, Typography, useTheme } from "@mui/material";
import StarRating from "../community/rating/StarRating";
import Star from "../../imgs/community/star.svg";
import { formatNumber } from "../../utils/function";

export default function Analyze({ analysis, addressName }) {
  const theme = useTheme();

  return (
    <Container px={5.5} py={7.5}>
      <Typography variant="title2" mb={1}>
        빈땅 창업 스퀘어 분석
      </Typography>
      <Typography variant="body1" id="access-description">
        ‘빈땅 창업스퀘어’에 작성된 평점와 질문을 바탕으로 분석했습니다. 더
        자세한 내용은 빈땅 창업 스퀘어에서 확인 가능합니다.
      </Typography>

      <HorizontalBox gap={2} mb={4} alignItems="stretch">
        <Wrapper>
          <Typography variant="title2" mb={3}>
            {addressName} 상권 평점
          </Typography>
          <HorizontalBox gap={3}>
            <VerticalBox
              justifyContent="flex-start"
              marginTop="6px"
              borderRight="1px solid #ccc"
            >
              <Typography variant="display2">
                {formatNumber(analysis?.averageCommunityScore)}
              </Typography>
              <StarRating
                value={analysis?.averageCommunityScore}
                width="32px"
                marginTop="6px"
              />
            </VerticalBox>

            <VerticalBox gap="6px">
              <Horizontal className="category-wrapper">
                <Typography variant="h1">
                  {formatNumber(analysis?.averageCleannessScore)}
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
                  {formatNumber(analysis?.averagePopulationScore)}
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
                  {formatNumber(analysis?.averageReachabilityScore)}
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
                  {formatNumber(analysis?.averageRentFeeScore)}
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
          </HorizontalBox>
        </Wrapper>
        <Wrapper p={3.5} justifyContent="space-evenly">
          <Box>
            <Typography variant="h2" className="title">
              장점 요약
            </Typography>
            <Typography>{analysis?.positive}</Typography>
          </Box>
          <Box>
            <Typography variant="h2" className="title" mt="20px">
              단점 요약
            </Typography>
            <Typography>{analysis?.negative}</Typography>
          </Box>
        </Wrapper>
      </HorizontalBox>
      <Summary px={4} py={3}>
        <Typography variant="h2" color={theme.palette.primary02.main}>
          요약
        </Typography>
        <Typography variant="body1">{analysis?.summary}</Typography>
      </Summary>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background-color: "#fff";
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
  width: 99%;
`;

const Wrapper = styled(VerticalBox)`
  border-radius: 20px;
  border: 1px solid #ddd;
  background: #fff;
  padding: 28px;
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

const Summary = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.grey[100],
}));
