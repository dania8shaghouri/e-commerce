import { FiCpu } from "react-icons/fi";

interface Props {
  onClick: () => void;
}

const Logo = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="
        flex
        items-center
        justify-center
        focus:outline-none
      "
    >
      <div
        className="
          w-10
          h-10
          rounded-xl
          bg-primary
          flex
          items-center
          justify-center
          text-white
          shadow-sm
        "
      >
        <FiCpu className="text-2xl" />
      </div>
    </button>
  );
};

export default Logo;
