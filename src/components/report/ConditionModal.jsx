import React from "react";
import {
  HorizontalBox,
  Vertical,
  VerticalBox,
} from "../../style/CommunalStyle";
import { Typography } from "@mui/material";
import { splitSentences } from "../../utils/function";
import styled from "@emotion/styled";

const text =
  "운영 조건은 적지 않아도 분석 가능하며, 작성할 경우 더 상세한 분석 결과를 받아볼 수 있습니다. 다음은 운영 조건 예시이며, 예시에 있는 조건 외 입력하고 싶은 조건을 입력하셔도 됩니다.";

const data = [
  {
    title: "상세업종",
    description: "숯불구이집, 중식집, 브런치카페",
  },
  {
    title: "영업시간",
    description: "24시간 운영, 오전 7시 ~ 오후 10시, 야간 운영 불가",
  },
  {
    title: "입지제약",
    description: "주차 공간 부족, 2층 이상 점포, 외부 테라스 없음",
  },
  {
    title: "운영형태",
    description: "프랜차이즈 불가, 개인 창업 희망, 배달 전용 운영",
  },
  {
    title: "특수조건",
    description: "애견 동반 가능, 유아 놀이 공간 필요, 단체석",
  },
];

export default function ConditionModal() {
  return (
    <Vertical>
      <Typography variant="h1" mt={3}>
        운영 조건 예시
      </Typography>
      <Typography variant="caption2" mt={2.5}>
        {splitSentences(text)}
      </Typography>
      <VerticalBox gap={1.5} mt={5.5}>
        {data.map((item, index) => (
          <Wrapper key={index} gap={2.5}>
            <Typography variant="caption1" className="title">
              {item.title}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Wrapper>
        ))}
      </VerticalBox>
    </Vertical>
  );
}

const Wrapper = styled(HorizontalBox)`
  .title {
    border-radius: 4px;
    background-color: #ddf6ed;
    padding: 0 4px;
    color: #009c64;
  }
`;
