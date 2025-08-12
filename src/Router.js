import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/common/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
