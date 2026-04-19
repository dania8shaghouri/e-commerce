import { useCart } from "../context/Auth/cart/CartContext";
import { BASE_URL } from "../constants/baseUrl";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cartItems,
    totalAmount,
    updateItemQuantity,
    removeItemFromCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();
  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <h2 className="text-2xl text-gray-500">Sepetin boş 🛒</h2>
      </div>
    );
  }

  const handleChecout = () => {
    navigate("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">My Cart</h1>

        <button
          onClick={() => clearCart()}
          className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition"
        >
          <FiTrash2 />
          <span>Clear Cart</span>
        </button>
      </div>
      {/* 2 COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/*LEFT → PRODUCTS */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              onClick={() => navigate(`/product/${item.productId}`)}
              className="relative flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:cursor-pointer"
            >
              <button
                onClick={() => removeItemFromCart(item.productId)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
              >
                <FiTrash2 />
              </button>
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={`${BASE_URL}/images/${item.productImage}`}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                <div className="flex flex-col">
                  <h2 className="font-semibold text-lg">{item.title}</h2>

                  {/* PRICE */}
                  <p className="text-gray-500 text-sm">
                    ₺{item.unitPrice.toLocaleString()}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => {
                        if (item.quantity === 1) {
                          removeItemFromCart(item.productId);
                        } else {
                          updateItemQuantity(item.productId, item.quantity - 1);
                        }
                      }}
                    >
                      -
                    </button>

                    <span className="text-sm font-semibold w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() =>
                        updateItemQuantity(item.productId, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* ITEM TOTAL */}
              <span className="font-semibold text-primary text-lg">
                ₺{(item.unitPrice * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT → CHECKOUT */}
        <div className="bg-white shadow-md rounded-xl p-5 h-fit sticky top-24">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-4 text-xl font-bold text-primary">
            <span>Total</span>
            <span>₺{totalAmount.toLocaleString()}</span>
          </div>

          <button
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primaryHover transition font-semibold"
            onClick={handleChecout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
