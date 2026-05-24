import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/pics/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/conference", label: "Conference" },
    { path: "/members", label: "Members" },
    { path: "/activities", label: "Activities" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-lg md:text-2xl font-bold text-blue-700"
        >
          <img src={logo} alt="NeSS Logo" className="h-10 w-auto" />
          <span className="hidden sm:block">
            Nepal Statistical Society
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">

          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                `font-semibold px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-800 hover:bg-gray-100"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* DESKTOP DROPDOWN */}
          <div className="relative group">

            <button
              className={`font-semibold px-3 py-2 rounded-lg transition-all ${
                pathname.startsWith("/journal")
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Journal ▾
            </button>

            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border hidden group-hover:block">

              <NavLink
                to="/journal"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Journal Home
              </NavLink>

              <NavLink
                to="/journal/editorial"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Editorial Board
              </NavLink>

              <NavLink
                to="/journal/guidelinesa"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Guidelines for Authors
              </NavLink>

              <NavLink
                to="/journal/guidelinesb"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Guidelines for Reviewer
              </NavLink>

              <NavLink
                to="/journal/archieve"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Archives
              </NavLink>

            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-800 hover:bg-gray-100"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-2">

          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* MOBILE JOURNAL DROPDOWN */}
          <div>
            <button
              onClick={() => setJournalOpen(!journalOpen)}
              className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-medium text-gray-800 hover:bg-gray-100"
            >
              Journal
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  journalOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {journalOpen && (
              <div className="ml-4 mt-2 space-y-1">

                <NavLink
                  to="/journal"
                  className="block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Journal Home
                </NavLink>

                <NavLink
                  to="/journal/editorial"
                  className="block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Editorial Board
                </NavLink>

                <NavLink
                  to="/journal/guidelinesa"
                  className="block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Guidelines for Authors
                </NavLink>

                <NavLink
                  to="/journal/guidelinesb"
                  className="block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Guidelines for Reviewer
                </NavLink>

                <NavLink
                  to="/journal/archieve"
                  className="block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Archives
                </NavLink>

              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-medium ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`
            }
          >
            Contact
          </NavLink>

        </div>
      )}
    </nav>
  );
}