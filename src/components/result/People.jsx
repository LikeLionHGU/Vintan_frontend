import { styled, Typography } from "@mui/material";
import React from "react";
import { VerticalBox } from "../../style/CommunalStyle";
import { splitSentences } from "../../utils/function";

const peoplePattern = {
  weekPattern: "평일 평균 5000명",

  weekendPattern: "주말 평균 8000명",

  aroundEffect: "오피스 빌딩, 아파트 단지",

  ageGroup: "20-40대",
};

export default function People() {
  return (
    <Container px={5.5} py={7.5}>
      <Typography variant="title2" mb={1}>
        유동인구 분석
      </Typography>
      <Typography variant="body1" id="people-description">
        유동인구 분석은 기준지점 반경 1km 내 주요 도로·정류장·거점의
        평일/주말·시간대별 이동 흐름을 종합해 산정했습니다.
      </Typography>

      {/* 패턴 분석 */}
      <VerticalBox id="people-pattern" gap={4}>
        <Info gap="5px">
          <Typography variant="h2" className="title">
            평일 패턴
          </Typography>
          <Typography>{splitSentences(peoplePattern.weekPattern)}</Typography>
        </Info>

        <Info gap="5px">
          <Typography variant="h2" className="title">
            주말 패턴
          </Typography>
          <Typography>
            {splitSentences(peoplePattern.weekendPattern)}
          </Typography>
        </Info>

        <Info gap="5px">
          <Typography variant="h2" className="title">
            주변 시설
          </Typography>
          <Typography>{splitSentences(peoplePattern.aroundEffect)}</Typography>
        </Info>

        <Info gap="5px">
          <Typography variant="h2" className="title">
            주 연령층
          </Typography>
          <Typography>{splitSentences(peoplePattern.ageGroup)}</Typography>
        </Info>
      </VerticalBox>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background-color: "#fff";
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
  width: 99%;

  & #people-description + #people-pattern {
    margin-top: ${({ theme }) => theme.spacing(3.5)};
  }
`;

const Info = styled(VerticalBox)(({ theme }) => ({
  ">.title": {
    color: theme.palette.primary02.main,
  },
}));
