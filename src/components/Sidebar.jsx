import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BarChart3, Settings, LogOut } from "lucide-react";

const Sidebar = ({ handleLogout }) => {

  const navigate = useNavigate();
  const location = useLocation();
  

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={18} /> },
    { name: "Employees", path: "/employees", icon: <Users size={18} /> },
    { name: "Risk Analytics", path: "/analytics", icon: <BarChart3 size={18} /> }
    
  ];

  return (
    <div className="w-64 min-h-screen flex flex-col justify-between bg-[#0f172a] text-white p-5">

      {/* TOP */}
      <div>
        <h1 className="text-2xl font-bold mb-8">EMS Dashboard</h1>

        <ul className="space-y-3">
          {menu.map(item => {

            const isActive = location.pathname === item.path;

            return (
              <li
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition
                ${isActive 
                  ? "bg-blue-500/20 text-blue-400" 
                  : "hover:text-blue-400"}`}
              >
                {item.icon}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 pt-4">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            A
          </div>
          <div>
            <p className="font-semibold">Ashish Agarwal</p>
            <p className="text-sm text-gray-400">ashish039aga@gmail.com</p>
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
            <Settings size={16} /> Settings
          </li>

          <li
            onClick={handleLogout}
            className="flex items-center gap-2 hover:text-red-400 cursor-pointer"
          >
            <LogOut size={16} /> Logout
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Sidebar;