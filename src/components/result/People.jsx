import { styled, Typography } from "@mui/material";
import React from "react";
import { VerticalBox } from "../../style/CommunalStyle";
import { splitSentences } from "../../utils/function";

const peoplePattern = {
  weekPattern:
    "점심(11:30–13:30) = 법원·검찰·행정/오피스 종사자 유입 + 인근 상가 종사자 식사 수요. 퇴근~저녁(18:00–21:00) = 아파트권 가족/지인 모임·회식 수요.",

  weekendPattern:
    "가족 동반 외식·기념일/소모임 비중↑, 체류시간 길어 회전은 느려짐.",

  aroundEffect: "반경 내 중·대단지 아파트 다수 → 저녁·주말 체류형 수요 안정적.",

  movement:
    "법원사거리·장량중앙로 축 카페/마트 등 ‘외식 → 커피/장보기’ 연계가 자연스러움.",
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
            주변 시설 영향
          </Typography>
          <Typography>{splitSentences(peoplePattern.aroundEffect)}</Typography>
        </Info>

        <Info gap="5px">
          <Typography variant="h2" className="title">
            연결 동선
          </Typography>
          <Typography>{splitSentences(peoplePattern.movement)}</Typography>
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
