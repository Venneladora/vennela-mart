import React from "react";

const Offers = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-green-50">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Offer 1 */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-10 text-white shadow-xl">

          <h2 className="text-4xl font-bold mb-5">
            Fresh Fruits Sale
          </h2>

          <p className="text-lg mb-6">
            Get up to 30% OFF on fresh fruits
            and vegetables.
          </p>

          <button className="bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Shop Now
          </button>

        </div>

        {/* Offer 2 */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl p-10 text-white shadow-xl">

          <h2 className="text-4xl font-bold mb-5">
            Ice Cream Festival
          </h2>

          <p className="text-lg mb-6">
            Buy 1 Get 1 Free on selected
            ice creams and chocolates.
          </p>

          <button className="bg-white text-red-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Explore Deals
          </button>

        </div>

      </div>

    </section>
  );
};

export default Offers;