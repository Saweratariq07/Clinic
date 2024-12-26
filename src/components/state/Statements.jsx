import React from 'react'
import { FaExclamationTriangle, FaUserShield, FaBalanceScale, FaCommentDots } from 'react-icons/fa';
import { FaInfoCircle, FaUserMd, FaGavel, FaBriefcase, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import Nav from '../home/Nav';

function Statements() {
  return (
    <div>
      <div className="relative bg-black w-full h-auto overflow-hidden  ">
     
      <Nav/>

        {/* <div className="absolute inset-0 bg-[#1977cc] opacity-50"></div> */}

        <div className="relative z-10 pt-20 flex flex-col items-center justify-center h-full p-10   text-[#facc15]  space-y-8">
          <div className="main">
            <div className='container pt-24'>
            </div>
            <h1 className='text-5xl text-[#facc15] font-bold mb-3'>Colorectal Virtual Ward            </h1>
          <p className='text-[#facc15]   text-xl container mx-auto space-x-6'>Revolutionizing post-operative care with remote monitoring technology.

Our Colorectal Virtual Ward allows doctors to discharge patients safely and monitor their recovery from the comfort of their homes. With real-time updates and secure data sharing, this solution ensures better outcomes while reducing the burden on healthcare facilities.</p>
<div className="flex mt-16 justify-center ">
  <div className="col-md-6">
    <h1 className='font-bold text-3xl text-[#facc15] '>Key Features:</h1>
    <ul className='list-item text-[#facc15] '>
      <li>Remote patient monitoring with daily updates.</li>
      <li>Secure communication between patients and doctors.      </li>
      <li>Alerts for potential complications or emergencies.      </li>
      <li>Improved resource management and hospital efficiency.      </li>
    </ul>
  </div>
  <div className="col-md-6 text-[#facc15]">
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
