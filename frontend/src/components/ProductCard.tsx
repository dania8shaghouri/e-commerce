import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/baseUrl";
import type { Product } from "../types/Product";
interface Props {
  id: string; // HomePage'den gelen id prop'u
  product: Product; // Ana product verisi
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-4 mt-2 flex flex-col">
      {/* image */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img
          src={`${BASE_URL}/images/${product.image}`}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition"
          onError={(e) => {
            // ✅ ÇALIŞAN fallback URL'ler:
            const fallbackSrc =
              "https://shop.asus.com/media/catalog/product/4/0/40521b738bb3e28bbb9ba94bdcf7e493_5.png?format=auto&optimize=medium&bg-color=255%2C255%2C255&fit=bounds&height=1000&width=1000&canvas=1000%3A1000";
            (e.target as HTMLImageElement).src = fallbackSrc;
            console.log("Image yüklenemedi, fallback kullanıldı:", fallbackSrc);
          }}
        />
      </div>
      {/* content */}
      <div className="mt-4 flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-[#111827] line-clamp-1">
          {product.title}
        </h2>
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
          <button
            onClick={() => navigate(`/product/${product._id}`)}
            className="w-full border border-primary text-primary py-2 rounded-xl hover:bg-[#e6f0ff] transition font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
