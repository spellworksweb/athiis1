import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const serviceCategories = [
  {
    category: "Generator Sales & Services",
    services: [
      {
        id: 1,
        name: "7.5 - 18.5 kVA Generator (1 Phase)",
        image: "/generators/img1.jpg",
        description: "Efficient 1-phase generator ideal for home and small business applications.",
        specs: ["Capacity: 7.5 - 18.5 kVA", "Output: 6kWe - 14.8kWe", "Prime Rated"],
        details: `Cummins® X2.5 Series generators deliver efficient and environmentally-friendly power. These are ideal for homes, retail spaces, and small business operations with moderate load needs.`,
        about: "The X2.5 series engine ensures low emissions and high reliability without any after-treatment device. Designed to perform under demanding conditions with optimal fuel efficiency and minimal maintenance, it's compact yet powerful.",
        benefits: ["Lower fuel consumption for reduced operating cost",
           "Extended service interval of 500 hours / 18 months",
            "Comprehensive warranty covering engine, alternator & control systems",
          "Serviceability and noise compliance built into acoustic enclosure"],
        useCases: ["Small offices and retail outlets",
           "Agricultural water pumps",
          "Residential back-up power",
        "Emergency backup for ATMs or clinics"],
        included: ["Weatherproof canopy",
            "AVM pad-mounted base frame",
            "Initial fill of coolant and lube oil",
            "PowerStart™ PS0600 controller with AMF",
            "Standard fuel tank and silencer"]
      },
      {
        id: 2,
        name: "7.5 - 20 kVA Generator (3 Phase)",
        image: "/generators/img2.webp",
        description: "Reliable 3-phase generator perfect for commercial setups.",
        specs: [
          "Rated Power: 7.5 – 20 kVA",
          "Phase: 3 Phase",
          "Engine: Water-cooled, 2-cylinder",
          "Emission Compliance: CPCB II",
          "RPM: 1500",
          "Fuel Tank Capacity: 65 L",
          "Voltage: 230/415V"
        ],
        details: `This 1-phase generator is designed for homes and small businesses, 
        providing a stable power supply even in fluctuating conditions. 
        It features advanced fuel efficiency, low noise levels, and a compact 
        design, making it easy to install and maintain.`,
        about: "This generator offers a rated speed of 1500 RPM and complies with CPCB II emission norms. Built with a 2-cylinder water-cooled engine, it's suited for environments that demand dependable performance in a compact footprint.",
        benefits: [
          "Compact design suitable for small spaces",
          "Low noise and vibration",
          "Easy installation and service access",
          "Highly efficient fuel consumption"
        ],
        useCases: [
          "Retail stores",
          "Clinics and hospitals",
          "Construction sites",
          "Backup for homes or small apartments"
        ],
        included: [
          "Base frame with anti-vibration mountings",
          "Integrated fuel tank",
          "First service kit"
        ]
      },
      {
        id: 5,
        name: "25 - 35 kVA Generator (1 Phase)",
        image: "/generators/img3.webp",
        description: "Heavy-duty power for larger needs with 1-phase output.",
        specs: ["Capacity: 25 - 35 kVA", "Output: 20 - 32 kWe", "Prime Rated"],
        details: `High-performance single-phase diesel generator tailored for residential, small business, and rural applications, combining quiet operation with durability and fuel efficiency.`,
        about: "The Cummins X2.6 Series single-phase generator set delivers rugged reliability and class-leading performance in a compact form factor. Engineered with CPCB IV+ compliance, this set uses a 3-cylinder turbocharged engine paired with a Stamford alternator. Ideal for low to medium power needs in areas with single-phase electricity, it provides dependable energy with minimal environmental impact.",
        benefits: [
          "Meets CPCB IV+ norms with reliable emissions control",
          " ⁠Compact design suitable for tight installations",
          " ⁠Single-source design ensures optimal compatibility",
          "Low lifecycle cost and dependable performance"
        ],
        useCases: [
          "⁠Residential back-up power",
          " ⁠Standalone retail shops",
          "Small rural enterprises",
          "⁠Healthcare and clinics in remote areas",
          "Agricultural operations and pumps"
        ],
        included: [
          "Critical-grade silencer",
          "⁠Weatherproof acoustic enclosure",
          " ⁠First fill of oil and coolant",
          "⁠Base frame with integrated fuel tank"
        ]
      },
      {
        id: 6,
        name: "40 - 50 kVA Generator (3 Phase)",
        image: "/generators/img4.jpg",
        description: "Robust performance and efficient energy use.",
        specs: ["Capacity: 40 - 50 kVA", "Output: 32.8 - 40 kWe", "Prime Rated"],
        details: `Cummins® X3.6 Series gensets are known for rugged durability and powerful performance. Built for industrial-grade reliability and superior emission compliance.`,
        about: "Powered by Cummins X3.6 engine and Stamford alternator, these gensets offer top efficiency even at part loads and are engineered for altitude performance, noise control, and compact deployment.",
        benefits: [
          "Reliable startup with 12V electric starter",
          "Service-friendly modular design with access ports",
          "Lube oil and fuel drain systems integrated",
          "Backed by India’s largest support network",
          "Extended service interval and high uptime"
        ],
        useCases: [
          "Construction sites and factories",
          "Retail stores and warehouses",
          "Educational institutions",
          "Real estate and commercial buildings"
        ],
        included: [
          "Control panel with AMF functionality",
          "Silencer and canopy for noise suppression",
          "Engine and alternator mounted on common frame",
          "Remote monitoring compatible",
          "Optional PMG/space heater/cold start kit"
        ]  
      },
      {
        id: 7,
        name: "50 - 58.5 kVA Generator",
        image: "/generators/img5.webp",
        description: "Medium capacity for small industries and offices.",
        specs: ["Capacity: 50 - 58.5 kVA",
           "Output: 40 - 47 kWe",
            "Prime Rated",
          "Engine Type: Ashok Leyland AL 4CTIDG2/3",
        "RPM: 1500",
      "Voltage: 415V, 3 Phase",
    "Alternator: Stamford or equivalent, brushless",
  "Cooling: Water-cooled",
"Fuel Tank: 100 Litres"],
        details: `Medium-capacity generator delivering steady performance for commercial and light industrial use. Ideal for applications requiring uninterrupted power supply.`,
        about: "Features an Ashok Leyland engine with 3/4 cylinders, mechanical governor, and brushless alternator. Delivers excellent voltage regulation and low total harmonic distortion.",
        benefits: [
          "Rugged engine for long-term usage",
          "Excellent fuel economy ",
          "Enhanced safety and performance controls",
          "Low maintenance and operating costs"
        ],
        useCases: [
          "Manufacturing units",
          "Hotels and banquet halls",
          "Schools and colleges",
          "Large residential apartments"
        ],
        included: [
          "Standard canopy",
          "Control panel with AMF",
          "Exhaust system with insulation"
        ]
      },
      {
        id: 8,
        name: "82.5 - 140 kVA Generator",
        image: "/generators/img6.webp",
        description: "High-capacity solution for mid-size to large operations.",
        specs: [
          "Output Range: 82.5 – 140 kVA",
          "Engine: Ashok Leyland 6DTI/HA494TIC",
          "Voltage: 415V, 3 Phase",
          "Alternator: Brushless with AVR",
          "Cooling System: Liquid cooled",
          "Fuel Tank: 180 L"
        ],
        details: `High-capacity diesel generator for mission-critical operations. Designed for continuous duty with reliability and advanced controls.`,
        about: "Powered by the Ashok Leyland 6-cylinder inline engine, this genset ensures stable power delivery, excellent load acceptance, and extended durability. Ideal for industrial installations and infrastructure hubs.",
  benefits: [
    "Handles sudden load changes smoothly",
    "Ideal for prime or standby applications",
    "Comes with integrated safety features",
    "Wide service network for after-sales support"
  ],
  useCases: [
    "IT parks",
    "Large factories and warehouses",
    "Public infrastructure and transport systems",
    "Hospitals and data centers"
  ],
  included: [
    "Skid base with built-in fuel tank",
    "Control panel with auto start/stop",
    "Residential-grade acoustic canopy"
  ]
      },
      {
        id: 9,
        name: "160 - 250 kVA Generator",
        image: "/generators/img7.jpg",
        description: "Powerful backup for high-demand operations.",
        specs: [
          "Power Rating: 160 to 250 kVA (128 to 200 kWe)",
          "Voltage: 415V, 50 Hz | 3 Phase",
          "Engine: Cummins QSB6.7 – 6 Cylinder, Inline, 4-Stroke",
          "Alternator: Stamford S3L1D, Brushless",
          "Cooling: Liquid Cooled Radiator System",
          "Aspiration: Turbocharged, Aftercooled",
          "Fuel: High-Speed Diesel with AUS32 (DEF)",
          "Noise Level: ≤ 75 dBA @ 1m at 75% load"
        ],
        details: `Powerful and fuel-efficient generator set engineered for mid-scale operations, offering durability, precision control, and compliance with advanced emission norms.`,
        about: "The Cummins QSB6.7 Series diesel generator set blends proven durability with intelligent control and CPCB IV+ emission compliance. It features a 6-cylinder common rail electronic fuel system, integrated after-treatment, and a compact, robust structure. Built for reliability and optimal cost-performance balance, this generator suits a wide variety of industrial and commercial needs.",
  benefits: [
    "Meets latest MoEF/CPCB IV+ emission norms",
    "750 or 500 hours/1-year service interval",
    "Integrated design with Cummins components for reliability",
    "High-efficiency and load-handling capability",
    "Comprehensive warranty and low total cost of ownership"
  ],
  useCases: [
    "Mid-sized industries and factories",
    "Large office complexes",
    "Commercial buildings and shopping centers",
    "Healthcare and pharma units",
    "Backup for essential municipal infrastructure"
  ],
  included: [
    "Hospital-grade silencer with rain cap",
    "Acoustic enclosure with Rockwool insulation",
    "Remote monitoring system (4G capable)",
    "Integrated fuel and DEF tank",
    "First fill of oil and coolant"
  ]
      },
      {
        id: 10,
        name: "380 - 500 kVA Generator",
        image: "/generators/img9.jpeg",
        description: "Heavy-duty generator supporting major infrastructure needs.",
        specs: [
          "Power Rating: 380 to 500 kVA (304 to 400 kWe)",
          "Voltage: 415V, 50 Hz | 3 Phase",
          "Engine: Cummins QSM15 – 6 Cylinder, Inline, 4-Stroke",
          "Alternator: Stamford HCI444E/F & HCI544D, Brushless",
          "Cooling: Liquid Cooled Radiator System",
          "Aspiration: Turbocharged & Charge Air Cooled",
          "Fuel: High-Speed Diesel",
          "Noise Level: ≤ 75 dBA @ 1m at 75% load"
        ],
        details: `Heavy-duty generator supporting major infrastructure needs with robust performance and class-leading emission compliance.`,
        about: "The Cummins QSM15 Series diesel generator set combines rugged design, unmatched performance, and compliance with CPCB IV+ norms. Featuring a compact size with superior power-to-weight ratio, it integrates proven electronic fuel systems and emission treatment for high efficiency and low environmental impact. Designed for mission-critical operations, it offers exceptional durability and lower operational costs.",
  benefits: [
    "CPCB IV+ compliant eco-friendly power",
    "Lowest operating costs with high fuel efficiency",
    "500 hours/1-year service interval",
    "Integrated single-source power package from Cummins",
    "Reliable for continuous duty applications",
    "Best-in-class support and spares network"
  ],
  useCases: [
    "Industrial production facilities",
    "Large infrastructure projects",
    "Hospitals and healthcare campuses",
    "Corporate IT and Data Centers",
    "Construction & Real Estate sector"
  ],
  included: [
    "Hospital-grade silencer with rain cap",
    "Remote monitoring support (4G compatible)",
    "First fill of oil and coolant",
    "Built-in fuel and DEF tank",
    "Weatherproof acoustic enclosure"
  ]
      },
      {
        id: 11,
        name: "650 - 750 kVA Generator",
        image: "/generators/img10.jpeg",
        description: "Massive power solution for mission-critical applications.",
        specs: [
          "Power Rating: 650 to 750 kVA (520 to 600 kWe)",
          "Voltage: 415V, 50 Hz | 3 Phase",
          "Engine: Cummins QSK19-G30 – 6 Cylinder, Inline, 4-Stroke",
          "Alternator: Stamford HCI554F (650kVA) / HCI634W (750kVA), Brushless",
          "Cooling: Liquid Cooled (EG Compleat 50:50)",
          "Aspiration: Turbocharged, Charge Air Cooled",
          "Fuel: High-Speed Diesel",
          "Noise Level: ≤ 75 dBA @ 1m at 75% load",
          "DEF Capacity: 139 litres | Fuel Tank Capacity: 990 litres"
        ],
        details: `This 1-phase generator is designed for homes and small businesses, 
        providing a stable power supply even in fluctuating conditions. 
        It features advanced fuel efficiency, low noise levels, and a compact 
        design, making it easy to install and maintain.`,
        about: "The Cummins QSK19 Series diesel generator set delivers robust high-capacity power designed for critical industrial and commercial applications. Engineered with a 6-cylinder inline configuration and turbocharged aspiration, this CPCB IV+ compliant system offers unmatched reliability, efficiency, and ease of operation. Integrated with Cummins’ trusted engine, alternator, and control technologies, it ensures single-source power assurance with industry-leading performance.",
  benefits: [
    "CPCB IV+ compliant for environmentally responsible operation",
    "High efficiency and reliable performance under varying loads",
    "Extended service life with heavy-duty components",
    "Single-source support from Cummins for engine, alternator, and controls",
    "Low total cost of ownership with optimal fuel economy",
    "Comprehensive warranty including rubber components"
  ],
  useCases: [
    "Large commercial complexes and industrial plants",
    "Telecom hubs and mission-critical infrastructure",
    "Hospitals and large healthcare facilities",
    "Institutional campuses and government facilities",
    "Construction, mining, and remote operations"
  ],
  included: [
    "Critical grade silencer",
    "Weatherproof acoustic enclosure with inside bolt design",
    "First fill of high-performance oil (CK4) and coolant",
    "Base frame with integrated 990-litre fuel tank",
    "Optional remote monitoring system",
    "DEF tank with 139-litre capacity",
    "Heavy-duty Cummins® QSK19-G30 engine",
    "STAMFORD alternator (HCI554F for 650kVA / HCI634W for 750kVA)",
    "Turbocharged, charge air cooled design",
    "Compliance with ISO 8528, ISO 3046, ISO 9001 standards"
  ]
      },
      {
        id: 12,
        name: "320 kVA Generator",
        image: "/generators/img8.webp",
        description: "Industrial grade generator with strong reliability.",
        specs: [
          "Power Rating: 320 kVA (256 kWe)",
          "Voltage: 415V, 50 Hz | 3 Phase",
          "Engine: Cummins QSL9 – 6 Cylinder, Inline, 4-Stroke",
          "Alternator: Stamford HCI444D, Brushless",
          "Cooling: Liquid Cooled Radiator System",
          "Aspiration: Turbocharged & Charge Air Cooled",
          "Fuel: High-Speed Diesel with AUS32 (DEF)",
          "Noise Level: ≤ 75 dBA @ 1m at 75% load"
        ],
        details: `The Cummins QSK19 Series 650–750 kVA diesel generator delivers high-capacity, CPCB IV+ compliant power with robust efficiency and reliability. Ideal for critical operations, it features a turbocharged engine, brushless alternator, and integrated fuel and DEF systems. Backed by Cummins’ single-source support and a comprehensive warranty for peace of mind.`,
        about: "The Cummins QSL9 Series generator is a robust solution featuring an advanced electronic fuel system and high-output Stamford alternator. Designed for continuous operation under demanding conditions, this 6-cylinder unit integrates all core components from Cummins to ensure power consistency and serviceability.",
  benefits: [
    "Meets CPCB IV+ norms with exhaust after-treatment",
    "Compact size with superior power-to-weight ratio",
    "500 hours/1-year service interval",
    "Reliable single-source package from Cummins",
    "Proven efficiency and fuel economy"
  ],
  useCases: [
    "Commercial and residential complexes",
    "Light industrial units",
    "Healthcare and labs",
    "Institutional campuses",
    "Urban infrastructure projects"
  ],
  included: [
    "Hospital-grade silencer",
    "Weatherproof acoustic enclosure",
    "Remote monitoring support",
    "Fuel and DEF tank integration",
    "First fill of oil and coolant"
  ]
      }
    ]
  },
  {
    category: "Electrical Panels",
    services: [
      {
        id: 3,
        name: "Main Electrical Panel",
        image: "/panels/img1.avif",
        description: "Distributes electricity efficiently to various circuits.",
        specs: [
          "Voltage Range: 220V - 480V",
          "High load-bearing busbars",
          "Short circuit & overload protection",
          "Expandable for future circuits",
          "Integrated with earthing and surge protection"
        ],
        details: `Our main electrical panel ensures safe and efficient power 
        distribution across all circuits. It meets the latest industry standards 
        and offers robust protection against short circuits and overloads.`,
        about: "The Main Electrical Panel, also known as the service panel, houses circuit breakers that protect and control the entire building's electrical system. It ensures safe and stable power distribution and is essential in both commercial and industrial applications.",
  benefits: [
    "Centralized power management",
    "Reduces fire and electrical hazard risks",
    "Enables easy circuit isolation during maintenance",
    "Complies with safety and regulatory standards"
  ],
  useCases: [
    "Residential apartment blocks",
    "Office buildings",
    "Small to mid-sized industrial units"
  ],
  included: [
    "Copper/Aluminum busbars",
    "MCCBs and ELCBs"
  ]
      },
      {
        id: 13,
        name: "Main Lug Panel",
        image: "/panels/img2.jpg",
        description: "Simplified distribution setup with direct lug connection.",
        specs: [
          "Direct wire input through lugs",
          "Compact footprint",
          "Wall-mounted or floor-standing options",
          "Up to 600A load handling"
        ],
        details: `A simple version of the main panel without a main breaker, ideal when a main disconnect exists upstream`,
        about: "Main Lug Panels are installed as downstream panels where upstream protection is available. It simplifies wiring and is useful in split distribution systems.",
  benefits: [
    "Space-efficient for utility closets or extensions",
    "Easy to install and maintain",
    "Cost-effective solution for sub-main distribution"
  ],
  useCases: [
    "Utility rooms in commercial buildings",
    "Sub-distribution for large campuses",
    "Workshops with multiple supply zones"
  ],
  included: [
    "Pre-wired copper lugs",
    "Mounting frame and backplate",
    "Powder-coated enclosure"
  ]
      },
      {
        id: 14,
        name: "Subpanel",
        image: "/panels/img3.jpg",
        description: "Used to expand existing electrical systems efficiently.",
        specs: [
          "Multiple circuit capacity",
          "Can be fed by breaker or fused disconnect",
          "Load-rated busbar system",
          "Built-in neutral and ground bars"
        ],
        details: `Extension panel that allows controlled expansion of electrical circuits without modifying the main panel.`,
        about: "Subpanels work in tandem with the main panel and provide localized circuit control. They are ideal for splitting loads across distant sections of a building.",
  benefits: [
    "Flexible expansion without main panel overload",
    "Ideal for segmented areas like garages or basements",
    "Helps in energy usage monitoring"
  ],
  useCases: [
    "Large homes with external units",
    "Industrial floors with isolated machinery",
    "Commercial areas with separate billing"
  ],
  included: [
    "Circuit breakers (optional)",
    "Pre-mounted DIN rail",
    "Customizable door lock options"
  ]
      },
      {
        id: 15,
        name: "Three-Phase Panel",
        image: "/panels/img4.webp",
        description: "Ideal for heavy-duty three-phase industrial requirements.",
        specs: [
          "3-phase, 4-wire configuration",
          "Reinforced copper busbars",
          "High power factor handling",
          "Supports star/delta loads"
        ],
        details: `Designed for three-phase power systems, handling larger electrical loads with enhanced stability and efficiency.`,
        about: "Three-phase panels are essential in industries that rely on heavy-duty motors, HVAC systems, and high-power equipment. They ensure even power distribution across all three lines.",
  benefits: [
    "Reduces imbalance and phase loss",
    "Handles surge loads effectively",
    "Improves energy efficiency in industrial setups"
  ],
  useCases: [
    "Manufacturing plants",
    "Warehouses with automation systems",
    "Data centers and communication hubs"
  ],
  included: [
    "Voltage metering system",
    "Busbar shrouding",
    "Cable entry with gland plate"
  ]
      },
      {
        id: 16,
        name: "APFC Panel",
        image: "/panels/img5.jpg",
        description: "Enhances energy efficiency and reduces electricity costs.",
        specs: [
          "Real-time power factor controller",
          "Auto capacitor switching",
          "Power analyzers for monitoring",
          "Alarm system for capacitor failure"
        ],
        details: `Automatic Power Factor Correction (APFC) Panels dynamically manage reactive power and optimize power factor.`,
        about: "Equipped with capacitor banks and controllers, APFC Panels monitor real-time power factor and switch capacitors to minimize electrical losses and penalties.",
  benefits: [
    "Saves on electricity bills",
    "Avoids power factor penalty charges",
    "Enhances efficiency of electrical systems"
  ],
  useCases: [
    "Commercial buildings with high lighting loads",
    "Industrial setups with motor-heavy operations",
    "Hotels and malls with HVAC systems"
  ],
  included: [
    "Detuned reactors (on request)",
    "Digital display for PF status",
    "Cooling fan and filters"
  ]
      },
      {
        id: 17,
        name: "Motor Control Centre (MCC) Panel",
        image: "/panels/img6.jpg",
        description: "Centralized control for motors in industrial systems.",
        specs: [
          "Modular design for multiple motor feeders",
          "DOL, Star Delta, VFD starter support",
          "Overload and short-circuit protection",
          "Motor status indication"
        ],
        details: `Manages and protects motors in industrial environments with centralized control and monitoring.`,
        about: "MCC Panels are essential in motor-intensive industries. They house motor starters, protection relays, and control circuitry, offering control at a single point.",
  benefits: [
    "Centralized motor protection and control",
    "Easy diagnostics and maintenance",
    "Enhances machine uptime"
  ],
  useCases: [
    "Water treatment plants",
    "Food and beverage industries",
    "Cement and steel plants"
  ],
  included: [
    "Remote operation-ready controls",
    "Cable alley for easy wiring",
    "Lockable compartments"
  ]
      },
      {
        id: 18,
        name: "Power Control Centre (PCC) Panel",
        image: "/panels/img7.webp",
        description: "Comprehensive power distribution and control.",
        specs: [
          "Up to 6300A rating",
          "Intelligent breakers and relays",
          "Integration with SCADA/BMS",
          "Short-circuit withstand capacity"
        ],
        details: `Controls and distributes power from main supply sources across facility loads in a structured and monitored way.`,
        about: "PCC Panels are high-capacity systems used to regulate the electrical supply across large industries and utilities. They also serve as the base for future expansion.",
  benefits: [
    "Efficiently manages high-demand loads",
    "Enhances operational safety",
    "Ensures uninterrupted power flow"
  ],
  useCases: [
    "Process plants",
    "Thermal and hydro power stations",
    "Telecom hubs and large campuses"
  ],
  included: [
    "Synchronization-ready setup",
    "Redundant power path (optional)",
    "Thermographic-ready design"
  ]
      }
    ]
  },
  {
    category: "Fabrication Works",
    services: [
      {
        id: 4,
        name: "Mechanical Fabrication",
        image: "/fabrications/img1.jpg",
        description: "Precision engineering for mechanical components and frameworks.",
        specs: ["Custom Design", "Structural Strength", "Reliable Assembly", "Industrial Grade Materials"],
        details: `With high-quality materials and expert craftsmanship, 
  our mechanical fabrication services are perfect for industrial and 
  commercial applications. We ensure precision, strength, and long-lasting 
  durability in every project.`,

  about: `Our mechanical fabrication division specializes in creating durable, 
  high-performance components and assemblies tailored to your project’s exact 
  requirements. Whether it’s a custom frame, enclosure, or support structure, 
  we combine CAD-driven design with expert welding and finishing techniques.`,

  included: [
    "CAD design and engineering support",
    "High-grade metals and alloys",
    "Cutting, bending, and welding services",
    "Surface treatment and finishing options"
  ],

  useCases: [
    "Machinery housing and frames",
    "Support structures for industrial setups",
    "Custom enclosures and brackets",
    "Automotive and heavy equipment components"
  ],

  benefits: [
    "Built for strength and precision",
    "Long-lasting performance under stress",
    "Adaptable to your design needs",
    "Quick turnaround with in-house processing"
  ]
      },
      {
        id: 19,
        name: "Custom Fabrication",
        image: "/fabrications/img2.webp",
        description: "Tailor-made fabrication to suit unique client requirements.",
        specs: ["Bespoke Designs", "Versatile Material Handling", "Precision Craftsmanship", "End-to-End Execution"],
  details: `Our custom fabrication services are designed to bring your ideas to life, no matter how unique 
  or complex. From one-off prototypes to full-scale production, we deliver solutions that align with your 
  exact technical and functional requirements.`,

  about: `Custom fabrication is all about flexibility and innovation. Whether you're working on a creative 
  project, building machinery, or developing industrial equipment, we collaborate with you from concept to 
  completion. Our experienced team handles a variety of materials and configurations to ensure the final 
  product meets your standards.`,

  included: [
    "Design consultation and prototyping",
    "CNC machining, cutting, and welding",
    "Support for metals, plastics, and composites",
    "Finishing services including painting and powder coating"
  ],

  useCases: [
    "Specialized equipment and tool fabrication",
    "Architectural metalwork and art installations",
    "Prototype development for R&D",
    "Retrofits and machine modifications"
  ],

  benefits: [
    "100% tailored to your needs",
    "Supports short-run or one-off builds",
    "Expert guidance throughout the project",
    "High precision with modern fabrication tools"
  ]
      }
    ]
  }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isAllOpen, setIsAllOpen] = useState(true);

  const handleAllClick = () => {
    setIsAllOpen(!isAllOpen);
    setSelectedCategory(null); // Reset category selection
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = serviceCategories.find(
    (category) => category.category === selectedCategory
  )?.services || [];

  return (
    <div className="pt-20 flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-1/4 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Service Categories</h2>
        <ul className="space-y-2">
          <li
            className="cursor-pointer py-2 px-4 rounded-md text-lg font-semibold text-green-600 hover:bg-green-100 transition-all duration-300"
            onClick={handleAllClick}
          >
            All Services
          </li>
          {isAllOpen &&
            serviceCategories.map((category, index) => (
              <li
                key={index}
                className={`ml-4 cursor-pointer py-2 px-4 rounded-md text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.category ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.category)}
              >
                {category.category}
              </li>
            ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
  {!selectedCategory ? (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold text-green-700 mb-6">Our Services</h1>
      <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300">
        With over <span className="font-semibold text-green-600">12+ years</span> of expertise in the heavy equipment industry, we take immense pride in offering a wide spectrum of power solutions through top-of-the-line diesel generators. We are committed to excellence in every aspect—from product quality and service efficiency to pricing and long-term customer relationships.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300">
        Our journey began with a simple mission: <span className="italic text-green-600">to power progress</span>. Today, we are a trusted name across <span className="font-semibold">Tamil Nadu, Karnataka, and Andhra Pradesh</span>, known for our reliable generators, technical know-how, and customer-first approach.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300">
        We are authorized dealers and service providers for premium generator brands including:
      </p>
      
      <ul className="space-y-2 pl-6 list-disc text-gray-800">
        <li><span className="text-green-600 font-medium">Kirloskar Generators:</span> Known for durability, fuel efficiency, and high performance across all environments.</li>
        <li><span className="text-green-600 font-medium">Ashok Leyland Generators:</span> Robust, rugged, and perfect for medium to heavy-duty applications.</li>
        <li><span className="text-green-600 font-medium">Mahindra Generators:</span> Compact, eco-friendly, and value-driven diesel solutions.</li>
        <li><span className="text-green-600 font-medium">Cummins Generators:</span> Renowned globally for critical operations requiring efficiency and power.</li>
        <li><span className="text-green-600 font-medium">Eicher Generators:</span> Reliable and cost-effective, suitable for a wide range of applications.</li>
      </ul>
      
      <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300 pt-2">
        Our services go beyond just selling. We provide:
      </p>
      
      <ul className="space-y-2 pl-6 list-disc text-gray-800">
        <li><strong className="text-green-600">Installation & Commissioning:</strong> Safe, tested setups ready to perform.</li>
        <li><strong className="text-green-600">Preventive Maintenance:</strong> Avoid breakdowns and increase lifespan with routine care.</li>
        <li><strong className="text-green-600">Repairs & Emergency Service:</strong> Quick and efficient fault diagnosis and solutions.</li>
        <li><strong className="text-green-600">Genuine Spare Parts:</strong> Original components for performance and compliance.</li>
        <li><strong className="text-green-600">AMC (Annual Maintenance Contracts):</strong> Priority support and regular check-ups for peace of mind.</li>
      </ul>
      
      <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300 pt-2">
        Why customers trust us:
      </p>
      
      <ul className="space-y-2 pl-6 list-disc text-gray-800">
        <li><strong className="text-green-600">Unmatched Experience:</strong> Over a decade of industry presence.</li>
        <li><strong className="text-green-600">Reliable Team:</strong> Skilled professionals focused on service excellence.</li>
        <li><strong className="text-green-600">Customer-Centric Philosophy:</strong> Partnership over transactions.</li>
        <li><strong className="text-green-600">Competitive Pricing:</strong> Value-driven pricing built for long-term gain.</li>
        <li><strong className="text-green-600">Positive Reputation:</strong> Testimonials that speak for our dedication.</li>
        <li><strong className="text-green-600">Wide Service Network:</strong> Fast support across multiple states.</li>
        <li><strong className="text-green-600">Tailored Solutions:</strong> Custom setups for small to large power needs.</li>
      </ul>
      
      <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300 pt-2">
        From factories and hospitals to schools, apartments, IT parks, retail stores, and construction sites, our generators help power lives and businesses. Because for us, electricity is not just a luxury—it's a necessity.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300">
        Whether you're upgrading, starting fresh, or need urgent help—our team is here to support you from selection to setup.
      </p>
      
      <div className="mt-6">
        <p className="text-xl font-semibold text-green-700 mb-2">Let’s Work Together</p>
        <p className="text-lg text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300">
          We’re more than a vendor—we’re your power partner. Contact us today for a <span className="text-green-600 font-medium">free consultation or site visit</span>. Your power needs are our top priority.
        </p>
      </div>
    </motion.div>

  ) : (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-green-600 mb-6"
      >
        {selectedCategory}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-green-600">{service.name}</h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
            <button
              onClick={() => navigate(`/servicedetail/${service.id}`)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </>
  )}
</main>

    </div>
  );
};

export default Services;


// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const serviceCategories = [
//   {
//     category: "Generator Sales & Services",
//     services: [
//       {
//         name: "7.5 - 18.5 kVA Generator (1 Phase)",
//         image: "/generators/img1.jpg",
//         description: "Efficient 1-phase generator ideal for home and small business applications.",
//         specs: ["Capacity: 7.5 - 18.5 kVA", "Output: 6kWe - 14.8kWe", "Prime Rated"]
//       }
//     ]
//   },
//   {
//     category: "Electrical Panels",
//     services: [
//       {
//         name: "Main Electrical Panel",
//         image: "/panels/img1.avif",
//         description: "Distributes electricity efficiently to various circuits.",
//         specs: ["Voltage: 220V - 480V", "Safety Compliant", "Durable Construction"]
//       }
//     ]
//   },
//   {
//     category: "Fabrication Works",
//     services: [
//       {
//         name: "Mechanical Fabrication",
//         image: "/fabrications/img1.jpg",
//         description: "Precision engineering for mechanical components and frameworks.",
//         specs: ["Custom Design", "Structural Strength", "Reliable Assembly"]
//       }
//     ]
//   }
// ];


// const Services = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const navigate = useNavigate();
//   const [isAllOpen, setIsAllOpen] = useState(true);

//   const handleAllClick = () => {
//     setIsAllOpen(!isAllOpen);
//     setSelectedCategory(null); // Reset to landing view
//     // Optionally scroll to top
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const services = serviceCategories.find(
//     (category) => category.category === selectedCategory
//   )?.services || [];
  

//   return (
//     <div className="pt-16 flex flex-col md:flex-row min-h-screen bg-gray-100">
//       {/* Sidebar Navigation */}
//       <aside className="w-full md:w-1/4 bg-white shadow-lg p-6">
//       <h2 className="text-2xl font-bold text-green-600 mb-6">Service Categories</h2>
//       <ul className="space-y-2">

//         {/* All Services (Header) */}
//         <li
//           className="cursor-pointer py-2 px-4 rounded-md text-lg font-semibold text-green-600 hover:bg-green-100 transition-all duration-300"
//           onClick={handleAllClick}
//         >
//           All Services
//         </li>

//         {/* Dropdown Categories */}
//         {isAllOpen &&
//           serviceCategories.map((category, index) => (
//             <li
//               key={index}
//               className={`ml-4 cursor-pointer py-2 px-4 rounded-md text-base font-medium transition-all duration-300 ${
//                 selectedCategory === category.category
//                   ? "bg-green-500 text-white"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//               onClick={() => setSelectedCategory(category.category)}
//             >
//               {category.category}
//             </li>
//           ))}
//       </ul>
//     </aside>

//       {/* Main Content */}
//       <main className="w-full md:w-3/4 p-6">
//         {!selectedCategory ? (
//           <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <h1 className="text-4xl font-bold text-green-700 mb-4">Our Services</h1>
//         </motion.div>
        
//         ) : (
//           <>
//             <motion.h2
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="text-3xl font-bold text-green-600 mb-6"
//             >
//               {selectedCategory}
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.name}
//                     className="w-full h-40 object-cover rounded-md"
//                   />
//                   <h3 className="text-xl font-bold text-green-600 mt-4">{service.name}</h3>
//                   <p className="text-gray-700 mt-1">{service.description}</p>
//                   <ul className="mt-3 space-y-1 text-gray-600">
//                     {service.specs.map((spec, i) => (
//                       <li key={i}>✅ {spec}</li>
//                     ))}
//                   </ul>
//                   <button
//   onClick={() => navigate("/servicedetail", { state: { service } })}
//   className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
// >
//   View Details
// </button>

//                 </motion.div>
//               ))}
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// };
// export default Services;