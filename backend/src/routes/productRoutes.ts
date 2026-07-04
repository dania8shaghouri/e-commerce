import express from "express";

import {
  getProducts,
  getCategories,
  getProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/categories", getCategories);

router.get("/:id", getProduct);

export default router;
