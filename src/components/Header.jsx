import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["about", "skills", "projects", "education", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Sandesh Tamang Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain" // responsive logo
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700">
            Sandesh Tamang
          </span>
        </div>

        {/* Desktop Links */}
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none text-gray-700 hover:text-indigo-700 transition-colors"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
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
