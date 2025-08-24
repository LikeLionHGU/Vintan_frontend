import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { VerticalBox } from "../../style/CommunalStyle";

export default function QuestionHistory({ data }) {
  return (
    <Container p={4}>
      <Typography variant="title2">내가 작성한 질문</Typography>
      <InfoWrapper container columns={8} py={1.5} mt={4}>
        <Grid size={2}>
          <Typography variant="h2">제목</Typography>
        </Grid>
        <Grid size={3} />
        <Grid size={1.5}>
          <Typography variant="h2">작성일</Typography>
        </Grid>
        <Grid size={1.5}>
          <Typography variant="h2">댓글수</Typography>
        </Grid>
      </InfoWrapper>
      <>
        {data?.ask.map((item, index) => (
          <QuestionWrapper container columns={8} key={index} py={2}>
            <Grid size={2}>
              <Typography variant="h2">{item.title}</Typography>
            </Grid>
            <Grid size={3} />
            <Grid size={1.5}>
              <Typography variant="h2" fontWeight={400}>
                {item.date}
              </Typography>
            </Grid>
            <Grid size={1.5}>
              <Typography variant="h2" fontWeight={400}>
                {item.countComment}
              </Typography>
            </Grid>
          </QuestionWrapper>
        ))}
      </>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: var(--Gray-12, #fff);
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
`;

const InfoWrapper = styled(Grid)(({ theme }) => ({
  borderRadius: "6px",
  backgroundColor: theme.palette.grey[100],
  width: "100%",

  h2: {
    color: "#333",
    textAlign: "center",
  },
}));

const QuestionWrapper = styled(Grid)`
  border-bottom: 1px solid #ccc;
  h2 {
    text-align: center;
  }
`;
