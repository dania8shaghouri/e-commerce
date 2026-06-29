import { FiX } from "react-icons/fi";
import { NAV_ITEMS } from "../../../shared/constants/navItems";
import { useNavigate } from "react-router-dom";

type MobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export default function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl
        transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b">
        <span className="font-semibold">Menu</span>

        <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <FiX />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex flex-col gap-5 p-4 text-sm text-textSecondary font-medium">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.path}
            onClick={() => go(item.path)}
            className="text-left hover:text-primary"
          >
            {item.label}
          </button>
        ))}

        <hr />

        <button
          onClick={() => go("/cart")}
          className="text-left hover:text-primary"
        >
          Cart
        </button>

        <button
          onClick={() => go("/orders")}
          className="text-left hover:text-primary"
        >
          Orders
        </button>

        <button onClick={() => go("/login")} className="text-left text-primary">
          Login
        </button>
      </div>
    </div>
  );
}
