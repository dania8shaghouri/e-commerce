import { useContext, createContext } from "react";
import type { Order } from "../../types/order";

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

  getMyOrders: async () => {},
});

export const useAuth = () => useContext(AuthContext);
