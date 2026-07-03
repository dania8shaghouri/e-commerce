import type { Product } from "../../../../types/Product";

interface ProductImageProps {
  product: Product;
}

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="relative aspect-square overflow-hidden bg-gray-100">
      <img
        src={product.image}
        alt={product.title}
        className="
          h-full
          w-full
          object-contain
          p-8
          transition-transform
          duration-300
          group-hover:scale-105
        "
      />
    </div>
  );
};

export default ProductImage;
