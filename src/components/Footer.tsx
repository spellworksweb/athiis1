import { MapPin, Phone, Mail } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-700 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <img src="/logo.png" alt="Company Logo" className="h-8 w-10 mx-auto md:mx-0" />
            <span className="text-[#96C93C] text-xl font-bold block mt-2">AHTIS CORP</span>
            <p className="text-gray-400 text-sm mt-2">
              Your trusted partner in energy and generator excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#96C93C] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <RouterLink
                  to="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Services
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/clients"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Our Clients
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contact Us
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#96C93C] mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <RouterLink
                  to="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Generator Sales
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Panels
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Fabrication
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-[#96C93C] mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 text-[#96C93C] mr-2" />
                <a
                  href="https://maps.app.goo.gl/KmR2rs4c4PvPWosa7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Locate Us
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 text-[#96C93C] mr-2" />
                <a
                  href="tel:+918122104339"
                  className="hover:text-yellow-400 transition-colors"
                >
                  +91 9884138359
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 text-[#96C93C] mr-2" />
                <a
                  href="mailto:athiscorp@gmail.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  athiscorp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Athis Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;