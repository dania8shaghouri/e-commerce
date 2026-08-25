import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getOrderStatus } from "../services/paymentService";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [status, setStatus] = useState<"loading" | "paid" | "pending">(
    "loading",
  );

  useEffect(() => {
    if (!orderId) return;

    const checkStatus = async () => {
      try {
        const response = await getOrderStatus(orderId);
        setStatus(response.data.paymentStatus === "paid" ? "paid" : "pending");
      } catch {
        setStatus("pending");
      }
    };

    checkStatus();
  }, [orderId]);

  if (status === "loading") {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <p>Checking payment status...</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto text-center py-16 space-y-4">
      {status === "paid" ? (
        <>
          <h1 className="text-2xl font-bold text-green-600">
            Payment Successful 🎉
          </h1>
          <p>Your order has been placed, thank you!</p>
          <p className="text-sm text-gray-500">Order No: {orderId}</p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-yellow-600">
            Confirming Payment
          </h1>
          <p>
            Your payment was processed but our system hasn't confirmed it
            yet — please refresh in a few seconds.
          </p>
        </>
      )}
      <Link to="/shop" className="text-primary underline">
        Continue Shopping
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;