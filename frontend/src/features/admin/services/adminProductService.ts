import api from "../../../api/axios";
import type {
  AdminProductsResponse,
  AdminProductFilters,
} from "../types/adminProduct";

import type { ProductFormValues } from "../validation/productSchema";

// ürünleri backend'den getiriyor
export const getAdminProducts = (filters?: AdminProductFilters) => {
  // URLSearchParams: browser'ın JavaScript API'sidir
  // JavaScript tarafından sağlanan bir class/API'dir Query parameter oluşturmayı kolaylaştırır
  const params = new URLSearchParams();

  // filters varsa ve search değeri varsa URL'ye search ekle
  if (filters?.search) params.set("search", filters.search);
  if (filters?.category) params.set("category", filters.category);
  if (filters?.stockStatus) params.set("stockStatus", filters.stockStatus);
  if (filters?.sort) params.set("sort", filters.sort);
  if (filters?.page) params.set("page", String(filters.page));
  if (filters?.limit) params.set("limit", String(filters.limit));

  return api.get<AdminProductsResponse>("/admin/products", { params });
};

export const createProduct = (data: ProductFormValues) =>
  api.post("/admin/products", data);

export const updateProduct = (id: string, data: ProductFormValues) =>
  api.put(`/admin/products/${id}`, data);

export const deleteProduct = (id: string) =>
  api.delete(`/admin/products/${id}`);

// backend'e resimleri gönderiyor
// File[] File objelerinden oluşan array,
// formData: browser'ın özel API'sidir Dosya upload için kullaniyoruz
export const uploadProductImages = (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("images", file));

  return api.post<{ filenames: string[] }>("/admin/products/upload", formData);
};
