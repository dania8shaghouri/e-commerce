import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(2, "Title is required"),
  brand: z.string().min(1, "Brand is required"),
  category: z.string().min(1, "Category is required"),
  image: z.string().min(1, "Image filename is required"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  stock: z.coerce.number().min(0, "Stock cannot be negative"),
  description: z.string().optional(),
});

export type ProductFormInput = z.input<typeof productSchema>;   
export type ProductFormValues = z.output<typeof productSchema>; 