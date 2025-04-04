import { MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-700 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Company Info */}
          <div className="text-center md:text-left">
            
            <img src="/logo.png" alt="Company Logo" className="h-8 w-10" />
            <span className="text-[#96C93C] text-xl font-bold">AHTIS CORP</span>

            <p className="text-gray-400 text-sm mt-2">
              Your trusted partner in Energy and generator excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold text-[#96C93C] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Services</a></li>
              <li><a href="#Clients" className="text-gray-400 hover:text-yellow-400">Our Clients</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold text-[#96C93C] mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Generator/Sales</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Panels</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Fabrication</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-[#96C93C] mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 text-[#96C93C] mr-2" />
                <a href="https://maps.app.goo.gl/KmR2rs4c4PvPWosa7" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Locate Us</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 text-[#96C93C] mr-2" />
                <a href="tel:+918122104339" className="hover:text-yellow-400">9884138359</a>
              </li>
             
              
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© 2025 Athis Corp All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
