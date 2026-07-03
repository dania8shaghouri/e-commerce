export interface Product {
  _id: string;

  title: string;
  brand: string;
  category: string;

  image: string;
  images: string[];

  cpu: string;
  ram: string;
  storage: string;
  gpu: string;

  description: string;

  price: number;
  stock: number;
}

export interface TopProduct {
  name: string;
  sales: number;
  revenue: string;
  image: string;
}
