import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, remove, setQty, total, clear } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-gray-500">Find books you like and add them to your cart.</p>
        <div className="mt-4">
          <Link to="/" className="px-4 py-2 bg-purple-600 text-white rounded">Browse books</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your cart</h2>
      <div className="bg-white rounded-lg p-4 shadow-soft">
        {items.map((it) => (
          <div key={it.book._id} className="flex items-center gap-4 py-3 border-b last:border-b-0">
            <img src={it.book.coverUrl} alt={it.book.title} className="w-20 h-28 object-cover rounded" />
            <div className="flex-1">
              <div className="font-semibold">{it.book.title}</div>
              <div className="text-sm text-gray-500">{it.book.author}</div>
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="number"
                  value={it.quantity}
                  min={1}
                  onChange={(e) => setQty(it.book._id, Number(e.target.value))}
                  className="w-20 border rounded px-2 py-1"
                />
                <button onClick={() => remove(it.book._id)} className="text-sm text-red-600">Remove</button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">R{(it.book.price * it.quantity).toFixed(2)}</div>
            </div>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between">
          <div>
            <button onClick={() => clear()} className="text-sm text-gray-600">Clear cart</button>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Subtotal</div>
            <div className="text-2xl font-bold">R{total.toFixed(2)}</div>
            <div className="mt-3 flex gap-2 justify-end">
              <button onClick={() => navigate("/checkout")} className="px-4 py-2 bg-purple-600 text-white rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}