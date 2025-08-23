import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "score", value: 82 },
  { name: "rest", value: 100 - 82 },
];

const COLORS = ["#00FFA4", "#DDD"];

export default function DonutChart() {
  return (
    <PieChart width={340} height={340}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={140}
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
        fill="#000"
      >
        최종
      </text>
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="36"
        fontWeight="bold"
        fill="#009C64"
      >
        82점
      </text>
    </PieChart>
  );
}
