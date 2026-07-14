import RiskChart from "./RiskChart";
import EmployeeTable from "./EmployeeTable";

const AnalyticsPage = ({ employees, editEmployee, deleteEmployee }) => {

  // 🔥 Risk Count
  const high = employees.filter(e => e.risk === "High").length;
  const medium = employees.filter(e => e.risk === "Medium").length;
  const low = employees.filter(e => e.risk === "Low").length;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0d9dda] via-[#25596a] to-[#2d9ece] flex flex-col items-center p-6">

      {/* 🧊 TOP CARD (Analytics) */}
      <div className="relative z-10 w-full max-w-5xl mb-10">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 text-center">

          <h1 className="text-3xl font-bold text-black mb-2">
            Risk Analytics
          </h1>

          <p className="text-black-300 mb-10">
            Risk Distribution Overview
          </p>

          {/* 🎯 Chart + Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">

            {/* Chart */}
            <div className="w-[220px] h-[220px] flex items-center justify-center hover:scale-105 transition duration-300">
              <RiskChart employees={employees} />
            </div>

            {/* Risk Boxes */}
            <div className="flex flex-col gap-4 w-[220px]">

              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-red-500/20 border border-red-400/30 text-white">
                <span>High Risk</span>
                <span className="font-bold">{high}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-yellow-400/20 border border-yellow-300/30 text-white">
                <span>Medium Risk</span>
                <span className="font-bold">{medium}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-green-500/20 border border-green-400/30 text-white">
                <span>Low Risk</span>
                <span className="font-bold">{low}</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 📋 BOTTOM CARD (Employee Table) */}
      <div className="relative z-10 w-full max-w-5xl">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6">

          <h2 className="text-xl font-semibold text-white mb-4">
            Employee Data
          </h2>

          <EmployeeTable
            employees={employees}
            editEmployee={editEmployee}
            deleteEmployee={deleteEmployee}
          />

        </div>
      </div>

    </div>
    
  );
};

export default AnalyticsPage;