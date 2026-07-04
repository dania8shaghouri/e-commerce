import api from "../api/axios";
import type { Product } from "../types/Product";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>("/product");

  return data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const { data } = await api.get<Product>(`/product/${id}`);

  return data;
};

export const getCategories = async () => {
  const { data } = await api.get("/product/categories");

  return data;
};
