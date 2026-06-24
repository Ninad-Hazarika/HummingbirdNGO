require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  await connectDB();

const existingAdmin = await Admin.findOne({
  username: "admin",
});

if (existingAdmin) {
  console.log("Admin already exists");
  process.exit();
};

  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  await Admin.create({
    username: "admin",
    password: hashedPassword,
  });

  console.log("Admin Created");

  process.exit();
};

createAdmin();
