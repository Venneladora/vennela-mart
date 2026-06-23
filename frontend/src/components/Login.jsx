import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaLock
} from "react-icons/fa";

const Login = () => {
const [loginType, setLoginType] = React.useState("USER");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Login Function
  
const handleLogin = async () => {

  // Email Empty Check
  if (!email.trim()) {
    alert("Please Enter Email 📧");
    return;
  }

  // Email Format Check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please Enter Valid Email 📧");
    return;
  }

  // Password Empty Check
  if (!password.trim()) {
    alert("Please Enter Password 🔒");
    return;
  }

  // Password Length Check
  if (password.length < 6) {
    alert("Password Must Be At Least 6 Characters 🔒");
    return;
  }

  try {

    const response = await axios.post(
  "https://vennela-mart-production.up.railway.app/login",
  {
    email,
    password
  }
);
    if (response.data === "Login Success") {

      localStorage.setItem("user", "loggedin");
       localStorage.setItem("email", email);
       
       if (email === "admin@gmail.com") {

  localStorage.setItem("role", "ADMIN");

} else {

  localStorage.setItem("role", "USER");

}
       localStorage.setItem("name", response.data.name || "");
      alert("Login Success 😎");

      window.location.href = "/";

    } else {

      alert("Invalid Email or Password ❌");

    }

  } catch (error) {

    console.log(error);

    alert("Login Failed ❌");

  }
};
  return (

    <section className="min-h-screen flex items-center justify-center bg-green-50 px-6">

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full">

        {/* Left */}
        <div className="p-10 md:p-14">

          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Welcome Back 👋
          </h2>

          {/* Email */}
          <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 mb-5">

            <FaEnvelope className="text-gray-500 mr-3" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none w-full"
            />

          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 mb-6">

            <FaLock className="text-gray-500 mr-3" />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-full"
            />

          </div>

          <p className="text-right text-green-600 font-medium mb-8">
            Forgot Password?
          </p>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold transition"
          >
            Login
          </button>

          {/* Signup */}
          <p className="text-center text-gray-600 mt-8">

            Don’t have an account?

            <Link
              to="/signup"
              className="text-green-600 font-semibold ml-2 hover:underline"
            >
              Signup
            </Link>

          </p>

        </div>

        {/* Right */}
        <div className="bg-green-600 text-white flex flex-col justify-center items-center p-10">

          <h1 className="text-5xl font-bold mb-6 text-center">
            Vennela Mart
          </h1>

          <p className="text-lg text-center leading-8">
            Login and continue shopping groceries,
            beverages and daily essentials.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            alt="login"
            className="w-72 mt-10"
          />

        </div>

      </div>

    </section>
  )
}

export default Login