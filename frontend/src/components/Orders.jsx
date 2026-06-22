import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  useEffect(() => {

  const email = localStorage.getItem("email");

  console.log("Email:", email);

  axios
    .get(`http://localhost:8080/orders/${email}`)
    .then((response) => {

      console.log(response.data);

      setOrders(response.data);

    })
    .catch((error) => {
      console.log(error);
    });

}, []);

  const handleReorder = (order) => {

    alert(
      `Reorder Requested For Order #${order.id} 🔄`
    );

  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Order History 📦
      </h1>

      {orders.map((order) => (

        <div
          key={order.id}
          className="bg-white p-6 rounded-2xl shadow mb-4"
        >

          <h2 className="text-xl font-bold">
            Order #{order.id}
          </h2>

          <p>Name: {order.customerName}</p>

         <p>Email: {order.email}</p>
         <p className="font-bold mt-2">

  {order.status === "Delivered"
    ? "✅ Delivered"
    : order.status === "Shipped"
    ? "🚚 Shipped"
    : order.status === "Processing"
    ? "🟡 Processing"
    : "📦 Placed"}

</p>
         <p>
  Order Date:
  {
    order.orderDate
      ? new Date(order.orderDate).toLocaleString()
      : " Old Order"
  }
</p>
         <p className="text-green-600 font-bold">
  Status: {order.status} ✅
</p>

<p>
  Date:
  {" "}
  {order.orderDate
    ? new Date(order.orderDate).toLocaleString()
    : "Old Order"}
</p>
<p className="text-blue-600 font-bold">
  Status: {order.status || "Placed"} ✅
</p>

<p className="text-green-600 font-bold">
  ₹{order.totalAmount}
</p>
<p className="font-bold">

  {
    order.status === "Delivered"
      ? "✅ Delivered"

      : order.status === "Shipped"
      ? "🚚 Shipped"

      : "🟡 Placed"
  }

</p>
          <button
            onClick={() => handleReorder(order)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg mt-4"
          >
            Reorder 🔄
          </button>

        </div>

      ))}

    </div>
  );
};

export default Orders;