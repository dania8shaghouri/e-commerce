import api from "../api/axios";
import type { Shipping } from "../types/order";

export const getCart = (token: string) =>
  api.get("/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToCart = (
  token: string,
  data: { productId: string; quantity: number },
) =>
  api.post("/cart/items", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateCartItem = (
  token: string,
  data: { productId: string; quantity: number },
) =>
  api.put("/cart/items", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const removeCartItem = (token: string, productId: string) =>
  api.delete(`/cart/items/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const clearCartRequest = (token: string) =>
  api.delete("/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });

// export const checkoutRequest = (token: string, shipping: Shipping) =>
//   axios.post(
//     `${BASE_URL}/cart/checkout`,
//     { shipping },
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     },
//   );

export const checkoutRequest = (token: string, data: { shipping: Shipping }) =>
  api.post("/cart/checkout", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
