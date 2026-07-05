import api from "../api/axios";
import type { Product } from "../types/Product";
import type { ShopFilters } from "../types/Filter";

export const getProducts = async (
  filters?: ShopFilters,
): Promise<Product[]> => {
  const params = new URLSearchParams();

  if (filters?.category?.length) {
    params.set("category", filters.category.join(","));
  }

  if (filters?.brand?.length) {
    params.set("brand", filters.brand.join(","));
  }

  if (filters?.minPrice != null) {
    params.set("minPrice", String(filters.minPrice));
  }

  if (filters?.maxPrice != null) {
    params.set("maxPrice", String(filters.maxPrice));
  }

  const { data } = await api.get<Product[]>(`/product?${params.toString()}`);

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

export const getBrands = async () => {
  const { data } = await api.get("/product/brands");

  return data;
};
