import { Box, styled } from "@mui/material";

const FlexBase = styled(Box)`
  display: flex;
  width: 100%;
`;

// 세로 정렬
export const Vertical = styled(FlexBase)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VerticalBox = styled(FlexBase)`
  flex-direction: column;
`;

// 가로 정렬
export const Horizontal = styled(FlexBase)`
  justify-content: center;
  align-items: center;
`;

export const HorizontalBox = styled(FlexBase)`
  flex-direction: row;
`;
