import { useCallback, useEffect, useState } from "react";

import type { Product } from "../types/Product";
import { getProducts } from "../services/productService";
import { useShopFilter } from "../context/shop/ShopFilterContext";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { filters } = useShopFilter();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProducts(filters);

      setProducts(data);
    } catch (error) {
      console.error(error);

      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }, [filters]);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};
