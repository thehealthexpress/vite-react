import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const OrderCard = ({ order }) => {
  const {
    _id,
    items,
    totalAmount,
    status,
    createdAt,
    deliveryAddress,
  } = order;

  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <div style={styles.card}>
      {/* Top Section */}
      <div style={styles.header}>
        <div>
          <h3 style={styles.orderId}>Order #{_id?.slice(-6)}</h3>
          <p style={styles.date}>
            <FaClock size={12} /> {formattedDate}
          </p>
        </div>

        <span
          style={{
            ...styles.status,
            backgroundColor:
              status === "Delivered"
                ? "#16a34a"
                : status === "Preparing"
                ? "#f59e0b"
                : "#dc2626",
          }}
        >
          {status}
        </span>
      </div>

      {/* Items */}
      <div style={styles.itemsContainer}>
        {items.map((item, index) => (
          <div key={index} style={styles.itemRow}>
            <img
              src={`http://localhost:5000/images/${item.image}`}
              alt={item.name}
              style={styles.image}
            />
            <div style={{ flex: 1 }}>
              <p style={styles.itemName}>{item.name}</p>
              <p style={styles.qty}>Qty: {item.quantity}</p>
            </div>
            <p style={styles.price}>₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div style={styles.footer}>
        <div style={styles.address}>
          <FaMapMarkerAlt size={12} /> {deliveryAddress?.area},{" "}
          {deliveryAddress?.city}
        </div>
        <div style={styles.total}>Total: ₹{totalAmount}</div>
      </div>
    </div>
  );
};

export default OrderCard;

/* =======================
   Styles (Modern Clean UI)
   ======================= */

const styles = {
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
  header: {
    display: "flex",
    justifyContent: "space-betw
