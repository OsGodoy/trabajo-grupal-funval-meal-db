import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 ">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops 😅 the page not found
      </p>
      <Link
        to="/"
        className="bg-orange-400 border-3 border-orange-300 text-base rounded-lg text-white px-6 py-2"
      >
        Back to home
      </Link>
    </div>
  );
}
export default NotFound;