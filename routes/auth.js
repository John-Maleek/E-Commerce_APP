const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Sign up
router.post("/sign-up", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.PW_ENCRYPT_KEY
  ).toString();

  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Bad request: Body must contain username, email and password",
      });
    }

    // check if user exists
    const isExistingUser = User.findOne({ email });
    if (isExistingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const newUser = new User({
      username,
      email,
      password,
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const decryptedPw = CryptoJS.AES.decrypt(
      user.password,
      process.env.PW_ENCRYPT_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decryptedPw !== req.body.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user?.isAdmin },
      process.env.JWT_SECRET_KEY,
      { algorithm: "HS256" }
    );
    const { password, ...rest } = user._doc;
    return res.status(200).json({ ...rest, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
