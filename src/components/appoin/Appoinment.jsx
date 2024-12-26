import React, { useState } from 'react';
import Nav from '../home/Nav';
import { FaAward, FaRobot, FaNewspaper } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    reason: '',
    isNewPatient: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div>
        <Nav/>
      </div>
    <div className="relative bg-black w-full pt-44 h-auto overflow-hidden">

    <div className=" min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#facc15] mb-4">News</h1>
          <p className="text-lg text-[#facc15] max-w-2xl mx-auto">
            Welcome to the Surgi Home News page, where we bring you the latest updates, achievements, and advancements in healthcare technology.
          </p>
        </div>

        {/* News Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border-2 border-[#facc15] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaNewspaper className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-[#facc15] mb-2">Surgi Home Launches the Colorectal Virtual Ward</h2>
            <p className="text-sm text-[#facc15] mb-4">December 2024</p>
            <p className="text-[#facc15]">
              This revolutionary solution enables doctors to monitor post-operative patients remotely, ensuring optimal recovery and reducing hospital stays.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-[#facc15] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaRobot className="text-4xl text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-[#facc15] mb-2">Collaboration with One Tech and AI</h2>
            <p className="text-sm text-[#facc15]  mb-4">November 2024</p>
            <p className="text-[#facc15]">
              Together with One Tech and AI, we aim to enhance digital infrastructure, ensuring seamless and secure technology for healthcare solutions.
            </p>
            <a
              href="https://www.onetechandai.com"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read more
            </a>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-[#facc15] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaAward className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold text-[#facc15] mb-2">Recognition for Innovation in Healthcare</h2>
            <p className="text-sm text-[#facc15] mb-4">October 2024</p>
            <p className="text-[#facc15]">
              Surgi Home was honored at the annual Digital Health Awards for our innovative approach to post-operative care.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-[#facc15] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <MdOutlineEventNote className="text-4xl text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold text-[#facc15] mb-2">Upcoming: Expansion into Other Surgical Specialties</h2>
            <p className="text-sm text-[#facc15] mb-4">September 2024</p>
            <p className="text-[#facc15]">
              We’re working tirelessly to develop solutions for other fields of surgery, building on the success of the Colorectal Virtual Ward.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#facc15] mb-4">Join Our Mission</h2>
          <p className="text-lg text-[#facc15] max-w-xl mx-auto mb-6">
            Want to be part of Surgi Home’s journey? Explore our Careers page to contribute to groundbreaking healthcare innovations.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Appointment;
