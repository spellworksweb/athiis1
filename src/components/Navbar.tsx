import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className={`fixed w-full z-50 transition-all duration-500 px-4 ${
    scrolled 
      ? 'bg-white/30 backdrop-blur-lg shadow-lg border border-white/20'
      : 'bg-white/10 backdrop-blur-md border border-white/10'
  }`}
>
      <div className="flex justify-between h-16 px-4">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          
      <img src="/logo.png" alt="Company Logo" className="h-8 w-10" />
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#96C93C] to-green-600 text-transparent bg-clip-text">
  ATHIS CORP
</span>
        </motion.div>
        <div className="flex items-center space-x-8">
        
        {['home', 'about', 'clients', 'services'].map((item) => (
  <motion.a
    key={item}
    href={`#${item}`}
    className="relative group capitalize"
    whileHover={{ y: -3, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <span>{item === 'home' ? 'Home' : item === 'clients' ? 'Our Clients' : 
      item === 'contact' ? 'Contact Us' : item === 'services' ? 'Services' : 'About Us'}
    </span>
    <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[#90EE90] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
  </motion.a>
))}
<motion.a
  href="#contact"
  className="px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#96C93C] to-green-600 shadow-lg shadow-[#96C93C]/50 hover:shadow-green-700/50 transition-all duration-300"

  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Contact Us
</motion.a> 
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;