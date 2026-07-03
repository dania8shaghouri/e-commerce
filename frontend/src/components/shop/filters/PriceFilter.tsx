const PriceFilter = () => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-semibold">Price</h3>

      <input type="range" min={0} max={35000} className="w-full" />

      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>₺0</span>

        <span>₺35.000+</span>
      </div>
    </div>
  );
};

export default PriceFilter;
