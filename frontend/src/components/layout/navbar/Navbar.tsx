// import { useLocation } from "react-router-dom";
// import { useAuth } from "../../../context/Auth/AuthContext";
// import { useCart } from "../../../context/Auth/cart/CartContext";
// import { useNavigation } from "../../../hooks/useNavigation";

// import Logo from "./Logo";
// import CartButton from "./CartButton";
// import UserMenu from "./UserMenu";

// export default function Navbar() {
//   const { username, isAuthenticated, logout } = useAuth();
//   const { cartItems, clearCart } = useCart();
//   const { pathname } = useLocation();

//   const { goHome, goLogin, goCart, goOrders } = useNavigation();

//   const handleLogout = () => {
//     logout();
//     clearCart();
//     goHome();
//   };

//   return (
//     <nav className="w-full bg-primary shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Logo onClick={goHome} />

//           <div className="flex items-center gap-4">
//             <div className={pathname === "/cart" ? "text-red-950" : ""}>
//               <CartButton
//                 count={cartItems.length}
//                 onClick={goCart}
//                 active={pathname === "/cart"}
//               />
//             </div>

//             {isAuthenticated ? (
//               <UserMenu
//                 username={username}
//                 onLogout={handleLogout}
//                 onOrders={goOrders}
//               />
//             ) : (
//               <button
//                 onClick={goLogin}
//                 className="bg-white text-primary px-4 py-1 rounded-lg hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useLocation } from "react-router-dom";

import { useAuth } from "../../../context/Auth/AuthContext";
import { useCart } from "../../../context/Auth/cart/CartContext";
import { useNavigation } from "../../../hooks/useNavigation";

import Logo from "./Logo";
import CartButton from "./CartButton";
import UserMenu from "./UserMenu";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { username, isAuthenticated, logout } = useAuth();
  const { cartItems, clearCart } = useCart();
  const { pathname } = useLocation();
  const { goHome, goLogin, goCart, goOrders } = useNavigation();

  const handleLogout = () => {
    logout();
    clearCart();
    goHome();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LEFT - LOGO */}
          <div className="flex items-center">
            <Logo onClick={goHome} />
          </div>

          {/* CENTER - MENU */}
          <div className="hidden lg:flex justify-center items-center gap-6 text-sm font-medium text-textSecondary">
            <button className="hover:text-primary">Shop</button>
            <button className="hover:text-primary">Categories</button>
            <button className="hover:text-primary">Brands</button>
            <button className="hover:text-primary">Deals</button>
          </div>

          {/* RIGHT - SEARCH + ACTIONS */}
          <div className="flex justify-end items-center gap-4">
            <div className="w-full max-w-xs">
              <SearchBar />
            </div>

            <CartButton
              count={cartItems.length}
              onClick={goCart}
              active={pathname === "/cart"}
            />

            {isAuthenticated ? (
              <UserMenu
                username={username}
                onLogout={handleLogout}
                onOrders={goOrders}
              />
            ) : (
              <button
                onClick={goLogin}
                className="bg-primary text-white px-4 py-2 rounded-xl"
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
