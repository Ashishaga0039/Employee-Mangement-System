import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post("https://employee-mangement-system-7aau.onrender.com/api/auth/register", data);
      alert("Registered Successfully ✅");
      window.location.href = "/login";
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Create Account
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Sign up to get started
        </p>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
        >
          Register Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        {/* Social login */}
        <button className="w-full border py-2 rounded-full mb-2 hover:bg-gray-100">
          Continue with Google
        </button>

        <button className="w-full border py-2 rounded-full hover:bg-gray-100">
          Continue with Facebook
        </button>

        {/* Login link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer font-semibold"
            onClick={() => window.location.href = "/login"}
          >
            Sign In
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;