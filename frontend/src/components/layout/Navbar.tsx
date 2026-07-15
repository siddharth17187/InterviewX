import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <h1 className="text-2xl font-bold text-blue-600">
          InterviewX
        </h1>

        <nav className="flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}