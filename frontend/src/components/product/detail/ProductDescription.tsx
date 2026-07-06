import type { Product } from "../../../types/Product";

interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-semibold">Description</h2>

      <p>{product.description}</p>
    </section>
  );
};

export default ProductDescription;
