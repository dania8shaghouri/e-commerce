// import SortSelect from "./SortSelect";
// import { useProducts } from "../../hooks/useProducts";

// const ProductToolbar = () => {
//   const { products } = useProducts();

//   return (
//     <div className="mb-6 flex items-center justify-between">
//       <p className="text-sm text-gray-500">{products.length} Products</p>

//       <SortSelect />
//     </div>
//   );
// };

// export default ProductToolbar;

import SortSelect from "./SortSelect";

interface ProductToolbarProps {
  productCount: number;
}

const ProductToolbar = ({ productCount }: ProductToolbarProps) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <p className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-semibold text-gray-900">{productCount}</span>{" "}
        Products
      </p>

      <SortSelect />
    </div>
  );
};

export default ProductToolbar;
