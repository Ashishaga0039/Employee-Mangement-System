import { PieChart, Pie, Cell, Tooltip } from "recharts";

const RiskChart = ({ employees }) => {

  const safeEmployees = Array.isArray(employees) ? employees : [];

  const highRisk = safeEmployees.filter(emp => emp.risk === "High").length;
  const mediumRisk = safeEmployees.filter(emp => emp.risk === "Medium").length;
  const lowRisk = safeEmployees.filter(emp => emp.risk === "Low").length;

  const data = [
    { name: "High", value: highRisk, fill: "#ef4444" },
    { name: "Medium", value: mediumRisk, fill: "#facc15" },
    { name: "Low", value: lowRisk, fill: "#22c55e" }
  ];

  return (
    <div className="flex justify-center">
      <PieChart width={260} height={260}>
        <Pie data={data} dataKey="value" outerRadius={90}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default RiskChart;