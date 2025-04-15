import { motion } from "framer-motion";
import { MessageCircle, Pause, Play, Volume2, VolumeX,PhoneCall } from "lucide-react";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const messages = [
    "Athis Corp specializes in Sales, Services, Installation, and Maintenance of Generator Sets, ensuring uninterrupted power solutions for businesses and industries.",
    "With over 12+ years of experience, Athis Corp has built a reputation for reliability, prompt service, and customer satisfaction in the power solutions sector.",
    "We provide top generator brands like Kirloskar, Ashok Leyland, Mahindra, Cummins, and Eicher, offering our clients the best-in-class power backup solutions.",
    "Our expert team of Electrical & Mechanical Engineers ensures high-quality service, from installation to long-term maintenance of diesel generator sets.",
    "Serving across Tamil Nadu, Karnataka, and Andhra Pradesh, we are strategically positioned to offer fast response times and superior customer support.",
    "At Athis Corp, we focus on building long-term relationships with our customers and business partners by delivering high-quality, cost-effective power solutions."
  ];

  return (
    <div id="home" className="pt-16 relative">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      
        {/* small Featured Image */}
        <div className="relative">
          <img
            src="/img/home1.jpeg"
            alt="Hero"
            className="w-full h-[400px] object-cover "
          />
          <div className="absolute bottom-0 left-0 text-white p-4 w-full">
            <h2 className="text-lg font-bold">Over Million kWh of Clean Energy</h2>
          </div>
        </div>

        {/* Video Section */}
        <div
          className="md:col-span-2 lg:col-span-2 relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            ref={videoRef}
            className="w-full h-[400px] object-cover "
            autoPlay
            loop
            muted={isMuted}
          >
            <source src="/vedio/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button (Appears on Hover) */}
          <button
            onClick={togglePlay}
            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-3 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            {isPlaying ? <Pause size={40} className="text-white" /> : <Play size={40} className="text-white" />}
          </button>

          {/* Mute/Unmute Button (Top Right) */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-75 transition"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          <div className="absolute bottom-0 left-0 text-white p-4 w-full">
            <h2 className="text-lg font-bold">Innovating the Future of Energy</h2>
          </div>
        </div>

        {/* Grid Items */}
        <div className="relative">
          <img
            src="/img/home4.jpeg"
            alt="Factory"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute bottom-0 left-0 text-white p-3 w-full">
            <h3 className="text-lg font-semibold">Innovating the Future of Energy</h3>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.8d428a049a661dcbb63377549752b2ea?rik=U92pWj7x6fI84Q&riu=http%3a%2f%2ftpcgenerators.com%2fwp-content%2fuploads%2f2016%2f08%2fThe-Power-Connection-1153.jpg&ehk=mQ%2fWd%2fqdV%2f4iRMxzwVny4iAgdJXzujlO2MYgVCpthgk%3d&risl=&pid=ImgRaw&r=0"
            alt="Industry"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute bottom-0 left-0 text-white p-3 w-full">
            <h3 className="text-lg font-semibold">Over a Decades of Experience in Power</h3>
          </div>
        </div>

        <div className="relative">
          <img
            src="/fabrications/img4.jpeg"
            alt="Support"
            className="w-full h-[200px] object-cover "
          />
          <div className="absolute bottom-0 left-0 text-white p-3 w-full">
            <h3 className="text-lg font-semibold">Delivering World-Class Customer Support</h3>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9840000529"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>
      <a
  href="tel:9840000529"
  className="fixed bottom-20 right-4 md:bottom-24 md:right-6 bg-green-600 text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
  aria-label="Call Us"
>
  <PhoneCall size={30} />
</a>

      {/* Why Choose Athis Corp Section */}
      <section id="why-athis" className="pt-10 bg-white text-green-700 py-16 px-6 md:px-16">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-green-600 mb-6 tracking-wide">
            Why Choose Athis Corp?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <Typewriter
              words={messages}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={40}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
    {
      title: "Trusted Generator Experts",
      description: "With 12+ years of experience, we specialize in Sales, Services, Installation, and Maintenance of Diesel Generators.",
      icon: "⚙",
    },
    {
      title: "Multi-Brand Generator Solutions",
      description: "We provide top brands like Kirloskar, Ashok Leyland, Mahindra, Cummins, and Eicher, ensuring the best options for our clients.",
      icon: "🔋",
    },
    {
      title: "Rapid Response & Support",
      description: "Located in a strategic area, we ensure fast service and quick response times across Tamil Nadu, Karnataka, and Andhra Pradesh.",
      icon: "⏳",
    },
    {
      title: "Quality & Competitive Pricing",
      description: "We maintain high standards in service while offering competitive pricing to ensure maximum value for our customers.",
      icon: "💰",
    },
    {
      title: "Customer-First Approach",
      description: "We focus on building long-term relationships by delivering reliable, prompt, and high-quality service every time.",
      icon: "🤝",
    },
    {
      title: "Expert Technical Team",
      description: "Our team consists of highly skilled Electrical & Mechanical Engineers with expertise in generator installation and maintenance.",
      icon: "🛠",
    },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative group p-6 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-green-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-green-600 mt-4">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-100 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-green-600 mb-4">
            Ready to Power the Future?
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Join Athis Corp today and take a step toward a sustainable and energy-efficient future.
            Contact our experts to learn how we can help you transform your energy solutions.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>



    </div>
  );
};

export default Home;