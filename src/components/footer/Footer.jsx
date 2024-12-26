import React from 'react';
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#2a3a5d] to-[#4b0051] text-[#ffffff] relative w-full h-auto overflow-hidden">
      <hr />
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 text-white space-y-8">
        <footer className="bg-transparent px-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-[#ffffff]">Connect With Us</h1>
            <div className="flex justify-center space-x-5 mt-2">
              <a
                href=""
                className="hover:bg-white hover:text-white transition-colors duration-300 p-2 rounded-full"
                aria-label="Facebook"
              >
                <CiFacebook className="text-4xl" />
              </a>
              <a
                href=""
                className="hover:bg-white hover:text-blue-600 transition-colors duration-300 p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <CiLinkedin className="text-4xl" />
              </a>
              <a
                href=""
                className="hover:bg-white hover:text-blue-600 transition-colors duration-300 p-2 rounded-full"
                aria-label="Instagram"
              >
                <IoLogoInstagram className="text-4xl" />
              </a>
            </div>
            <div className="mt-6">
              <p className="flex items-center justify-center text-lg">
                <FaPhoneAlt className="mr-2" />
                <a href="" className="text-lg hover:underline transition-colors duration-300">
                  +12345678
                </a>
              </p>

              <p className="flex items-center justify-center text-lg">
                <FaEnvelope className="mr-2" />
                <a href="" className="text-lg hover:underline transition-colors duration-300">
                  lorem@gmail.com
                </a>
              </p>

            </div>
          </div>

          <div className="border-t border-white mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <div className="flex space-x-4 text-white">

              <Link to='/privacyPolicy'>
                <a href='/privacyPolicy' className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
              </Link>
              <Link to={'/cookie'}>
                <a href="/cookie" className="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
              </Link>
              <Link to={'/terms'}>
                <a href="/terms" className="hover:text-gray-300 transition-colors duration-300">Terms of Use</a>
              </Link>
              <br />
            </div>

            <p className="mt-2 md:mt-0 ms-8 text-white text-sm">© Surgi Home Centre Corporation, All Rights Reserved</p>

          </div>
          <p>Powerd by    <Link to={'https://www.onetechandai.com/'}>
            <a href="https://www.onetechandai.com/" className="hover:text-blue-300 font-semibold text-blue-500 transition-colors duration-300"> One Tech & AI</a>
          </Link></p>

        </footer>
      </div>
    </div>
  );
}
