import { useState } from "react";
import type { Shipping } from "../../types/order";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

interface Props {
  form: Shipping;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ShippingForm = ({ form, onChange }: Props) => {
  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // sadece rakam
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    onChange({
      ...e,
      target: { ...e.target, name: "phone", value },
    });
  };

  // kart numarası
  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCard({ ...card, cardNumber: value });
  };

  //  cvv
  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCard({ ...card, cvv: value });
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md space-y-6">
      {/* SHIPPING */}
      <div>
        <h2 className="mb-4 font-semibold text-lg">Shipping Information</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={onChange}
          />

          <Input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handlePhoneChange}
          />

          <Input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={onChange}
            className="md:col-span-2"
          />

          <Textarea
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={onChange}
            className="md:col-span-2"
          />
        </div>
      </div>

      {/* PAYMENT */}
      <div>
        <h2 className="mb-4 font-semibold text-lg">Payment Information</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Input
            placeholder="Card Holder Name"
            value={card.cardName}
            onChange={(e) =>
              setCard({ ...card, cardName: e.target.value })
            }
            className="md:col-span-2"
          />

          <Input
            placeholder="Card Number (16 digits)"
            value={card.cardNumber}
            onChange={handleCardNumber}
            className="md:col-span-2"
          />

          <Input
            placeholder="MM/YY"
            value={card.expiry}
            onChange={(e) =>
              setCard({ ...card, expiry: e.target.value })
            }
          />

          <Input
            placeholder="CVV"
            value={card.cvv}
            onChange={handleCvv}
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;