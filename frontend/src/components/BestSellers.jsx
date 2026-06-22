import React from "react";
import dairymilk from "../assets/images/chocolates/dairymilk.png";
import vanilla from "../assets/images/icecreams/vanilla.png";
import chocolateicecream from "../assets/images/icecreams/chocolateicecream.png";
const bestSellers = [
 {
  name: "Apple",
  price: 90,
  image:
    "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
},
  {
    name: "Vanilla Ice Cream",
    price: 80,
    image: vanilla,
  },
  {
    name: "Dairy Milk",
    price: 90,
    image: dairymilk,
  },
  {
    name: "Chocolate Ice Cream",
    price: 150,
    image: chocolateicecream,
  },
];

const BestSellers = () => {
  return (
    <section className="px-8 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Best Sellers 🔥
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {bestSellers.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 mx-auto object-contain"
            />

            <h2 className="font-bold text-xl mt-4">
              {item.name}
            </h2>

            <p className="text-green-600 font-bold text-2xl mt-2">
              ₹{item.price}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default BestSellers;