import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ FIXED
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      await axios.post(
        "https://employee-mangement-system-7aau.onrender.com/api/auth/login",
        data
      );

      toast.success("Welcome back 👋");

      setIsLoggedIn(true);
      navigate("/dashboard");

    } catch (err) {
      toast.error("Invalid credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white rounded-2xl shadow-xl flex w-full max-w-5xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-10">
          <div className="text-center text-white">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
              alt="login"
              className="w-72 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p className="text-sm opacity-80 mt-2">
              Manage your employee risk system efficiently
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-8">

          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Sign In
          </h2>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* PASSWORD */}
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              className="w-full p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          {/* FORGOT */}
          <p
            className="text-sm text-purple-500 cursor-pointer mb-4"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </p>

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-5">
            <hr className="flex-1" />
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <hr className="flex-1" />
          </div>

          {/* SOCIAL */}
          <button className="w-full border py-2 rounded-full mb-2 hover:bg-gray-100">
            Continue with Google
          </button>

          <button className="w-full border py-2 rounded-full hover:bg-gray-100">
            Continue with Facebook
          </button>

          {/* REGISTER */}
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer font-semibold"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;