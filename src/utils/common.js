import Home from "../imgs/header/home.svg";
import Report from "../imgs/header/report.svg";
import Community from "../imgs/header/community.svg";
import User from "../imgs/header/user.svg";
import JoiningUser from "../imgs/header/joinig-user.svg";

export const main_info = {
  title: "빈땅에, 기회의 문을 열다",
  description:
    "빈 공간을 기회로, 원하는 업종과 입지 정보를 한눈에 딱!\n AI 보고서와 커뮤니티를 통해 상권에 대한 정보를 확인해보세요.",

  report: {
    title: "AI 보고서",
    description:
      "주변 상권 데이터를 통해\n 원하는 업종과 입지와의 적합도를\n 예측해보세요",
  },

  community: {
    title: "커뮤니티",
    description:
      "실제 창업하신 사장님들의 생생한 상권 후기를 확인하고 질문해보세요!",
  },
};

export const member_navigation_list = [
  {
    text: "홈",
    img: Home,
    link: "/",
  },
  {
    text: "AI 보고서",
    img: Report,
    link: "/report",
  },
  {
    text: "커뮤니티",
    img: Community,
    link: "/community/rating",
  },
  {
    text: "마이페이지",
    img: User,
    link: "/",
  },
];

export const non_member_navigation_list = [
  {
    text: "홈",
    img: Home,
    link: "/",
  },
  {
    text: "AI 보고서",
    img: Report,
    link: "/report",
  },
  {
    text: "커뮤니티",
    img: Community,
    link: "/community/rating",
  },
  {
    text: "로그인",
    img: User,
    link: "/login",
  },
  {
    text: "회원가입",
    img: JoiningUser,
    link: "/signup",
  },
];

export const SIDO = [
  { label: "서울특별시", value: "서울" },
  { label: "부산광역시", value: "부산" },
  { label: "대구광역시", value: "대구" },
  { label: "인천광역시", value: "인천" },
  { label: "광주광역시", value: "광주" },
  { label: "대전광역시", value: "대전" },
  { label: "울산광역시", value: "울산" },
  { label: "세종특별자치시", value: "세종" },
  { label: "경기도", value: "경기" },
  { label: "강원특별자치도", value: "강원" },
  { label: "충청북도", value: "충북" },
  { label: "충청남도", value: "충남" },
  { label: "전북특별자치도", value: "전북" },
  { label: "전라남도", value: "전남" },
  { label: "경상북도", value: "경북" },
  { label: "경상남도", value: "경님" },
  { label: "제주특별자치도", value: "제주" },
];

export const FILES = Object.fromEntries(
  SIDO.map((s) => [s.value, `/regions/${s.label}.json`])
);

export const businessList = [
  "대형마트",
  "편의점",
  "어린이집, 유치원",
  "학원",
  "주차장",
  "주유소, 충전소",
  "은행",
  "문화시설",
  "중개업소",
  "숙박",
  "음식점",
  "카페",
  "병원",
  "약국",
];
