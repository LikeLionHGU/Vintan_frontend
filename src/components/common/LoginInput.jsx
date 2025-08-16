import { Box, Input as MuiInput, styled, Typography } from "@mui/material";
import React, { useId } from "react";
import { VerticalBox } from "../../style/CommunalStyle";
export default function LoginInput({
  text,
  errorText = "에러 텍스트",
  isEssential = false,
  placeholder,
  id,
  value,
  onChange,
  isError = false,
  ...rest
}) {
  const autoId = useId();
  const inputId = id || `login-input-${autoId}`;

  return (
    <VerticalBox sx={{ gap: 1.5 }}>
      <Typography
        variant="h2"
        component="label"
        htmlFor={inputId}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          color: `${isError ? "error.main" : "grey[900"}`,
        }}
      >
        {text}
        {isEssential && (
          <Box component="span" sx={{ color: "error.main" }} aria-hidden>
            *
          </Box>
        )}
      </Typography>

      <VerticalBox gap={1}>
        <Input
          id={inputId}
          disableUnderline
          placeholder={placeholder}
          fullWidth
          value={value ?? ""}
          onChange={onChange}
          isError={isError}
          inputProps={{ "aria-required": isEssential ? "true" : undefined }}
          {...rest}
        />

        <Typography
          variant="caption2"
          sx={{
            color: "error.main",
            visibility: isError ? "visible" : "hidden",
          }}
        >
          {errorText}
        </Typography>
      </VerticalBox>
    </VerticalBox>
  );
}

const Input = styled(MuiInput, {
  shouldForwardProp: (prop) => prop !== "isError",
})(({ theme, isError }) => ({
  width: "100%",
  border: `1px solid ${
    isError ? theme.palette.error.main : theme.palette.grey[500]
  }`,
  borderRadius: 8,
  padding: "8px 12px",
  outline: "none",
  "&:before, &:after": { display: "none" },

  "&:focus-within": {
    // isError 상태에 따라 outline 색상을 다르게 적용
    outline: `2px solid ${
      isError ? theme.palette.error.main : theme.palette.grey[800]
    }`,
    outlineOffset: "-1px",
  },
}));
