import { useProducts } from "../../hooks/useProducts";

import ProductGrid from "./products/ProductGrid";

import Loading from "../ui/Loading";
import ErrorState from "../ui/ErrorState";
import EmptyState from "../ui/EmptyState";
import ProductToolbar from "./ProductToolbar";

const ProductSection = () => {
  const { products, loading, error, refetch } = useProducts();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  if (products.length === 0) {
    return <EmptyState message="No products found." />;
  }

  return (
    <>
      <ProductToolbar />

      <ProductGrid products={products} />
    </>
  );
};

export default ProductSection;
