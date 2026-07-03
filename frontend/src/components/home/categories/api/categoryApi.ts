import axios from "axios";
import { BASE_URL } from "../../../../constants/baseUrl";

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/product/categories`);

  return response.data;
};
