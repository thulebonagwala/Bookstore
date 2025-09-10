import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

type Props = { book: any };
export default function BookCard({ book }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="border rounded p-4 flex flex-col gap-2">
      <img src={book.coverUrl} alt={book.title} className="h-40 object-cover" />
      <div className="font-semibold">{book.title}</div>
      <div className="text-sm text-gray-600">{book.author}</div>
      <div>${book.price.toFixed(2)}</div>
      <button
        onClick={() => dispatch(addItem({ bookId: book._id, title: book.title, price: book.price, quantity: 1 }))}
        className="bg-black text-white py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}