import { BASE_URL } from "../constants/baseUrl";

// filename'i gerçek URL'ye dönüştürüyor
export const getImageUrl = (image?: string): string => {
  if (!image) return "/placeholder.png";

  if (image.startsWith("http")) return image;

  if (image.startsWith("/")) {
    return `${BASE_URL}${image}`;
  }

  return `${BASE_URL}/images/${image}`;
};
