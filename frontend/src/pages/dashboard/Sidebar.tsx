import { useState } from "react";
import {
  FaHome,
  FaCode,
  FaRobot,
  FaFileAlt,
  FaUser,
  FaSignOutAlt,
  FaBuilding,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menus = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      name: "Coding Practice",
      icon: <FaCode />,
      path: "/coding",
    },
    {
      name: "Resume Analyzer",
      icon: <FaFileAlt />,
      path: "/resume",
    },
    {
      name: "AI Interview",
      icon: <FaRobot />,
      path: "/interview",
    },
    {
      name: "Companies",
      icon: <FaBuilding />,
      path: "/companies",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
  ];

  return (
    <>
      {/* Mobile Header */}

      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-slate-900 px-5 py-4 text-white lg:hidden">

        <h1 className="text-2xl font-bold text-blue-400">
          InterviewX
        </h1>

        <button onClick={() => setOpen(true)}>
          <FaBars size={24} />
        </button>

      </div>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72
          bg-slate-900 text-white
          flex flex-col
          transform transition-transform duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-700 p-8">

          <h1 className="text-3xl font-bold text-blue-400">
            InterviewX
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <FaTimes size={22} />
          </button>

        </div>

        {/* Menus */}

        <div className="flex-1 px-4 py-6">

          {menus.map((menu) => (

            <div
              key={menu.name}
              onClick={() => {
                navigate(menu.path);
                setOpen(false);
              }}
              className="mb-2 flex cursor-pointer items-center gap-4 rounded-xl p-4 transition hover:bg-blue-600"
            >

              <span className="text-xl">
                {menu.icon}
              </span>

              <span className="text-base">
                {menu.name}
              </span>

            </div>

          ))}

        </div>

        {/* Logout */}

        <div className="p-4">

          <button
            onClick={logout}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 p-4 transition hover:bg-red-700"
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
}