import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div id="home" className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[1000px] lg:h-[1000px]">
        <img
          src="/bg4.jpg"
          alt="Generator"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <motion.div
            className="w-full px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              CPCB IV+ Emission-Compliant Generators
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Powering the future with clean, efficient, and reliable energy
              solutions
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <motion.div
          className="w-full px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>
      </div>

      {/* Hover Effect */}
      <div className="flex justify-center items-center mt-16">
        <div className="relative flex flex-col items-center text-5xl font-bold tracking-wide cursor-pointer group h-[100px] w-fit">
          <span className="transition-transform duration-500 text-[#031231] group-hover:-translate-y-1">
            Powering Reliability
          </span>

          <span className="absolute transition-transform duration-500 text-[#031231] group-hover:translate-y-10">
            Powering Reliability
          </span>

          <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 bg-[#66e3be] text-white text-lg font-semibold px-6 py-2 opacity-0 
                 transition-opacity duration-500 group-hover:opacity-100 min-w-[150px] flex justify-center items-center"
          >
            Energizing Success!
          </span>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9840000529"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default Home