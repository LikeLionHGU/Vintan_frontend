import { Box, Grid, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import PageTitle from "../components/common/PageTitle";
import LocationSection from "../components/report/LocationSection";
import { VerticalBox } from "../style/CommunalStyle";
import BusinessSection from "../components/report/BusinessSection";

export default function Report() {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Typography variant="caption1" color={theme.palette.grey[600]}>
          홈 &gt; AI 보고서
        </Typography>
        <PageTitle text="AI 보고서" />
        <Typography variant="body1">
          분석할 상권 입지 정보와 원하는 업종을 입력하면 AI가 보고서를
          제공합니다.
          <br />
          입지 정보를 구체적으로 입력할수록 분석의 정확도가 높아집니다.
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ mt: { xs: 4 } }}>
        <Grid size={{ lg: 4.5, xs: 12 }}>
          <LocationSection />
        </Grid>
        <Grid size={{ lg: 7.5, xs: 12 }}>
          <BusinessSection />
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  height: 100%;
  justify-content: space-between;
`;
