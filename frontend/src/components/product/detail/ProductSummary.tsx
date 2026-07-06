import { FiCheckCircle, FiShoppingCart } from "react-icons/fi";
import { useAddToCart } from "../../../hooks/useAddToCart";
import type { Product } from "../../../types/Product";
import ProductRating from "../card/ProductRating";

interface ProductSummaryProps {
  product: Product;
}

const ProductSummary = ({ product }: ProductSummaryProps) => {
  const { addToCart } = useAddToCart();

  return (
    <div className="flex flex-col">
      {/* Category */}
      <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
        {product.category}
      </span>

      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight text-gray-900">
        {product.title}
      </h1>

      {/* Brand */}
      <p className="mt-3 text-lg text-gray-500">
        by <span className="font-semibold">{product.brand}</span>
      </p>

      {/* Rating */}
      <div className="mt-6">
        <ProductRating
          rating={product.rating}
          reviewCount={product.reviewCount}
        />
      </div>

      {/* Price */}
      <div className="mt-8">
        <p className="text-4xl font-bold text-primary">
          {new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(product.price)}
        </p>
      </div>

      {/* Stock */}
      <div className="mt-6 flex items-center gap-3">
        <FiCheckCircle className="text-green-500" size={22} />

        <span className="font-medium text-green-600">
          {product.stock > 0
            ? `${product.stock} items in stock`
            : "Out of stock"}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-10 flex gap-4">
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-primary
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-primaryHover
            hover:shadow-xl
            disabled:cursor-not-allowed
            disabled:bg-gray-300
          "
        >
          <FiShoppingCart size={20} />
          Add to Cart
        </button>

        <button
          className="
            rounded-2xl
            border
            border-primary
            px-8
            py-4
            font-semibold
            text-primary
            transition-all
            duration-300
            hover:bg-primary
            hover:text-white
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductSummary;
