import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const port = 3001;

app.use(express.json())

const MONGODB_URI = process.env.MONGODB_URI as string;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("running on port " + port);
});
