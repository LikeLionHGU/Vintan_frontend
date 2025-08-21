import { Box, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainButton({
  bgColor, // 기본 배경색 (hover 전)
  mainIcon: Icon, // 기본 아이콘 (SVG)
  hoverImageSrc, // hover 시 교체될 이미지 경로
  title, // 타이틀 텍스트
  description, // 설명 텍스트
  arrowIcon: Arrow, // 화살표 아이콘 (SVG)
  hoverGradient, // hover 시 적용할 gradient 값 (예: "linear-gradient(...)")
  link,
}) {
  const theme = useTheme();
  const navigate = useNavigate();

  // 기본 텍스트 색상: bgColor가 primary면 회색, 아니면 primary03
  const baseTextColor =
    bgColor === theme.palette.primary.main
      ? theme.palette.grey[700]
      : theme.palette.primary03.main;
  return (
    <Container
      sx={{ "--base-bg": bgColor }} // CSS 변수로 배경색 전달
      $hoverGradient={hoverGradient}
      $iconColor={baseTextColor}
      onClick={() => navigate(link)}
    >
      {/* gradient 전환용 오버레이 */}
      {hoverGradient && <Box className="gradient-overlay" />}

      {/* 아이콘 영역: 기본 아이콘 ↔ hover 이미지 */}
      <Box className="icon-layer">
        {/* 기본 아이콘 */}
        {Icon ? (
          <Box className="icon-default">
            <Icon />
          </Box>
        ) : null}

        {/* hover 이미지 */}
        {hoverImageSrc ? (
          <Box
            className="icon-hover"
            component="img"
            src={hoverImageSrc}
            alt=""
            draggable={false}
          />
        ) : null}
      </Box>

      {/* 타이틀 + 설명 */}
      <Box gap={1} zIndex={1}>
        <Typography variant="title3" color={baseTextColor}>
          {title}
        </Typography>
        <Typography variant="body1" color={baseTextColor}>
          {description}
        </Typography>
      </Box>

      {/* 화살표 아이콘 */}
      <Box className="arrow-wrap" zIndex={1}>
        {Arrow ? <Arrow /> : null}
      </Box>
    </Container>
  );
}

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "$hoverGradient" && prop !== "$iconColor", // $hoverGradient는 DOM으로 전달 안 함
})(({ theme, $hoverGradient, $iconColor }) => ({
  position: "relative",
  width: "100%",
  height: "48vh",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(3),
  cursor: "pointer",

  // 기본 배경색 (CSS 변수 사용)
  background: "var(--base-bg)",

  // 애니메이션 기본 설정
  transform: "scale(1)",
  transformOrigin: "center",
  willChange: "transform, box-shadow",
  transition:
    "transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms ease",

  /* ---------------------
     gradient 오버레이 설정
  --------------------- */
  ".gradient-overlay": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: 20,
    pointerEvents: "none", // 이벤트 차단
    opacity: 0, // 기본은 숨김
    transition: "opacity 360ms ease",
    background: $hoverGradient || "none",
    zIndex: 0,
  },

  /* ---------------------
     아이콘 레이어 설정
  --------------------- */
  ".icon-layer": {
    position: "relative",
    zIndex: 1,
    height: "20%",
    display: "block",
  },

  // 기본 아이콘 스타일
  ".icon-default": {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "flex-start",

    // "& > svg": {
    //   width: "fit-content",
    //   height: "100%",
    //   display: "block",
    // },
    "& > svg": {
      width: "auto", // ← 사파리 안전
      height: "100%", // 부모가 명확한 높이를 가져서 % 사용 가능
      display: "block",
      transform: "scale(1.3)",
      transformOrigin: "center",
      // 사파리 구버전 대비
      WebkitTransformOrigin: "center",
    },
    "& svg path": {
      fill: $iconColor,
      transition: "fill 240ms ease, opacity 240ms ease",
    },
    // 아이콘 전체를 확대 (사파리 호환 ↑)

    transition: "opacity 240ms ease",
    opacity: 1, // 기본은 표시
  },

  // hover 시 보여질 이미지
  ".icon-hover": {
    position: "absolute",
    inset: 0,
    objectFit: "contain",
    height: "100%",
    width: "auto",
    left: "5px",
    margin: 0,
    opacity: 0, // 기본은 숨김
    transition: "opacity 250ms ease, transform 800ms ease",
    // transform: "scale(1.02)", // 살짝 확대된 상태에서 시작
  },

  /* ---------------------
     화살표 아이콘 설정
  --------------------- */
  ".arrow-wrap": {
    display: "inline-flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    transition: "transform 280ms ease",

    "& svg": {
      display: "block",
      transition: "transform 280ms ease",
      transformOrigin: "center",
    },
    "& svg path": {
      fill: $iconColor, // ← 화살표 색상도 동일 적용
      transition: "fill 240ms ease",
    },
  },

  /* ---------------------
     Hover 상태
  --------------------- */
  "&:hover": {
    // transform: "scale(1.01)",
    // boxShadow: theme.shadows[8],

    // gradient 오버레이 켜기
    ".gradient-overlay": {
      opacity: $hoverGradient ? 1 : 0,
    },

    // 기본 아이콘 숨기고 hover 이미지 표시
    ".icon-default": { opacity: 0 },
    ".icon-hover": { opacity: 1, transform: "scale(1.0)" },

    // 화살표 90도 회전
    ".arrow-wrap svg": {
      transform: "rotate(-90deg)",
    },
  },

  /* ---------------------
     Active 상태 (클릭 시)
  --------------------- */
  // "&:active": {
  //   transform: "scale(1.01)",
  // },
}));

// 아이콘 교체 → <Icon />와 <img>를 겹쳐놓고 opacity로 전환 (부드럽게)
// 배경 그라데이션 → 오버레이 레이어를 opacity로 켜서 자연스럽게
// 화살표 회전 → transform: rotate(90deg) + transition
