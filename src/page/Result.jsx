import React from "react";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import PageTitle from "../components/common/PageTitle";
import { Button, styled, Typography, useTheme } from "@mui/material";
import Rival from "../components/result/Rival";
import People from "../components/result/People";

export default function Result() {
  const theme = useTheme();
  return (
    <VerticalBox sx={{ overflow: "auto" }}>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; AI 보고서 &gt; 보고서 결과
      </Typography>
      <PageTitle text="보고서 결과" />
      <Typography variant="body1">
        지연님의 공실에 대한 AI 분석이 완료되었습니다. <br />
        아래 결과에서 확인하세요.
      </Typography>
      <DownloadButton>
        <Typography variant="body2">PDF 다운로드</Typography>
      </DownloadButton>

      <Vertical gap={4}>
        <Rival />
        <People />
      </Vertical>
    </VerticalBox>
  );
}

const DownloadButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary02.main,
  border: `1px solid ${theme.palette.primary02.main}`,
  borderRadius: "6px",
  padding: "8px 20px",
  width: "130px",
}));
