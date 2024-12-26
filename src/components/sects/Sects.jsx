import React from "react";
import { FaHeartbeat, FaLaptopMedical } from "react-icons/fa";
import { motion } from "framer-motion";

const Sects = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="text-[#ffffff] text-start py-16 px-4 ">
    <div className="container mx-auto   items-center ">
          {/* Text Content */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-extrabold mb-6 text-purple-900">
              Welcome to <span className="text-white">Surgi Home</span>
            </h1>
            <p className="text-lg leading-relaxed text-white w-1/2 mb-6">
              Surgi Home is at the forefront of healthcare innovation, focusing
              on enhancing surgical specialties. Join us in redefining patient
              care with technology that ensures efficient, accessible, and
              patient-centric solutions.
            </p>
            <motion.button
              className="bg-[#ffffff] hover:bg-purple-900 text-purple-900 font-bold py-3 px-6 rounded-lg shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
           
          </motion.div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="pt-8 px-4">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
            Why Choose <span className="text-white">Surgi Home</span>
          </h2>
          <p className="text-[#ffffff] text-2xl font-bold">
            Discover our innovative solutions designed to transform surgical
            care and improve patient outcomes globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaLaptopMedical className="text-white text-4xl" />,
              title: "Remote Monitoring",
              description: "Discharge patients safely and monitor recovery remotely.",
            },
            {
              icon: <FaHeartbeat className="text-white text-4xl" />,
              title: "Patient-Centric Care",
              description: "Continuous care from the comfort of their homes.",
            },
            {
              icon: <FaLaptopMedical className="text-white text-4xl" />,
              title: "Resource Optimization",
              description: "Reduce hospital readmissions and optimize resources.",
            },
            {
              icon: <FaHeartbeat className="text-white text-4xl" />,
              title: "Global Impact",
              description: "Transforming surgical care worldwide.",
            },
          ].map((item, index) => (
            <motion.div
            key={index}
            className="p-6 bg-purple-600 bg-opacity-30 z-1 inset-14 border-black border-2 shadow-lg rounded-lg text-center"
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            >
              {item.icon}
            </motion.div>
            <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
            <p className="text-white">{item.description}</p>
          </motion.div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sects;
