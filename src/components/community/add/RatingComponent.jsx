import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { VerticalBox } from "../../../style/CommunalStyle";
import Star from "../../../imgs/community/star.svg";
import Nonstar from "../../../imgs/community/empty_star.svg";
import VeryGood from "../../../imgs/community/Funny.svg";
import Good from "../../../imgs/community/happy.svg";
import NotBad from "../../../imgs/community/notbad.svg";
import Bad from "../../../imgs/community/bad.svg";
import VeryBad from "../../../imgs/community/angry.svg";

export default function RatingComponent({ value, onChange }) {
  return (
    <Container p={4} gap={4}>
      <Typography variant="title2">ㅇㅇ동 평점 선택</Typography>
      <VerticalBox gap={3.5}>
        <RatingRow
          label="청결도"
          value={value.cleanness}
          onChange={onChange("cleanness")}
        />
        <RatingRow
          label="유동인구, 활기"
          value={value.people}
          onChange={onChange("people")}
        />
        <RatingRow
          label="접근성"
          value={value.reach}
          onChange={onChange("reach")}
        />
        <RatingRow
          label="임대료"
          value={value.rentFee}
          onChange={onChange("rentFee")}
        />
      </VerticalBox>
    </Container>
  );
}

function RatingRow({ label, value, onChange }) {
  // 별점에 따른 설명 & 이모지
  const getDescription = (value) => {
    if (value >= 5) return { text: null, emoji: VeryGood };
    if (value >= 4) return { text: null, emoji: Good };
    if (value >= 3) return { text: null, emoji: NotBad };
    if (value >= 2) return { text: null, emoji: Bad };
    if (value >= 1) return { text: null, emoji: VeryBad };
    return { text: "평점을 선택해주세요", emoji: null };
  };

  const { text, emoji } = getDescription(value);

  return (
    <Grid container alignItems="center">
      {/* 항목명 */}
      <Grid size={3}>
        <Typography variant="h2" color="#009C64">
          {label}
        </Typography>
      </Grid>

      {/* 별점 */}
      <Grid>
        <Box display="flex">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <Box
              sx={{ cursor: "pointer" }}
              key={index}
              component="img"
              onClick={() => onChange(star)}
              src={value >= star ? Star : Nonstar}
            />
          ))}
        </Box>
      </Grid>

      {/* 설명 + 이모지 */}
      <Grid size={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h2">{text}</Typography>
        <Box component="img" src={emoji} />
      </Grid>
    </Grid>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: #fff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
  padding-bottom: 40px;
`;
