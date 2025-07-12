import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative group px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
      isActive
        ? "text-green-600"
        : "text-gray-700 hover:text-green-600 focus:text-green-600"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-base font-semibold tracking-wide rounded-md transition-colors duration-300 ${
      isActive
        ? "bg-green-100 text-green-700"
        : "text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:bg-green-100 focus:text-green-700"
    }`;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/client/home"
            className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
            onClick={closeMobileMenu}
            aria-label="XFit Arena Home"
          >
            <img
              src="/Logo.jpg"
              alt="XFit Arena Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-md object-cover"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex space-x-10">
            {[
              { to: "/client/home", label: "HOME" },
              { to: "/client/blog", label: "BLOG" },
              { to: "/client/packages", label: "PACKAGES" },
              { to: "/client/contact", label: "CONTACT" },
              { to: "/client/about", label: "ABOUT" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={navLinkClass}>
                  {label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-sm"></span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bg-white shadow-lg border-t border-gray-200 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <div className="px-5 py-4 space-y-2">
          {[
            { to: "/client/home", label: "HOME" },
            { to: "/client/blog", label: "BLOG" },
            { to: "/client/packages", label: "PACKAGES" },
            { to: "/client/contact", label: "CONTACT" },
            { to: "/client/about", label: "ABOUT" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={mobileNavLinkClass}
              onClick={closeMobileMenu}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
