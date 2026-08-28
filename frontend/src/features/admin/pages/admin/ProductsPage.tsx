import { useEffect, useState } from "react";
import { getAdminProducts } from "../../services/adminProductService";
import type { AdminProduct } from "../../types/adminProduct";
import ProductsTable from "../../components/products/ProductsTable";

const ProductsPage = () => {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAdminProducts();
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-textSecondary">Dashboard / Products</p>
          <h1 className="mt-1 text-2xl font-semibold text-textPrimary">
            Products
          </h1>
          <p className="mt-1 text-sm text-textSecondary">
            Manage and organize your store products.
          </p>
        </div>

        <button className="rounded-xl bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primaryHover">
          + Add Product
        </button>
      </div>

      {loading ? (
        <p className="text-textSecondary">Loading products...</p>
      ) : (
        <ProductsTable products={products} />
      )}
    </div>
  );
};

export default ProductsPage;