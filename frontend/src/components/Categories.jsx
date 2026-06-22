import React from "react";

const categories = [
  {
    id: 1,
    name: "Fruits",
    image:
      "https://cdn-icons-png.flaticon.com/512/3194/3194591.png",
    bg: "bg-pink-600",
  },

  {
    id: 2,
    name: "Vegetables",
    image:
      "https://cdn-icons-png.flaticon.com/512/2153/2153788.png",
    bg: "bg-lime-500",
  },

  {
    id: 3,
    name: "Dairy",
    image:
      "https://cdn-icons-png.flaticon.com/512/2674/2674505.png",
    bg: "bg-amber-700",
  },

  {
    id: 4,
    name: "Bakery",
    image:
      "https://cdn-icons-png.flaticon.com/512/5787/5787016.png",
    bg: "bg-sky-200",
  },

  {
    id: 5,
    name: "Chocolates",
    image:
      "https://cdn-icons-png.flaticon.com/512/590/590685.png",
    bg: "bg-pink-500",
  },

  {
    id: 6,
    name: "Ice Creams",
    image:
      "https://cdn-icons-png.flaticon.com/512/3081/3081967.png",
    bg: "bg-slate-500",
  },

  {
    id: 7,
    name: "Snacks",
    image:
      "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    bg: "bg-orange-500",
  },

  {
    id: 8,
    name: "Drinks",
    image:
      "https://cdn-icons-png.flaticon.com/512/2405/2405479.png",
    bg: "bg-yellow-300",
  },
];

const Categories = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-100">

      <h1 className="text-5xl font-bold text-gray-800 mb-12">
        Categories
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

        {categories.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} rounded-3xl p-6 flex flex-col items-center justify-center hover:scale-105 transition duration-300 shadow-lg cursor-pointer`}
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-contain mb-5"
            />

            <h2 className="text-xl font-semibold text-gray-900 text-center">
              {item.name}
            </h2>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;