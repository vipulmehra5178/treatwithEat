
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://20bcs5178:20bcs5178@menuitems.roarj.mongodb.net/menuItems?retryWrites=true&w=majority&appName=menuItems", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the Menu Schema
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

// Create the Menu Model
const MenuItem = mongoose.model("MenuItem", menuSchema);

// Routes

// 1. Get all menu items
app.get("/api/menu", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Add a menu item
app.post("/api/menu", async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const newMenuItem = new MenuItem({ name, description, price, image, category });
    await newMenuItem.save();
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Delete a menu item by ID
app.delete("/api/menu/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await MenuItem.findByIdAndDelete(id);
    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
