const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//Register
// api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { username, mail, password } = req.body;
  if (!username || !mail || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailbale = await User.findOne({ mail });
  if (userAvailbale) {
    res.status(400);
    throw new Error("User already registered");
  }
  //   Hash Password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("hashpassword :", hashPassword);
  res.json({ message: "Register the user" });
});

//Login user
// api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

//Current User
// api/users/currentuser
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current the user" });
});

module.exports = { registerUser, loginUser, currentUser };
