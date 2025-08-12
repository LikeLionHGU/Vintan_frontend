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

export const VerticalStart = styled(FlexBase)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

// 가로 정렬
export const Horizontal = styled(FlexBase)`
  justify-content: center;
  align-items: center;
`;

export const HorizontalStart = styled(FlexBase)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
