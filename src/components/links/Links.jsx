import React from 'react';
import { FaUserMd, FaUserNurse, FaBriefcase } from 'react-icons/fa';
import Nav from '../home/Nav';



function Links  ()  {
  return (
    <div>
      <div className="relative bg-black w-full h-auto overflow-hidden">
      <img
    className="absolute w-full h-full object-cover"
    src="bg.jpg"
    alt="Background"
  />
  {/* Color Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
<Nav/>
        <div className="relative z-10 pt-44  items-center justify-center h-full p-10 text-[#ffffff]  space-y-8">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-4xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#da42ac]   p-2 mb-4">
Our Partners
            </h1>
            <p className='mb-14'>Surgi Home works with leading medical institutions, innovative tech companies, and dedicated organizations committed to improving patient outcomes. Together, we create groundbreaking solutions like the Colorectal Virtual Ward, ensuring seamless care and recovery for patients. These partnerships drive innovation, ensuring our products remain at the forefront of digital health transformation. Join us in shaping the future of healthcare, one partnership at a time.</p>
           <h1 className='text-4xl md:text-4xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#da42ac]    p-2 mb-14'>Clinical Partners           </h1>
           <h1 className='text-4xl md:text-4xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#da42ac]   p-2 mb-14'>Academic Partners           </h1>
           <h1 className='text-4xl md:text-4xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#da42ac]   p-2 mb-14'>Business Partners           </h1>
           <h2 className='text-3xl font-bold text-[#da42ac] '>One Tech and AI            </h2>
           <p>One Tech and AI, our esteemed technology partner, plays a pivotal role in developing and maintaining the digital infrastructure that powers our innovative healthcare solutions. From the seamless functionality of the Colorectal Virtual Ward to the ongoing tech advancements, their expertise ensures our systems remain cutting-edge and reliable. This collaboration enables us to deliver exceptional care and streamline surgical patient management. Learn more about One Tech and AI at <a href="http://www.onetechandai.com">http://www.onetechandai.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
