import { createContext, useContext } from "react";
import type { ShopFilters } from "../../types/Filter";

interface ShopFilterContextType {
  filters: ShopFilters;

  toggleCategory: (category: string) => void;
  toggleBrand: (brand: string) => void;

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

  clearFilters: () => {},
});

export const useShopFilter = () => useContext(ShopFilterContext);
