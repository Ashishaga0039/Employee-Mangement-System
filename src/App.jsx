import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";
import RiskChart from "./components/RiskChart";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeesPage from "./components/EmployeesPage";
import AnalyticsPage from "./components/AnalyticsPage"; 
import Profile from "./components/Profile";

function App() {

  const API = "https://employee-mangement-system-7aau.onrender.com/employees";

  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [form, setForm] = useState({
    id: null,
    name: "",
    department: "",
    salary: "",
    performanceRating: "",
    jobSatisfaction: "",
    yearsAtCompany: ""
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(API);

      const rawData = Array.isArray(res.data)
        ? res.data
        : res.data.content || res.data.data || [];

      const calculateRisk = (emp) => {
        if (emp.performanceRating <= 2 || emp.jobSatisfaction <= 2) {
          return "High";
        } else if (emp.performanceRating === 3) {
          return "Medium";
        } else {
          return "Low";
        }
      };

      const finalData = rawData.map(emp => ({
        ...emp,
        risk: calculateRisk(emp)
      }));

      setEmployees(finalData);

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.department ||
      !form.salary ||
      !form.performanceRating ||
      !form.jobSatisfaction ||
      !form.yearsAtCompany
    ) {
      toast.error("All fields required!");
      return;
    }

    const data = {
      name: form.name,
      department: form.department,
      salary: Number(form.salary),
      performanceRating: Number(form.performanceRating),
      jobSatisfaction: Number(form.jobSatisfaction),
      yearsAtCompany: Number(form.yearsAtCompany)
    };

    try {
      setLoading(true);

      if (form.id) {
        await axios.put(`${API}/${form.id}`, data);
        toast.success("Employee updated!");
      } else {
        await axios.post(API, data);
        toast.success("Employee added!");
      }

      await fetchEmployees();
      closeModal();

    } catch {
      toast.error("Error saving employee");
    } finally {
      setLoading(false);
    }
  };

  const editEmployee = (emp) => {
    setForm(emp);
    setShowModal(true);
  };

  const deleteEmployee = async (id) => {
    if (!window.confirm("Delete this employee?")) return;

    try {
      await axios.delete(`${API}/${id}`);
      toast.success("Employee deleted!");
      fetchEmployees();
    } catch {
      toast.error("Delete failed!");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setForm({
      id: null,
      name: "",
      department: "",
      salary: "",
      performanceRating: "",
      jobSatisfaction: "",
      yearsAtCompany: ""
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // 🔥 Dashboard UI as component
  const Dashboard = () => (
    <div className="flex bg-gradient-to-br from-[#1e3c72] to-[#2a5298]">

      <Sidebar handleLogout={handleLogout} />

      <div className="flex-1 min-h-screen text-white">
        <Navbar />
        <Toaster position="top-right" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8"
        >

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="mb-6 px-6 py-3 rounded-xl 
            bg-white/10 backdrop-blur-md border border-white/20
            shadow-lg hover:bg-white/20 transition-all"
          >
            + Add Employee
          </motion.button>

          <AddEmployeeModal
            showModal={showModal}
            setShowModal={setShowModal}
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          <DashboardCards employees={employees} />

          <div className="grid grid-cols-3 gap-6 mt-6">

            <div className="col-span-2 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow border border-white/20">
              <h2 className="text-xl font-bold mb-4">Manage Employees</h2>

              <EmployeeTable
                employees={employees}
                editEmployee={editEmployee}
                deleteEmployee={deleteEmployee}
              />
            </div>

            <div className="space-y-6">

              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow h-[320px] flex justify-center items-center">
                <h3 className="absolute top-2 left-4 text-sm">Risk Analytics</h3>
                <RiskChart employees={employees} />
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow">
                <h3>Total Employees</h3>
                <p className="text-3xl font-bold">{employees.length}</p>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>

  <Route path="/" element={<Register />} />

  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

  <Route path="/register" element={<Register />} />

  <Route path="/forgot-password" element={<ForgotPassword />} />

  <Route
    path="/dashboard"
    element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
  />

  <Route path="/employee/:id" element={<div>Employee Details</div>} />
  <Route
  path="/employee/:id"
  element={<EmployeeDetails employees={employees} />}
/>
<Route path="/dashboard" element={<DashboardCards employees={employees} />} />
<Route path="/employees" element={<EmployeesPage employees={employees} />} />
<Route path="/analytics" element={<AnalyticsPage employees={employees} />} />
<Route path="/profile" element={<Profile handleLogout={handleLogout} />} />

</Routes>
    </Router>
  );
}

export default App;