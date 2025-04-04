
const About = () => {
  return (
    <div id="about" className="bg-white py-14">
      <div className="w-full px-4">
      <h2 className="text-3xl font-bold text-center  mb-8 text-[#96C93C] transition-all duration-300 
  hover:text-[#C1FF72] hover:shadow-[0_0_10px_#96C93C] animate-pulse 
  px-4 py-2 rounded-md border border-[#96C93C] hover:bg-[#96C93C] hover:text-white cursor-pointer w-fit mx-auto">
  About Us
</h2>




        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Text Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8 text-[#96C93C]">
            Power Up with Athis Corp –Your Reliable Generator Experts!
            </h3>
            <p className="text-lg leading-relaxed text-gray-200 font-light">
            Athis Corp is a leading provider of sales, service, installation, and maintenance of diesel generator sets, delivering reliable power solutions for over 12+ years. With a skilled team of electrical and mechanical engineers, we ensure top-quality service and customer satisfaction. Strategically located, we offer fast, efficient, and expert support, making us the trusted choice for power solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 font-light mt-4">
              With years of experience in the automotive care industry, we have built a reputation for excellence, 
              reliability, and customer satisfaction. Whether it's a routine wash, an interior deep clean, or a full 
              ceramic coating, we treat every car as if it were our own.
            </p>
          </div>

          {/* Google Map Section */}
          <div className="bg-gray-300 rounded-lg overflow-hidden shadow-2xl h-[500px]">
            <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.697001085748!2d80.1067958!3d12.991221500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52614a281efb67%3A0xb8342ca41619aa13!2sVNR%20Apartment!5e0!3m2!1sen!2sin!4v1743609259786!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
