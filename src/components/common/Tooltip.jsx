import { Box, Button, styled } from "@mui/material";
import React from "react";
import TooltipImg from "../../imgs/report/tooltip.svg";

export default function Tooltip({ onClick }) {
  return (
    <>
      <StyledButton onClick={onClick}>
        <Box component="img" src={TooltipImg} />
      </StyledButton>
    </>
  );
}

const StyledButton = styled(Button)`
  min-height: 0 !important;
  min-width: 0 !important;
  padding: 5px;
`;
