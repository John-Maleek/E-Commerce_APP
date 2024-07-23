const express = require("express");
const router = express.Router();
const {
  verifyAdmin,
  verifyAuthorization,
  verifyToken,
} = require("./verifyToken");

const Product = require("../models/Product");

router.post("/", verifyAuthorization, async (req, res) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get("/:id", verifyAuthorization, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "Product not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
