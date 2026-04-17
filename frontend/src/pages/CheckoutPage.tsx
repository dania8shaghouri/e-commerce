import { useCart } from "../context/Auth/cart/CartContext";
import { BASE_URL } from "../constants/baseUrl";

const CheckoutPage = () => {
  const { cartItems, totalAmount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <h2 className="text-2xl text-gray-500">Sepetin boş 🛒</h2>
      </div>
    );
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      {/* PRODUCTS */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        {/* HEADER */}
        <div className="grid grid-cols-5 gap-4 p-4 border-b text-sm font-semibold text-gray-500">
          <span className="col-span-2">Product</span>
          <span>Price</span>
          <span>Qty</span>
          <span className="text-right">Total</span>
        </div>

        {/* ITEMS */}
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="grid grid-cols-5 gap-4 p-4 items-center border-b last:border-none"
          >
            <div className="col-span-2 flex items-center gap-4">
              <img
                src={`${BASE_URL}/images/${item.productImage}`}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <span className="font-medium">{item.title}</span>
            </div>

            <span className="text-gray-600">
              ₺{item.unitPrice.toLocaleString()}
            </span>

            <span className="font-medium">{item.quantity}</span>

            <span className="text-right font-semibold text-primary">
              ₺{(item.unitPrice * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* SUMMARY + PAYMENT */}
      <div className="mt-6 bg-white shadow-md rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2 text-gray-600">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between mb-4 text-xl font-bold text-primary">
          <span>Total</span>
          <span>₺{totalAmount.toLocaleString()}</span>
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primaryHover transition font-semibold">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
