import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h3 className="text-lg font-semibold">Bookstore</h3>
            <p className="text-sm text-gray-500 mt-1">Made for readers & builders</p>
          </div>
          <div className="flex gap-8">
            <div>
              <h4 className="font-medium">Explore</h4>
              <ul className="mt-2 text-sm text-gray-600">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Company</h4>
              <ul className="mt-2 text-sm text-gray-600">
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-400">© {new Date().getFullYear()} Bookstore. All rights reserved.</div>
      </div>
    </footer>
  );
}
