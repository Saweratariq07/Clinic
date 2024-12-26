'use client';
import React, { useState } from 'react';
import { FaCookie } from 'react-icons/fa'; // Importing React Icon for Cookie
import { Link } from 'react-router-dom';
import Nav from '../home/Nav';

function Cookie() {
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
      <div className="bg-black relative w-full h-auto overflow-hidden">
       <Nav/>
         

        {/* <div className="absolute inset-0 bg-blue-950 opacity-50"></div> */}

        <div className="relative z-10 pt-36 flex flex-col items-center justify-center h-full p-10  text-[#facc15] space-y-8">
          <div className="pt-24 bg-transparent py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto bg-transparent p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">
  <span className=" bg-opacity-70 text-[#facc15] px-2 py-1 rounded-md inline-flex items-center">
    <FaCookie className="mr-2 text-[#facc15]" /> Cookie Policy
  </span>
</h2>


              <p className="text-[#facc15] mb-4  bg-opacity-80 p-4">
                Our website uses cookies to enhance your experience. Cookies are small text files that are placed on your device
                by the websites you visit. They help us remember your preferences and improve the functionality of the site.
              </p>
              <h2 className="text-2xl font-semibold mb-4  items-center">
  <span className=" bg-opacity-80 text-[#facc15] px-2 py-1  items-center rounded-md">
  How We Use Cookies
  </span>
</h2>



              <ul className=" mb-4  items-center">
                <li className=' bg-opacity-80 text-[#facc15] px-2 py-1  items-center rounded-md'>Essential cookies: These are necessary for the website to function properly.</li>
                <li className=' bg-opacity-80 text-[#facc15] px-2 py-1  items-center rounded-md'>Performance cookies: These help us analyze how visitors interact with our website.</li>
                <li className='[#facc15] bg-opacity-80 text-[#facc15] px-2 py-1  items-center rounded-md'>Functional cookies: These allow us to remember your preferences and provide enhanced features.</li>
              </ul>
              <h2 className='text-2xl font-semibold mb-4  items-center'>
              <span className=" bg-opacity-70 text-[#facc15] px-2 py-1  items-center rounded-md">
              Managing Cookies
  </span>
  </h2>
              <p className=" mb-4  bg-opacity-80 text-[#facc15] px-2 py-2  items-center rounded-md">
                You can manage your cookie preferences through your browser settings. Please note that disabling cookies may
                affect the functionality of our website.
              </p>

       
              <form onSubmit={handleSubmit} className="mb-8 rounded-md bg-opacity-80 p-4 inline-block">
              <h2 className="text-2xl font-semibold mb-4  px-2 py-1  text-[#facc15] rounded-lg">
  Get in Touch
</h2>
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
                <div className="fixed inset-0 bg-opacity-80 flex items-center justify-center">
                  <div className=" p-6 rounded shadow-lg max-w-sm text-center">
                    <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
                    <p className="mb-4">Your submission has been received.</p>
                    <Link to={'mailto:info@frenchparkmedicalcentre.com'}>
                    <button onClick={closePopup} className="px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-900">
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

export default Cookie;
