import ProductImage from "../../../../../backend/src/images/prdct.png";
import ProductImage2 from "../../../../../backend/src/images/audio.webp";
import ProductImage3 from "../../../../../backend/src/images/monitor.jpg";

import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "1",
    title: "Laptops",
    image: ProductImage2,
    totalProducts: 42,
    icon: "💻",
  },
  {
    id: "2",
    title: "Gaming",
    image: ProductImage,
    totalProducts: 15,
    icon: "🎮",
  },
  {
    id: "3",
    title: "Monitors",
    image: ProductImage3,
    totalProducts: 27,
    icon: "🖥",
  },
  {
    id: "4",
    title: "Accessories",
    image: ProductImage,
    totalProducts: 56,
    icon: "⌨️",
  },
  {
    id: "5",
    title: "Storage",
    image: ProductImage,
    totalProducts: 18,
    icon: "💾",
  },
];
