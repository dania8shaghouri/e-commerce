import FilterHeader from "./FilterHeader";
import FilterGroup from "./FilterGroup";
import PriceFilter from "./PriceFilter";
import ApplyFilterButton from "./ApplyFilterButton";

import { useCategories } from "../../../hooks/useCategories";
import { useShopFilter } from "../../../context/shop/ShopFilterContext";

const brands = [
  "ASUS",
  "MSI",
  "Razer",
  "LG",
  "Logitech",
  "Samsung",
];

const FilterSidebar = () => {
  const { categories } = useCategories();

  const {
    filters,
    toggleCategory,
  } = useShopFilter();

  const categoryOptions = categories.map((category) => ({
    label: category.name,
    value: category.name,
    count: category.totalProducts,
  }));

  const brandOptions = brands.map((brand) => ({
    label: brand,
    value: brand,
  }));

  return (
    <aside className="w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:w-72">
      <FilterHeader />

      <FilterGroup
        title="Category"
        options={categoryOptions}
        selected={filters.category}
        onToggle={toggleCategory}
      />

      <FilterGroup
        title="Brand"
        options={brandOptions}
        selected={[]}
        onToggle={() => {}}
      />

      <PriceFilter />

      <ApplyFilterButton />
    </aside>
  );
};

export default FilterSidebar;