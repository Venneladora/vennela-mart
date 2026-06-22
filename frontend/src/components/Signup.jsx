import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock
} from "react-icons/fa";

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Register Function
  // Signup Function
const handleSignup = async () => {

  // Name Validation
  if (!name.trim()) {
    alert("Please Enter Full Name 👤");
    return;
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please Enter Valid Email 📧");
    return;
  }

  // Phone Validation
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    alert("Please Enter Valid 10 Digit Mobile Number 📱");
    return;
  }

  // Password Validation
  if (password.length < 6) {
    alert("Password Must Be At Least 6 Characters 🔒");
    return;
  }

  // Confirm Password Validation
  if (password !== confirmPassword) {
    alert("Passwords Do Not Match ❌");
    return;
  }

  try {

    const response = await axios.post(
  "http://localhost:8080/register",
      {
        name,
        email,
        phone,
        password
      }
    );

  if (response.status === 200)  {

      alert("Account Created Successfully 🎉");

      window.location.href = "/login";

    } else {

      alert("Signup Failed ❌");

    }

  } catch (error) {

    console.log(error);

    alert("Signup Failed ❌");

  }
};

  return (

    <section className="min-h-screen flex items-center justify-center bg-green-50 px-6">

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full">

        {/* Left */}
        <div className="p-10 md:p-14">

          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Create Account
          </h2>

          {/* Name */}
          <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 mb-5">

            <FaUser className="text-gray-500 mr-3" />

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent outline-none w-full"
            />

          </div>

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
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-full"
            />

          </div>
<div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 mb-5">

  <input
    type="text"
    placeholder="Enter Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="bg-transparent outline-none w-full"
  />

</div>
<div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 mb-6">

  <input
    type="password"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="bg-transparent outline-none w-full"
  />

</div>
          {/* Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold transition"
          >
            Create Account
          </button>

          {/* Login */}
          <p className="text-center text-gray-600 mt-8">

            Already have an account?

            <Link
              to="/login"
              className="text-green-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

        {/* Right */}
        <div className="bg-green-600 text-white flex flex-col justify-center items-center p-10">

          <h1 className="text-5xl font-bold mb-6 text-center">
            Join Vennela Mart
          </h1>

          <p className="text-lg text-center leading-8">
            Create your account and enjoy shopping.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="signup"
            className="w-72 mt-10"
          />

        </div>

      </div>

    </section>
  )
}

export default Signup