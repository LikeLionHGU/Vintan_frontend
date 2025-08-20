import { styled, TextareaAutosize } from "@mui/material";
import React from "react";
import { pxToRem } from "../../theme/typography";

export default function Textarea({ height, ...rest }) {
  return (
    <>
      <StyledInput
        {...rest}
        sx={{ height: `${height} !important`, resize: "none" }}
      />
    </>
  );
}

const StyledInput = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 8,
  padding: "8px 12px",
  outline: "none",
  fontWeight: 400,
  lineHeight: 1.6,
  fontSize: pxToRem(15),
  letterSpacing: "0.01em",
  "&:before, &:after": { display: "none" },

  "&:focus-within": {
    outline: `2px solid ${theme.palette.grey[800]}`,
    outlineOffset: "-1px",
  },

  "&:placeholder": {
    color: "#787878",
  },

  ".MuiInputBase-input": {
    padding: 0,
  },
}));
