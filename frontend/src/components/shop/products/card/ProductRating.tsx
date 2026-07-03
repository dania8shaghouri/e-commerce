import { FiStar } from "react-icons/fi";

const ProductRating = () => {
  return (
    <div className="flex items-center gap-1 text-sm text-yellow-500">
      <FiStar className="fill-current" />
      <FiStar className="fill-current" />
      <FiStar className="fill-current" />
      <FiStar className="fill-current" />
      <FiStar className="fill-current" />

      <span className="ml-2 text-gray-500">(124)</span>
    </div>
  );
};

export default ProductRating;
