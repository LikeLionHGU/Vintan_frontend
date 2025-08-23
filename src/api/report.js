import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const reportControl = "/ai/reports";

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const getAddressInfo = async (keyword) => {
  try {
    const url = new URL("https://business.juso.go.kr/addrlink/addrLinkApi.do");
    const confmKey = process.env.REACT_APP_ADDRESS_KEY;

    url.searchParams.set("confmKey", confmKey);
    url.searchParams.set("keyword", keyword);
    url.searchParams.set("currentPage", 1);
    url.searchParams.set("countPerPage", 100);
    url.searchParams.set("resultType", "json");

    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log("도로명 주소를 불러오는데에 에러가 발생했습니다.", error);
    throw error;
  }
};

export const getAiReport = async (data, regionId) => {
  try {
    const url = new URL(baseUrl + reportControl + `/generate/${regionId}`);
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    console.error("AI 리포트를 생성하는데에 오류가 발생했습니다", error);
  }
};

export function wait20SecReturn3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 10000); // 20초 = 20000ms
  });
}
