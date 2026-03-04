import express from "express";
import Address from "../models/Address.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const address = await Address.create({
    ...req.body,
    user: req.user.id
  });
  res.json(address);
});

router.get("/", protect, async (req, res) => {
  const addresses = await Address.find({ user: req.user.id });
  res.json(addresses);
});

export default router;
