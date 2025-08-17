import Home from "../imgs/header/home.svg";
import Report from "../imgs/header/report.svg";
import Community from "../imgs/header/community.svg";
import User from "../imgs/header/user.svg";
import JoiningUser from "../imgs/header/joinig-user.svg";
import Hat from "../imgs/report/hat.svg";
import Tag from "../imgs/report/tag.svg";
import Scissors from "../imgs/report/scissors.svg";
import Music from "../imgs/report/music.svg";
import Education from "../imgs/report/education.svg";
import Health from "../imgs/report/health.svg";

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

export const divisionList = [
  {
    text: "음식",
    img: Hat,
    middleDivisionList: [
      { middleDivision: "간이주점" },
      { middleDivision: "고기요리" },
      { middleDivision: "닭/오리요리" },
      { middleDivision: "별식/퓨전요리" },
      { middleDivision: "부페" },
      { middleDivision: "분식" },
      { middleDivision: "양식" },
      { middleDivision: "유흥주점" },
      { middleDivision: "음식배달서비스" },
      { middleDivision: "일식/수산물" },
      { middleDivision: "제과/제빵/떡/케익" },
      { middleDivision: "중식" },
      { middleDivision: "커피/음료" },
      { middleDivision: "패스트푸드" },
      { middleDivision: "한식" },
    ],
  },
  {
    text: "소매/유통",
    img: Tag,
    middleDivisionList: [
      { middleDivision: "가전제품" },
      { middleDivision: "건강/미용식품" },
      { middleDivision: "사무/교육용품" },
      { middleDivision: "서적/도서" },
      { middleDivision: "선물/완구" },
      { middleDivision: "스포츠/레저용품" },
      { middleDivision: "유아용품" },
      { middleDivision: "음/식료품소매" },
      { middleDivision: "의복/의류" },
      { middleDivision: "인테리어/소품" },
      { middleDivision: "종합소매점" },
      { middleDivision: "차량관리/부품" },
      { middleDivision: "차량판매" },
      { middleDivision: "취미" },
      { middleDivision: "패션잡화" },
      { middleDivision: "화장품소매" },
    ],
  },
  {
    text: "생활서비스",
    img: Scissors,
    middleDivisionList: [
      { middleDivision: "광고/인쇄/인화" },
      { middleDivision: "미용서비스" },
      { middleDivision: "법무세무회계" },
      { middleDivision: "부동산" },
      { middleDivision: "사우나/휴게시설" },
      { middleDivision: "세탁/가사서비스" },
      { middleDivision: "수리서비스" },
      { middleDivision: "예식/의례" },
      { middleDivision: "주유소/충전소" },
      { middleDivision: "차량관리" },
    ],
  },
  {
    text: "여가/오락",
    img: Music,
    middleDivisionList: [
      { middleDivision: "숙박" },
      { middleDivision: "요가/단전/마사지" },
      { middleDivision: "일반스포츠" },
      { middleDivision: "취미/오락" },
    ],
  },
  {
    text: "학문/교육",
    img: Education,
    middleDivisionList: [
      { middleDivision: "기술/직업교육학원" },
      { middleDivision: "독서실/고시원" },
      { middleDivision: "방문/통신교육" },
      { middleDivision: "예체능계학원" },
      { middleDivision: "외국어학원" },
      { middleDivision: "유아교육" },
      { middleDivision: "입시학원" },
      { middleDivision: "자동차학원" },
    ],
  },
  {
    text: "의료/건강",
    img: Health,
    middleDivisionList: [
      { middleDivision: "수의업" },
      { middleDivision: "의약/의료품" },
      { middleDivision: "일반병원" },
      { middleDivision: "특화병원" },
    ],
  },
];
