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
    link: "/",
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
    link: "/",
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
