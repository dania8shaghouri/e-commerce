import { useState } from "react";
import type { FC, PropsWithChildren } from "react";

import { ShopFilterContext } from "./ShopFilterContext";

import type { ShopFilters } from "../../types/Filter";

const initialFilters: ShopFilters = {
  category: [],
  brand: [],
  minPrice: null,
  maxPrice: null,
  inStock: false,
};

const ShopFilterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState<ShopFilters>(initialFilters);

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,

      category: prev.category.includes(category)
        ? prev.category.filter((item) => item !== category)
        : [...prev.category, category],
    }));
  };

  const setPrice = (min: number | null, max: number | null) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: min,
      maxPrice: max,
    }));
  };

  const toggleBrand = (brand: string) => {
    setFilters((prev) => ({
      ...prev,

      brand: prev.brand.includes(brand)
        ? prev.brand.filter((item) => item !== brand)
        : [...prev.brand, brand],
    }));
  };

  const setMinPrice = (price: number | null) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: price,
    }));
  };

  const setMaxPrice = (price: number | null) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: price,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <ShopFilterContext.Provider
      value={{
        filters,

        toggleCategory,
        toggleBrand,
        setMinPrice,
        setMaxPrice,
        setPrice,

        clearFilters,
      }}
    >
      {children}
    </ShopFilterContext.Provider>
  );
};

export default ShopFilterProvider;
