import { FiShoppingCart } from "react-icons/fi";

interface Props {
  count: number;
  onClick: () => void;
  active?: boolean;
}

const CartButton = ({ count, onClick, active }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        flex
        items-center
        justify-center
        w-10
        h-10
        rounded-xl
        transition
        hover:bg-background
        hover:scale-105
        focus:outline-none

        ${active ? "text-primary bg-background" : "text-textPrimary"}

      `}
    >
      <FiShoppingCart
        className="
          text-xl
        "
      />

      {count > 0 && (
        <span
          className="
              absolute
              -top-1
              -right-1
              bg-primary
              text-white
              text-xs
              font-bold
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
            "
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
};

export default CartButton;
