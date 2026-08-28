import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Modal from "../../../../components/ui/Modal";
import Input from "../../../../components/ui/Input";
import Textarea from "../../../../components/ui/Textarea";
import {
  productSchema,
  type ProductFormInput,
  type ProductFormValues,
} from "../../validation/productSchema";
import {
  createProduct,
  updateProduct,
} from "../../services/adminProductService";
import type { AdminProduct } from "../../types/adminProduct";
import type { Category } from "../../../../types/Category";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  product?: AdminProduct | null;
  categories: Category[];
}

const ProductFormModal = ({
  isOpen,
  onClose,
  onSuccess,
  product,
  categories,
}: Props) => {
  const isEditMode = Boolean(product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormInput, unknown, ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        brand: product.brand,
        category: product.category,
        image: product.image,
        price: product.price,
        stock: product.stock,
        description: product.description ?? "",
      });
    } else {
      reset({
        title: "",
        brand: "",
        category: "",
        image: "",
        price: 0,
        stock: 0,
        description: "",
      });
    }
  }, [product, reset, isOpen]);

  const onSubmit = async (data: ProductFormValues) => {
    try {
      if (isEditMode && product) {
        await updateProduct(product._id, data);
        toast.success("Product updated");
      } else {
        await createProduct(data);
        toast.success("Product created");
      }
      onSuccess();
      onClose();
    } catch {
      toast.error(
        isEditMode ? "Failed to update product" : "Failed to create product",
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "Edit Product" : "Add Product"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="Title"
            {...register("title")}
            className="w-full"
          />
          <p className="text-sm text-danger">{errors.title?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Brand"
              {...register("brand")}
              className="w-full"
            />
            <p className="text-sm text-danger">{errors.brand?.message}</p>
          </div>

          <div>
            <select
              {...register("category")}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-danger">{errors.category?.message}</p>
          </div>
        </div>

        <div>
          <Input
            placeholder="Image filename (e.g. laptop1_main.webp)"
            {...register("image")}
            className="w-full"
          />
          <p className="text-sm text-danger">{errors.image?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              type="number"
              step="0.01"
              placeholder="Price"
              {...register("price")}
              className="w-full"
            />
            <p className="text-sm text-danger">{errors.price?.message}</p>
          </div>

          <div>
            <Input
              type="number"
              placeholder="Stock"
              {...register("stock")}
              className="w-full"
            />
            <p className="text-sm text-danger">{errors.stock?.message}</p>
          </div>
        </div>

        <Textarea
          placeholder="Description (optional)"
          rows={3}
          {...register("description")}
          className="w-full"
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-5 py-2.5 font-medium text-textSecondary hover:bg-background"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-primary px-5 py-2.5 font-medium text-white hover:bg-primaryHover disabled:opacity-60"
          >
            {isSubmitting
              ? "Saving..."
              : isEditMode
                ? "Save Changes"
                : "Add Product"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProductFormModal;
