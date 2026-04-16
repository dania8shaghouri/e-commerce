import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../../../types/CartItem";
import axios from "axios";
import { BASE_URL } from "../../../constants/baseUrl";
import { useAuth } from "../AuthContext";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    if (!token) return;

    const fetchCart = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const backendCart = data as BackendCart;

        setCartItems(
          backendCart.items.map((i) => ({
            productId: i.product._id,
            title: i.product.title,
            unitPrice: i.unitPrice,
            quantity: i.quantity,
            productImage: i.product.image,
          })),
        );

        setTotalAmount(backendCart.totalAmount);
      } catch (error) {
        console.error("Cart fetch error:", error);
      }
    };

    fetchCart();
  }, [token]);
  const clearCart = () => {
    setCartItems([]);
    setTotalAmount(0);
  };
  type BackendCartItem = {
    product: {
      _id: string;
      title: string;
      image: string;
    };
    quantity: number;
    unitPrice: number;
  };

  type BackendCart = {
    items: BackendCartItem[];
    totalAmount: number;
  };

  const addItemToCart = async (item: CartItem) => {
    console.log("🟡 ADD TO CART TRIGGERED");
    console.log("📦 Sending item:", item);

    try {
      // 1️⃣ ADD ITEM
      const response = await axios.post(
        `${BASE_URL}/cart/items`,
        {
          productId: item.productId,
          quantity: item.quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("🟢 Backend response (raw):", response);
      console.log("🟢 Backend response data:", response.data);

      // 2️⃣ SYNC CART (CRITICAL FIX)
      const cartResponse = await axios.get(`${BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const backendCart = cartResponse.data as BackendCart;

      console.log("🟢 Synced backendCart:", backendCart);

      // 3️⃣ STATE UPDATE
      setCartItems(
        backendCart.items.map((i) => ({
          productId: i.product._id,
          title: i.product.title,
          unitPrice: i.unitPrice,
          quantity: i.quantity,
          productImage: i.product.image,
        })),
      );

      setTotalAmount(backendCart.totalAmount);

      console.log("✅ CART UPDATED SUCCESSFULLY");
      console.log("🧺 Updated cartItems:", backendCart.items);
      console.log("💰 Total:", backendCart.totalAmount);
    } catch (error: unknown) {
      console.log("🔴 ADD TO CART FAILED");

      if (axios.isAxiosError(error)) {
        console.error("❌ Axios error:", error.response?.data || error.message);
      } else {
        console.error("❌ Unknown error:", error);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, totalAmount, addItemToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
