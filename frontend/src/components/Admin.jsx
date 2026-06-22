import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {

  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    revenue: 0
  });

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetchStats();
    fetchOrders();

  }, []);

  const fetchStats = () => {

    axios
      .get("http://localhost:8080/admin/stats")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchOrders = () => {

    axios
      .get("http://localhost:8080/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `http://localhost:8080/orders/${id}/${status}`
      );

      alert(`Order Updated To ${status} ✅`);

      fetchOrders();

    } catch (error) {

      console.log(error);

      alert("Failed To Update Status ❌");
    }
  };

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard 📊
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-green-100 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            👥 Users
          </h2>
          <p className="text-4xl mt-4">
            {stats.users}
          </p>
        </div>

        <div className="bg-blue-100 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            📦 Orders
          </h2>
          <p className="text-4xl mt-4">
            {stats.orders}
          </p>
        </div>

        <div className="bg-yellow-100 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            💰 Revenue
          </h2>
          <p className="text-4xl mt-4">
            ₹{stats.revenue || 0}
          </p>
        </div>

      </div>

      {/* Orders Management */}
      <h2 className="text-3xl font-bold mb-6">
        Manage Orders 📦
      </h2>

      {orders.map((order) => (

        <div
          key={order.id}
          className="bg-white shadow rounded-xl p-6 mb-4"
        >

          <h3 className="text-xl font-bold">
            Order #{order.id}
          </h3>

          <p>Name: {order.customerName}</p>

          <p>Email: {order.email}</p>

          <p>Amount: ₹{order.totalAmount}</p>

          <p className="font-bold text-blue-600">
            Status: {order.status || "Placed"}
          </p>

          <div className="flex gap-3 mt-4">

            <button
              onClick={() =>
                updateStatus(order.id, "Processing")
              }
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Processing
            </button>

            <button
              onClick={() =>
                updateStatus(order.id, "Shipped")
              }
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Shipped
            </button>

            <button
              onClick={() =>
                updateStatus(order.id, "Delivered")
              }
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Delivered
            </button>

          </div>

        </div>

      ))}

    </div>
  );
};

export default Admin;