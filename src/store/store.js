// formStore.js
import { useCallback } from "react";
import { create } from "zustand";

const reportInitialValues = {
  address: "",
  detailAddress: "",
  area: 0.0, // 평 수

  // 여기부터 업종 관련 내용
  business: "",
  detail: "",
};

export const useReportStore = create((set) => ({
  reportValues: { ...reportInitialValues },

  setReportValues: (name, value) => {
    const filterValue =
      name === "area"
        ? Number.isFinite(parseFloat(value))
          ? parseFloat(parseFloat(value).toFixed(2))
          : 0.0
        : value;

    set((s) => ({ reportValues: { ...s.reportValues, [name]: filterValue } }));
  },

  reset: () => set({ reportValues: { ...reportInitialValues } }),
}));

export const useReportField = (name) => {
  const value = useReportStore((s) => s.reportValues[name]);
  const setReportValues = useReportStore((s) => s.setReportValues);

  const onChange = useCallback(
    (eOrValue) => {
      const v =
        eOrValue && eOrValue.target !== undefined
          ? eOrValue.target.value // input 이벤트 객체
          : eOrValue; // 값 직접 전달
      setReportValues(name, v);
    },
    [name, setReportValues]
  );

  return { name, value, onChange };
};

export const useProgressStore = create((set) => ({
  isFull: false,
  reportId: null,
  hasResponse: false,

  // 액션
  setIsFull: (v) => set({ isFull: v }),
  setResponse: (id) => set({ reportId: id, hasResponse: true }),
  reset: () => set({ isFull: false, hasResponse: false, reportId: null }),
}));
