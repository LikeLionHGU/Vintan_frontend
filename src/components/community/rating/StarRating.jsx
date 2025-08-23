import React from "react";
import { Box, styled } from "@mui/material";
import star from "../../../imgs/community/star.svg";
import emptyStar from "../../../imgs/community/empty_star.svg";

export default function StarRating({ value = 0, width, ...rest }) {
  const filledStars = Math.min(Math.floor(value % 10), 5);
  const emptyStars = 5 - filledStars;

  return (
    <StarWrapper sx={{ ...rest }}>
      {[...Array(filledStars)].map((_, i) => (
        <Box component="img" key={`filled-${i}`} src={star} width={width} />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <Box component="img" key={`empty-${i}`} src={emptyStar} width={width} />
      ))}
    </StarWrapper>
  );
}

const StarWrapper = styled(Box)`
  display: flex;
  gap: 4px;
  align-items: center;
`;
