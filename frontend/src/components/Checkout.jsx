import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart }) => {

  const navigate = useNavigate();

  const [customerName, setCustomerName] = React.useState(
    localStorage.getItem("name") || "");
  const [email, setEmail] = React.useState(localStorage.getItem("email") || "");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );
  const [coupon, setCoupon] = React.useState("");

const [discount, setDiscount] = React.useState(0);

const applyCoupon = () => {

  if (coupon === "SAVE10") {

    setDiscount(totalPrice * 0.1);

    alert("Coupon Applied 🎉");

  } else {

    alert("Invalid Coupon ❌");

  }
};
const finalAmount = totalPrice - discount;
  const placeOrder = async () => {
const isLoggedIn = localStorage.getItem("user");

if (!isLoggedIn) {

  alert("Please Login First 🔐");

  navigate("/login");

  return;
}
    if (!customerName || !email) {
      alert("Please enter Name and Email");
      return;
    }

    try {

const order = {
  customerName,
  email,
  totalAmount: finalAmount,
  products: JSON.stringify(cart)
};
      await axios.post(
        "http://localhost:8080/orders",
        order
      );

      alert("Order Placed Successfully 🎉");
      localStorage.removeItem("cart");
      navigate("/success");

    } catch (error) {

      console.log(error);

      alert("Failed To Place Order ❌");
    }
  };
console.log(cart);
  return (

    <section className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Checkout 🛒
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Delivery Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold mb-6">
              Delivery Details
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
                className="w-full border p-4 rounded-2xl outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border p-4 rounded-2xl outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className="w-full border p-4 rounded-2xl outline-none"
              />

              <textarea
                placeholder="Delivery Address"
                rows="4"
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                className="w-full border p-4 rounded-2xl outline-none"
              />

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              {cart.map((item, index) => (

  <div
    key={index}
    className="flex items-center justify-between border-b pb-3"
  >

    <div className="flex items-center gap-3">

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-lg object-contain bg-gray-100 p-1"
      />

      <div>

        <p className="font-semibold">
          {item.name}
        </p>
 <p className="text-blue-600">
          {item.weight}
        </p>

        <p className="text-gray-500">
          Qty: {item.quantity}
        </p>

      </div>

    </div>

    <span className="font-bold text-green-600">
      ₹{item.price * item.quantity}
    </span>

  </div>

))}

            </div>

            {/* Total */}
            {/* Coupon */}

<div className="mt-6">

  <input
    type="text"
    placeholder="Enter Coupon Code"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
    className="w-full border p-3 rounded-xl"
  />

  <button
    onClick={applyCoupon}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl mt-3"
  >
    Apply Coupon
  </button>

</div>

{/* Price Details */}

<div className="mt-8 space-y-3">

  <div className="flex justify-between text-lg">
    <span>Total</span>
    <span>₹{totalPrice}</span>
  </div>

  <div className="flex justify-between text-lg text-red-500">
    <span>Discount</span>
    <span>- ₹{discount}</span>
  </div>

  <div className="flex justify-between text-2xl font-bold">
    <span>Final Amount</span>
    <span className="text-green-600">
      ₹{finalAmount}
    </span>
  </div>

</div>

            {/* Place Order */}
            <button
              onClick={placeOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-bold mt-10 transition"
            >
              Place Order 🚀
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Checkout;