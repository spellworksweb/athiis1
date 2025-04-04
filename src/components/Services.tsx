import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Service" },
    { id: "Generator", label: "Generator/Sales" },
    { id: "Panels", label: "Panels" },
    { id: "Fabrication", label: "Fabrication" },
  ];

  const services = {
    Generator: [
      {
    id: 1,
    title: "LHP Generator (7.5 - 18.5 kVA, 1 Phase)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Prime-rated diesel generator with a power output of 6kWe - 14.8kWe.",
  },
  {
    id: 2,
    title: "LHP Generator (7.5 - 20 kVA, 3 Phase)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Prime-rated diesel generator with a power output of 6kWe - 16kWe.",
  },
  {
    id: 3,
    title: "LHP Generator (25 - 35 kVA, 1 Phase)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Prime-rated generator with a power output of 20 - 32 kWe, suitable for small businesses.",
  },
  {
    id: 4,
    title: "LHP Generator (40 - 50 kVA, 3 Phase)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Reliable power backup with a capacity of 32.8 - 40 kWe.",
  },
  {
    id: 5,
    title: "LHP Generator (40 - 50 kVA)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Versatile generator providing 32.8 - 40 kWe for various applications.",
  },
  {
    id: 6,
    title: "LHP Generator (50 - 58.5 kVA)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Powerful backup solution with an output of 40 - 47 kWe.",
  },
  {
    id: 7,
    title: "LHP Generator (82.5 - 140 kVA)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Prime-rated generator with a power range of 66 kWe - 112 kWe.",
  },
  {
    id: 8,
    title: "LHP Generator (160 - 250 kVA)",
    image: "https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Heavy-duty generator offering 128 kWe - 200 kWe for industrial applications.",
  }
    ],
    Panels: [
      {
        id: 1,
        title: "Main Electrical Panel",
        image:
          "https://th.bing.com/th/id/OIP.12345-Main-Panel?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Distributes electricity from the utility to various circuits in a building.",
      },
      {
        id: 2,
        title: "Main Lug Panel",
        image:
          "https://th.bing.com/th/id/OIP.67890-Main-Lug-Panel?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "A type of panel where line wires run through a main lug instead of a main breaker.",
      },
      {
        id: 3,
        title: "Subpanels",
        image:
          "https://th.bing.com/th/id/OIP.54321-Subpanel?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "A secondary panel connected to the main panel to distribute power to specific areas.",
      },
      {
        id: 4,
        title: "Three-Phase Panel",
        image:
          "https://th.bing.com/th/id/OIP.11223-Three-Phase-Panel?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Used in industrial settings to supply power efficiently to large equipment.",
      },
      {
        id: 5,
        title: "Automatic Power Factor Control (APFC) Panels",
        image:
          "https://th.bing.com/th/id/OIP.33445-APFC-Panel?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Optimizes power factor in electrical systems to improve energy efficiency.",
      },
      {
        id: 6,
        title: "Motor Control Centre (MCC) Panels",
        image:
          "https://th.bing.com/th/id/OIP.55667-MCC-Panel?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Centralized system for motor control in industries, reducing downtime and maintenance.",
      },
      {
        id: 7,
        title: "Power Control Centre (PCC) Panels",
        image:
          "https://th.bing.com/th/id/OIP.77889-PCC-Panel?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Regulates and distributes power efficiently in industrial setups.",
      }
    ],
    Fabrication: [
      {
        id: 1,
        title: "Sheet Metal Fabrication",
        image:
          "https://th.bing.com/th/id/OIP.SheetMetal-12345?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Precision sheet metal fabrication services.",
      },
      {
        id: 2,
        title: "Custom Structural Fabrication",
        image:
          "https://th.bing.com/th/id/OIP.Structure-67890?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Custom structural fabrication for heavy industries.",
      },
      {
        id: 3,
        title: "Custom Structural Fabrication",
        image:
          "https://th.bing.com/th/id/OIP.Structure-67890?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Custom structural fabrication for heavy industries.",
      },
    ],
  };

  const allProjects = [
    {
      id: 1,
      title: 'Generator/sales',
      category: 'Generator',
      image: 'https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Reliable power solutions with CPCB IV+ compliant generators for industrial and commercial needs.',
    },
    {
      id: 2,
      title: 'Panels',
      category: 'Panels',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Customized electrical panels for enhanced automation, safety, and energy efficiency.',
    },
    {
      id: 3,
      title: 'Mechanical Fabrication',
      category: 'Fabrication',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80',
      description: 'High-quality industrial fabrication services for metal structures, enclosures, and skids.',

    }
  ];

  const filteredProjects = selectedCategory === "all" ? allProjects : [];

  return (
    <div id="services" className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#96C93C] transition-all duration-300 hover:text-[#C1FF72] hover:shadow-[0_0_10px_#96C93C] animate-pulse px-4 py-2 rounded-md border border-[#96C93C] hover:bg-[#96C93C] hover:text-white cursor-pointer w-fit mx-auto">
        Our Service
      </h2>

      {/* Category Buttons */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#90EE90] text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {selectedCategory in services
                ? services[selectedCategory].map((service) => (
                    <motion.div
                      layout
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                : filteredProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
