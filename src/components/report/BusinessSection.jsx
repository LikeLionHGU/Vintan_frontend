import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import TextInput from "../common/TextInput";
import {
  Horizontal,
  HorizontalBox,
  VerticalBox,
} from "../../style/CommunalStyle";
import { useReportField, useReportStore } from "../../store/store";
import TopCategory from "./TopCategory";
import { businessList } from "../../utils/common";
import Tooltip from "../common/Tooltip";
import BasicModal from "../common/BasicModal";
import ConditionModal from "./ConditionModal";

export default function BusinessSection({ onSubmit }) {
  const business = useReportField("business");
  const detail = useReportField("detail");
  const [open, setOpen] = useState(false);
  const isValid = useReportStore((s) => s.isValid());

  return (
    <>
      {open && (
        <BasicModal
          open={open}
          handleClose={() => setOpen(false)}
          modalWidth="530px"
          modalHeight="390px"
        >
          <ConditionModal />
        </BasicModal>
      )}
      <Container
        p={4}
        gap={3.5}
        sx={{ lg: { height: "62vh" }, xs: { height: "auto" } }}
      >
        <Typography variant="title2">분석 업종 선택</Typography>
        {/* 주소 입력 부분 */}
        <VerticalBox gap={4}>
          <VerticalBox gap={1.5}>
            <Typography variant="h2">분석 업종을 선택해주세요</Typography>
            <Horizontal
              gap={2}
              sx={{ justifyContent: "flex-start", flexWrap: "wrap" }}
            >
              {businessList.map((item, index) => (
                <TopCategory
                  text={item}
                  key={index}
                  isSelected={business.value === item}
                  onClick={() => business.onChange(item)}
                />
              ))}
            </Horizontal>
          </VerticalBox>

          {/* 입지 면적 입력 부분 */}
          <VerticalBox gap={1.5}>
            <HorizontalBox>
              <Typography variant="h2">
                운영 조건을 최대 60자까지 입력하세요(선택). 건너뛰어도 분석
                가능합니다.
              </Typography>
              <Tooltip onClick={() => setOpen(true)} />
            </HorizontalBox>
            <TextInput
              placeholder="세부적인 업종, 주차, 단체석, 애견동반, 노키즈존 등 운영 조건 입력"
              value={detail.value}
              onChange={detail.onChange}
            />
          </VerticalBox>
        </VerticalBox>

        {/* 분석하기 버튼 */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <SubmitButton onClick={onSubmit} disabled={!isValid}>
            <Typography variant="h2">분석하기</Typography>
          </SubmitButton>
        </Box>
      </Container>
    </>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
  minHeight: "460px",
}));

const SubmitButton = styled(Button)(({ theme, disabled }) => ({
  borderRadius: "6px",
  border: `1px solid ${theme.palette.primary02.main}`,
  padding: "8px 20px",
  width: "200px",

  backgroundColor: !disabled ? theme.palette.primary02.main : "#CCC",
  color: !disabled ? "#fff" : "#999",
}));
