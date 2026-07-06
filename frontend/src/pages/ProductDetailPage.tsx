import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { Product } from "../types/Product";
import { getProductById } from "../services/productService";

// import { BASE_URL } from "../constants/baseUrl";
// import { getImageUrl } from "../utils/getImageUrl";
// import { useAddToCart } from "../hooks/useAddToCart";

import ProductDescription from "../components/product/detail/ProductDescription";
import ProductGallery from "../components/product/detail/ProductGallery";
import ProductSpecs from "../components/product/detail/ProductSpecs";
import ProductSummary from "../components/product/detail/ProductSummary";

import Loading from "../components/ui/Loading";
import ErrorState from "../components/ui/ErrorState";

// const FALLBACK_IMAGE =
//   "https://shop.asus.com/media/catalog/product/4/0/40521b738bb3e28bbb9ba94bdcf7e493_5.png";

// const formatPrice = (price: number) =>
//   new Intl.NumberFormat("tr-TR", {
//     style: "currency",
//     currency: "TRY",
//   }).format(price);

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  // const [mainImage, setMainImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const { addToCart } = useAddToCart();

  // const handleAddToCart = () => {
  //   if (!product) return;
  //   addToCart(product);
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const data = await getProductById(id);

        setProduct(data);
      } catch (err) {
        console.error(err);

        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !product) {
    return (
      <ErrorState
        message={error ?? "Product not found."}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    // <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
    //   {/* image */}
    //   <div className="bg-white p-6 rounded-xl shadow">
    //     <img
    //       src={getImageUrl(mainImage)}
    //       alt={product.title}
    //       className="w-full object-contain"
    //       onError={(e) => {
    //         e.currentTarget.src = FALLBACK_IMAGE;
    //       }}
    //     />

    //     {/* thumbnails */}
    //     {product.images && product.images.length > 1 && (
    //       <div className="flex gap-2 mt-4">
    //         {product.images.map((img, idx) => (
    //           <img
    //             key={idx}
    //             src={getImageUrl(img)}
    //             alt={`${product.title} ${idx}`}
    //             className="w-20 h-20 object-contain cursor-pointer border rounded"
    //             onClick={() => setMainImage(img)}
    //           />
    //         ))}
    //       </div>
    //     )}
    //   </div>

    //   {/* details */}
    //   <div>
    //     <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
    //     <p className="text-gray-500 mb-4">{product.brand}</p>

    //     <div className="space-y-2 text-gray-700">
    //       <p>
    //         <strong>CPU:</strong> {product.cpu}
    //       </p>
    //       <p>
    //         <strong>RAM:</strong> {product.ram}
    //       </p>
    //       <p>
    //         <strong>Storage:</strong> {product.storage}
    //       </p>
    //       <p>
    //         <strong>GPU:</strong> {product.gpu}
    //       </p>
    //     </div>

    //     <div className="mt-6 text-2xl font-bold text-primary">
    //       {formatPrice(product.price)}
    //     </div>

    //     <button
    //       className="mt-6 w-full bg-primary text-white py-3 rounded-xl"
    //       onClick={handleAddToCart}
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <ProductGallery product={product} />

        <ProductSummary product={product} />
      </div>

      <ProductSpecs product={product} />

      <ProductDescription product={product} />
    </div>
  );
};

export default ProductDetailPage;
