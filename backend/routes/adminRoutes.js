const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/users
// @desc get all the users(admins only)
// @access Private/admin
router.get("/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
});

// @route POST api/admin/users
// @desc Add a new user
// @access Private/Admin
router.post("/users", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
});

// @route PUT /api/admon/users/:id
// @desc Update user info(like name email role)
// @access Private/admin
router.put("/users/:id", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ message: "User doesn't exists" });
    }
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
      user.role = role || user.role;
    }
    const updatedUser = await user.save();
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @route Delete /api/admin/users/:id
// @route Delete a user
// @access Private/admin
router.delete("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (user) {
      await user.deleteOne();
      res.json("User deleted successfully");
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
