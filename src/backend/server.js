import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Restrict CORS

// MongoDB Connection
const mongoURI = "mongodb+srv://20bcs5178:20bcs5178@userinfo.zexql.mongodb.net/reservations?retryWrites=true&w=majority&appName=userInfo";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Reservation Schema
const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  date: {
    type: String,
    required: true,
    validate: {
      validator: (value) => new Date(value) >= new Date(),
      message: "Date must not be in the past.",
    },
  },
  time: { type: String, required: true, match: /^([01]\d|2[0-3]):([0-5]\d)$/ },
  outlet: { type: String, required: true, enum: ["Sector-15", "Sector-20", "Sector-45", "Sector-60"] },
  persons: { type: String, required: true, enum: ["1", "2", "3", "4+"] },
  customization: {
    type: String,
    required: true,
    enum: ["Window Seat", "High Chair", "Outdoor Seating", "Birthday Setup", "Anniversary Setup", "Date Setup", "Other"],
  },
});

// Reservation Model
const Reservation = mongoose.model("Reservation", reservationSchema);

// POST Route to Save Reservation
app.post("/api/reservation", async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).send({ message: "🎉 Reservation saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving reservation:", error);
    res.status(500).send({ message: "Error saving reservation!" });
  }
});

// Start Server
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}).on("error", (err) => {
  console.error("❌ Server start error:", err);
});
