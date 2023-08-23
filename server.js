import express from "express";
import dotenv from "dotenv";
import thumbnailRoutes from "./routes/thumbnailRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleWare.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5000``;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/thumbnails", thumbnailRoutes);

app.use(errorHandler);

app.use(notFound);

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(port, () => console.log(`server is running at port ${port}`));