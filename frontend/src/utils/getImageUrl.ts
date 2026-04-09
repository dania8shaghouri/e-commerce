import { BASE_URL } from "../constants/baseUrl";

export const getImageUrl = (filename: string): string => {
  if (!filename) return "";
  if (filename.startsWith("http")) return filename;
  return `${BASE_URL}/images/${filename}`;
};
