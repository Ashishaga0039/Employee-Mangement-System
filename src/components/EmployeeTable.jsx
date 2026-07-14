import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeTable = ({ employees = [], editEmployee, deleteEmployee }) => {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5; // 🔥 kitne data ek page me

  // 🔍 Search filter
  const filteredEmployees = employees.filter(emp =>
    emp?.name?.toLowerCase().includes(search.toLowerCase())
  );

  // 🔢 Pagination Logic
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredEmployees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search employee..."
        className="mb-4 w-full p-2 rounded-lg bg-white/10 text-white border border-white/20 outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // 🔥 reset page
        }}
      />

      {/* 📋 Table */}
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-left text-white">

          <thead className="bg-white/10">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Performance</th>
              <th className="p-3">Risk</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-400">
                  No employees found
                </td>
              </tr>
            ) : (
              currentData.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-b border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.department}</td>
                  <td className="p-3">{emp.performanceRating}</td>

                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm
                      ${emp.risk === "High" && "bg-red-500/30 text-red-300"}
                      ${emp.risk === "Medium" && "bg-yellow-400/30 text-yellow-200"}
                      ${emp.risk === "Low" && "bg-green-500/30 text-green-300"}
                    `}>
                      {emp.risk}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => {
                        localStorage.setItem("selectedEmployee", JSON.stringify(emp));
                        navigate(`/employee/${emp.id}`);
                      }}
                      className="bg-blue-500/80 hover:bg-blue-500 px-3 py-1 rounded-lg"
                    >
                      View
                    </button>

                    <button
                      onClick={() => editEmployee(emp)}
                      className="bg-yellow-500/80 hover:bg-yellow-500 px-3 py-1 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      className="bg-red-500/80 hover:bg-red-500 px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {/* 🔢 Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6 text-white">

          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
};

export default EmployeeTable;