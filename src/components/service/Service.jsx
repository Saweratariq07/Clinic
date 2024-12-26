import React from "react";
import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaHandsHelping,
} from "react-icons/fa";
import Nav from "../home/Nav";

const Service = () => {
  return (
    <div className="relative bg-black w-full h-auto overflow-hidden">
    <img
  className="absolute w-full h-full object-cover"
  src="bg.jpg"
  alt="Background"
/>
{/* Color Overlay */}
<div className="absolute inset-0 bg-black opacity-50"></div>
      <Nav/>
      <div className="container text-gray-100 py-20 px-6 pt-44 mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-[#ec34cd]  mb-6">
            Research & Development
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white">
            Driving innovation to revolutionize healthcare with smarter, safer,
            and more efficient solutions.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaMicroscope className="text-6xl text-[#ec34cd] " />,
              title: "Colorectal Virtual Ward",
              description:
                "Empowering providers to monitor post-operative patients remotely, ensuring safer recovery.",
            },
            {
              icon: <FaBrain className="text-6xl text-[#ec34cd] " />,
              title: "AI-Driven Analytics",
              description:
                "Leverage AI to enhance outcomes and enable smarter decision-making in patient care.",
            },
            {
              icon: <FaRobot className="text-6xl text-[#ec34cd] " />,
              title: "Future Innovations",
              description:
                "Pioneering secure data exchange and remote monitoring across surgical specialties.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-black opacity-20 text-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Process */}
        <motion.div
          className=" p-10 rounded-lg shadow-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-[#facc15] mb-6 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Problem Identification",
                desc: "Identify needs of healthcare professionals and patients.",
              },
              {
                step: "Collaborative Development",
                desc: "Partner with institutions to create robust solutions.",
              },
              {
                step: "Clinical Validation",
                desc: "Ensure solutions meet the highest medical standards.",
              },
              {
                step: "Continuous Improvement",
                desc: "Refine solutions using real-world feedback.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-3">
                  {item.step}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships Section */}
        <div className="text-center">
          <motion.h2
            className="text-4xl font-bold text-[#facc15] mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Partnerships in R&D
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Collaborating with institutions like One Tech and AI to drive
            innovation and transform the future of healthcare.
          </motion.p>
          <motion.button
            className="bg-[#facc15] text-indigo-800 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#e0ab12] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Service;
