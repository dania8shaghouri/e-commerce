import type { Product } from "../../../types/Product";

interface ProductSpecsProps {
  product: Product;
}

const ProductSpecs = ({ product }: ProductSpecsProps) => {
  const specs = [
    { label: "CPU", value: product.cpu },
    { label: "RAM", value: product.ram },
    { label: "Storage", value: product.storage },
    { label: "GPU", value: product.gpu },

    { label: "Resolution", value: product.resolution },
    { label: "Refresh Rate", value: product.refreshRate },
    { label: "Panel", value: product.panel },
    { label: "Size", value: product.size },

    { label: "Type", value: product.type },
    { label: "Connectivity", value: product.connectivity },
    { label: "Switches", value: product.switches },
    { label: "DPI", value: product.dpi },

    { label: "Capacity", value: product.capacity },
    { label: "Interface", value: product.interface },
    { label: "Read Speed", value: product.readSpeed },

    {
      label: "RGB",
      value:
        product.rgb !== undefined ? (product.rgb ? "Yes" : "No") : undefined,
    },
  ].filter((spec) => spec.value !== undefined);

  if (specs.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold">Specifications</h2>

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="
              flex
              justify-between
              border-b
              border-gray-100
              px-8
              py-5
              last:border-b-0
            "
          >
            <span className="font-medium text-gray-500">{spec.label}</span>

            <span className="font-semibold text-gray-900">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecs;
