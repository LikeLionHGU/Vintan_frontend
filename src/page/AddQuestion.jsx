import React, { useState } from "react";
import { HorizontalBox, VerticalBox } from "../style/CommunalStyle";
import { Button, styled, Typography, useTheme } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import TextInput from "../components/common/TextInput";
import Textarea from "../components/common/Textarea";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { postRegionQuestion } from "../api/community";

export default function AddQuestion() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const theme = useTheme();
  const { regionId } = useParams();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const navigate = useNavigate();

  const isAllValid = () => {
    if (formData.title === "") return false;
    if (formData.content === "") return false;
    return true;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const response = await postRegionQuestion(regionId, formData);
    if (response.data.isSuccess === 1) {
      navigate(`/community/question?code=${regionId}&name=${name}`);
    }
  };

  return (
    <VerticalBox>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 커뮤니티 &gt; 평점 &gt; 평점 작성
      </Typography>
      <PageTitle text="질문 작성" />
      <Container p={4}>
        <Typography variant="title2" mb={3.5}>
          {name} 질문 작성
        </Typography>
        <Typography variant="h2" mb={1.5}>
          질문 제목을 최대 20자까지 입력해주세요
        </Typography>
        <TextInput value={formData.title} onChange={handleChange("title")} />
        <Typography variant="h2" mb={1.5} mt={4}>
          질문 내용을 최대 200자까지 입력해주세요
        </Typography>
        <Textarea
          height="100px"
          value={formData.content}
          onChange={handleChange("content")}
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
    </VerticalBox>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: #fff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
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
