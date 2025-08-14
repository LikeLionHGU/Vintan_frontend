import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/common/Header";
import { Box } from "@mui/material";
import Login from "./page/Login";
import Signup from "./page/Signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <Box sx={{ flex: 1, minHeight: 0 }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
