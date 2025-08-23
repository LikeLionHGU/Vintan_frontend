import React from "react";
import { Horizontal, VerticalBox } from "../../style/CommunalStyle";
import { styled, Typography, useTheme } from "@mui/material";

export default function Accessbility() {
  const theme = useTheme();

  return (
    <Container px={5.5} py={7.5}>
      <Typography variant="title2" mb={1}>
        접근성 및 주변 시설 분석
      </Typography>
      <Typography variant="body1" id="access-description">
        접근성 평가는 기준지점 반경 1km 내 대로/사거리, 정류장·역, 주차·진입
        동선, 아파트 단지 규모(세대수)를 종합하여 산정했습니다.
      </Typography>

      <Horizontal id="access-list" gap={2} mb={4}>
        <VerticalBox gap={2}>
          <Access>
            <Typography variant="h2" className="title">
              랜드마크/집객
            </Typography>
            <Typography variant="body2">
              법원·검찰청 콤플렉스, 이마트계열 마트, 대형 카페(DT) 등.
            </Typography>
          </Access>
          <Access>
            <Typography variant="h2" className="title">
              주차시설
            </Typography>
            <Typography variant="body2">공영 주차장 시간당 1000원</Typography>
          </Access>
        </VerticalBox>
        <VerticalBox gap={2}>
          <Access>
            <Typography variant="h2" className="title">
              대중교통
            </Typography>
            <Typography variant="body2">101번, 105번 버스</Typography>
          </Access>
          <Access>
            <Typography variant="h2" className="title">
              역/광역
            </Typography>
            <Typography variant="body2">장량동 주민센터 정류장</Typography>
          </Access>
        </VerticalBox>
      </Horizontal>
      <Summary px={4} py={3}>
        <Typography variant="h2" color={theme.palette.primary02.main}>
          요약
        </Typography>
        <Typography variant="body1">
          주요 도로에 인접해 있어 차량 접근성이 우수하며, 버스 정류장이 도보 3분
          거리에 위치합니다.
        </Typography>
      </Summary>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background-color: "#fff";
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
  width: 99%;

  & #access-description + #access-list {
    margin-top: ${({ theme }) => theme.spacing(3.5)};
  }
`;

const Access = styled(VerticalBox)`
  border-radius: 20px;
  border: 1px solid #ddd;
  background: #fff;
  padding: 28px;
  .title {
    color: #009c64;
    margin-bottom: 6px;
  }
`;

const Summary = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.grey[100],
}));
