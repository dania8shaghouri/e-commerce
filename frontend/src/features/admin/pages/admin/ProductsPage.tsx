import { useCallback, useEffect, useState } from "react";
import { getAdminProducts } from "../../services/adminProductService";
import { getCategories } from "../../../../services/categoryService";
import type {
  AdminProduct,
  AdminProductFilters,
} from "../../types/adminProduct";
import type { Category } from "../../../../types/Category";
import ProductsTable from "../../components/products/ProductsTable";
import ProductsToolbar from "../../components/products/ProductsToolbar";
import ProductsTableSkeleton from "../../components/products/ProductsTableSkeleton";
import ProductFormModal from "../../components/products/ProductFormModal";

const LIMIT = 5;

const ProductsPage = () => {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<AdminProductFilters>({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);

  useEffect(() => {
    getCategories().then(setCategories).catch(console.error);
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAdminProducts({ ...filters, page, limit: LIMIT });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setTotalProducts(response.data.totalProducts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    const timeoutId = setTimeout(fetchProducts, 400);
    return () => clearTimeout(timeoutId);
  }, [fetchProducts]);

  const handleFilterChange = (newFilters: AdminProductFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleAddClick = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (product: AdminProduct) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-textSecondary">Dashboard / Products</p>
          <h1 className="mt-1 text-2xl font-semibold text-textPrimary">Products</h1>
          <p className="mt-1 text-sm text-textSecondary">
            Manage and organize your store products.
          </p>
        </div>

        <button
          onClick={handleAddClick}
          className="rounded-xl bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primaryHover"
        >
          + Add Product
        </button>
      </div>

      <ProductsToolbar
        filters={filters}
        onFilterChange={handleFilterChange}
        categories={categories}
      />

      {loading ? (
        <ProductsTableSkeleton />
      ) : (
        <ProductsTable
          products={products}
          currentPage={page}
          totalPages={totalPages}
          totalProducts={totalProducts}
          limit={LIMIT}
          onPageChange={setPage}
          onEdit={handleEditClick}
        />
      )}

      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={fetchProducts}
        product={editingProduct}
        categories={categories}
      />
    </div>
  );
};

export default ProductsPage;