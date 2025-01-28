import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Handle CORS issues

// MongoDB Connection URI (Replace with your credentials)
const mongoURI = "mongodb+srv://20bcs5178:20bcs5178@userinfo.zexql.mongodb.net/reservations?retryWrites=true&w=majority&appName=userInfo";

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Reservation Schema
const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation regex
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: /^\d{10}$/, // Example: 10-digit phone number validation
  },
  date: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        const today = new Date().toISOString().split("T")[0];
        return value >= today; // Ensure date is not in the past
      },
      message: "Date must not be in the past.",
    },
  },
  time: {
    type: String,
    required: true,
    match: /^([01]\d|2[0-3]):([0-5]\d)$/, // HH:mm format validation
  },
  outlet: {
    type: String,
    required: true,
    enum: ["Sector-15", "Sector-20", "Sector-45", "Sector-60"], // Restricted to specific outlets
  },
  persons: {
    type: String,
    required: true,
    enum: ["1", "2", "3", "4+"], // Restricted to valid options
  },
  customization: {
    type: String,
    required: true,
    enum: [
      "Window Seat",
      "High Chair",
      "Outdoor Seating",
      "Birthday Setup",
      "Anniversary Setup",
      "Date Setup",
      "Other",
    ], // Restricted to valid options
  },
});

// Reservation Model
const Reservation = mongoose.model("Reservation", reservationSchema);

// POST Route to Save Reservation Data
app.post("/api/reservation", async (req, res) => {
  try {
    const { name, email, phone, date, time, outlet, persons, customization } =
      req.body;

    // Ensure all fields are present
    if (!name || !email || !phone || !date || !time || !outlet || !persons || !customization) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    // Create and Save Reservation
    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      time,
      outlet,
      persons,
      customization,
    });

    await newReservation.save();
    res.status(201).send({ message: "Reservation saved successfully!" });
  } catch (error) {
    console.error("Error saving reservation data:", error);
    res.status(500).send({ message: "Error saving reservation data!" });
  }
});

// Start Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
