import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const myControl = "/api/me";
// /regions/{regionId}/community/blind/reviews

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const getMyPageInfo = async () => {
  try {
    const url = new URL(baseUrl + myControl);
    const response = await api.get(url);
    return response;
  } catch (error) {
    console.error("my page 정보를 불러오는데에 에러가 발생했습니다", error);
  }
};

export const logout = async () => {
  try {
    const url = "/auth/login/logout";
    const response = await api.post(url);
    return response;
  } catch (error) {
    console.error("로그아웃 하는데에 문제가 발생했습니다", error);
  }
};
