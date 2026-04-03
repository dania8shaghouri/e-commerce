import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import type { Product } from "../types/product";
import { BASE_URL } from "../constants/baseUrl";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await axios.get<Product[]>(`${BASE_URL}/product`);
        setProducts(data);
      } catch (error) {
        console.error("Products fetch error:", error);
        setError("Ürünler yüklenemedi. Backend çalışıyor mu?");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    console.log("Sepete eklendi:", product);
    // Burada cart logic'in gelecek
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-10 flex justify-center items-center min-h-screen">
        <div className="text-xl">Ürünler yükleniyor...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-10 text-center">
        <div className="text-red-500 text-xl mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Tekrar Dene
        </button>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Ürünler</h1>
      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">Henüz ürün yok</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id} 
              id={product._id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
