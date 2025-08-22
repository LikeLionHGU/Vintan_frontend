import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const userControl = "/auth/login";

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const getSession = async () => {
  try {
    const url = new URL(baseUrl + userControl + "/session");

    const response = await api.get(url);
    return response;
  } catch (error) {
    // console.log("로그인 세션 정보를 확인하는데에 에러가 발생했습니다. ", error);
    return { isLogin: 0, isBusiness: 0 };
  }
};

export const signupUser = async (formData) => {
  try {
    const url = new URL(baseUrl + userControl + "/register");

    const response = await api.post(url, formData);
    return response;
  } catch (error) {
    console.log("회원가입하는데에 문제가 발생했습니다", error);
  }
};

export const loginUser = async (formData) => {
  try {
    const url = new URL(baseUrl + userControl + "/login");

    const response = await api.post(url, formData);
    return response;
  } catch (error) {
    console.log("로그인하는데에 문제가 발생했습니다", error);
  }
};
