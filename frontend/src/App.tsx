import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AuthProvider from "./context/Auth/AuthProvider";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CartProvider from "./context/Auth/cart/CartProvider";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
