import React,{useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Book } from "../types";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //const [books, setBooks] = useState<Book[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // const bookService = new BookService();

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const handleSearch = async () => {
    // const results = await bookService.searchBooks(searchQuery);
    //setBooks(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Header
        cartCount={cartCount}
        onSearchChange={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
