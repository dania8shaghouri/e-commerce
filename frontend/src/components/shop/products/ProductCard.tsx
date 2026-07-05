import { Link } from "react-router-dom";

import type { Product } from "../../../types/Product";

import ProductImage from "./card/ProductImage";
import ProductInfo from "./card/ProductInfo";
import ProductPrice from "./card/ProductPrice";
import ProductActions from "./card/ProductActions";
import ProductRating from "./card/ProductRating";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        transition-all
        duration-300
       
hover:border-primary/20
hover:shadow-2xl
      "
    >
      <Link to={`/product/${product._id}`}>
        <ProductImage product={product} />

        <div className="space-y-4 p-5">
          <ProductInfo product={product} />
          <ProductRating
            rating={product.rating}
            reviewCount={product.reviewCount}
          />

          <ProductPrice price={product.price} />
        </div>
      </Link>

      <div className="px-5 pb-5">
        <ProductActions product={product} />
      </div>
    </article>
  );
};

export default ProductCard;
