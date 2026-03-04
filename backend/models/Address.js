import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  fullAddress: String,
  city: String,
  pincode: String,
  lat: Number,
  lng: Number
});

export default mongoose.model("Address", addressSchema);
