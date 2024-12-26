'use client';
import React, { useState } from 'react';
import { FaFileContract } from 'react-icons/fa';
import Nav from '../home/Nav';

function Terms() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-transparent">
      <div className="relative bg-black w-full h-auto overflow-hidden">
      <Nav/>
        <div className="relative z-10 pt-14 p-10 text-white space-y-8">
          <div className="pt-24 bg-transparent py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto bg-transparent p-6 rounded-lg shadow-md">
              
            
              <div className="mt-10  rounded-md opacity-80 p-4">
                <h2 className="text-2xl font-semibold mb-4 text-[#facc15]">
                  <FaFileContract className="mr-2 text-[#facc15]" /> Terms and Conditions
                </h2>
                <p className="text-[#facc15] mb-4">
                  These terms and conditions outline the rules and regulations for the use of our website.
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-[#facc15]">Acceptance of Terms</h3>
                <p className="text-[#facc15] mb-4">
                  By accessing this website, you accept these terms and conditions in full. If you disagree with these terms and conditions, you must not use this website.
                </p>
                <h3 className="text-lg font-semibold mb-2 text-[#facc15]">License to Use Website</h3>
                <p className="text-[#facc15] mb-4">
                  Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
                </p>
                <h3 className="text-lg font-semibold mb-2 text-[#facc15]">User Accounts</h3>
                <p className="text-[#facc15] mb-4">
                  You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                </p>
                <h3 className="text-lg font-semibold mb-2 text-[#facc15]">Medical Information</h3>
                <p className="text-[#facc15] mb-4">
                  The information provided on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
                <h3 className="text-lg font-semibold mb-2 text-[#facc15]">No Medical Emergencies</h3>
                <p className="text-[#facc15] mb-4">
                  If you think you may have a medical emergency, call your doctor or emergency services immediately. We do not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mb-8 inline-block opacity-80 rounded-md p-4 m-4">
                <h2 className="text-2xl font-semibold mb-4 text-[#facc15]">Get in Touch</h2>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#facc15] font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-64 p-2 border border-gray-300 rounded" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#facc15] font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-64 p-2 border border-gray-300 rounded" />
                </div>

                <button type="submit" className="px-6 py-2  text-[#facc15] rounded ">Submit</button>
              </form>

              {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className=" p-6 rounded shadow-lg max-w-sm text-center">
                    <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
                    <p className="mb-4">Your submission has been received.</p>
                    <button onClick={closePopup} className="px-4 py-2  text-[#facc15] rounded ">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
