import { Box, Grid, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import PageTitle from "../components/common/PageTitle";
import LocationSection from "../components/report/LocationSection";
import { VerticalBox } from "../style/CommunalStyle";
import BusinessSection from "../components/report/BusinessSection";
import { useProgressStore, useReportStore } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Report() {
  const theme = useTheme();
  const navigate = useNavigate();
  const data = useReportStore((state) => state.reportValues);

  const handleButtonClick = async () => {
    console.log(data);

    navigate("/loading");

    try {
      useProgressStore.getState().reset();

      // 2) 로딩 화면으로 이동 + payload 전달
      navigate("/loading", { state: { payload: data } });

      // navigate(`/report/${3}`, { replace: true });
    } catch (error) {
      console.error(
        "데이터를 기반으로 AI보고서를 생성하는데에 문제가 발생했습니다.",
        error
      );
      throw error;
    }
  };
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
          <BusinessSection onSubmit={handleButtonClick} />
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  height: 100%;
  justify-content: space-between;
`;
