import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center">

      <div className="relative w-96">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          placeholder="Search..."
          className="w-full rounded-xl border pl-12 pr-4 py-3 outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <FaBell className="text-2xl cursor-pointer" />

        <img
          src="https://ui-avatars.com/api/?name=Siddharth"
          className="w-11 h-11 rounded-full"
        />

      </div>

    </div>
  );
}