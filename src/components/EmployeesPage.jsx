import { motion } from "framer-motion";
import EmployeeTable from "./EmployeeTable";

const EmployeesPage = ({ employees, editEmployee, deleteEmployee }) => {
  return (
    <div className="min-h-screen bg-[#40578f] relative overflow-hidden text-black">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-8"
      >

        <h1 className="text-3xl font-bold mb-6">
          Employee Management
        </h1>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow border border-white/20">
         <EmployeeTable
            employees={employees}
            editEmployee={editEmployee}
            deleteEmployee={deleteEmployee}
          />

        </div>

      </motion.div>

    </div>
  );
};

export default EmployeesPage;