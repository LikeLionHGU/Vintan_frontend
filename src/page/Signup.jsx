import React from "react";
import LoginInput from "../components/common/LoginInput";
import styled from "@emotion/styled";
import { Vertical, VerticalBox } from "../style/CommunalStyle";
import { Button, Typography } from "@mui/material";

export default function Signup() {
  return (
    <Vertical sx={{ bgcolor: "#fafafa" }}>
      <Container py={4} px={15}>
        <Typography variant="title2">회원가입</Typography>

        {/* Input  */}
        <LoginInput
          text={"이름"}
          isEssential={true}
          placeholder={"2자 이상 20자 미만"}
        />
        <LoginInput
          text={"아이디"}
          isEssential={true}
          placeholder={"6자 이상의 영문 혹은 영문과 숫자를 조합"}
        />
        <LoginInput
          text={"비밀번호"}
          isEssential={true}
          placeholder={"영문, 숫자, 특수문자를 혼용하시면 보다 안전합니다"}
          type={"password"}
        />
        <LoginInput
          text={"비밀번호"}
          isEssential={true}
          placeholder={"비밀번호를 한번 더 입력해주세요"}
          type={"password"}
        />
        <LoginInput
          text={"이메일"}
          isEssential={true}
          placeholder={"예: vintan@email.com"}
          type={"email"}
        />
        <LoginInput
          text={"사업자 등혹번호 (기창업자 선택)"}
          placeholder={"-없이 숫자만 입력해주세요"}
          type={"number"}
        />

        {/* Submit Button */}
        <SubmitButton>
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
  borderRadius: "6px",
  width: "200px",
  padding: "8px 20px",
}));
