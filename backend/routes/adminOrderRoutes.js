const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/orders
// @desc Get all orders by admin
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    if (!orders) {
      return res.status(400).json({ message: "Orders not found" });
    }
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @route PUT /api/admin/orders/:id
// @desc Update order status
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    order.status = req.body.status || order.status;
    order.isDelivered =
      req.body.isDelivered === "Delivered" ? true : order.isDelivered;
    order.deliveredAt =
      req.body.status === "Deivered" ? Date.now() : order.deliveredAt;
    await order.save();
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @route DELETE /api/admin/orders/:id
// @desc Delete an order
// @access Private/admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    await order.deleteOne();
    res.json("Order deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
