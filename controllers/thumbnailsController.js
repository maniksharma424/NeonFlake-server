import asyncHandler from "express-async-handler";
import thumbnail from "../models/thumbnailModel.js";

//@desc upload thumbnail
//Route POST /api/thumbnails/upload
// PUBLIC

const uploadThumbnail = asyncHandler(async (req, res) => {
  const { title, description, imageURL, videoURL } = req.body;

  if (!title || !description || !imageURL || !videoURL) {
    res.status(400).json({ error: "Missing Parameters Fill All Details." });
    return;
  }

  try {
    const newThumbnail = await thumbnail.create({
      title,
      description,
      imageURL,
      videoURL,
    });

    res.status(201).json({
      _id: newThumbnail._id,
      thumbnailTitle: newThumbnail.title,
      thumbnailDescription: newThumbnail.description,
      thumbnailImageURL: newThumbnail.imageURL,
      thumbnailVideoURL: newThumbnail.videoURL,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
});

//@desc get all  thumbnail
//Route GET /api/thumbnails
// PUBLIC

const getThumbnails = asyncHandler(async (req, res) => {
  const data = await thumbnail.find();
  res.status(200).json({
    data,
  });
});

export { uploadThumbnail, getThumbnails };
