import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// meine hhihlght kia yh kya dla ? databsase ka naam agr exist kr rha h to usi me jayega ya ayega data ni to automatically create krega okkkkkkkkkkkk thik 
// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://20bcs5178:20bcs5178@menuitems.roarj.mongodb.net/menuItems?retryWrites=true&w=majority&appName=menuItems'; // Replace with your MongoDB Atlas URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});

// Define Menu schema and model
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category : {type : String, required : true}
});

const MenuItem = mongoose.model('MenuItem', menuSchema);


// GET request to fetch menu items
app.get('/api/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems); // Sends menu items in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST request to add a new menu item
app.post('/api/menu', async (req, res) => {
  const { name, description, price, image , category} = req.body;

  // Create a new menu item
  const newMenuItem = new MenuItem({
    name,
    description,
    price,
    image,
    category,
  });
// wait it will arrrive forst look here
// src mein hi bnadena 
  try {
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem); // Responds with the newly created item
  } catch (err) {
    res.status(400).json({ message: err.message }); // Error if invalid data is provided
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
