import type { Product } from "../../../types/Product";

interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  if (!product.description) return null;

  return (
    <section
      className="
        mt-16
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-10
        shadow-sm
      "
    >
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Description</h2>

      <p className="leading-8 text-gray-600">{product.description}</p>
    </section>
  );
};

export default ProductDescription;
