'use client'
import React, { useState } from 'react';
import Heeder from '../navbar/Heeder';
import Nav from '../home/Nav';

function Contact() {



  return (
    <div>
       <Nav/>
   
    <div className="bg-black min-h-screen flex items-center justify-center pt-44 py-10">
    
      <div className="relative w-full max-w-2xl bg-gradient-to-r  from-[#e7cd22] via-[#b29f1f] to-[#373317] p-12 rounded-lg border-black">
        <form  className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value= ''
             
              className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="E Mail"
               
                className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
              
                className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
              />
            </div>
          </div>

          <div>
            <select
              name="service"
              className="w-full p-4 border-2 border-black bg-transparent text-black focus:outline-none"
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
              className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Additional Note"
              className="w-full h-32 p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
          </div>

          <div className="flex items-start text-black justify-between">
            <input
              type="checkbox"
              name="acceptedTerms"
              className="mr-2 bg-black"
              required
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-yellow-400 font-semibold py-3 rounded-md hover:bg-yellow-600 transition duration-200"
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
