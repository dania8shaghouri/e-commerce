import { useEffect, useState } from "react";
import { getAdminProducts } from "../../services/adminProductService";
import type {
  AdminProduct,
  AdminProductFilters,
} from "../../types/adminProduct";
import ProductsTable from "../../components/products/ProductsTable";
import ProductsToolbar from "../../components/products/ProductsToolbar";

const LIMIT = 5;

const ProductsPage = () => {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<AdminProductFilters>({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await getAdminProducts({
          ...filters,
          page,
          limit: LIMIT,
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
        setTotalProducts(response.data.totalProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchProducts, 400);
    return () => clearTimeout(timeoutId);
  }, [filters, page]);

  const handleFilterChange = (newFilters: AdminProductFilters) => {
    setFilters(newFilters);
    setPage(1); // 👈 en kritik satır, aşağıda açıklıyorum
  };

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

      <ProductsToolbar filters={filters} onFilterChange={handleFilterChange} />

      {loading ? (
        <p className="text-textSecondary">Loading products...</p>
      ) : (
        <ProductsTable
          products={products}
          currentPage={page}
          totalPages={totalPages}
          totalProducts={totalProducts}
          limit={LIMIT}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default ProductsPage;
