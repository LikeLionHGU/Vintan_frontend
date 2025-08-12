import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import { main_info } from "../utils/common";
import VideoSection from "../components/Main/VideoSection";

export default function Main() {
  return (
    <Container container spacing={4} sx={{ height: "100%" }}>
      {/* 서비스 소개 영역 */}
      <Grid
        size={{ md: 7.5, xs: 12 }}
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* text 영역 */}
        <Box sx={{ gap: 3, display: "flex", flexDirection: "column" }}>
          <Typography variant="display1">{main_info.title}</Typography>
          <Typography variant="h1" sx={{ color: "text.secondary" }}>
            {main_info.description}
          </Typography>
        </Box>

        {/* 기능 버튼 영역 */}
        <Container container spacing={4}>
          <Grid size={{ md: 8, xs: 12 }}>
            <ReportArea />
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <CommunityArea />
          </Grid>
        </Container>
      </Grid>

      {/* 서비스 소개 영상 영역 */}
      <Grid size={{ md: 4.5, xs: 12 }} sx={{ height: "100%" }}>
        <VideoSection />
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)`
  display: flex;
  flex-direction: row;
`;

const ReportArea = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  height: "48vh",
  borderRadius: "20px",
}));

const CommunityArea = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "48vh",
  borderRadius: "20px",
}));
