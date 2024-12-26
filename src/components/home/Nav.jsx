import React, { useState } from 'react';
import './styles.css';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPolicyDropdownOpen, setIsPolicyDropdownOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav className="container-fluid navbar-transparent">
        <div className="container-fluid">
          <div className="marquee-container">
            <div className="marquee">
              <p>Surgi Home: Transforming Surgical Care by Innovating Post-Operative Recovery with the Colorectal Virtual Ward and Streamlining Surgical Management through the SurgiCall Centre</p>
            </div>
          </div>
        </div>

        <div className=" mx-auto max-w-full px-4 sm:px-6  py-5 text-[#ffffff]">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center">
          
              <Link to="/" onClick={handleNavItemClick} className="flex items-center">
                <img
                  src="/logo.png" 
                  alt="Logo"
                  className="h-28 w-28  mr-2" 
                />
              </Link>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-950 hover:bg-blue-950 hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isNavOpen}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isNavOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isNavOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex  py-2 px-4 rounded-lg opacity-75 ms-32 space-x-4 text-[#fcfcfc] flex-wrap">
              <Link to="/" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-[#f7f7f7] transition-all" onClick={handleNavItemClick}>Home</Link>

               <div
                className="relative nav-item"
                onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                onMouseLeave={() => setIsPracticeDropdownOpen(false)}
              >
                <div className="flex">
                  <div className="col-md-8">
                  <span className="relative rounded-md px-3 py-2 text-lg font-semibold text-[#ffffff] hover:text-[#ffffff] transition-all cursor-pointer">About Us</span>
                  </div>
                  <div className="col-md-4 mt-2">
                  <IoIosArrowDown />
                  </div>
                </div>
                {isPracticeDropdownOpen && (
                  <div className="absolute left-0 mt-2 rounded-md shadow-lg z-20 bg-blue-900 text-white">
                    <ul className="py-1 cursor-pointer">
                      <Link to="/doctors" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950"> Meet the Team</li>
                      </Link>
                      <Link to="/links" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950">Partners</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="relative group nav-item">
                <Link to="/service" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold text-white hover:text-white transition-all" onClick={handleNavItemClick}>Research & Development</Link>
              </div>

              <div
                className="relative nav-item"
                onMouseEnter={() => setIsPolicyDropdownOpen(true)}
                onMouseLeave={() => setIsPolicyDropdownOpen(false)}
              >
                <div className="flex">
                  <div className="col-md-8">
                  <span className="relative rounded-md px-3 py-2 text-lg font-semibold text-white hover:text-white transition-all cursor-pointer">Products </span>
                  </div>
                  <div className="col-md-4 mt-2">
                  <IoIosArrowDown />
                  </div>
                </div>
               
                {isPolicyDropdownOpen && (
                  <div className="absolute left-0 mt-2 rounded-md shadow-lg z-20 bg-blue-900 text-white">
                    <ul className="py-1 cursor-pointer">
                      <Link to="/state" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold  hover:bg-white border-b-2  hover:text-blue-950"> Colorectal Virtual Ward</li>
                      </Link>
                      <Link to="/patient" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950">SurgiCall Centre</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <Link to="/doctor" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-white transition-all" onClick={handleNavItemClick}>FAQ's</Link>
              <Link to="/appoin" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-white transition-all" onClick={handleNavItemClick}>News</Link>
              <Link to="/blog" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-white transition-all" onClick={handleNavItemClick}>Careers</Link>


              <div className="hidden md:block">
                <Link to="/contact">
                  <button
                    type="button"
                    className="relative rounded-full text-white px-4 py-2 text-lg font-semibold border-2 border-white hover:text-white hover:border-white hover:bg-white bg-transparent"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 bg-blue-950 text-white">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/hours" className="block px-3 py-2 rounded-md text-base font-medium">Opening Hours</Link>
            <Link to="/doctors" className="block px-3 py-2 rounded-md text-base font-medium">Staff</Link>
            <Link to="/appoin" className="block px-3 py-2 rounded-md text-base font-medium">Appointments</Link>
            <Link to="/service" className="block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
