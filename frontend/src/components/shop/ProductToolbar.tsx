import SortSelect from "./SortSelect";
import { useProducts } from "../../hooks/useProducts";

const ProductToolbar = () => {
  const { products } = useProducts();

  return (
    <div className="mb-6 flex items-center justify-between">
      <p className="text-sm text-gray-500">{products.length} Products</p>

      <SortSelect />
    </div>
  );
};

export default ProductToolbar;
