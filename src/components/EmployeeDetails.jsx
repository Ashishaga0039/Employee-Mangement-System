import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeDetails = () => {

  const navigate = useNavigate();

  // 🔥 localStorage se data lo
  const emp = JSON.parse(localStorage.getItem("selectedEmployee"));

  if (!emp) {
    return <p className="p-10">No Data Found ❌</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-xl w-[400px]">

        <button onClick={() => navigate(-1)} className="mb-4 text-blue-500">
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-4">{emp.name}</h2>

        <p><b>Department:</b> {emp.department}</p>
        <p><b>Salary:</b> ₹ {emp.salary}</p>
        <p><b>Performance:</b> {emp.performanceRating}</p>
        <p><b>Satisfaction:</b> {emp.jobSatisfaction}</p>
        <p><b>Years:</b> {emp.yearsAtCompany}</p>

        <p className="mt-2">
          <b>Risk:</b>{" "}
          <span className={
            emp.risk === "High"
              ? "text-red-500"
              : emp.risk === "Medium"
              ? "text-yellow-500"
              : "text-green-500"
          }>
            {emp.risk}
          </span>
        </p>

      </div>

    </div>
  );
};

export default EmployeeDetails;