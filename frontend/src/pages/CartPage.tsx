import { useCart } from "../context/Auth/cart/CartContext";

const CartPage = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <div>
      {cartItems.map((item) => (
        <p key={item.productId}> added {item.title}</p>
      ))}

      <h2>Total: {totalAmount}</h2>
    </div>
  );
};

export default CartPage;
