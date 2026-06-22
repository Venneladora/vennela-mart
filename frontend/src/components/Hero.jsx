import React from "react";

const Hero = ({ darkMode }) => {
  return (
    <section
      className={
        darkMode
          ? "bg-gray-800 min-h-[90vh] flex items-center justify-between px-10 flex-col-reverse md:flex-row"
          : "bg-green-50 min-h-[90vh] flex items-center justify-between px-10 flex-col-reverse md:flex-row"
      }
    >
      <div className="md:w-1/2 space-y-6 text-center md:text-left">

        <h1
          className={
            darkMode
              ? "text-5xl md:text-6xl font-bold text-white leading-tight"
              : "text-5xl md:text-6xl font-bold text-gray-800 leading-tight"
          }
        >
          Fresh Groceries
          <span className="text-green-600"> Delivered </span>
          To Your Door
        </h1>

        <p
          className={
            darkMode
              ? "text-gray-300 text-lg"
              : "text-gray-600 text-lg"
          }
        >
          Buy fresh vegetables, fruits, and daily essentials
          at the best prices from Vennela Mart.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">

          <a href="#products">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
              Shop Now
            </button>
          </a>

          <a href="#products">
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full font-semibold transition">
              Explore
            </button>
          </a>

        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="groceries"
          className="w-[500px] rounded-3xl shadow-2xl"
        />

      </div>
    </section>
  );
};

export default Hero;