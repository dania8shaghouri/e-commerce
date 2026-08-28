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