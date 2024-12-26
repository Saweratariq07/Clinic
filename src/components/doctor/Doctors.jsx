import React, { useState } from 'react';
import Nav from '../home/Nav';
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
const Doctors = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);

  const faqs = [
    {
      question: "What is Surgi Home?",
      answer: "Surgi Home Limited is a UK-based company digitally transforming the healthcare sector, with a special focus on surgical specialties. We develop innovative solutions like the Colorectal Virtual Ward to enhance patient care and optimize hospital resources."
    },
    {
      question: "Who are your technology partners?",
      answer: "We collaborate with One Tech and AI, a leading technology partner, to develop and maintain the digital infrastructure for our solutions. Learn more about them at www.onetechandai.com."
    },
    {
      question: "How do I implement Surgi Home solutions in my practice?",
      answer: "Contact us through our Contact Us page, and our team will guide you through the process of integrating our solutions into your healthcare system."
    },
    {
      question: "What is the Colorectal Virtual Ward?",
      answer: "The Colorectal Virtual Ward is a remote monitoring solution for post-operative care. It allows doctors to discharge patients safely and monitor their recovery remotely, reducing hospital stays and improving patient outcomes."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
  ];

  const toggleFaq = (index) => {
    setSelectedFaqIndex(selectedFaqIndex === index ? null : index);
  };

  return (
       <div className="relative w-full h-auto overflow-hidden">
      <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
    src="https://videos.pexels.com/video-files/2603664/2603664-uhd_2560_1440_24fps.mp4" 
  ></video>
      <Nav/>
      <div className='relative pt-44'>
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold text-purple-900">
          <span className="">❋</span> FAQs{" "}
          <span className="">❋</span>
        </h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              className="border border-purple-900 p-4 text-lg font-semibold hover:bg-gradient-to-r from-purple-900 via-purple-900 to-purple-900 hover:text-white transition duration-300 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
          <div className="flex justify-between">
            <div className="col-md-2">
            <FaPlus />
            </div>
            <div className="col-md-8">
            {faq.question}
            </div>
            <div className="col-md-2">
            <IoIosArrowForward />
            </div>
            </div>   
            </div>
            {selectedFaqIndex === index && (
              <div className="bg-gradient-to-r from-purple-900 via-purple-900 to-purple-900 text-white p-4 mt-1 border-l-4 border-purple-900">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Doctors;
