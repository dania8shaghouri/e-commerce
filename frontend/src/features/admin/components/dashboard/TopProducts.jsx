const products = [
  {
    name: "Headphones",
    sales: 320,
    revenue: "$320",
    image: "https://images.unsplash.com/photo-1518441902117-f0a12c1f0f8b?w=100",
  },
  {
    name: "Smart Watch",
    sales: 210,
    revenue: "$210",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
  },
];

const TopProducts = () => {
  return (
    <div className="bg-white border border-border rounded-2xl p-4">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Top Products</h2>

        <button className="text-sm text-indigo-600 hover:underline">
          View all
        </button>
      </div>

      {/* TABLE HEADER */}
      <div className="grid grid-cols-3 font-semibold text-gray-500 border-b pb-2 mb-3">
        <span>Product</span>
        <span className="text-center">Sales</span>
        <span className="text-right">Revenue</span>
      </div>

      {/* PRODUCTS */}
      <div className="space-y-3">
        {products.map((p) => (
          <div key={p.name} className="grid grid-cols-3 items-center text-sm">
            {/* PRODUCT */}
            <div className="flex items-center gap-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="font-medium">{p.name}</span>
            </div>

            {/* SALES */}
            <div className="text-center text-gray-700">{p.sales}</div>

            {/* REVENUE */}
            <div className="text-right font-medium">{p.revenue}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
