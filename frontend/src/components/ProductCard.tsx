import type { Product } from "../types/product";

interface Props {
  id: string; // HomePage'den gelen id prop'u
  product: Product; // Ana product verisi
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">
      {/* image */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition"
        />
      </div>
      {/* content */}
      <div className="mt-4 flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-[#111827] line-clamp-1">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500">{product.brand}</p>
        {/* specs */}
        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <p>CPU: {product.cpu}</p>
          <p>RAM: {product.ram}</p>
          <p>Storage: {product.storage}</p>
          <p>GPU: {product.gpu}</p>
        </div>
        {/* price */}
        <div className="mt-3 text-xl font-bold text-primary">
          ₺{product.price.toLocaleString()}
        </div>
        {/* buttons */}
        <div className="mt-4 flex flex-col gap-2">
          {/* add to cart */}
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-primary text-white py-2 rounded-xl hover:bg-primaryHover transition font-medium"
          >
            Add to Cart
          </button>
          {/* details */}
          <button className="w-full border border-primary text-primary py-2 rounded-xl hover:bg-[#e6f0ff] transition font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
