// done 

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-2 flex justify-between items-center bg-black z-index: 50;">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold text-white">
          <Link to="/">Eats & Treats</Link>
        </h3>
        <span className="text-sm text-white italic">🤍Come and witness the magic🤍</span>
      </div>
      <div className="links flex items-center gap-6">
        {[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          {name: "Availability", path: "/availability"},
          { name: "Reservations", path: "/reservations" },
          { name: "About", path: "/about" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-lg text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;