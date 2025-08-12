import React from "react";
import { HorizontalStart } from "../../style/CommunalStyle";
import { Box, Button } from "@mui/material";
import Logo from "../../imgs/logo.svg";
import Sidebar from "../../imgs/sidebar_button.svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HorizontalStart id="header" sx={{ justifyContent: "space-between" }}>
      <Box
        component="img"
        src={Logo}
        alt="logo"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
      <SidebarButton>
        <Box component="img" src={Sidebar} alt="sidebar" />
      </SidebarButton>
    </HorizontalStart>
  );
}

const SidebarButton = styled(Button)`
  display: inline-block;
  transition: transform 0.3s ease;
  cursor: pointer;
  min-width: auto;
  padding: 0;

  &:hover {
    transform: rotate(180deg);
  }
`;
