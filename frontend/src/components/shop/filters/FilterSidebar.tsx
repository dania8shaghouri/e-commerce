import FilterHeader from "./FilterHeader";
import FilterGroup from "./FilterGroup";
import PriceFilter from "./PriceFilter";
import ApplyFilterButton from "./ApplyFilterButton";

const categories = [
  "Laptops",
  "Gaming",
  "Monitors",
  "Accessories",
  "Storage",
];

const brands = [
  "ASUS",
  "MSI",
  "Razer",
  "LG",
  "Logitech",
  "Samsung",
];

const FilterSidebar = () => {
  return (
    <aside className="w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:w-72">
      <FilterHeader />

      <FilterGroup title="Category" options={categories} />

      <FilterGroup title="Brand" options={brands} />

      <PriceFilter />

      <FilterGroup
        title="Availability"
        options={["In Stock Only"]}
      />

      <ApplyFilterButton />
    </aside>
  );
};

export default FilterSidebar;