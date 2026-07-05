import { useState } from "react";
import type { FC, PropsWithChildren } from "react";

import { ShopFilterContext } from "./ShopFilterContext";

import type { ProductSort, ShopFilters } from "../../types/Filter";

const initialFilters: ShopFilters = {
  category: [],
  brand: [],
  minPrice: null,
  maxPrice: null,
  inStock: false,
  sort: "featured",
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

  const toggleInStock = () => {
    setFilters((prev) => ({
      ...prev,
      inStock: !prev.inStock,
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

  const setSort = (sort: ProductSort) => {
    setFilters((prev) => ({
      ...prev,
      sort,
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
        toggleInStock,
        setSort,

        clearFilters,
      }}
    >
      {children}
    </ShopFilterContext.Provider>
  );
};

export default ShopFilterProvider;
