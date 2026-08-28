import api from "../../../api/axios";
import type {
  AdminProductsResponse,
  AdminProductFilters,
} from "../types/adminProduct";

export const getAdminProducts = (filters?: AdminProductFilters) => {
  const params = new URLSearchParams();

  if (filters?.search) params.set("search", filters.search);
  if (filters?.category) params.set("category", filters.category);
  if (filters?.stockStatus) params.set("stockStatus", filters.stockStatus);
  if (filters?.sort) params.set("sort", filters.sort);

  return api.get<AdminProductsResponse>("/admin/products", { params });
};