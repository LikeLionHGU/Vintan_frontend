import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const userControl = "/auth/login";

export const getSession = async () => {
  try {
    const url = new URL(baseUrl + userControl + "/session");

    const response = await axios.get(url);
    return response;
  } catch (error) {
    // console.log("로그인 세션 정보를 확인하는데에 에러가 발생했습니다. ", error);
    return { isLogin: 0, isBusiness: 0 };
  }
};
