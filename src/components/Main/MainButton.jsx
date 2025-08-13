import { Box, styled, Typography, useTheme } from "@mui/material";
import React from "react";

export default function MainButton({
  bgColor,
  mainIcon: Icon,
  title,
  description,
  arrowIcon: Arrow,
}) {
  const theme = useTheme();
  const textColor =
    bgColor === theme.palette.primary.main
      ? theme.palette.grey[700]
      : theme.palette.primary03.main;

  return (
    <Container
      sx={{
        backgroundColor: bgColor,
        "& > svg:first-of-type": {
          width: "fit-content",
          height: "20%",
          display: "block",
        },
        "& svg path": {
          fill: textColor,
          transformBox: "fill-box",
          transformOrigin: "center",
        },
        "& > svg:first-of-type path": {
          transform: "scale(1.3)", // ← path를 20% 키움
          vectorEffect: "non-scaling-stroke", // 선 두께 유지 (선 있을 때)
        },
      }}
    >
      {Icon ? <Icon /> : null}
      <Box gap={1}>
        <Typography variant="title3" color={textColor}>
          {title}
        </Typography>
        <Typography variant="body1" color={textColor}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: "inline-flex", justifyContent: "flex-end" }}>
        {Arrow ? <Arrow /> : null}
      </Box>
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "48vh",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(3),
  cursor: "pointer",

  transform: "scale(1)",
  transformOrigin: "center",
  willChange: "transform",
  transition:
    "transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms ease",
  "&:hover": {
    transform: "scale(1.01)", // 필요하면 1.04~1.10 사이로 조절
    boxShadow: theme.shadows[8],
  },
  "&:active": {
    transform: "scale(1.04)", // 클릭 시 살짝 줄여 반응성↑
  },
}));
