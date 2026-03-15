import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT ICON */}
          <div className="flex items-center">
            <FiShoppingCart className="text-2xl text-gray-800 cursor-pointer" />
          </div>

          {/* RIGHT CIRCLE */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition"></div>
          </div>

        </div>

      </div>
    </nav>
  );
}