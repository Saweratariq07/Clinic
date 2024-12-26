'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../home/Nav';

function Privacy() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='bg-transparent'>
      <div className="relative bg-black w-full h-auto overflow-hidden">
      <img
    className="absolute w-full h-full object-cover"
    src="bg.jpg"
    alt="Background"
  />
  {/* Color Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
<Nav/>


        <div className="relative z-10 pt-24   items-center justify-center  h-full p-10 bg-opacity-50 text-[#facc15] space-y-8">
          <div className="pt-24  bg-transparent py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto    p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold mb-6 text-[#facc15]   opacity-80 inline-block p-2 rounded-md">
                Privacy Policy
              </h1>
              <p className="text-[#facc15]  mb-4  bg-opacity-80  p-2 rounded-md">
                Last updated on October 4, 2024
              </p>
<div className='border-2 border-[#facc15]'>

              <h2 className="text-2xl font-semibold mb-4  opacity-80 inline-block p-2 rounded-md text-[#facc15]">Who We Are</h2>
              <p className="text-[#facc15] mb-4  opacity-80 rounded-md p-2">
                We are  Surgi Home, committed to providing quality healthcare services. Our website may use cookies to enhance your browsing experience. Cookies help us understand user behavior and improve our website. You can adjust your browser settings to disable cookies if you prefer.                .
              </p>
              </div>
              <h2 className="text-2xl font-semibold mb-4 inline-block  opacity-80 rounded-md p-2 text-[#facc15]">What Personal Data We Collect</h2>
              <p className="text-[#facc15] mb-4  opacity-80 rounded-md p-3 text-start">
                We collect personal data to enhance your experience and provide quality healthcare services. You may provide this data directly, such as when filling out forms or communicating with us.
              </p>

              <ul className="list-disc  opacity-80 inline-block rounded-md p-3 list-inside mb-4 text-[#facc15] text-start">
                <li>Service providers: We may collect data through service providers to understand your location based on your IP address for tailored content.</li>
                <li>Healthcare partners: With whom we collaborate for joint healthcare services.</li>
                <li>Public sources: Such as health databases or other publicly available information.</li>
              </ul>
<div>
  <h1 className='text-2xl font-semibold mb-4 inline-block  opacity-80 rounded-md p-2 text-[#facc15]'>Retention of Information</h1>
              <p>We retain your personal and medical information for as long as necessary to provide services, comply with legal obligations, and resolve disputes.              </p>
              </div>

              <div>
  <h1 className='text-2xl font-semibold mb-4 inline-block  opacity-80 rounded-md p-2 text-[#facc15]'>Third-Party Links</h1>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies before sharing any information.              </p>
              </div>
              <div>
  <h1 className='text-2xl font-semibold mb-4 inline-block  opacity-80 rounded-md p-2 text-[#facc15]'>Children's Privacy</h1>
              <p>We do not knowingly collect personal information from individuals under the age of 18 without parental or guardian consent.              </p>
              </div>
              <div>
  <h1 className='text-2xl font-semibold mb-4 inline-block  opacity-80 rounded-md p-2 text-[#facc15]'>Changes to This Policy</h1>
              <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy regularly.              </p>
              </div>
              <h2 className="text-2xl font-semibold mb-4  opacity-80 p-4  rounded-md inline-block text-[#facc15]">Why We Collect Personal Data</h2>
              <ul className="list-disc  inline-block rounded-md p-3 opacity-80 list-inside mb-4 text-[#facc15] text-start">
                <li>Communications: Including sending health-related communications and appointment reminders.</li>
                <li>Advertising: To provide relevant healthcare marketing content.</li>
                <li>Website analytics: To improve user experience on our healthcare website.</li>
                <li>Technical troubleshooting: To resolve any issues related to our website’s functionality.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 p-3 rounded-md inline-block  opacity-80 text-[#facc15]">Your Rights Regarding Personal Data</h2>
              <ul className="list-disc list-inside mb-4  rounded-md opacity-80 inline-block p-4 text-[#facc15] text-start">
                <li> Access your personal and medical information.</li>
                <li> Request corrections to inaccurate or incomplete information.                </li>
                <li>Withdraw consent for data processing (where applicable).                </li>
                <li>  File a complaint with the relevant authority if you believe your rights have been violated.                </li>
              </ul>
<br />
              <h2 className="text-2xl font-semibold mb-4  inline-block opacity-80 p-2 rounded-md text-[#facc15]">How to Contact Us</h2>
              <p className="text-[#facc15] mb-4  opacity-80 rounded-md inline-block p-3">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
                <a href="#" className="text-[#facc15] font-semibold text-lg"> data-protection-12233444@.com</a>.
              </p>

              <form onSubmit={handleSubmit} className="mb-8  opacity-80 rounded-md p-3 inline-block">
              <h2 className="text-2xl font-semibold mb-4 text-[#facc15]">Get in Touch</h2>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#facc15] font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-64 p-2 border border-gray-300 rounded" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#facc15] font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-64 p-2 border border-gray-300 rounded" />
                </div>

                <button type="submit" className="px-6 py-2 bg-[#facc15] text-[#000000] rounded hover:bg-[#facc15]">Submit</button>
              </form>

              {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center">
                    <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
                    <p className="mb-4">Your submission has been received.</p>
                    <Link to={'mailto:info@frenchparkmedicalcentre.com'}>
                    <button onClick={closePopup} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Close
                    </button>
                    </Link>
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

export default Privacy;
