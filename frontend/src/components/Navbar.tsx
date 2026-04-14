import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/Auth/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { username, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const getInitial = (username: string | null) => {
    if (!username) return "?";
    return username.charAt(0).toUpperCase();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <nav className="w-full bg-primary shadow-md">
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
            <button
              className="relative text-white hover:scale-110 transition"
              onClick={handleCart}
            >
              <FiShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-white text-primary text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/* AUTH */}
            {isAuthenticated ? (
              <div className="relative">
                {/* AVATAR */}
                <div
                  onClick={() => setOpen(!open)}
                  className="w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center font-semibold cursor-pointer hover:scale-105 transition"
                >
                  {getInitial(username)}
                </div>

                {/* DROPDOWN */}
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md overflow-hidden">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      My Orders
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-white text-primary px-4 py-1 rounded-lg"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
