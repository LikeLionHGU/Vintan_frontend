import React, { useMemo, useState } from "react";
import LoginInput from "../components/common/LoginInput";
import styled from "@emotion/styled";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import { Button, Typography } from "@mui/material";
import { isValidUserData } from "../utils/function";
import { signupUser } from "../api/common";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    password: "",
    passWordConfirm: "",
    email: "",
    businessNumber: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitBtn = async () => {
    const { passWordConfirm, ...rest } = formData;

    const data = {
      ...rest,
      businessNumber:
        rest.businessNumber === "" ? null : Number(rest.businessNumber),
    };
    const response = await signupUser(data);
    if (response) {
      navigate("/");
    }
  };

  useMemo(() => {
    setErrors(isValidUserData(formData));
  }, [formData]);

  return (
    <Vertical sx={{ bgcolor: "#fafafa" }}>
      <Container py={4} px={15}>
        <Typography variant="title2">회원가입</Typography>

        {/* Input  */}
        <LoginInput
          text={"이름"}
          isEssential={true}
          placeholder={"2자 이상 20자 미만"}
          value={formData.name}
          onChange={handleChange("name")}
          isError={Boolean(errors.name)}
          errorText={errors.name}
        />
        <LoginInput
          text={"아이디"}
          isEssential={true}
          placeholder={"6자 이상의 영문 혹은 영문과 숫자를 조합"}
          value={formData.id}
          onChange={handleChange("id")}
          isError={Boolean(errors.id)}
          errorText={errors.id}
        />
        <LoginInput
          text={"비밀번호"}
          isEssential={true}
          placeholder={"영문, 숫자, 특수문자를 혼용하시면 보다 안전합니다"}
          type={"password"}
          value={formData.password}
          onChange={handleChange("password")}
          isError={Boolean(errors.password)}
          errorText={errors.password}
        />
        <LoginInput
          text={"비밀번호"}
          isEssential={true}
          placeholder={"비밀번호를 한번 더 입력해주세요"}
          type={"password"}
          value={formData.passwordConfirm}
          onChange={handleChange("passwordConfirm")}
          isError={Boolean(errors.passwordConfirm)}
          errorText={errors.passwordConfirm}
        />
        <LoginInput
          text={"이메일"}
          isEssential={true}
          placeholder={"예: vintan@email.com"}
          type={"email"}
          value={formData.email}
          onChange={handleChange("email")}
          isError={Boolean(errors.email)}
          errorText={errors.email}
        />
        <LoginInput
          text={"사업자 등혹번호 (기창업자 선택)"}
          placeholder={"-없이 숫자만 입력해주세요"}
          type={"number"}
          value={formData.businessNumber}
          onChange={handleChange("businessNumber")}
          isError={Boolean(errors.businessNumber)}
          errorText={errors.businessNumber}
        />

        {/* Submit Button */}
        <SubmitButton onClick={handleSubmitBtn}>
          <Typography variant="h2">가입하기</Typography>
        </SubmitButton>
      </Container>
    </Vertical>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  width: "50%",
  minWidth: "600px",
  gap: theme.spacing(2),
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: "30px",
  backgroundColor: "#ffffff",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary02.main,
  color: "#ffffff",
  borderRadius: "6px",
  width: "200px",
  padding: "8px 20px",
}));
