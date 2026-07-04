export interface ShopFilters {
  category: string[];

  brand: string[];

  minPrice: number | null;

  maxPrice: number | null;

  inStock: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}
