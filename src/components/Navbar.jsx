import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [empId, setEmpId] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (empId) {
      navigate(`/employee/${empId}`);
      setShowSearch(false);
      setEmpId("");
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-lg border-b border-white/10">

      {/* LEFT */}
      <h1 className="text-xl font-bold text-white">
        Employee Risk System
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-9 relative">

        {/* 🔍 SEARCH ICON */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="text-white text-lg hover:scale-110 transition mr-2"
        >
          Search 🔍
        </button>

        {/* 🔥 SEARCH BOX (ANIMATION) */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute top-14 right-20 bg-white/10 backdrop-blur-lg border border-white/10 rounded-lg p-3 flex gap-2 shadow-lg"
            >
              <input
                type="number"
                placeholder="Enter Employee ID"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                className="bg-transparent border border-white/20 rounded px-3 py-1 text-white outline-none"
              />

              <button
                onClick={handleSearch}
                className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-600"
              >
                Go
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PROFILE */}
        <div className="relative">

          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="text-right">
              <p className="text-sm font-semibold text-white">Admin</p>
              <p className="text-sm text-gray-300">Ashish Agarwal</p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              A
            </div>
          </div>

          {/* 🔥 DROPDOWN (ANIMATION) */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-40 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/10"
              >
                <p
                   onClick={() => navigate("/profile")}
                   className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                  >
                   Profile
                 </p>

                <p className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                  Security
                </p>

                <p className="px-4 py-2 hover:bg-red-500/20 cursor-pointer text-red-400">
                  Logout
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
};

export default Navbar;