import { createContext, useContext } from "react";
import type { ShopFilters } from "../../types/Filter";

interface ShopFilterContextType {
  filters: ShopFilters;

  toggleCategory: (category: string) => void;
  toggleBrand: (brand: string) => void;
  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
  setPrice: (min: number | null, max: number | null) => void;

  clearFilters: () => void;
}

export const ShopFilterContext = createContext<ShopFilterContextType>({
  filters: {
    category: [],
    brand: [],
    minPrice: null,
    maxPrice: null,
    inStock: false,
  },

  toggleCategory: () => {},
  toggleBrand: () => {},
  setMinPrice: () => {},
  setMaxPrice: () => {},
  setPrice: () => {},

  clearFilters: () => {},
});

export const useShopFilter = () => useContext(ShopFilterContext);
