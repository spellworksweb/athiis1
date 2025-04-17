import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
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
      setIsScrolled(window.scrollY > 50);
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
      <div className="flex flex-wrap items-center justify-between  w-full py-4">
        {/* Logo */}
        <RouterLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <img 
    src="/logo.png" 
    className="h-12 w-15 transition-transform duration-300 ease-in-out hover:scale-110" 
    alt="Athis Corp" 
  />
  <div className="flex flex-col items-start">
    <img
      src="/name.png"
      alt="Athis Corp Logo"
      className="h-10 w-auto animate-zoom-in-out"
    />
  </div>
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
          } absolute top-full right-4 w-64 md:static md:block md:w-auto transition-all duration-300`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-x-3 p-4 md:p-0 mt-4 md:mt-0 rounded-lg bg-gray-100 md:bg-transparent">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Clients", path: "/clients" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <RouterLink
                  to={link.path}
                  className={`py-2.5 px-4 inline-flex items-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-gray-800"
                      : "bg-transparent text-gray-500 hover:text-green-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
