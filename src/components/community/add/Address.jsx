import { styled, Typography } from "@mui/material";
import React from "react";
import { VerticalBox } from "../../../style/CommunalStyle";
import TextInput from "../../common/TextInput";

export default function Address({ value, onChange }) {
  return (
    <Container gap={3.5} p={4}>
      <Typography variant="title2">위치 입력</Typography>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="법원사거리, ㅇㅇ초등학교 옆 등 대략적인 위치만 작성해주세요"
      />
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: #fff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
  height: 200px;
`;
