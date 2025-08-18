import { Box, Button, styled, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import TextInput from "../common/TextInput";
import { Horizontal, VerticalBox } from "../../style/CommunalStyle";
import { useReportField } from "../../store/store";
import { divisionList } from "../../utils/common";
import TopCategory from "./TopCategory";
import SubCategory from "./SubCategory";

export default function BusinessSection({ onSubmit }) {
  const bigDivision = useReportField("bigDivision");
  const middleDivision = useReportField("middleDivision");
  const smallDivision = useReportField("smallDivision");
  const detail = useReportField("detail");

  // 선택된 대분류와 중분류 리스트를 안전하게 계산
  const selectedBig = useMemo(
    () => divisionList.find((item) => item.text === bigDivision?.value),
    [bigDivision?.value]
  );

  const middleList = useMemo(
    () => selectedBig?.middleDivisionList ?? [],
    [selectedBig]
  );

  const prevBig = useRef(bigDivision?.value);
  useEffect(() => {
    if (prevBig.current !== bigDivision?.value) {
      middleDivision.onChange(""); // 선택 초기화
      smallDivision.onChange("");
      detail.onChange("");
      prevBig.current = bigDivision?.value;
    }
  }, [bigDivision?.value, middleDivision, smallDivision, detail]);

  return (
    <Container
      p={4}
      gap={3.5}
      sx={{ lg: { height: "62vh" }, xs: { height: "auto" } }}
    >
      <Typography variant="title2">분석 업종 선택</Typography>
      {/* 주소 입력 부분 */}
      <VerticalBox gap={4}>
        <VerticalBox gap={1.5}>
          <Typography variant="h2">대분류를 선택해주세요</Typography>
          <Horizontal
            gap={2}
            sx={{ justifyContent: "flex-start", flexWrap: "wrap" }}
          >
            {divisionList.map((item, index) => (
              <TopCategory
                icon={item.img}
                text={item.text}
                key={index}
                isSelected={bigDivision.value === item.text}
                onClick={() => bigDivision.onChange(item.text)}
              />
            ))}
          </Horizontal>
        </VerticalBox>

        {/* 상세 주소 입력 부분 */}
        <VerticalBox gap={1.5}>
          <Typography variant="h2">중분류와 소분류를 선택해주세요</Typography>
          <SubCategory
            defaultText="중분류 선택"
            value={
              middleList?.some((c) => c.middleDivision === middleDivision.value)
                ? middleDivision.value
                : ""
            }
            onChange={middleDivision.onChange}
            categoryList={middleList} // ← 안전한 기본값 적용
            disabled={!selectedBig}
            height="130px"
          />
        </VerticalBox>

        {/* 입지 면적 입력 부분 */}
        <VerticalBox gap={1.5}>
          <Typography variant="h2">
            운영 조건을 최대 60자까지 입력하세요(선택). 건너뛰어도 분석
            가능합니다.
          </Typography>
          <TextInput
            placeholder="주차, 단체석, 애견동반, 키즈존 등 운영 조건 입력"
            value={detail.value}
            onChange={detail.onChange}
          />
        </VerticalBox>
      </VerticalBox>

      {/* 분석하기 버튼 */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <SubmitButton onClick={onSubmit}>
          <Typography variant="h2">분석하기</Typography>
        </SubmitButton>
      </Box>
    </Container>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
  minHeight: "460px",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: "6px",
  border: `1px solid ${theme.palette.primary02.main}`,
  backgroundColor: theme.palette.primary02.main,
  padding: "8px 20px",
  color: "#fff",
  width: "200px",
}));
