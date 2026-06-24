const Gallery = require("../models/Gallery");

const getGallery = async (req, res) => {
  try {
    const images = await Gallery.find();

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createGalleryItem = async (req, res) => {
  try {
    const image = await Gallery.create(req.body);

    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateGalleryItem = async (req, res) => {
  try {
    const image = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!image) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteGalleryItem = async (req, res) => {
  try {
    const image = await Gallery.findByIdAndDelete(
      req.params.id
    );

    if (!image) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    res.status(200).json({
      message: "Image deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getGallery,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
};
