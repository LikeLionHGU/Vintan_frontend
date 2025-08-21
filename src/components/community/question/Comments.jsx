// components/CommentsPanel.jsx
import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Input, styled, Typography } from "@mui/material";
import { HorizontalBox, VerticalBox } from "../../../style/CommunalStyle";
import CornerDown from "../../../imgs/community/corner-down.svg";
import { maskText } from "../../../utils/function";
import Arrow from "../../../imgs/community/arrow-up.svg";
import { pxToRem } from "../../../theme/typography";

const dummy = {
  id: 1,
  title: "여기 상권 어떤가요?",
  content:
    "포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,포항시 북구 장량동에 카페 창업을 고민중입니다. 이 지역 상권에 대해 아시는 분 계신가요?,",
  userId: "user123",
  date: "2024.08.20",
  commentList: [
    {
      id: 101,
      userId: "expert",
      content: "장량동은 최근에 유동인구가 많이 늘어난 곳이라 괜찮아보여요.",
      date: "2024.08.21",
    },
    {
      id: 101,
      userId: "expert",
      content: "장량동은 최근에 유동인구가 많이 늘어난 곳이라 괜찮아보여요.",
      date: "2024.08.21",
    },
    {
      id: 101,
      userId: "expert",
      content: "장량동은 최근에 유동인구가 많이 늘어난 곳이라 괜찮아보여요.",
      date: "2024.08.21",
    },
  ],
};

export default function Comments({ postId, open }) {
  const [value, setValue] = useState("");
  const [data, setData] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setData(dummy);
  }, []);

  return (
    <>
      <Divider />
      <Container spacing={2} pt={2}>
        <Typography
          variant="h2"
          fontWeight={400}
          sx={{ mb: 3, height: "120px", overflow: "auto" }}
          pl={2}
          pr={4}
        >
          {dummy.content}
        </Typography>
        <Divider />
        <VerticalBox
          gap={1}
          mt={3}
          maxHeight="200px"
          overflow="auto"
          pl={2}
          pr={4}
        >
          {data?.commentList.map((item, index) => (
            <Comment
              key={index}
              id={item.userId}
              content={item.content}
              date={item.date}
            />
          ))}
        </VerticalBox>
        <HorizontalBox gap={1} mt={1}>
          <CommentInput
            placeholder="댓글을 입력해주세요"
            value={value}
            onChange={handleChange}
          />
          <SubmitButton>
            <Box component="img" src={Arrow} />
          </SubmitButton>
        </HorizontalBox>
      </Container>
    </>
  );
}

function Comment({ id, content, date }) {
  return (
    <HorizontalBox alignItems="center">
      <HorizontalBox alignItems="center">
        <Box component="img" src={CornerDown} mr={1} />
        <Typography variant="h2" mr={2.5}>
          {maskText(id)}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </HorizontalBox>
      <Typography variant="caption2">{date}</Typography>
    </HorizontalBox>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[50],
}));

const CommentInput = styled(Input)(({ theme }) => ({
  width: "calc(100% - 64px)",
  padding: "15px 21px",
  outline: "none",
  "&:before, &:after": { display: "none" },
  fontWeight: 400,
  lineHeight: 1.5,
  fontSize: pxToRem(17),
  letterSpacing: "0.01em",
  background: "#EFEFEF",
  borderRadius: "0 8px 8px 8px",

  // "&:focus-within": {
  //   outline: `2px solid ${theme.palette.grey[800]}`,
  //   outlineOffset: "-1px",
  // },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  minWidth: theme.spacing(7),
  minHeight: theme.spacing(7),
  borderRadius: "6px",
  backgroundColor: theme.palette.primary02.main,
}));
