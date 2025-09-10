import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/api";
import type { Book } from "../types";
import { useCart } from "../context/CartContext";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const { add } = useCart();

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (id) {
        const b = await api.getBook(id);
        setBook(b);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <div>Loading…</div>;
  if (!book) return <div>Book not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <img src={book.coverUrl} alt={book.title} className="w-full rounded-lg shadow" />
      </div>
      <div className="md:col-span-2">
        <h1 className="text-2xl font-semibold">{book.title}</h1>
        <p className="text-sm text-gray-500 mt-1">{book.author}</p>
        <div className="mt-4 text-lg font-bold">R{book.price.toFixed(2)}</div>
        <div className="mt-6">
          <p className="text-gray-700">{book.description}</p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button onClick={() => add(book, 1)} className="px-4 py-2 rounded bg-purple-600 text-white">
            Add to cart
          </button>
          <button className="px-4 py-2 rounded border">Save to wishlist</button>
        </div>
      </div>
    </div>
  );
}
