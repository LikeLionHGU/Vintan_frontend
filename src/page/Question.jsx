import React, { useEffect, useState } from "react";
import { Horizontal, HorizontalBox, VerticalBox } from "../style/CommunalStyle";
import { Button, styled, Typography, useTheme } from "@mui/material";
import PageTitle from "../components/community/PageTitle";
import LegalDistrictPicker from "../components/community/rating/LegalDistrictPicker";
import { FILES, SIDO } from "../utils/common";
import QuestionTogleLists from "../components/community/question/QuestionTogleLists";

const dummy = [
  {
    id: 1,
    title: "여기 상권 어떤가요?",
    userId: "user123",
    numberOfComments: 3,
    date: "2024.08.20",
  },
  {
    id: 2,
    title: "여기 상권 어떤가요?",
    userId: "user123",
    numberOfComments: 3,
    date: "2024.08.20",
  },
  {
    id: 3,
    title: "여기 상권 어떤가요?",
    userId: "user123",
    numberOfComments: 3,
    date: "2024.08.20",
  },
  {
    id: 4,
    title: "여기 상권 어떤가요?",
    userId: "user123",
    numberOfComments: 3,
    date: "2024.08.20",
  },
];

export default function Question() {
  const theme = useTheme();

  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setPosts(dummy);
  }, []);
  return (
    <VerticalBox>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 창업스퀘어 &gt; 질문
      </Typography>
      <HorizontalBox gap={2.5}>
        <PageTitle text="평점" isHere={false} link="/community/rating" />
        <PageTitle text="질문" isHere={true} />
      </HorizontalBox>
      <Typography variant="body1">
        예비 창업자를 위한 생생한 정보와 궁금증 해결을 질문 게시판에서
        확인하세요.
      </Typography>
      <LocationContainer p={4} my={3}>
        <Typography variant="title2" mb="22px">
          찾고 싶은 상권
        </Typography>
        <Horizontal sx={{ justifyContent: "flex-end" }}>
          <SearchButton sx={{ marginBottom: 2 }}>
            <Typography variant="h2">검색</Typography>
          </SearchButton>
        </Horizontal>
        <LegalDistrictPicker
          sidoList={SIDO}
          fileMap={FILES}
          onChange={setSelected}
        />
      </LocationContainer>
      <QuestionsContainer p={4}>
        <Typography variant="title2">ㅇㅇ동 상권 질문</Typography>
        <SearchButton>
          <Typography variant="h2">질문 작성</Typography>
        </SearchButton>
        <QuestionTogleLists posts={posts} />
      </QuestionsContainer>
    </VerticalBox>
  );
}

const LocationContainer = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "24px",
  background: "#FFF",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
}));

const SearchButton = styled(Button)`
  border-radius: 6px;
  border: 1px solid #009c64;
  background: #009c64;
  padding: 8px 20px;
  width: 200px;
  color: #fff;
`;

const QuestionsContainer = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "24px",
  background: "#FFF",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
}));
