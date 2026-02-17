import { useEffect, useState } from "react";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    fetch(`http://localhost:5000/api/order/${userId}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="orders">
      <h2>My Orders</h2>
      {orders.map(order => (
        <div key={order._id} className="order-card">
          <p>Total: ₹{order.total}</p>
          <p>Status: {order.status}</p>
          <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
