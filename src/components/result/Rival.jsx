import React from "react";
import { Horizontal, VerticalBox } from "../../style/CommunalStyle";
import { styled, Typography, useTheme } from "@mui/material";

const dummy = {
  summary: "반경 500m 내에 3개의 경쟁업체가 있으며, 평균 평점은 4.2점입니다.",
  marketList: [
    {
      name: "화목정",
      address: "장량중앙로 82-1",
      content:
        "'퓨전 중화' 컨셉(김피탕, 돌판해물짜장 등). 상권 인지도가 높으며, 가족/소모임 수요가 강함.",
    },
    {
      name: "화목정",
      address: "장량중앙로 82-1",
      content:
        "'퓨전 중화' 컨셉(김피탕, 돌판해물짜장 등). 상권 인지도가 높으며, 가족/소모임 수요가 강함.",
    },
    {
      name: "화목정",
      address: "장량중앙로 82-1",
      content:
        "'퓨전 중화' 컨셉(김피탕, 돌판해물짜장 등). 상권 인지도가 높으며, 가족/소모임 수요가 강함.",
    },
    {
      name: "화목정",
      address: "장량중앙로 82-1",
      content:
        "'퓨전 중화' 컨셉(김피탕, 돌판해물짜장 등). 상권 인지도가 높으며, 가족/소모임 수요가 강함.",
    },
    {
      name: "화목정",
      address: "장량중앙로 82-1",
      content:
        "'퓨전 중화' 컨셉(김피탕, 돌판해물짜장 등). 상권 인지도가 높으며, 가족/소모임 수요가 강함.",
    },
  ],
};

export default function Rival() {
  const theme = useTheme();

  return (
    <Container px={5.5} py={7.5}>
      <Typography variant="title2" mb={1}>
        경쟁업체 분석
      </Typography>
      <Typography variant="body1" id="rival-description">
        경쟁업체 분석은 1km 생활권 내 유사 업체 기준으로 분석되었습니다.
      </Typography>
      <Horizontal
        sx={{ overflow: "auto", justifyContent: "flex-start" }}
        gap={2}
        id="market-list"
        mb={4}
      >
        {dummy.marketList.map((item, index) => (
          <RivalMarket p={3.5} key={index}>
            <Typography variant="caption1" className="index">
              경쟁업체 {String(index + 1).padStart(2, "0")}
            </Typography>

            <Typography variant="title3" className="title">
              {item.name}
            </Typography>

            <Typography variant="body1" className="addr">
              {item.address}
            </Typography>

            <Typography variant="body2" className="desc">
              {item.content}
            </Typography>
          </RivalMarket>
        ))}
      </Horizontal>
      <Summary px={4} py={3}>
        <Typography variant="h2" color={theme.palette.primary02.main}>
          요약
        </Typography>
        <Typography variant="body1">{dummy.summary}</Typography>
      </Summary>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background-color: "#fff";
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
  width: 99%;

  & #rival-description + #market-list {
    margin-top: ${({ theme }) => theme.spacing(3.5)};
  }
`;

const RivalMarket = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "20px",
  border: `1px solid ${theme.palette.grey[200]}`,
  width: "370px",
  flexShrink: 0,

  "& .index + .title": { marginTop: theme.spacing(1.5) },
  "& .title + .addr": { marginTop: theme.spacing(0.5) },
  "& .addr + .desc": { marginTop: theme.spacing(3.5) },

  ".index": {
    textAlign: "center",
    color: theme.palette.primary02.main,
    borderRadius: "4px",
    backgroundColor: theme.palette.primary04.main,
    width: "max-content",
    padding: "0 4px",
  },
}));

const Summary = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.grey[100],
}));
