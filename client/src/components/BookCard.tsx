import { Link } from "react-router-dom";
import type { Book } from "../types";
import { useCart } from "../context/CartContext";

export default function BookCard({ book }: { book: Book }) {
  const { add } = useCart();
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-shadow">
      <Link to={`/book/${book._id}`}>
        <img src={book.coverUrl} alt={book.title} className="w-full h-44 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/book/${book._id}`} className="block">
          <h3 className="font-semibold text-gray-800">{book.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{book.author}</p>
        </Link>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold">R{book.price.toFixed(2)}</div>
          <button
            onClick={() => add(book, 1)}
            className="px-3 py-1 rounded bg-purple-600 text-white text-sm hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
