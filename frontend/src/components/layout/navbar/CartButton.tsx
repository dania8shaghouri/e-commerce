import { FiShoppingCart } from "react-icons/fi";

interface Props {
  count: number;
  onClick: () => void;
}

const CartButton = ({ count, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative text-white hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-white"
    >
      <FiShoppingCart className="text-2xl" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-white text-primary text-xs min-w-[20px] h-5 px-1 flex items-center justify-center rounded-full">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
};

export default CartButton;
