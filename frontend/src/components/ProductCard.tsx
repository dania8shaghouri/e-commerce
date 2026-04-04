import type { Product } from "../types/product"; 

interface Props {
  id: string; // HomePage'den gelen id prop'u
  product: Product; // Ana product verisi
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ id, product, onAddToCart }: Props) => {
  
  return (
    <div className="bg-[#F5F5F5] rounded-2xl shadow-md transition duration-300 p-4 w-80">
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.brand}</p>

        <div className="mt-2 text-sm space-y-1">
          <p>CPU: {product.cpu}</p>
          <p>RAM: {product.ram}</p>
          <p>Storage: {product.storage}</p>
          <p>GPU: {product.gpu}</p>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold">
            ₺{product.price.toLocaleString()}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#006ce1] text-white px-4 py-2 rounded-xl hover:bg-[#0059b3] transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
