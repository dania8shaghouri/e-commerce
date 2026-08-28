export interface AdminProduct {
  _id: string;
  title: string;
  brand: string;
  category: string;
  image: string;
  images: string[];
  price: number;
  stock: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
}

export interface AdminProductsResponse {
  products: AdminProduct[];
  totalProducts: number;
  totalPages: number;
  currentPage: number;
}
export type StockStatus = "in_stock" | "low_stock" | "out_of_stock";

export type AdminProductSort =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | "stock-asc"
  | "stock-desc";

export interface AdminProductFilters {
  search?: string;
  category?: string;
  stockStatus?: StockStatus;
  sort?: AdminProductSort;
  page?: number;
  limit?: number;
}
