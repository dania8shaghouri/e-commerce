import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../types/Product";
import { BASE_URL } from "../constants/baseUrl";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/product/${id}`);
        setProduct(data);
        setMainImage(data.images?.[0] || data.image); // İlk resmi mainImage yap
      } catch (err) {
        console.error(err);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div className="p-10">Yükleniyor...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* image */}
      <div className="bg-white p-6 rounded-xl shadow">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full object-contain"
        />

        {/* küçük resimler */}
        {product.images && product.images.length > 1 && (
          <div className="flex gap-2 mt-4">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={`${BASE_URL}/images/${img}`}
                alt={`${product.title} ${idx}`}
                className="w-20 h-20 object-contain cursor-pointer border rounded"
                onClick={() => setMainImage(`${BASE_URL}/images/${img}`)}
              />
            ))}
          </div>
        )}
      </div>

      {/* details */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-500 mb-4">{product.brand}</p>

        <div className="space-y-2 text-gray-700">
          <p>
            <strong>CPU:</strong> {product.cpu}
          </p>
          <p>
            <strong>RAM:</strong> {product.ram}
          </p>
          <p>
            <strong>Storage:</strong> {product.storage}
          </p>
          <p>
            <strong>GPU:</strong> {product.gpu}
          </p>
        </div>

        <div className="mt-6 text-2xl font-bold text-primary">
          ₺{product.price.toLocaleString()}
        </div>

        <button className="mt-6 w-full bg-primary text-white py-3 rounded-xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
