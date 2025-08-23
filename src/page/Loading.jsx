import React, { useEffect, useRef, useState } from "react";
import Analyze from "../imgs/loading/analyze.svg";
import { Vertical } from "../style/CommunalStyle";
import { Box, LinearProgress, styled, Typography } from "@mui/material";
import { useProgressStore } from "../store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { postAiReport } from "../api/report";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const { state } = useLocation(); // state.payload 사용
  const { isFull, hasResponse, reportId, setIsFull, setResponse, reset } =
    useProgressStore();
  const didNavigate = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    const duration = 40000; // 전체 채우는 시간(ms)
    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / duration, 1); // 0 ~ 1
      const next = Math.round(ratio * 100); // 0 ~ 100(정수)
      setProgress(next);

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsFull(true), 500);
      }
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [setIsFull]);

  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        const data = state?.payload;

        const filteredData = {
          address: data.address,
          categoryCode: data.business,
          pyeong: data.area,
          userDetail: data.detail,
          addressName: data.addressName,
        };

        const regionId = data.regionId;

        //console.log(filteredData, regionId);

        const res = await postAiReport(filteredData, regionId);
        console.log(res);
        const id = res.data.reportId;

        // 데모용 더미값
        // const id = await wait20SecReturn3();

        if (!aborted) setResponse(id);
      } catch (e) {
        if (!aborted) navigate("/error", { replace: true });
      }
    })();

    return () => {
      aborted = true;
    };
  }, [navigate, setResponse, state?.payload]);

  useEffect(() => {
    if (!didNavigate.current && isFull && hasResponse && reportId != null) {
      didNavigate.current = true;
      navigate(`/report/${reportId}`, { replace: true });
    }
  }, [isFull, hasResponse, reportId, navigate]);

  return (
    <Vertical sx={{ height: "100%" }} gap={8}>
      <Vertical gap={2.5}>
        <Box component="img" src={Analyze} />
        <Typography variant="display2">
          AI가 <span style={{ color: "#009c64" }}>분석 중</span>입니다
        </Typography>
        <Typography variant="title3">잠시만 기다려주세요!</Typography>
      </Vertical>
      <Box sx={{ width: "63%" }}>
        <StyledPropgress variant="determinate" value={progress} />
      </Box>
    </Vertical>
  );
}

const StyledPropgress = styled(LinearProgress)(({ theme }) => ({
  height: "20px",
  borderRadius: "10px",

  backgroundColor: theme.palette.grey[200],

  ".MuiLinearProgress-bar": {
    backgroundColor: theme.palette.primary02.main,
  },
}));
