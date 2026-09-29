import { useState } from "react";
import type {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import toast from "react-hot-toast";
import { FiZap } from "react-icons/fi";
import Input from "../../../../components/ui/Input";
import Textarea from "../../../../components/ui/Textarea";
import { generateProductDescription } from "../../services/adminProductService";
import type { ProductFormInput } from "../../validation/productSchema";
import type { Category } from "../../../../types/Category";

interface Props {
  register: UseFormRegister<ProductFormInput>;
  errors: FieldErrors<ProductFormInput>;
  categories: Category[];
  watch: UseFormWatch<ProductFormInput>;
  setValue: UseFormSetValue<ProductFormInput>;
}

const SPEC_FIELDS = [
  "cpu",
  "ram",
  "storage",
  "gpu",
  "resolution",
  "refreshRate",
  "panel",
  "size",
  "type",
  "connectivity",
  "switches",
  "dpi",
  "rgb",
  "capacity",
  "interface",
  "readSpeed",
] as const;

const ProductInfoSection = ({
  register,
  errors,
  categories,
  watch,
  setValue,
}: Props) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    // watch Formdaki belirli bir alanın güncel değerini almamı sağlar
    const title = watch("title");
    if (!title) {
      toast.error("Enter a product name first");
      return;
    }

    setIsGenerating(true);
    try {
      const specs = Object.fromEntries(
        SPEC_FIELDS.map((field) => [field, watch(field)]),
      );

      // Gemini'den response geliyor
      const response = await generateProductDescription({
        title,
        brand: watch("brand"),
        category: watch("category"),
        specs,
      });

      // React Hook Form'a: description field'ının değerini Gemini'nin oluşturduğu text yap diyorsun;
      setValue("description", response.data.description);

      toast.success("Description generated");
    } catch {
      toast.error("Failed to generate description");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-semibold text-textPrimary">
        Product Information
      </h2>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-textSecondary">
            Product Name *
          </label>
          <Input
            placeholder="e.g. Novatech Horizon Pro Laptop"
            {...register("title")}
            className="w-full"
          />
          <p className="text-sm text-danger">{errors.title?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-textSecondary">
              Brand *
            </label>
            <Input
              placeholder="e.g. Novatech"
              {...register("brand")}
              className="w-full"
            />
            <p className="text-sm text-danger">{errors.brand?.message}</p>
          </div>

          <div>
            <label className="mb-1 block text-sm text-textSecondary">
              Category *
            </label>
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
          <div className="mb-1 flex items-center justify-between">
            <label className="block text-sm text-textSecondary">
              Description
            </label>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 disabled:opacity-60"
            >
              <FiZap size={14} />
              {isGenerating ? "Generating..." : "Generate with AI"}
            </button>
          </div>
          <Textarea
            placeholder="Write a detailed description..."
            rows={4}
            {...register("description")}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
