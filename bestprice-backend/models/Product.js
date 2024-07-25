const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    categories: { type: Array, default: "others" },
    price: { type: Number, required: true },
    discount_price: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
