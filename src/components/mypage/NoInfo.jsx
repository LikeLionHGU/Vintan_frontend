import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { Vertical, VerticalBox } from "../../style/CommunalStyle";
import { useNavigate } from "react-router-dom";

export default function NoInfo({
  title,
  isHistory = false,
  text,
  link,
  linkText,
}) {
  const navigate = useNavigate();
  return (
    <Container p={4}>
      <Typography variant="title2">{title}</Typography>
      {isHistory && (
        <Typography variant="h2" color="#666">
          분석 횟수: 0회
        </Typography>
      )}
      <Vertical>
        <Typography variant="display2" color="#999">
          {text}
        </Typography>
        <StyledButton onClick={() => navigate(link)}>{linkText}</StyledButton>
      </Vertical>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: #fff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
`;

const StyledButton = styled(Button)`
  padding: 8px 32px;
  border-radius: 6px;
  background: #009c64;
`;
