const express = require("express");
const cors= require("cors");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./routes")

const memberRoutes = require("./routes/memberRoutes");
const eventRoutes = require("./routes/eventRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const authRoutes = require("./routes/authRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors()
);

app.get("/", (req, res) => {
    res.json({message: "NGO API Running" });
});

app.use("/api/members", memberRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", apiRoutes);
app.use("/api/upload", uploadRoutes);

module.exports = app;
