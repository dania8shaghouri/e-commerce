import type { Order } from "../../types/order";

const OrderCard = ({ order }: { order: Order }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5">

      {/* HEADER */}
      <div className="flex justify-between mb-3">
        <span className="text-sm text-gray-500">
          Order #: {order.orderNumber}
        </span>

        <span className="text-sm font-medium text-primary">
          {order.status}
        </span>
      </div>

      {/* SHIPPING */}
      <div className="text-sm text-gray-600 mb-3">
        <p>
          {order.shipping.fullName} • {order.shipping.phone}
        </p>
        <p>
          {order.shipping.city} - {order.shipping.address}
        </p>
      </div>

      {/* ITEMS */}
      <div className="space-y-2">
        {order.orderItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm border-t pt-2"
          >
            <span>
              {item.productTitle} × {item.quantity}
            </span>

            <span className="font-medium">
              ₺{(item.unitPrice * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="flex justify-between mt-4 border-t pt-3 font-semibold">
        <span>Total</span>
        <span className="text-primary">
          ₺{order.total.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default OrderCard;