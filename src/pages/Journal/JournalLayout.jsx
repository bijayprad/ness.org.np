import { Outlet, NavLink } from "react-router-dom";

export default function JournalLayout() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Nepal Journal of Statistics and Data Sciences (NJSDS)</h1>

      <nav className="mb-6 flex gap-4">
        <NavLink
          to="/journal"
          end
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-semibold transition-all ${
              isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"
            }`
          }
        >
          NJSDS Home
        </NavLink>

        <NavLink
          to="editorial"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-semibold transition-all ${
              isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"
            }`
          }
        >
          Editorial Board
        </NavLink>

        <NavLink
          to="guidelinesa"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-semibold transition-all ${
              isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"
            }`
          }
        >
          Guidelines for Authors
        </NavLink>

        <NavLink
          to="guidelinesb"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-semibold transition-all ${
              isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"
            }`
          }
        >
          Guidelines for Reviewer
        </NavLink>

        <NavLink
          to="reviewcommittee"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-semibold transition-all ${
              isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"
            }`
          }
        >
            Review Committee
        </NavLink>

        <NavLink
          to="archieve"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-semibold transition-all ${
              isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"
            }`
          }
        >
          Archieves
        </NavLink>
      </nav>

      {/* Render the child page */}
      <Outlet />
    </div>
  );
}

