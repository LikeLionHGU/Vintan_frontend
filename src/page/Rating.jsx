import React, { useEffect, useState } from "react";
import { Horizontal, HorizontalBox, VerticalBox } from "../style/CommunalStyle";
import { Button, styled, Typography, useTheme } from "@mui/material";
import PageTitle from "../components/community/PageTitle";
import CommercialRating from "../components/community/rating/CommercialRating";
import LegalDistrictPicker from "../components/community/rating/LegalDistrictPicker";
import { FILES, SIDO } from "../utils/common";
import { getAllReviewsByRegionId } from "../api/community";

export default function Rating() {
  const theme = useTheme();

  const [selected, setSelected] = useState([
    {
      code: "4711312200",
      name: "북구 양덕동",
      cityKey: "포항시",
      sidoValue: "경북",
    },
  ]);
  const [reviewsData, setReviewsData] = useState();

  const handleSubmitClick = async () => {
    const response = await getAllReviewsByRegionId(
      Number(selected.length === 0 ? "4711312200" : selected[0].code)
    );
    const filteredData = {
      ...response.data,
      name: selected[0].name,
      code: Number(selected[0].code),
    };
    setReviewsData(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllReviewsByRegionId(Number("4711312200")); // 포항시 북구 양덕동
      const filteredData = {
        ...response.data,
        name: "북구 양덕동",
        code: 4711312200,
      };
      setReviewsData(filteredData);
    };
    fetchData();
  }, []);
  return (
    <VerticalBox>
      <Typography variant="caption1" color={theme.palette.grey[600]}>
        홈 &gt; 창업스퀘어 &gt; 평점
      </Typography>
      <HorizontalBox gap={2.5}>
        <PageTitle text="평점" isHere={true} />
        <PageTitle text="질문" isHere={false} link="/community/question" />
      </HorizontalBox>
      <Typography variant="body1">
        커뮤니티에서 원하는 상권의 평점과 장단점을 확인해보세요. <br />
        궁금한 점은 질문게시판에서 직접 물어보고 답을 받아보세요.
      </Typography>
      <LocationContainer p={4} my={3}>
        <Typography variant="title2" mb="22px">
          찾고 싶은 상권
        </Typography>
        <Horizontal sx={{ justifyContent: "flex-end" }}>
          <SearchButton sx={{ marginBottom: 2 }} onClick={handleSubmitClick}>
            <Typography variant="h2">검색</Typography>
          </SearchButton>
        </Horizontal>
        <LegalDistrictPicker
          sidoList={SIDO}
          fileMap={FILES}
          onChange={setSelected}
        />
      </LocationContainer>
      <CommercialRating data={reviewsData} />
    </VerticalBox>
  );
}

const LocationContainer = styled(VerticalBox)(({ theme }) => ({
  borderRadius: "24px",
  background: "#FFF",
  boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15)",
}));

const SearchButton = styled(Button)`
  border-radius: 6px;
  border: 1px solid #009c64;
  background: #009c64;
  padding: 8px 20px;
  width: 200px;
  color: #fff;
`;
