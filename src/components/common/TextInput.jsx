import { Box, Input, styled } from "@mui/material";
import React from "react";
import Search from "../../imgs/report/search.png";

export default function TextInput({
  icon,
  placeholder,
  value,
  onChange,
  search,
  onClick,
  onEnterDown,
  readOnly = false,
}) {
  return (
    <Box sx={{ position: "relative" }} onClick={onClick}>
      <Img component="img" src={icon} />
      <StyledInput
        placeholder={placeholder ? placeholder : ""}
        value={value ?? ""}
        readOnly={readOnly}
        onChange={onChange}
        onKeyDown={(e) => {
          if (
            e.nativeEvent.isComposing ||
            e.key === "Process" ||
            e.keyCode === 229
          ) {
            return;
          }
          if (e.key === "Enter" && onEnterDown) {
            onEnterDown(e);
          }
        }}
        sx={{ paddingLeft: `${icon ? "44px" : "12px"}` }}
      />
      {search ? <SearchImg component="img" src={Search} /> : null}
    </Box>
  );
}

const Img = styled(Box)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translate(0, -50%);
`;

const StyledInput = styled(Input)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 8,
  padding: "8px 12px",
  outline: "none",
  "&:before, &:after": { display: "none" },

  "&:focus-within": {
    outline: `2px solid ${theme.palette.grey[800]}`,
    outlineOffset: "-1px",
  },

  ">.css-1xnissb-MuiInputBase-input-MuiInput-input": {
    padding: 0,
  },
}));

const SearchImg = styled(Box)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translate(0, -50%);
`;
