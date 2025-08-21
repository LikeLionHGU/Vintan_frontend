// components/PostToggleList.jsx
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Grid,
  styled,
} from "@mui/material";
import Comments from "./Comments";
import { maskText } from "../../../utils/function";
// import CommentsPanel from "./CommentsPanel";

/**
 * props.posts: [{ id, title, commentCount? }, ...]
 */
export default function QuestionTogleLists({ posts = [] }) {
  const [expandedId, setExpandedId] = useState(null);

  const handleChange = (id) => (_e, isExpanded) =>
    setExpandedId(isExpanded ? id : null);

  return (
    <Box>
      <InfoWrapper container columns={15} p={1.5}>
        <Grid size={8.5}>
          <Typography variant="h2">제목</Typography>
        </Grid>
        <Grid size={2}>
          <Typography variant="h2">작성자</Typography>
        </Grid>
        <Grid size={2.5}>
          <Typography variant="h2">작성일</Typography>
        </Grid>
        <Grid size={2}>
          <Typography variant="h2">댓글수</Typography>
        </Grid>
      </InfoWrapper>
      {posts.map((p) => (
        <StyledAccordion
          key={p.id}
          expanded={expandedId === p.id}
          onChange={handleChange(p.id)}
          disableGutters
          square={false}
        >
          <AccordionSummary>
            <Grid
              container
              sx={{ width: "100%" }}
              columns={15}
              className="title"
            >
              <Grid size={8.5}>
                <Typography variant="h2">{p.title}</Typography>
              </Grid>
              <Grid size={2}>
                <Typography variant="h2" fontWeight={400} textAlign="center">
                  {maskText(p.userId)}
                </Typography>
              </Grid>
              <Grid size={2.5}>
                <Typography variant="h2" fontWeight={400} textAlign="center">
                  {p.date}
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography variant="h2" fontWeight={400} textAlign="center">
                  {p.numberOfComments}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: 0 }}>
            {/* 열렸을 때만 댓글 패널이 데이터를 요청하도록 open prop 전달 */}
            <Comments postId={p.id} open={expandedId === p.id} />
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
}

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

const InfoWrapper = styled(Grid)(({ theme }) => ({
  borderRadius: "6px 6px 0 0",
  backgroundColor: theme.palette.grey[100],
  width: "100%",

  h2: {
    textAlign: "center",
  },
}));
