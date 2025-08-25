import React, { useMemo, useState } from "react";
import LoginInput from "../components/common/LoginInput";
import styled from "@emotion/styled";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import { Button, Typography } from "@mui/material";
import { isValidUserData } from "../utils/function";
import { checkDuplicate, signupUser } from "../api/common";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    id: "",
    idConfirm: false,
    name: "",
    password: "",
    passWordConfirm: "",
    email: "",
    businessNumber: null,
  });
  const [errors, setErrors] = useState({});
  const [isAllValid, setIsAllValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    if (field === "id") {
      setFormData((prev) => ({ ...prev, [field]: value, idConfirm: false }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleCheckButton = async () => {
    const { id } = formData;
    const response = await checkDuplicate(id);
    if (response.data?.isDuplicated === 1) {
      setErrors((prev) => ({
        ...prev,
        id: "이미 사용되고 있는 아이디 입니다",
      }));
    } else {
      setFormData((prev) => ({ ...prev, idConfirm: true }));
    }
  };

  const handleSubmitBtn = async () => {
    const { passWordConfirm, idConfirm, ...rest } = formData;

    const data = {
      ...rest,
      businessNumber:
        rest.businessNumber === "" ? null : Number(rest.businessNumber),
    };
    const response = await signupUser(data);
    if (response) {
      navigate("/login");
    }
  };

  useMemo(() => {
    setErrors(isValidUserData(formData));
    const isValid = Object.keys(isValidUserData(formData)).length === 0;

    setIsAllValid(isValid && formData.idConfirm);
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
          isNeedCheck={true}
          checkDuplicate={handleCheckButton}
          isChecked={formData.idConfirm}
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
        <SubmitButton onClick={handleSubmitBtn} isAllValid={isAllValid}>
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

const SubmitButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isAllValid",
})(({ theme, isAllValid }) => ({
  backgroundColor: isAllValid ? "#009C64" : "#CCC",
  color: isAllValid ? "#fff" : "#999",
  borderRadius: "6px",
  width: "200px",
  padding: "8px 20px",
}));
