import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { items } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold shadow-md">
                B
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold">Bookstore</h1>
                <p className="text-xs text-gray-500 -mt-1">Curated books for builders</p>
              </div>
            </Link>
            <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search books or authors..."
                  className="w-80 pr-10 pl-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative inline-flex items-center gap-2">
              <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
              <span className="sr-only">Cart</span>
              <span className="text-sm font-medium">{items.length}</span>
            </Link>

            <div className="relative">
              {user ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate("/profile")}
                    className="inline-flex items-center gap-2 px-3 py-1 border rounded-md"
                  >
                    <UserIcon className="w-5 h-5 text-gray-700" />
                    <span className="hidden sm:inline-block">{user.name}</span>
                  </button>
                  <button
                    onClick={async () => {
                      await logout();
                      navigate("/");
                    }}
                    className="px-3 py-1 rounded-md bg-gray-100 text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/login" className="text-sm px-3 py-1 border rounded-md">
                    Login
                  </Link>
                  <Link to="/register" className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
