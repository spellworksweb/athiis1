import { motion } from "framer-motion";
import { FaBolt, FaCogs, FaHandshake, FaTools, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="relative bg-white pt-16 pb-16 w-full">
  

      <div className="w-full px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center mb-12 bg-gradient-to-r from-green-500 to-green-600 text-white py-16 rounded-lg shadow-lg"
        >
          <h2 className="text-5xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold">ATHIS CORP</span>, we bring over a decade of expertise in <span className="font-medium">Generators</span>, <span className="font-medium">Electrical Panels</span>, and <span className="font-medium">Fabrication</span>. Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner in the industry.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <FaUsers className="text-green-500 text-5xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Customer Focus</h4>
              <p className="text-gray-600">
                We prioritize our customers' needs and work tirelessly to exceed their expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <FaHandshake className="text-green-500 text-5xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-gray-600">
                Honesty and transparency are at the heart of everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <FaCogs className="text-green-500 text-5xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-gray-600">
                We embrace creativity and cutting-edge technology to deliver exceptional solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Mission and Vision Section */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Mission */}
  <motion.div
    className="relative group p-6 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-green-200"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h3>
    <p className="text-lg text-gray-700 leading-relaxed font-light">
      Our mission is to empower businesses with sustainable and efficient power solutions. We strive to provide innovative, high-quality, and customer-focused services that ensure uninterrupted operations and long-term success for our clients.
    </p>
    {/* Gradient hover effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-100 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl"></div>
  </motion.div>

  {/* Vision */}
  <motion.div
    className="relative group p-6 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-green-200"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <h3 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h3>
    <p className="text-lg text-gray-700 leading-relaxed font-light">
      To be a global leader in power and fabrication solutions, recognized for our commitment to innovation, sustainability, and excellence. We envision a future where businesses thrive with reliable and eco-friendly energy solutions tailored to their unique needs.
    </p>
    {/* Gradient hover effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-100 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl"></div>
  </motion.div>
</motion.div>

        {/* Our Expertise Section */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#96C93C]">
              Power Up with Athis Corp – Your Reliable Generator Experts!
            </h3>
            <p className="text-lg leading-relaxed text-gray-200 font-light">
              Athis Corp specializes in sales, service, installation, and maintenance of diesel generator sets. With a team of skilled electrical and mechanical engineers, we guarantee top-quality service and seamless power solutions.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-gray-300">
                <FaTools className="text-green-400 text-2xl" />
                <span>Expert Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FaBolt className="text-green-400 text-2xl" />
                <span>Reliable Power Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FaCogs className="text-green-400 text-2xl" />
                <span>Innovative Technology</span>
              </div>
            </div>
          </motion.div>

          {/* Google Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-300 rounded-lg overflow-hidden shadow-2xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.697001085748!2d80.1067958!3d12.991221500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52614a281efb67%3A0xb8342ca41619aa13!2sVNR%20Apartment!5e0!3m2!1sen!2sin!4v1743609259786!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
