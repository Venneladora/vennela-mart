import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  removeFromCart,
  addToCart,
  decreaseQuantity
}) => {
  // Total Price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (

    <section className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-10">
          Shopping Cart 🛒
        </h1>

        {/* Empty Cart */}
        {cart.length === 0 ? (

          <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

            <h2 className="text-3xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-4">
              Add some amazing products to your cart.
            </p>

            <Link to="/">

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-bold mt-8 transition">

                Continue Shopping

              </button>

            </Link>

          </div>

        ) : (

          <>

            {/* Cart Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
                >

                  {/* Image */}
                  <div className="flex justify-center">

                    <img
  src={item.image}
  alt={item.name}
  className="w-40 h-40 object-cover rounded-xl"
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/150";
  }}
/>

                  </div>

                  {/* Content */}
                  <div className="mt-6">

                    <h2 className="text-2xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    <div className="mt-4">

  <p className="text-green-600 text-2xl font-bold">
    ₹{item.price}
  </p>

  <p className="text-gray-500">
    Sub Total: ₹{item.price * item.quantity}
  </p>

</div>

                    {/* Quantity */}
                    <div className="flex items-center gap-5 mt-5">

                      {/* Decrease */}
                      <button
  onClick={() => decreaseQuantity(item.id)}
  className="bg-red-500 text-white px-4 py-2 rounded-xl text-xl"
>
  -
</button>

                      {/* Quantity */}
                      <span className="text-2xl font-bold">
                        {item.quantity}
                      </span>

                      {/* Increase */}
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-green-600 text-white px-4 py-2 rounded-xl text-xl"
                      >
                        +
                      </button>

                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-bold mt-5 transition"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Total */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 flex flex-col md:flex-row justify-between items-center">

              <h2 className="text-3xl font-bold">
                Total:
              </h2>

              <p className="text-4xl font-bold text-green-600">
                ₹{totalPrice}
              </p>

            </div>

            {/* Checkout Button */}
            <div className="flex justify-center">

              <Link to="/checkout">

                <button className="bg-green-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold mt-10 hover:bg-green-700 transition">

                  Proceed To Checkout 

                </button>

              </Link>

            </div>

          </>

        )}

      </div>

    </section>
  )
}

export default Cart