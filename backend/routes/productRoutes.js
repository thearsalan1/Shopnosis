const express = require("express");
const Product = require("../models/Products");
const { protect, admin } = require("../middleware/authMiddleware");
const products = require("../data/ProductsData");
const Products = require("../models/Products");

const router = express.Router();

// @route POST /api/product
// @desc create new product
// @access Private/Admin

router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      Tags,
      dimensions,
      weight,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      Tags,
      dimensions,
      weight,
      user: req.user._id,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route PUT /api/product/:id
// @desc update product using id
// @acess Private/Admin

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      images,
      colors,
      collections,
      material,
      gender,
      isFeatured,
      isPublished,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = await Product.findById(req.params.id);
    console.log(product);
    if (product) {
      // Updating
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.images = images || product.images;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @route DELETE /api/product/:id
// @desc delet the product using id
// @access Private/Admin

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.deleteOne();
    res.status(201).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @route GET /api/products
// @desc Get all the products with optional query filter
// @access Public
router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      material,
      maxPrice,
      minPrice,
      sortBy,
      search,
      category,
      brand,
      limit,
    } = req.query;

    let query = {};

    // Helper to safely split comma-separated strings
    const safeSplit = (value) =>
      typeof value === "string" ? value.split(",") : [];

    // Filter logic
    if (collection && collection.toLowerCase() !== "all") {
      query.collections = collection;
    }
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    if (material) {
      query.material = { $in: safeSplit(material) };
    }
    if (brand) {
      query.brand = { $regex: brand, $options: "i" }; // flexible match
    }
    if (size) {
      query.sizes = { $in: safeSplit(size) }; // match schema field
    }
    if (color) {
      query.colors = { $in: safeSplit(color) }; // supports multiple colors
    }
    if (gender) {
      query.gender = gender;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Sort logic
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // Debug log
    console.log("Product filter query:", query);

    // Fetch products
    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);

    // Log if no products found
    if (products.length === 0) {
      console.log("No products found for query:", query);
    }

    res.json(products);
  } catch (error) {
    console.error("Error in product filter route:", error);
    res.status(500).json("Internal server error");
  }
});

//  @route GET /api/products/best-seller
// @desc Retrieve the products with higher rating
// @access Public

router.get("/best-seller", async (req, res) => {
  try {
    const bestSeller = await Product.findOne().sort({ rating: -1 });
    if (bestSeller) {
      res.json(bestSeller);
    } else {
      res.status(404).json({ message: "No best seller found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// @route GET /api/products/new-arrivals
// @desc Retrieves the products with higher rating
// @access Public
router.get("/new-arrivals", async (req, res) => {
  try {
    // Fetch latest 8 products
    const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
    res.json(newArrivals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server Error");
  }
});

// @route GET /api/products/:id
// @desc Get a single product by its id
// @access Public

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "No product found" });
    }
    res.json({ product });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: "Internal server error" });
  }
});

// @route GET api/products/similar/:id
// @desc Retrive similar products based on the current products gender and category
// @access Public

router.get("/similar/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const similarProducts = await Products.find({
      _id: { $ne: id },
      gender: product.gender,
      category: product.category,
    }).limit(4);
    res.json(similarProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
