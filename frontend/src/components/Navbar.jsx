import React from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaUser,
  FaMoon,
  FaSun
} from "react-icons/fa";

const Navbar = ({
  cart,
  wishlist,
  darkMode,
  setDarkMode,
  search,
  setSearch
}) => {
const role = localStorage.getItem("role");
  const logout = () => {

    localStorage.clear();

    alert("Logged Out Successfully 👋");

    window.location.href = "/login";
  };

  return (

    <nav className="bg-green-600 text-white px-4 md:px-8 py-5 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center shadow-lg">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold"
      >
        Vennela Mart
      </Link>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 rounded-xl text-black bg-white outline-none w-52 md:w-72"
      />

      {/* Links */}
      <div className="flex items-center gap-6 text-lg">

        {/* Home */}
        <Link
          to="/"
          className="hover:text-yellow-300 transition"
        >
          Home
        </Link>

        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Profile */}
        <Link
          to="/profile"
          className="hover:text-yellow-300 transition"
        >
          <FaUser className="text-2xl" />
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative hover:text-yellow-300 transition"
        >
          <FaShoppingCart className="text-2xl" />

          <span className="absolute -top-3 -right-3 bg-red-500 text-xs px-2 py-1 rounded-full">
            {cart.length}
          </span>
        </Link>

        {/* Admin */}
       {localStorage.getItem("role") === "ADMIN" && (

  <Link
    to="/admin"
    className="hover:text-yellow-300 transition"
  >
    Admin
  </Link>

)}

        {/* Orders */}
        <Link
          to="/orders"
          className="hover:text-yellow-300 transition"
        >
          Orders
        </Link>
<Link
  to="/wishlist"
  className="hover:text-yellow-300 transition"
>
  ❤️ Wishlist ({wishlist?.length || 0})
</Link>
<Link
  to="/contact"
  className="hover:text-yellow-300 transition"
>
  Contact
</Link>

{localStorage.getItem("user") ? (

  <button
    onClick={logout}
    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold"
  >
    Logout
  </button>

) : (

  <Link
    to="/login"
    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold"
  >
    Login
  </Link>

)}

      </div>

    </nav>
  );
};

export default Navbar;