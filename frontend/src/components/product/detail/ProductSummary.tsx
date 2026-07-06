import { useAddToCart } from "../../../hooks/useAddToCart";

import type { Product } from "../../../types/Product";

import ProductPrice from "../card/ProductPrice";
import ProductRating from "../card/ProductRating";

interface ProductSummaryProps {
  product: Product;
}

const ProductSummary = ({ product }: ProductSummaryProps) => {
  const { addToCart } = useAddToCart();

  return (
    <section className="flex flex-col">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
        {product.category}
      </span>

      <h1 className="mt-2 text-4xl font-bold text-gray-900">{product.title}</h1>

      <div className="mt-5">
        <ProductRating
          rating={product.rating}
          reviewCount={product.reviewCount}
        />
      </div>

      <div className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex justify-between">
          <span className="text-gray-500">Brand</span>
          <span className="font-semibold">{product.brand}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Availability</span>

          <span
            className={`font-semibold ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Stock</span>
          <span className="font-semibold">{product.stock}</span>
        </div>
      </div>

      <div className="mt-8">
        <ProductPrice price={product.price} />
      </div>

      <button
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
        className="
          mt-8
          rounded-2xl
          bg-primary
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-primaryHover
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Add To Cart
      </button>
    </section>
  );
};

export default ProductSummary;
