import { Box, styled } from "@mui/material";
import ServiceVideo from "../../videos/motion.mp4";

// 1) 둥근 모서리 래퍼 + 대각선 깎기
const VideoCard = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: 20, // 사방 라운드
  overflow: "hidden", // 모서리 안으로 잘라냄
  clipPath: "polygon(0 0, 100% 0, 100% 65%, 54% 100%, 0 100%)",
  background: "black", // 비디오가 없는 부분 배경색
});

const CutVideo = (props) => (
  <Box
    component="video"
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    {...props}
    sx={{
      height: "100%",
      width: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
);

export default function VideoSection() {
  return (
    <VideoCard>
      <CutVideo src={ServiceVideo} />
    </VideoCard>
  );
}
