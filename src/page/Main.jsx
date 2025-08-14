import React from "react";
import { Box, Grid, styled, Typography, useTheme } from "@mui/material";
import { main_info } from "../utils/common";
import VideoSection from "../components/main/VideoSection";
import MainButton from "../components/main/MainButton";
import { ReactComponent as Report } from "../imgs/header/report.svg";
import { ReactComponent as Community } from "../imgs/header/community.svg";
import { ReactComponent as Arrow } from "../imgs/main/arrow.svg";

export default function Main() {
  const theme = useTheme();
  return (
    <Container container pt={4.5} spacing={4} sx={{ height: "100%" }}>
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
            <MainButton
              bgColor={theme.palette.grey[700]}
              mainIcon={Report}
              title={main_info.report.title}
              description={main_info.report.description}
              arrowIcon={Arrow}
              hoverGradient="linear-gradient(180deg, rgba(0, 255, 164, 0.15) 0%, rgba(0, 255, 164, 0.00) 100%);"
            />
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <MainButton
              bgColor={theme.palette.primary.main}
              mainIcon={Community}
              title={main_info.community.title}
              description={main_info.community.description}
              arrowIcon={Arrow}
              hoverGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%)"
            />
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
