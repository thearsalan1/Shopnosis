const mongoose = require("mongoose");
const dotenv = require("dotenv");
const products = require("./data/ProductsData");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Product = require("./models/Products");

dotenv.config();

// connect to mongodb database;

mongoose.connect(process.env.MONGO_URI);

// Function to seed data

const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create a default admin user
    const createdUser = await User.create({
      name: "example",
      email: "example@example.com",
      password: "28122009",
      role: "admin",
    });

    // Assign the default user Id to each product
    const userID = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    // Insert to the database
    await Product.insertMany(sampleProducts);

    console.log("seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data", error);
    process.exit(1);
  }
};

seedData();
