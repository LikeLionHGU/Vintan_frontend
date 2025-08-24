import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/common/Header";
import { Box } from "@mui/material";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Report from "./page/Report";
import Result from "./page/Result";
import Loading from "./page/Loading";
import Rating from "./page/Rating";
import RatingDetail from "./page/RatingDetail";
import AddRating from "./page/AddRating";
import Question from "./page/Question";
import AddQuestion from "./page/AddQuestion";
import AuthWrapper from "./hooks/AuthWrapper";
import Mypage from "./page/Mypage";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />

          <Box sx={{ flex: 1, minHeight: 0, pt: 10 }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/report" element={<Report />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/report/:reportId" element={<Result />} />
              <Route path="/community/rating" element={<Rating />} />
              <Route
                path="/community/rating/:code/detail/:id"
                element={<RatingDetail />}
              />
              <Route path="/community/rating/add" element={<AddRating />} />
              <Route path="/community/question" element={<Question />} />
              <Route
                path="/community/question/add/:regionId"
                element={<AddQuestion />}
              />
              <Route path="/mypage" element={<Mypage />} />
            </Routes>
          </Box>
        </Box>
      </AuthWrapper>
    </BrowserRouter>
  );
}
