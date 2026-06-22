import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-4xl font-bold text-green-500 mb-5">
            Vennela Mart
          </h1>

          <p className="text-gray-400 leading-7">
            Your one-stop destination for fresh groceries,
            daily essentials, beverages, chocolates,
            and ice creams delivered quickly and reliably.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link
                to="/"
                className="hover:text-green-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                className="hover:text-green-500 transition"
              >
                Orders
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                className="hover:text-green-500 transition"
              >
                Wishlist
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 transition"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Customer Support
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Follow Us
          </h2>

          <div className="flex gap-5 text-3xl mt-2">

            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />

            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />

            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />

            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />

          </div>

          <div className="mt-8">

            <p className="text-gray-400">
              Email:
            </p>

            <p className="text-green-500">
              support@vennelamart.com
            </p>

            <p className="text-gray-400 mt-3">
              Phone:
            </p>

            <p className="text-green-500">
              +91 9876543210
            </p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">

        © 2026 Vennela Mart. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;