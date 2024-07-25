const express = require("express");
const router = express.Router();
const { verifyAdmin, verifyAuth } = require("./verifyToken");

const Cart = require("../models/Cart");

router.post("/", verifyAuth, async (req, res) => {
  const cart = new Cart(req.body);

  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:id", verifyAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    if (cart) {
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Cart not found." });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", verifyAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.patch("/:id", verifyAuth, async (req, res) => {
  try {
    const query = { userId: req.params.id };
    const updatedCart = await Cart.findOneAndUpdate(
      query,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: "Cart could not be updated" });
    }
    return res.status(200).json(updatedCart);
  } catch (err) {
    res.status(400).json({ message: "Server error" });
  }
});

router.delete("/:id", verifyAuth, async (req, res) => {
  try {
    await Cart.findOneAndDelete(req.params.id);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
