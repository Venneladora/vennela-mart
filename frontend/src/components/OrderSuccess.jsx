import React from "react";

import { Link } from "react-router-dom";

const OrderSuccess = () => {

  return (

    <section className="min-h-screen flex items-center justify-center bg-green-50 px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center max-w-2xl w-full">

        {/* Success Icon */}
        <div className="text-8xl mb-6">
          🎉
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-green-600 mb-6">

          Order Placed Successfully!

        </h1>

        {/* Message */}
        <p className="text-gray-600 text-xl leading-9">

          Thank you for shopping with
          <span className="font-bold text-green-600">
            {" "}Vennela Mart
          </span>

          <br />

          Your groceries will be delivered soon 🚚

        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">

          <Link to="/">

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition">

              Continue Shopping

            </button>

          </Link>

          <Link to="/cart">

            <button className="bg-gray-800 hover:bg-black text-white px-8 py-4 rounded-2xl text-lg font-bold transition">

              View Cart

            </button>

          </Link>

        </div>

      </div>

    </section>
  )
}

export default OrderSuccess