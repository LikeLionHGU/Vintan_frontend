import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { HorizontalBox, VerticalBox } from "../../../style/CommunalStyle";
import TextInput from "../../common/TextInput";
import Textarea from "../../common/Textarea";

export default function DetailReview({ value, onChange, name, handleSubmit }) {
  const isAllValid = () => {
    if (value.title === "") return false;
    if (value.positive === "") return false;
    if (value.negative === "") return false;
    if (value.address === "") return false;
    return true;
  };

  return (
    <Container p={4}>
      <Typography variant="title2" mb={3}>
        {name} 상세리뷰
      </Typography>
      <Typography variant="h2">
        리뷰 제목을 최대 20자까지 입력해주세요
      </Typography>
      <TextInput
        placeholder="상권을 한마디로 표현할 수 있는 제목으로 입력해주세요."
        value={value.title}
        onChange={onChange("title")}
      />

      <Typography variant="h2" mt={4}>
        상권 장점에 대해 최대 200자까지 입력해주세요
      </Typography>
      <Textarea
        placeholder="분위기, 건물 상태, 주변 업체와의 관계 등 상권에 대한 장점을 자유롭게 작성해주세요."
        value={value.positive}
        onChange={onChange("positive")}
        resize="none"
        height="90px"
      />

      <Typography variant="h2" mt={4}>
        상권 단점에 대해 최대 200자까지 입력해주세요
      </Typography>
      <Textarea
        placeholder="분위기, 건물 상태, 주변 업체와의 관계 등 상권에 대한 단점을 자유롭게 작성해주세요.."
        value={value.negative}
        onChange={onChange("negative")}
        resize="none"
        height="90px"
      />

      <HorizontalBox justifyContent="flex-end">
        <SubmitButton
          isAllValid={isAllValid()}
          disabled={!isAllValid}
          onClick={handleSubmit}
        >
          작성 완료
        </SubmitButton>
      </HorizontalBox>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  height: 100%;
  border-radius: 24px;
  background: #fff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);

  h2 {
    margin-bottom: 12px;
  }
`;

const SubmitButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isAllValid",
})(({ theme, isAllValid }) => ({
  marginTop: "30px",
  borderRadius: "6px",

  width: "200px",
  padding: "8px 20px",

  backgroundColor: isAllValid ? "#009C64" : "#CCC",
  color: isAllValid ? "#fff" : "#999",
}));
