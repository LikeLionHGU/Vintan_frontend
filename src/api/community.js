import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const blindControl = "/regions";
// /regions/{regionId}/community/blind/reviews

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const getAllReviewsByRegionId = async (regionId) => {
  try {
    const url = new URL(
      baseUrl + blindControl + `/${regionId}/community/blind/reviews`
    );
    const response = await api.get(url);
    return response;
  } catch (error) {
    console.error(
      "region id 기반 해당 지역의 리뷰를 불러오는데에 에러가 발생했습니다",
      error
    );
  }
};

export const postRegionReview = async (regionId, data) => {
  try {
    const url = new URL(
      baseUrl + blindControl + `/${regionId}/community/blind/reviews`
    );
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    console.error(
      "region id 기반 해당 지역의 리뷰를 추가하는데에 에러가 발생했습니다",
      error
    );
  }
};

export const getDetailReview = async (regionId, reviewId) => {
  try {
    const url = new URL(
      baseUrl +
        blindControl +
        `/${regionId}/community/blind/reviews/${reviewId}`
    );
    const response = await api.get(url);
    return response;
  } catch (error) {
    console.error(
      "특정 블라인드 리뷰를 불러오는데에 에러가 발생했습니다",
      error
    );
  }
};
