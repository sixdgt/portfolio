import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["hero", "skills", "projects", "education", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-indigo-700 cursor-pointer">Sandesh Tamang</div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-indigo-700 transition-colors"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 shadow-md">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-700 hover:text-indigo-700 transition-colors"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
