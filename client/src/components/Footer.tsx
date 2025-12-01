

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Bookstore</h3>
            <p className="text-sm text-gray-600">Made for readers & builders</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Cart
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Bookstore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
