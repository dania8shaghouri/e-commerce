import type { Request, Response } from "express";

type ProductParams = {
  id: string;
};

import {
  getAllProducts,
  getProductById,
  getProductCategories,
} from "../services/productService.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getProductCategories();

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch categories",
    });
  }
};

export const getProduct = async (
  req: Request<ProductParams>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Product id is required",
      });
    }

    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};
