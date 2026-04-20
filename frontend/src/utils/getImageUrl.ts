import { BASE_URL } from "../constants/baseUrl";

export const getImageUrl = (image?: string): string => {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `${BASE_URL}/images/${image}`;
};
