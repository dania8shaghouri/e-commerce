import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#006ce1] shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center gap-2 text-white font-semibold text-lg cursor-pointer">
            <FiShoppingCart className="text-2xl" />
            <span className="hidden sm:block">Shop</span>
          </div>

          {/* RIGHT CIRCLE */}
          <div className="flex items-center gap-4">
            {/* CART BUTTON */}
            <button className="relative text-white hover:scale-110 transition">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-white text-[#006ce1] text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/* PROFILE */}
            <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur cursor-pointer hover:bg-white/50 transition"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
