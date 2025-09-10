import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, total, clear } = useCart();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePay = async () => {
    setProcessing(true);
    //call backend to create payment intent, then redirect to Stripe
    await new Promise((r) => setTimeout(r, 1200));
    // fake success
    setProcessing(false);
    clear();
    navigate("/", { state: { msg: "Payment successful — thank you!" } });
  };

  if (items.length === 0) return <div>Your cart is empty</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      <div className="bg-white rounded-lg p-6 shadow-soft">
        <div className="mb-4">
          <h3 className="font-medium">Order summary</h3>
          <ul className="mt-2 space-y-2">
            {items.map((it) => (
              <li key={it.book._id} className="flex justify-between">
                <div>{it.book.title} × {it.quantity}</div>
                <div>R{(it.book.price * it.quantity).toFixed(2)}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-xl font-semibold">Total</div>
          <div className="text-2xl font-bold">R{total.toFixed(2)}</div>
        </div>

        <div className="mt-6">
          <button onClick={handlePay} disabled={processing} className="w-full px-4 py-2 bg-purple-600 text-white rounded">
            {processing ? "Processing…" : "Pay (demo)"}
          </button>
        </div>
      </div>
    </div>
  );
}
