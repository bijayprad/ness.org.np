import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import logo from "../assets/pics/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const openMenu = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 180);   // small delay makes it MUCH easier to move cursor
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/conference", label: "Conference" },
    { path: "/members", label: "Members" },
    { path: "/activities", label: "Activities" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO (must be inside public folder) */}
<Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-blue-700">
  <img src={logo} alt="NeSS Logo" className="h-10 w-auto"/>
  <span>Nepal Statistical Society</span>
</Link>




        <div className="hidden md:flex gap-6 items-center">

          {links.slice(0,4).map((l)=>(
            <NavLink
              key={l.path}
              to={l.path}
              className={({isActive}) =>
                `font-semibold px-3 py-2 rounded-lg transition-all ${
                  isActive ? "bg-blue-600 text-white shadow"
                  : "text-gray-800 hover:bg-gray-100"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* ⭐ SMART JOURNAL DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >

            <button
              className={`font-semibold px-3 py-2 rounded-lg transition-all ${
                pathname.startsWith("/journal")
                ? "bg-blue-600 text-white shadow"
                : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Journal ▾
            </button>

            {open && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >

                <NavLink to="/journal" className="block px-4 py-2 hover:bg-gray-100">
                  Journal Home
                </NavLink>

                <NavLink to="/journal/editorial" className="block px-4 py-2 hover:bg-gray-100">
                  Editorial Board
                </NavLink>

                <NavLink to="/journal/guidelinesa" className="block px-4 py-2 hover:bg-gray-100">
                  Guidelines for Authors
                </NavLink>

                <NavLink to="/journal/guidelinesb" className="block px-4 py-2 hover:bg-gray-100">
                  Guidelines for Reviewer
                </NavLink>

                <NavLink to="/journal/archieve" className="block px-4 py-2 hover:bg-gray-100">
                  Archives
                </NavLink>

              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({isActive}) =>
              `font-semibold px-3 py-2 rounded-lg transition-all ${
                isActive ? "bg-blue-600 text-white shadow"
                : "text-gray-800 hover:bg-gray-100"
              }`
            }
          >
            Contact
          </NavLink>

        </div>
      </div>
    </nav>
  );
}