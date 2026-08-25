import { Link, useSearchParams } from "react-router-dom";

const PaymentCancelPage = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="max-w-lg mx-auto text-center py-16 space-y-4">
      <h1 className="text-2xl font-bold text-red-600">Payment Cancelled</h1>
      <p>Your payment was not completed, so no order was placed.</p>
      {orderId && (
        <p className="text-sm text-gray-500">Order No: {orderId}</p>
      )}
      <Link to="/cart" className="text-primary underline">
        Back to Cart
      </Link>
    </div>
  );
};

export default PaymentCancelPage;