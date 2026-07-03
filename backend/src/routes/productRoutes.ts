import express from "express";
import { getAllProducts, getCategories } from "../services/productService.js";
import productModel from "../models/productModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).send(products);
  } catch {
    res.status(500).send("SomeThing went wrong");
  }
});

router.get("/categories", async (req, res) => {
  try {
    const categories = await getCategories();

    res.status(200).json(categories);
  } catch (err) {
    console.error(err);

    res.status(500).json(err);
  }
});
export default router;

//  GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
