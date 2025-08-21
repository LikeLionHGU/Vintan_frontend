import { styled, Typography } from "@mui/material";
import React from "react";
import { Horizontal } from "../../style/CommunalStyle";

export default function TopCategory({ isSelected, icon, text, onClick }) {
  return (
    <Container
      gap={1}
      isSelected={isSelected}
      px={2.5}
      py={1}
      onClick={onClick}
    >
      <Typography variant="body2">{text}</Typography>
    </Container>
  );
}

const Container = styled(Horizontal, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? theme.palette.primary04.main : "#fff",
  border: `1px solid ${theme.palette.grey[800]}`,
  width: "auto",
  minWidth: "85px",
  borderRadius: "6px",
  cursor: "pointer",
  flexWrap: "wrap",

  ...(isSelected && {
    outline: `2px solid ${theme.palette.grey[800]}`,
    outlineOffset: -1,
  }),
}));
