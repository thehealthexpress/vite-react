import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const restaurantLat = 28.4949;
const restaurantLng = 77.0888;

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

router.post("/", protect, async (req, res) => {
  const { items, totalAmount, address } = req.body;

  const distance = getDistance(
    restaurantLat,
    restaurantLng,
    address.lat,
    address.lng
  );

  if (distance > 6)
    return res.status(400).json({ message: "Outside delivery radius" });

  const order = await Order.create({
    user: req.user.id,
    items,
    totalAmount,
    address
  });

  res.json(order);
});

router.get("/", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
});

export default router;
