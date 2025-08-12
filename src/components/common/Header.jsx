// Header.js
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Horizontal, HorizontalStart } from "../../style/CommunalStyle";
import Logo from "../../imgs/header/logo.svg";
import Sidebar from "../../imgs/header/sidebar_button.svg";
import CloseBtn from "../../imgs/header/close.svg";
import { non_member_navigation_list } from "../../utils/common";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // drawer 클릭 처리 함수
  const toggleDrawer = useCallback(
    (nextOpen) => (e) => {
      if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift"))
        return;
      setOpen(nextOpen);
    },
    []
  );

  return (
    <>
      <HorizontalStart id="header" sx={{ justifyContent: "space-between" }}>
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        <SidebarButton aria-label="open sidebar" onClick={toggleDrawer(true)}>
          <Box component="img" src={Sidebar} alt="sidebar" />
        </SidebarButton>
      </HorizontalStart>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        id="side-bar"
      >
        <DrawerContent onClose={toggleDrawer(false)} />
      </Drawer>
    </>
  );
}

function DrawerContent({ onClose }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: "25vw", minWidth: "230px" }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      {/* close button */}
      <Horizontal sx={{ justifyContent: "flex-end", padding: "20px" }}>
        <Button onClick={onClose}>
          <Box component="img" src={CloseBtn} />
        </Button>
      </Horizontal>

      {/* navigation list */}
      <List
        sx={{ gap: "20px", display: "flex", flexDirection: "column" }}
        disablePadding
      >
        {non_member_navigation_list.map(({ text, img, link }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => navigate(link)}
              sx={{ padding: "12px 32px" }}
            >
              <ListItemIcon>
                <Box
                  component="img"
                  src={img}
                  alt={`${text} icon`}
                  sx={{ minWidth: "30px", marginRight: "16px" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: "h1" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const SidebarButton = styled(Button)`
  transition: transform 0.3s ease;
  cursor: pointer;
  min-width: 0;

  &:hover {
    transform: rotate(180deg);
    background-color: transparent;
  }
`;
