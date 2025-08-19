import { Box, styled, Typography } from "@mui/material";
import React from "react";
import TitleWrapper from "../../imgs/community/subtract.png";
import TitleWrapperGrey from "../../imgs/community/subtract_grey.png";
import { useNavigate } from "react-router-dom";

export default function PageTitle({ text, isHere, link }) {
  const navigate = useNavigate();
  return (
    <Box
      pt={1.5}
      pb={3}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(link)}
    >
      <ImgWrapper>
        <Box component="img" src={isHere ? TitleWrapper : TitleWrapperGrey} />
        <Typography variant="title3" color="#fff">
          {text}
        </Typography>
      </ImgWrapper>
    </Box>
  );
}

const ImgWrapper = styled(Box)`
  display: inline-block;
  position: relative;
  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
`;
