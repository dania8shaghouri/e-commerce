import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/userRoutes.js";
import { seedInitialProducts } from "./services/productService.js";
import productRoute from "./routes/productRoutes.js";
dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI as string;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// seed the products to database
seedInitialProducts();

app.use("/user", userRoute);
app.use("/product", productRoute);

app.listen(port, () => {
  console.log("running on port " + port);
});
