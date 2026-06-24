const cloudinary = require("../config/cloudinary");

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "ngo-events",
      }
    );

    res.status(200).json({
      imageUrl: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadImage,
};