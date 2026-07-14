import { motion } from "framer-motion";

const DashboardCards = ({ employees }) => {

  const safeEmployees = Array.isArray(employees) ? employees : [];

  const highRisk = safeEmployees.filter(emp => emp.risk === "High").length;
  const mediumRisk = safeEmployees.filter(emp => emp.risk === "Medium").length;
  const lowRisk = safeEmployees.filter(emp => emp.risk === "Low").length;

  const cards = [
    { title: "Total", value: safeEmployees.length, color: "bg-white/10" },
    { title: "High Risk", value: highRisk, color: "bg-red-800/50" },
    { title: "Medium Risk", value: mediumRisk, color: "bg-yellow-600/50" },
    { title: "Low Risk", value: lowRisk, color: "bg-green-200/20" }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">

      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className={`${card.color} backdrop-blur-lg p-4 rounded-xl text-white shadow`}
        >
          <h3>{card.title}</h3>
          <p className="text-3xl font-bold">{card.value}</p>
        </motion.div>
      ))}

    </div>
  );
};

export default DashboardCards;