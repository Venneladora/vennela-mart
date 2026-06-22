import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {

  const product = {
    name: "Fresh Apple",
    price: "₹120",
    image:
      "https://cdn-icons-png.flaticon.com/512/415/415682.png",
    description:
      "Fresh and juicy apples directly from organic farms. Rich in vitamins and perfect for healthy living.",
  }

  return (

    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6 md:px-12">

      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left */}
        <div className="flex items-center justify-center p-10 bg-green-50 dark:bg-gray-700">

          <img
            src={product.image}
            alt={product.name}
            className="w-[350px] hover:scale-105 transition duration-300"
          />

        </div>

        {/* Right */}
        <div className="p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-5">
            {product.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500 mb-5">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            <span className="text-gray-600 dark:text-gray-300 ml-3">
              (4.9 Ratings)
            </span>

          </div>

          {/* Price */}
          <h2 className="text-4xl font-bold text-green-600 mb-6">
            {product.price}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-8 mb-8">

            {product.description}

          </p>

          {/* Quantity */}
          <div className="flex items-center gap-5 mb-8">

            <button className="bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-xl text-2xl dark:text-white">
              -
            </button>

            <span className="text-2xl font-bold dark:text-white">
              1
            </span>

            <button className="bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-xl text-2xl dark:text-white">
              +
            </button>

          </div>

          {/* Buttons */}
          <div className="flex gap-5">

            <button className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition">

              <FaShoppingCart />

              Add To Cart

            </button>

            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-2xl text-lg font-bold transition">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductDetails