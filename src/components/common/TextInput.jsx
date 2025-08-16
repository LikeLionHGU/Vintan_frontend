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
}) {
  return (
    <Box sx={{ position: "relative" }} onClick={onClick}>
      <Img component="img" src={icon} />
      <StyledInput
        placeholder={placeholder ? placeholder : ""}
        value={value ?? ""}
        onChange={onChange}
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
}));

const SearchImg = styled(Box)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translate(0, -50%);
`;
