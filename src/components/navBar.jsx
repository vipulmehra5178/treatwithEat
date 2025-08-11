import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex flex-col items-center gap-1">
  <h3 className="text-3xl font-bold text-white">
    <Link to="/" onClick={() => setIsOpen(false)}>
      Eats & Treats
    </Link>
  </h3>
  <span className="text-sm text-white italic text-center">
    🤍Come and witness the magic🤍
  </span>
</div>



        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

        <div
          className={`
            flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6
            bg-black sm:bg-transparent
            absolute top-full left-0 w-full sm:w-auto
            transition-transform duration-300 ease-in-out
            ${
              isOpen
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-full opacity-0 pointer-events-none"
            }
            sm:static sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto
            z-40
          `}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Availability", path: "/reservations" },
            { name: "Reservations", path: "/reservation-form" },
            { name: "About", path: "/about" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block px-4 py-2 text-lg text-white hover:bg-gray-700 sm:hover:bg-transparent rounded"
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
