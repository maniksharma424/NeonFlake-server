import express from "express";
import {
  getThumbnails,
  uploadThumbnail,
} from "../controllers/thumbnailsController.js";
const router = express.Router();

router.get("/", getThumbnails);
router.post("/upload", uploadThumbnail);

export default router;
