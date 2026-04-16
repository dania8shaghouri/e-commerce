import { useContext, createContext } from "react";
import type { CartItem } from "../../../types/CartItem";

interface CartContextType {
  cartItems: CartItem[];
  totalAmount: number;
  addItemToCart: (item: CartItem) => void;
}
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalAmount: 0,
  addItemToCart: () => {},
});

export const useCart = () => useContext(CartContext);
