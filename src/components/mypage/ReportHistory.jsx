import { Box, Grid, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import { HorizontalBox, VerticalBox } from "../../style/CommunalStyle";
import Clock from "../../imgs/mypage/clock.svg";
import { useNavigate } from "react-router-dom";

export default function ReportHistory({ data }) {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Container p={4}>
      <Typography variant="title2" mb="6px">
        AI 보고서 히스토리
      </Typography>
      <Typography variant="h2" color={theme.palette.grey[600]} mb="26px">
        분석 횟수: {data?.aiReport.length}
      </Typography>
      <Grid container spacing={2}>
        {data?.aiReport.map((item, index) => (
          <Report
            key={index}
            size={6}
            onClick={() => navigate(`/report/${item.id}`)}
          >
            <HorizontalBox mb={1.5}>
              <Box component="img" src={Clock} mr="3px" />
              <Typography variant="caption2" className="time">
                {item.date}
              </Typography>
            </HorizontalBox>
            <HorizontalBox mb={1}>
              <Typography variant="caption1" className="location">
                입지
              </Typography>
              <Typography variant="body2">{item.address}</Typography>
            </HorizontalBox>
            <HorizontalBox>
              <Typography variant="caption1" className="job">
                업종
              </Typography>
              <Typography variant="body2">{item.category}</Typography>
            </HorizontalBox>
          </Report>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: #fff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
`;

const Report = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "12px 0 20px 20px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  cursor: "pointer",

  "& .time": {
    color: theme.palette.primary02.main,
  },

  "& .location": {
    borderRadius: "4px",
    background: "#DDF6ED",
    width: "70px",
    color: "#009C64",
    textAlign: "center",
    marginRight: "12px",
  },

  "& .job": {
    borderRadius: "4px",
    background: "#DDF6ED",
    width: "70px",
    color: "#666",
    textAlign: "center",
    marginRight: "12px",
  },
}));
