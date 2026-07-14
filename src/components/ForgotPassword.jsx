import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("https://employee-mangement-system-7aau.onrender.com/employees/api/auth/forgot-password", {
        email,
      });
      alert("Reset link sent 📩");
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to receive a reset link
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
        >
          Send Reset Link
        </button>

        <p
          className="text-center text-sm mt-4 text-purple-600 cursor-pointer"
          onClick={() => window.location.href = "/login"}
        >
          Back to Login
        </p>

      </div>

    </div>
  );
};

export default ForgotPassword;