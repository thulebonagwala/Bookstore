import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page not found</p>
      <div className="mt-4">
        <Link to="/" className="px-4 py-2 bg-purple-600 text-white rounded">Go home</Link>
      </div>
    </div>
  );
}
