import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { removeItem, setQty } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items } = useSelector((s: RootState) => s.cart);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Cart</h1>
      {items.map(i => (
        <div key={i.bookId} className="flex items-center gap-4 border-b py-2">
          <div className="flex-1">{i.title}</div>
          <input type="number" value={i.quantity} min={1}
            onChange={e => dispatch(setQty({ bookId: i.bookId, quantity: Number(e.target.value) }))}
            className="w-16 border p-1" />
          <div>${(i.price * i.quantity).toFixed(2)}</div>
          <button className="text-red-600" onClick={() => dispatch(removeItem(i.bookId))}>Remove</button>
        </div>
      ))}
      <div className="mt-4 flex justify-between">
        <div>Total</div><div className="font-semibold">${total.toFixed(2)}</div>
      </div>
      <Link to="/checkout" className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Checkout</Link>
    </div>
  );
}