import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { VerticalBox } from "../../style/CommunalStyle";
import Comments from "../community/question/Comments";

export default function QuestionHistory({ data }) {
  const [expandedId, setExpandedId] = useState(null);
  const handleChange = (id) => (_e, isExpanded) =>
    setExpandedId(isExpanded ? id : null);
  return (
    <Container p={4}>
      <Typography variant="title2">내가 작성한 질문</Typography>
      <InfoWrapper container columns={8} py={1.5} mt={4}>
        <Grid size={2.5}>
          <Typography variant="h2">제목</Typography>
        </Grid>
        <Grid size={2.5} />
        <Grid size={1.5}>
          <Typography variant="h2">작성일</Typography>
        </Grid>
        <Grid size={1.5}>
          <Typography variant="h2">댓글수</Typography>
        </Grid>
      </InfoWrapper>
      <>
        {data?.ask.map((item, index) => (
          <StyledAccordion
            key={item.askId}
            expanded={expandedId === item.askId}
            onChange={handleChange(item.askId)}
            disableGutters
            square={false}
          >
            <AccordionSummary>
              <Grid
                container
                sx={{ width: "100%" }}
                columns={8}
                className="title"
              >
                <Grid size={2.5}>
                  <Typography variant="h2">{item.title}</Typography>
                </Grid>
                <Grid size={2.5}></Grid>
                <Grid size={1.5}>
                  <Typography variant="h2" fontWeight={400} textAlign="center">
                    {item.date}
                  </Typography>
                </Grid>
                <Grid size={1.5}>
                  <Typography variant="h2" fontWeight={400} textAlign="center">
                    {item.countComment}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: 0 }}>
              {/* 열렸을 때만 댓글 패널이 데이터를 요청하도록 open prop 전달 */}
              <Comments
                postId={item.askId}
                regionId={item.regionId}
                open={expandedId === item.askId}
                isMypage={true}
              />
            </AccordionDetails>
          </StyledAccordion>
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

const StyledAccordion = styled(Accordion)(({ theme, expanded }) => ({
  boxShadow: "none",

  // 요게 제목 영역(요기 padding 없애기)
  "& .MuiAccordionSummary-root": {
    padding: "0 12px",
    minHeight: 0,
  },
  "&.Mui-expanded": {
    backgroundColor: "#DDF6ED",
  },
}));

// const QuestionWrapper = styled(Grid)`
//   border-bottom: 1px solid #ccc;
//   h2 {
//     text-align: center;
//   }
// `;
