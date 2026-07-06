import { useState } from "react";

import type { Product } from "../../../types/Product";
import { getImageUrl } from "../../../utils/getImageUrl";

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const images = product.images?.length > 0 ? product.images : [product.image];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-8
        "
      >
        <img
          src={getImageUrl(mainImage)}
          alt={product.title}
          className="
            aspect-square
            w-full
            object-contain
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Thumbnail List */}
      <div className="flex gap-4">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setMainImage(image)}
            className={`
              overflow-hidden
              rounded-2xl
              border-2
              transition

              ${
                image === mainImage
                  ? "border-primary"
                  : "border-gray-200 hover:border-primary"
              }
            `}
          >
            <img
              src={getImageUrl(image)}
              alt={product.title}
              className="
                h-24
                w-24
                object-contain
                bg-white
                p-2
              "
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
