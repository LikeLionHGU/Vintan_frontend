import React, { useEffect, useMemo, useState } from "react";
import CHECKED_IMG from "../../../imgs/community/checkbox.svg";
import UNCHECKED_IMG from "../../../imgs/community/uncheckbox.svg";

export default function LegalDistrictPicker({
  sidoList,
  fileMap,
  onChange,
  placeholderThird = "시·도를 선택하세요",
  placeholderSecond = "시·도를 선택하세요",
}) {
  const [selectedSido, setSelectedSido] = useState(null); // {label, value}
  const [regionData, setRegionData] = useState(null); // 로드된 JSON (Object: cityKey -> [{code, name}, ...])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedCityKey, setSelectedCityKey] = useState(null); // 예: "포항시"
  const [checked, setChecked] = useState(null); // code -> {code, name, cityKey, sidoValue}

  useEffect(() => {
    if (onChange) onChange(checked ? [checked] : []);
  }, [checked, onChange]);

  useEffect(() => {
    setChecked(null);
  }, [selectedCityKey]);
  // 시도 변경 시 파일 로드
  useEffect(() => {
    if (!selectedSido) {
      setRegionData(null);
      setSelectedCityKey(null);
      return;
    }
    const url = fileMap?.[selectedSido.value];
    if (!url) {
      setRegionData(null);
      setSelectedCityKey(null);
      setError("파일 경로가 설정되지 않았습니다.");
      return;
    }
    setLoading(true);
    setError("");
    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw new Error(`파일을 불러오지 못했습니다 (${res.status})`);
        return res.json();
      })
      .then((json) => {
        // 기본 선택 초기화
        setRegionData(json);
        const keys = Object.keys(json || {});
        setSelectedCityKey(keys.length ? keys[0] : null);
        // 시도 바뀌면 체크 초기화 (원하면 유지 로직으로 바꿔도 됨)
        setChecked(null);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [selectedSido, fileMap]);

  // 현재 시군구(두 번째 칸) 목록
  const cityKeys = useMemo(() => {
    if (!regionData) return [];
    return Object.keys(regionData);
  }, [regionData]);

  // 세 번째 칸용 목록: 현재 cityKey의 읍면동 데이터
  const leafList = useMemo(() => {
    if (!regionData || !selectedCityKey) return [];
    const arr = regionData[selectedCityKey] || [];
    // 성능/정렬: name 오름차순
    return [...arr].sort((a, b) => a.name.localeCompare(b.name, "ko"));
  }, [regionData, selectedCityKey]);

  // 체크 토글
  const toggleItem = (item) => {
    setChecked((prev) => {
      // 이미 선택된 항목이면 그대로 유지 (상태 변경 X)
      if (prev && prev.code === item.code) return prev;
      // 다른 항목을 클릭했을 때만 선택 변경
      return {
        ...item,
        cityKey: selectedCityKey,
        sidoValue: selectedSido?.value,
      };
    });
  };

  return (
    <div className="ldp-root" style={styles.root}>
      {/* 1. 시·도 */}
      <div style={styles.col}>
        <div style={styles.colHeader}>시·도</div>
        <div style={styles.list}>
          {sidoList.map((s) => (
            <div
              key={s.value}
              onClick={() => setSelectedSido(s)}
              style={{
                ...styles.item,
                ...(selectedSido?.value === s.value ? styles.itemActive : {}),
              }}
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* 2. 시·군·구 */}
      <div style={styles.col}>
        <div style={styles.colHeader}>시·군·구</div>
        <div style={styles.list}>
          {loading && <div style={styles.placeholder}>불러오는 중…</div>}
          {!!error && (
            <div style={{ ...styles.placeholder, color: "#c00" }}>{error}</div>
          )}
          {!loading && !error && !regionData && (
            <div style={styles.placeholder}>{placeholderSecond}</div>
          )}
          {!loading && !error && regionData && cityKeys.length === 0 && (
            <div style={styles.placeholder}>데이터가 없습니다</div>
          )}
          {regionData &&
            cityKeys.map((k) => (
              <div
                key={k}
                onClick={() => setSelectedCityKey(k)}
                style={{
                  ...styles.item,
                  ...(selectedCityKey === k ? styles.itemActive : {}),
                }}
              >
                {k}
              </div>
            ))}
        </div>
      </div>

      {/* 3. 동·읍·면 */}
      <div style={{ ...styles.col, flex: 2 }}>
        <div style={styles.colHeader}>동 · 읍 · 면</div>
        <div style={{ ...styles.grid }}>
          {!leafList.length ? (
            <div style={styles.placeholder}>{placeholderThird}</div>
          ) : (
            leafList.map((i) => {
              const isChecked = checked?.code === i.code;
              return (
                <div
                  key={i.code}
                  style={{
                    ...styles.checkItem,
                    ...(isChecked ? styles.checkItemActive : {}),
                    cursor: "pointer",
                  }}
                  title={`${i.name} (${i.code})`}
                  onClick={() => toggleItem(i)}
                >
                  <img
                    src={isChecked ? CHECKED_IMG : UNCHECKED_IMG}
                    alt={isChecked ? "선택됨" : "선택 안 됨"}
                    style={styles.icon}
                  />
                  <span
                    style={{
                      ...styles.text,
                      ...(isChecked ? styles.isChecked : {}),
                    }}
                  >
                    {i.name}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    height: 250,
    border: "1px solid #121212",
    borderRadius: 8,
    display: "flex",
    overflow: "hidden",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Apple SD Gothic Neo, Noto Sans KR, sans-serif",
  },
  col: {
    width: 240,
    borderRight: "1px solid #CCC",
    display: "flex",
    flexDirection: "column",
    minHeight: 250,
  },
  colHeader: {
    minHeight: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: "0 12px",
    background: "#EFEFEF",
    color: "#333",

    fontSize: 17, // px
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 1.5, // 150%
    letterSpacing: 0.34, // px
  },
  list: {
    overflowY: "auto",
  },
  item: {
    width: "100%",
    textAlign: "center",
    padding: "9px 12px",
    background: "#fff",
    border: "none",
    cursor: "pointer",

    color: "#000",
    fontSize: 16, // px
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 1.6, // 160%
    letterSpacing: 0.16, // px
  },
  itemActive: {
    background: "#DDF6ED",
    color: "#0b8f6a",
    fontWeight: 600,
  },
  placeholder: {
    padding: 16,
    color: "#6b7280",
  },
  grid: {
    padding: 12,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 8,
    alignContent: "start",
    overflowY: "auto",
    backgroundColor: "#fff",
  },
  checkItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 10px",
    borderRadius: 8,
    background: "#fff",
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.6, // 160%
    letterSpacing: 0.16,
  },
  isChecked: {
    fontWeight: 600,
  },
  checkLabel: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13,
  },
  visuallyHidden: {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
    pointerEvents: "none",
  },
};
