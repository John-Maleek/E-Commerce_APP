const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
    amount: { type: Number, required: true },
    customer_details: {
      customer_name: { type: String, required: true },
      email: { type: String, required: true },
      phone_number: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true },
      house_number: { type: String, required: true },
    },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
