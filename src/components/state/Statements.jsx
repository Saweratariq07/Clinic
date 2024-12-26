import React from 'react'
import { FaExclamationTriangle, FaUserShield, FaBalanceScale, FaCommentDots } from 'react-icons/fa';
import { FaInfoCircle, FaUserMd, FaGavel, FaBriefcase, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import Nav from '../home/Nav';

function Statements() {
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
      <div className="relative  w-full h-auto overflow-hidden  ">
     
      <Nav/>

        {/* <div className="absolute inset-0 bg-[#1977cc] opacity-50"></div> */}

        <div className="relative z-10 pt-20 flex flex-col items-center justify-center h-full p-10   text-purple-900 space-y-8">
          <div className="main">
            <div className='container pt-24'>
            </div>
            <h1 className='text-5xl font-bold text-purple-900font-bold mb-3'>Colorectal Virtual Ward            </h1>
          <p className='text-purple-900  text-xl container mx-auto space-x-6'>Revolutionizing post-operative care with remote monitoring technology.

Our Colorectal Virtual Ward allows doctors to discharge patients safely and monitor their recovery from the comfort of their homes. With real-time updates and secure data sharing, this solution ensures better outcomes while reducing the burden on healthcare facilities.</p>
<div className="flex mt-16 justify-center ">
  <div className="col-md-6">
    <h1 className='font-bold text-3xl text-purple-900'>Key Features:</h1>
    <ul className='list-item font-semibold text-purple-900'>
      <li>Remote patient monitoring with daily updates.</li>
      <li>Secure communication between patients and doctors.      </li>
      <li>Alerts for potential complications or emergencies.      </li>
      <li>Improved resource management and hospital efficiency.      </li>
    </ul>
  </div>
  <div className="col-md-6 text-purple-900 font-semibold">
    <h1 className='font-bold text-3xl'>Benefits:</h1>
    <ul>
      <li>Safe, convenient, and effective post-operative care.      </li>
      <li>Reduced readmissions and improved patient satisfaction.      </li>
      <li>Optimized hospital resources and reduced costs.      </li>
    </ul>
  </div>
</div>
          </div>
        </div>
      </div>
   

    </div>
  )
}

export default Statements;
