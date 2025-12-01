import type { Book } from '../types';

interface BookCardProps {
  book: Book;
  onAddToCart: (bookId: string) => void;
}

export default function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 min-h-[3rem]">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{book.author}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            R{book.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(book._id)}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
