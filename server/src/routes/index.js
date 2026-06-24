const express = require("express");

const memberRoutes = require("./memberRoutes");
const eventRoutes = require("./eventRoutes");
const galleryRoutes = require("./galleryRoutes");
const authRoutes = require("./authRoutes");

const router = express.Router();

router.use("/members", memberRoutes);
router.use("/events", eventRoutes);
router.use("/gallery", galleryRoutes);
router.use("/auth", authRoutes);

module.exports = router;
