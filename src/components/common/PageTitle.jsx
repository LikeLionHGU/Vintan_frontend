import { Box, styled, Typography } from "@mui/material";
import React from "react";
import TitleWrapper from "../../imgs/report/title-wrapper.svg";

export default function PageTitle({ text }) {
  return (
    <Box pt={1.5} pb={3}>
      <ImgWrapper>
        <Box component="img" src={TitleWrapper} />
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
