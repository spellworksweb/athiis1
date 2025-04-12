import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { serviceCategories } from "./Services";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = serviceCategories
    .flatMap((category) => category.services)
    .find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div className="text-center text-gray-600 p-6">
        Service not found.
      </div>
    );
  }

  const sections = [
    { title: "📝 Description", content: service.description },
    { title: "📖 About", content: service.about },
    { title: "⚙️ Specifications", content: service.specs },
    { title: "💡 Benefits", content: service.benefits },
    { title: "📌 Use Cases", content: service.useCases },
    { title: "🎁 Included", content: service.included },
  ];

  return (
    <motion.div
      className="pt-16 w-full bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Service Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12">
        <h1 className="text-5xl font-bold text-center">{service.name}</h1>
        <p className="text-center mt-2 text-lg">
          Discover the features and benefits of our premium service.
        </p>
      </div>

      {/* Service Image */}
      {service.image && (
        <div className="flex justify-center mt-8">
          <motion.img
            src={service.image}
            alt={service.name}
            className="w-11/12 max-w-4xl h-80 object-cover rounded-lg shadow-lg"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      )}

      {/* Content Grid */}
      <div className="mt-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2 mb-4">
              {section.title}
            </h2>
            {Array.isArray(section.content) ? (
              <ul className="space-y-2">
                {section.content.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="text-green-500 mt-1">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Final Call-to-Action */}
      <div className="bg-green-600 text-white py-12 mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-2 text-lg">
            Contact us today to discuss your requirements and get expert advice.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-4 bg-white text-green-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;