import ProductCard from "./ProductCard";
import { mockProducts } from "../../../mock/products";

const ProductGrid = () => {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
    >
      {mockProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
