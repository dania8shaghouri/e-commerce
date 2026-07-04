import mongoose, { Schema, Document } from "mongoose";

export interface Iproduct extends Document {
  title: string;
  brand: string;
  category: string;

  image: string;
  images: string[];

  description: string;

  cpu: string;
  ram: string;
  storage: string;
  gpu: string;

  price: number;
  stock: number;

  rating: number;
  reviewCount: number;

  isFeatured: boolean;
}

const productSchema = new Schema<Iproduct>({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },

  image: { type: String, required: true }, // ana resim
  images: [{ type: String }], // çoklu resim

  description: { type: String },

  cpu: { type: String },
  ram: { type: String },
  storage: { type: String },
  gpu: { type: String },

  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },

  rating: { type: Number, default: 4.5 },

  reviewCount: { type: Number, default: 0 },

  isFeatured: { type: Boolean, default: false },
});

const productModel = mongoose.model<Iproduct>("product", productSchema);
export default productModel;
