import { motion } from "framer-motion";

const Profile = ({ handleLogout }) => {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center p-6">

      {/* 🔥 CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-[400px] shadow-xl"
      >

        {/* 👤 AVATAR */}
        <div className="flex flex-col items-center">

          <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mb-4">
            A
          </div>

          <h2 className="text-xl font-semibold">
            Ashish Agarwal
          </h2>

          <p className="text-gray-400 text-sm">
            ashish039aga@gmail.com
          </p>

        </div>

        {/* 🔧 OPTIONS */}
        <div className="mt-6 space-y-4">

          <button className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
            Change Password
          </button>

          <button className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
            Security Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
          >
            Logout
          </button>

        </div>

      </motion.div>

    </div>
  );
};

export default Profile;