const FilterHeader = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Filters
      </h2>

      <button
        className="text-sm font-medium text-primary hover:underline"
      >
        Clear all
      </button>
    </div>
  );
};

export default FilterHeader;