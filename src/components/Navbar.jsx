import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: "~/" },
    { name: "Skills", path: "/skills", icon: "</>" },
    { name: "Experience", path: "/experience", icon: "{}" },
    { name: "Resume", path: "/resume", icon: "[]" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-dark-surface/95 backdrop-blur border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-accent-green font-bold text-sm">
                ~/imran-khan
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors relative ${
                      isActive ? "text-accent-blue" : "text-muted hover:text-fg"
                    }`}
                  >
                    <span className="text-accent-purple">{item.icon}</span>
                    <span className="ml-1">{item.name.toLowerCase()}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-blue rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted hover:text-fg transition-colors p-1"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 top-14 md:hidden z-40 bg-dark-bg/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`md:hidden fixed left-0 right-0 top-14 z-40 bg-dark-surface border-b border-dark-border transition-all duration-200 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 max-w-7xl mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded text-xs font-medium transition-colors ${
                  isActive
                    ? "text-accent-blue bg-dark-selection"
                    : "text-muted hover:text-fg hover:bg-dark-line"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-accent-purple">{item.icon}</span>
                <span className="ml-1.5">{item.name.toLowerCase()}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
