import { useContext, createContext } from "react";
import type { CartItem } from "../../../types/CartItem";

interface CartContextType {
  cartItems: CartItem[];
  totalAmount: number;
  addItemToCart: (item: CartItem) => void;
  clearCart: () => void;
  updateItemQuantity: (productId: string, quantity: number) => void;
  removeItemFromCart: (productId: string) => void;
  
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalAmount: 0,
  addItemToCart: () => {},
  clearCart: () => {},
  updateItemQuantity: () => {},
  removeItemFromCart: () => {},
});

export const useCart = () => useContext(CartContext);
