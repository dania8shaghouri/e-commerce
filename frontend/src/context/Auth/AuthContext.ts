import { useContext, createContext } from "react";
import type { Order } from "../../types/order";

export interface OrderItem {
  productTitle: string;
  productImage: string;
  unitPrice: number;
  quantity: number;
}

export interface Shipping {
  fullName: string;
  phone: string;
  city: string;
  address: string;
}

// export interface Order {
//   _id: string;
//   orderItems: OrderItem[];
//   total: number;
//   shipping: Shipping;
//   status: string;
//   createdAt: string;
// }

interface AuthContextType {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, token: string) => void;
  logout: () => void;

  orders: Order[];
  ordersLoading: boolean;

  getMyOrders: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  username: null,
  token: null,
  isAuthenticated: false,

  login: () => {},
  logout: () => {},

  orders: [],
  ordersLoading: false,

  getMyOrders: async () => {
    throw new Error("AuthContext not initialized");
  },
});

export const useAuth = () => useContext(AuthContext);
