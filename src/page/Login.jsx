import React, { useMemo, useState } from "react";
import LoginInput from "../components/common/LoginInput";
import styled from "@emotion/styled";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import { Button, Typography } from "@mui/material";
import { isValidUserData } from "../utils/function";
import { loginUser } from "../api/common";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || "/";

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitBtn = async () => {
    const response = await loginUser(formData);
    console.log(response);
    if (response.data.isLogin === 1) {
      navigate(from, { replace: true });
    }
  };

  useMemo(() => {
    setErrors(isValidUserData(formData));
  }, [formData]);

  return (
    <Vertical sx={{ bgcolor: "#fafafa", height: "100%" }}>
      <Container py={4} px={15}>
        <Typography variant="title2">로그인</Typography>

        {/* Input  */}
        <LoginInput
          text={"아이디"}
          placeholder={"아이디를 입력해주세요"}
          value={formData.id}
          onChange={handleChange("id")}
          isError={Boolean(errors.id)}
          errorText={errors.id}
        />
        <LoginInput
          text={"비밀번호"}
          placeholder={"비밀번호를 입력해주세요"}
          type={"password"}
          value={formData.password}
          onChange={handleChange("password")}
          isError={Boolean(errors.password)}
          errorText={errors.password}
        />

        {/* Submit Button */}
        <SubmitButton onClick={handleSubmitBtn}>
          <Typography variant="h2">입장하기</Typography>
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
