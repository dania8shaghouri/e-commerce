import { useEffect, useState } from "react";

import { getCategories } from "../api/categoryApi";
import type { Category } from "../types";

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories(data as Category[]);

      setLoading(false);
    };

    fetchCategories();
  }, []);

  return {
    categories,
    loading,
  };
};

export default useCategories;