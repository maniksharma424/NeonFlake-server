import mongoose from "mongoose";

const thumbnailSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: false,
    },
    videoURL: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const thumbnail = mongoose.model("thumbnail", thumbnailSchema);

export default thumbnail;
