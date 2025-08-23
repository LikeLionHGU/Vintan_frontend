import React, { useState } from "react";
import { VerticalBox } from "../style/CommunalStyle";
import { Grid, Typography, useTheme } from "@mui/material";
import Address from "../components/community/add/Address";
import PageTitle from "../components/common/PageTitle";
import RatingComponent from "../components/community/add/RatingComponent";
import DetailReview from "../components/community/add/DetailReview";
import { postRegionReview } from "../api/community";
import { useNavigate } from "react-router-dom";

export default function AddRating() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const name = params.get("name");
  const theme = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    positive: "",
    negative: "",
    address: "",
  });
  const [categoryRate, setCategoryRate] = useState({
    cleanness: 3,
    people: 3,
    reach: 3,
    rentFee: 3,
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategory = (field) => (value) => {
    setCategoryRate((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const data = { ...formData, categoryRate: categoryRate };
    const response = await postRegionReview(code, data);
    if (response.data.isSuccess === 1) {
      navigate("/community/rating");
    }
  };

  return (
    <VerticalBox>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 커뮤니티 &gt; 평점 &gt; 평점 작성
      </Typography>
      <PageTitle text="평점 작성" />
      <Grid container spacing={4}>
        <Grid
          size={{ md: 5 }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Address
            value={formData.address}
            onChange={handleChange("address")}
          />
          <RatingComponent
            value={categoryRate}
            onChange={handleCategory}
            name={name}
          />
        </Grid>
        <Grid size={{ md: 7 }}>
          <DetailReview
            value={formData}
            onChange={handleChange}
            name={name}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
    </VerticalBox>
  );
}
