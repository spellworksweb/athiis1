import React from "react";

const clients = [
  { name: "Slack", logo: "/clients/logo1.png" },
  { name: "Twitter", logo: "/clients/logo2.png" },
  { name: "Deliveroo", logo: "/clients/logo3.png" },
  { name: "Cloud", logo: "/clients/logo4.png" },
  { name: "NY Times", logo: "/clients/logo5.png" },
  { name: "Zoom", logo: "/clients/logo6.png" },
  { name: "Coinbase", logo: "/clients/logo7.png" },
  { name: "GitHub", logo: "/clients/logo8.png" },
  { name: "Dropbox", logo: "/clients/logo9.png" },
  { name: "GitHub", logo: "/clients/logo10.png" },
  { name: "Dropbox", logo: "/clients/logo11.png" },
  { name: "GitHub", logo: "/clients/logo12.png" },
];

const ClientsPage: React.FC = () => {
  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full">
  <img
    src="/img/client.jpeg"
    alt="City"
    className="w-full h-[200px] md:h-[300px] lg:h-[300px] object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 "></div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-4">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
      Our Clients
    </h2>
    <p className="text-sm md:text-base lg:text-lg mt-4 max-w-2xl text-center">
      At <span className="font-semibold">Athis Corp</span>, we are proud
      to partner with some of the most innovative and trusted companies
      worldwide. Our commitment to excellence and innovation drives us to
      deliver exceptional value to our clients.
    </p>
  </div>
</div>




      {/* Client Description */}
      <div className="w-full text-center mt-12 px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify hover:text-gray-800 transition-colors duration-300">
          <span className="text-5xl md:text-7xl text-green-500 font-bold float-left mr-2 hover:text-green-700 transition-colors duration-300">
            A
          </span>
          <span className="text-green-500 font-bold hover:text-green-700 transition-colors duration-300">
            THIS CORP
          </span>{" "}
          stands out for its commitment to{" "}
          <span className="text-green-500 font-bold hover:text-green-700 transition-colors duration-300">
            excellence
          </span>{" "}
          and{" "}
          <span className="text-green-500 font-bold hover:text-green-700 transition-colors duration-300">
            innovation
          </span>
          . Our clients trust us because we offer{" "}
          <span className="text-green-500 font-bold hover:text-green-700 transition-colors duration-300">
            reliable
          </span>
          , high-quality solutions tailored to their specific needs. We
          prioritize{" "}
          <span className="text-green-500 font-bold hover:text-green-700 transition-colors duration-300">
            customer satisfaction
          </span>
          , ensuring every partnership fosters business growth and efficiency.
          Over the years, we have built a reputation for delivering exceptional
          results. Our clients range from startups to multinational corporations
          across various industries, including technology, finance, healthcare,
          and manufacturing. Each partnership is a testament to our ability to
          adapt and innovate, ensuring that we meet the unique challenges of
          every client.
        </p>
      </div>

      {/* Client Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto mt-12 px-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="bg-green-600 text-white py-12 mt-16 px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Partner with Us</h2>
          <p className="mt-4 text-base md:text-lg">
            Join the growing list of companies that trust Athis Corp for
            innovative and reliable solutions. Contact us today to learn more!
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-6 bg-white text-green-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;