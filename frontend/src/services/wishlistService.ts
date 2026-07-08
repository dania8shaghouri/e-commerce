import api from "../api/axios";
import type { WishlistItem, WishlistResponse } from "../types/Wishlist";

export const getWishlist = (token: string) => {
  return api.get<WishlistItem[]>("/wishlist", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const checkWishlist = (token: string, productId: string) => {
  return api.get<{
    isWishlisted: boolean;
  }>(`/wishlist/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const toggleWishlist = (token: string, productId: string) => {
  return api.post<WishlistResponse>(
    `/wishlist/${productId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
