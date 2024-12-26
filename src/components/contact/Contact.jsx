'use client'
import React, { useState } from 'react';
import Heeder from '../navbar/Heeder';
import Nav from '../home/Nav';

function Contact() {



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
   
    <div className=" min-h-screen flex items-center justify-center pt-44 py-10">
    
    <div className="relative w-full max-w-2xl bg-gradient-to-r from-[#2a3a5d] to-[#4b0051] text-[#ffffff] p-12 rounded-lg border-white" style={{ backgroundColor: 'rgba(42, 58, 93, 0.35)' }}>
    <form  className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value= ''
             
              className="w-full p-4 border-2 border-white bg-transparent placeholder-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="E Mail"
               
                className="w-full p-4 border-2 border-white bg-transparent placeholder-white focus:outline-none"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
              
                className="w-full p-4 border-2 border-white bg-transparent placeholder-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <select
              name="service"
              className="w-full p-4 border-2 border-white bg-transparent text-white focus:outline-none"
            >
              <option value="">Select Service</option>
              <option value="Service 1">Medical</option>
              <option value="Service 2">..... </option>
            </select>
          </div>

          <div>
            <input
              type="date"
              name="date"
              className="w-full p-4 border-2 border-white bg-transparent placeholder-white focus:outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Additional Note"
              className="w-full h-32 p-4 border-2 border-white bg-transparent placeholder-white focus:outline-none"
            />
          </div>

          <div className="flex items-start text-white justify-between">
            <input
              type="checkbox"
              name="acceptedTerms"
              className="mr-2 bg-white"
              required
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-yellow-400 font-semibold py-3 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
