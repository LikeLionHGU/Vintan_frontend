import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/common/Header";
import { Box } from "@mui/material";

export default function Router() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 4.5,
        }}
      >
        <Header />

        <Box sx={{ flex: 1, minHeight: 0 }}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
