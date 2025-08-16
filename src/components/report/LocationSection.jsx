import { Box, IconButton, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import TextInput from "../common/TextInput";
import Map from "../../imgs/report/map.svg";
import Building from "../../imgs/report/building.png";
import Codepen from "../../imgs/report/codepen.png";
import { VerticalBox } from "../../style/CommunalStyle";
import { useReportField } from "../../store/store";
import DaumPostcodeEmbed from "react-daum-postcode";
import BasicModal from "../common/BasicModal";

export default function LocationSection() {
  const address = useReportField("address");
  const detailAddress = useReportField("detailAddress");
  const area = useReportField("area");

  const [visible, setVisible] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    address.onChange(fullAddress);
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <BasicModal open={visible} handleClose={() => setVisible(false)}>
          <ModalContent>
            <ModalHeader>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: 18, md: 20 }, fontWeight: 700 }}
              >
                주소찾기
              </Typography>
            </ModalHeader>

            <ModalBody>
              <PostcodeWrapper>
                <DaumPostcodeEmbed
                  onComplete={handleComplete}
                  style={{ width: "100%", height: "100%" }}
                  autoClose={false}
                />
              </PostcodeWrapper>
            </ModalBody>
          </ModalContent>
        </BasicModal>
      )}

      <Container p={4} gap={3.5}>
        <Typography variant="title2">분석 입지 정보 입력</Typography>
        {/* 주소 입력 부분 */}
        <VerticalBox gap={4}>
          <VerticalBox gap={1.5}>
            <Typography variant="h2">분석 입지 주소를 입력해주세요</Typography>
            <TextInput
              placeholder="주소 검색"
              icon={Map}
              search={true}
              onClick={() => setVisible(true)}
              {...address}
            />
          </VerticalBox>

          {/* 상세 주소 입력 부분 */}
          <VerticalBox gap={1.5}>
            <Typography variant="h2">
              건물 명이나 층 수 등의 상세한 주소를 입력해주세요(선택).
            </Typography>
            <TextInput
              placeholder="건물 명 혹은 상세 주소 입력"
              icon={Building}
              {...detailAddress}
            />
          </VerticalBox>

          {/* 입지 면적 입력 부분 */}
          <VerticalBox gap={1.5}>
            <Typography variant="h2">
              입지의 면적을 입력해주세요(선택).
            </Typography>
            <TextInput
              placeholder="건물 명 혹은 상세 주소 입력"
              icon={Codepen}
              {...area}
            />
          </VerticalBox>
        </VerticalBox>
      </Container>
    </>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
  height: "60vh",
  minHeight: "460px",
}));

// 모달 루트 콘텐츠 카드
export const ModalContent = styled(Box)(({ theme }) => ({
  position: "relative",
  // 반응형 폭: 90vw ~ 900px, 기본 720px
  width: "clamp(320px, 90vw, 900px)",
  // 반응형 높이: 70vh ~ 85vh, 기본 80vh
  height: "clamp(420px, 80vh, 85vh)",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: "0px 12px 40px rgba(0,0,0,0.24)",
  display: "grid",
  gridTemplateRows: "auto 1fr", // 헤더(자동) + 본문(확장)
  overflow: "hidden",
}));

// 상단 헤더 바
export const ModalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

// 닫기 버튼
export const CloseBtn = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

// 본문(스크롤 영역)
export const ModalBody = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(2.5, 3),
  overflow: "auto",
  height: "100%",
}));

// 우편번호 영역을 꽉 채우도록 래퍼
export const PostcodeWrapper = styled(Box)({
  width: "100%",
  height: "100%", // ModalBody의 높이를 그대로 채움
  minHeight: 400,
  display: "block",
});
