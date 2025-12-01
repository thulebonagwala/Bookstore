import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { api } from "../lib/api";
import type { Book } from "../types";
import { Link, useLocation } from "react-router-dom";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Home() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const q = useQuery().get("q") ?? "";

    useEffect(() => {
        (async () => {
            setLoading(true);
            const list = await api.listBooks(q || undefined);
            setBooks(list);
            setLoading(false);
        })();
    }, [q]);

    const handleAddToCart = async (bookId: string) => {
    // const success = await cartService.addToCart(bookId);
    // if (success) {
    //   await loadCart();
    // }
  };

    return (
        <>
            <section className="mb-8">
                <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 md:p-12 flex items-center gap-8">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold">Find your next great read</h2>
                        <p className="mt-2 text-sm md:text-base text-purple-100/90">Curated books for learning, design and engineering.</p>
                        <div className="mt-6">
                            <Link to="/"
                                className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md font-medium shadow">
                                Browse catalog
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block w-64">
                        <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=74e6f0b3b2b3" alt="books" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            <section>
                <main className="flex-1">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">Featured</h2>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                            >
                                View cart
                            </a>
                        </div>

                        {books.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No books found</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {books.map((book) => (
                                    <BookCard
                                        key={book._id}
                                        book={book}
                                        onAddToCart={handleAddToCart}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </section>
        </>
    );
}
