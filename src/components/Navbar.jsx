import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/pics/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/conference", label: "Conference" },
    { path: "/members", label: "Members" },
    { path: "/activities", label: "Activities" },
  ];

  const journalLinkClass =
    "font-semibold px-3 py-2 rounded-lg transition-all text-gray-800 hover:bg-gray-100";

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

          <a
            href="https://journal.ness.org.np/"
            target="_blank"
            rel="noopener noreferrer"
            className={journalLinkClass}
          >
            Journal
          </a>

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

          <a
            href="https://journal.ness.org.np/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-lg font-medium text-gray-800 hover:bg-gray-100"
          >
            Journal
          </a>

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
