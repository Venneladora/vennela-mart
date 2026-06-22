import React from "react";

const features = [
  {
    title: "Fast Delivery",
    desc: "Groceries delivered in under 30 minutes 🚚",
  },
  {
    title: "Fresh Products",
    desc: "Directly sourced from farms 🥬",
  },
  {
    title: "Secure Payments",
    desc: "UPI, Cards & COD supported 💳",
  },
  {
    title: "24/7 Support",
    desc: "Always ready to help 📞",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-8 py-12 bg-gray-50">

      <h1 className="text-4xl font-bold mb-8">
        Why Shop With Us?
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow text-center"
          >

            <h2 className="text-xl font-bold mb-3">
              {item.title}
            </h2>

            <p className="text-gray-600">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;