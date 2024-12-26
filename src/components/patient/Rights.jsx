import React from 'react';
import { AiFillAlert } from 'react-icons/ai'; // Make sure you have the AiFillAlert icon imported
import Nav from '../home/Nav';

function Rights() {
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
            <div className="relative bg- w-full h-auto overflow-hidden">
                <Nav/>
                <div className="relative z-10 pt-20 flex flex-col items-center justify-center h-full p-10   text-purple-900  space-y-8">
          <div className="main">
            <div className='container pt-24'>
            </div>
            <h1 className='text-5xl text-purple-900 font-bold mb-3'>SurgiCall Centre Page            </h1>
          <p className='text-purple-900   text-xl container mx-auto space-x-6'>The SurgiCall Centre is a visionary concept designed to streamline and centralize all surgical operations. By managing OPDs, pre-operative consultations, and post-operative follow-ups through a single platform, this solution aims to enhance efficiency and improve the patient experience.</p>
<div className="flex mt-16 justify-center ">
  <div className="col-md-6">
    <h1 className='font-bold text-3xl text-purple-900 '>Key Features:</h1>
    <ul className='list-item text-purple-900 '>
      <li>Centralized scheduling and coordination for all surgical appointments.      .</li>
      <li>Secure communication between patients and doctors.      </li>
      <li>Alerts for potential complications or emergencies.      </li>
      <li>Improved resource management and hospital efficiency.      </li>
    </ul>
  </div>
  <div className="col-md-6 text-purple-900">
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
    );
}

export default Rights;
