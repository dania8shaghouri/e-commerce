import api from "../../../api/axios";
import type { AdminProductsResponse } from "../types/adminProduct";

export const getAdminProducts = () =>
  api.get<AdminProductsResponse>("/admin/products");