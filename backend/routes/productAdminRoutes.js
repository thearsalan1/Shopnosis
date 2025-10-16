const express = require("express");
const Products = require("../models/Products");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();
// @route GET /api/admin/products
// @desc Get all products
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  const products = await Products.find({});
  try {
    if (!products) {
      return res.status(400).json({ message: "Products not found" });
    }
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
