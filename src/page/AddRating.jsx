import React, { useState } from "react";
import { VerticalBox } from "../style/CommunalStyle";
import { Grid, Typography, useTheme } from "@mui/material";
import Address from "../components/community/add/Address";
import PageTitle from "../components/common/PageTitle";
import RatingComponent from "../components/community/add/RatingComponent";

export default function AddRating() {
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
  const theme = useTheme();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategory = (field) => (value) => {
    setCategoryRate((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <VerticalBox>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 커뮤니티 &gt; 평점 &gt; 평점 작성
      </Typography>
      <PageTitle text="평점 작성" />
      <Grid container>
        <Grid
          size={{ md: 4.8 }}
          gap={3.5}
          display="flex"
          flexDirection="column"
        >
          <Address
            value={formData.address}
            onChange={handleChange("address")}
          />
          <RatingComponent value={categoryRate} onChange={handleCategory} />
        </Grid>
        <Grid size={{ md: 7.2 }}></Grid>
      </Grid>
    </VerticalBox>
  );
}
