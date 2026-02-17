import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import foodRoutes from "./routes/food.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/food", foodRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
