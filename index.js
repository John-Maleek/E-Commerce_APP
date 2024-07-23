const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config();
const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then((value) => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    throw Error(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log(`Backend server running on port: ${port}`);
});
