import axios from "axios";

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
