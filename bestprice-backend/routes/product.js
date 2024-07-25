const express = require("express");
const router = express.Router();
const { verifyAdmin, verifyAuth } = require("./verifyToken");

const Product = require("../models/Product");

router.post("/", verifyAuth, async (req, res) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:id", verifyAuth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "Product not found." });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", verifyAuth, async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.patch("/:id", verifyAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: "Server error" });
  }
});

router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
