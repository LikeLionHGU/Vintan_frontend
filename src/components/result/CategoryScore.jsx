import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

export default function CategoryScore({ finalScore }) {
  const data = useMemo(() => {
    return [
      {
        key: "competitionScore",
        name: "경쟁 강도",
        value: finalScore?.competitionScore,
      },
      {
        key: "floatingPopulationScore",
        name: "배후/유입",
        value: finalScore?.floatingPopulationScore,
      },
      {
        key: "accessibilityScore",
        name: "접근성",
        value: finalScore?.accessibilityScore,
      },
      {
        key: "overallReviewScore",
        name: "빈땅 창업 스퀘어",
        value: finalScore?.overallReviewScore,
      },
    ];
  }, [finalScore]);

  return (
    <div style={{ width: "80%", height: 330 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 24, right: 24, bottom: 24, left: 24 }}
        >
          {/* ⬇️ CartesianGrid 제거 → 중간 가로선 안나옴 */}

          <YAxis
            domain={[0, 20]}
            ticks={[0, 10, 20]}
            tickFormatter={(v) => `${v}점`}
            axisLine={{ stroke: "#999999" }} // Y축 라인 유지
            tick={{ fill: "#999999" }}
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "#999999" }} // X축 라인 유지 (맨 밑 선)
            tick={{ fill: "#999999" }}
            interval={0}
          />

          <Bar
            dataKey="value"
            fill="#DDF6ED"
            radius={[8, 8, 0, 0]}
            maxBarSize={56}
          >
            <LabelList
              dataKey="value"
              position="top"
              formatter={(v) => `${v}점`}
              style={{ fill: "#009C64", fontWeight: 700 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
