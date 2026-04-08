import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import userRoute from "./routes/userRoutes.js";
import { seedInitialProducts } from "./services/productService.js";
import productRoute from "./routes/productRoutes.js";
import cartRoute from "./routes/cartRouter.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3001;

app.use("/images", express.static(path.join(process.cwd(), "src/images")));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI as string;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// Seed products
seedInitialProducts();

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
