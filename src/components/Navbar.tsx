import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // To detect route changes

  useEffect(() => {
    // Close the dropdown when the route changes
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b shadow-lg ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        {/* Logo */}
        <RouterLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt="Athis Corp" />
          <span className="self-center text-lg md:text-xl font-bold whitespace-nowrap text-green-500">
            ATHIS CORP ENERGY & SOLUTION
          </span>
        </RouterLink>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-green-500 hover:text-white focus:outline-none transition duration-300"
          aria-controls="navbar-dropdown"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Nav Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full right-4 w-48 md:static md:block md:w-auto transition-all duration-300`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:border-0 md:bg-transparent">
            <li>
              <RouterLink
                to="/"
                className="block py-2 px-3 text-green-500 rounded-sm hover:bg-green-500 hover:text-white md:hover:bg-transparent md:hover:text-green-700 md:p-0 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close dropdown on click
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                className="block py-2 px-3 text-green-500 rounded-sm hover:bg-green-500 hover:text-white md:hover:bg-transparent md:hover:text-green-700 md:p-0 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close dropdown on click
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/services"
                className="block py-2 px-3 text-green-500 rounded-sm hover:bg-green-500 hover:text-white md:hover:bg-transparent md:hover:text-green-700 md:p-0 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close dropdown on click
              >
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/clients"
                className="block py-2 px-3 text-green-500 rounded-sm hover:bg-green-500 hover:text-white md:hover:bg-transparent md:hover:text-green-700 md:p-0 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close dropdown on click
              >
                Clients
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                className="block py-2 px-3 text-green-500 rounded-sm hover:bg-green-500 hover:text-white md:hover:bg-transparent md:hover:text-green-700 md:p-0 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close dropdown on click
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;