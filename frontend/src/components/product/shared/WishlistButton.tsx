import { FiHeart } from "react-icons/fi";

const WishlistButton = () => {
  return (
    <button
      type="button"
      className="
        absolute
        right-4
        top-4
        z-20
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-white/90
        shadow-md
        backdrop-blur
        transition-all
        duration-300
        hover:scale-110
        hover:text-red-500
      "
      aria-label="Add to wishlist"
    >
      <FiHeart size={18} />
    </button>
  );
};

export default WishlistButton;
