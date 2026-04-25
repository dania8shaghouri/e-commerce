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
export interface Payment {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}
export interface Order {
  _id: string;
  orderNumber: string;
  orderItems: OrderItem[];
  total: number;
  shipping: Shipping;
  status: string;
  createdAt: string;
}

export type CheckoutFormData = Shipping ;
