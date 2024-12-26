import React from 'react'
import { FaExclamationTriangle, FaUserShield, FaBalanceScale, FaCommentDots } from 'react-icons/fa';
import { FaInfoCircle, FaUserMd, FaGavel, FaBriefcase, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import Nav from '../home/Nav';
import Heeder from '../navbar/Heeder';

function Statement() {
  return (
    <div>
      <div className="relative bg-black w-full h-auto overflow-hidden  ">
     
      <Heeder/>

        {/* <div className="absolute inset-0 bg-[#1977cc] opacity-50"></div> */}

        <div className="relative z-10 pt-20 flex flex-col items-center justify-center h-full p-10   text-[#facc15]  space-y-8">
          <div className="main">
            <div className='container pt-24'>
              <h1 className='text-2xl md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-block p-2'>STATEMENTS</h1>
            </div>
            <div className="relative z-30 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mx-4 sm:mx-6 md:mx-8 my-8">
  <div className="relative p-4">
    <div className="absolute inset-0 bg-[#facc15]  opacity-70"></div>
    <div className="relative z-10">
      <div className="flex">
        <section className="flex flex-col sm:flex-row items-center bg-transparent text-black p-6 sm:p-8 rounded-lg">
          <div className="text-black text-4xl sm:text-5xl mb-4 sm:mb-0 sm:mr-6">
            <FaExclamationTriangle />
          </div>
          <div className="">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#000000]  mb-2 sm:mb-4">
              Unacceptable Behavior
            </h2>
            <p className="text-start">
              It is our policy to treat everyone with respect and courtesy and we expect the same respect and courtesy in return. Any aggressive or inappropriate behavior towards staff will not be tolerated and will be dealt with seriously.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>

  <div className="relative p-4">
    <div className="absolute inset-0 bg-[#9c4646] opacity-70"></div>
    <div className="relative z-10 mt-4 md:mt-0">
      <section className="flex flex-col sm:flex-row items-center bg-transparent text-white p-6 sm:p-8 rounded-lg">
        <div className="text-blue-950 text-4xl sm:text-5xl mb-4 sm:mb-0 sm:mr-6">
          <FaUserShield />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2 sm:mb-4">
            Practice Privacy Statement
          </h2>
          <p className="text-start">
            This Practice wants to ensure the highest standard of medical care for our patients. We understand that a General Practice is a trusted community governed by an ethic of privacy and confidentiality...
          </p>
        </div>
      </section>
    </div>
  </div>

  <div className="relative p-4">
    <div className="absolute inset-0 bg-[#a84f92] opacity-70"></div>
    <div className="relative z-10 mt-4 md:mt-0">
      <section className="flex flex-col sm:flex-row items-center bg-transparent text-white p-6 sm:p-8 rounded-lg">
        <div className="text-blue-950 text-4xl sm:text-5xl mb-4 sm:mb-0 sm:mr-6">
          <FaBalanceScale />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2 sm:mb-4">
            Legal Basis for Processing Your Data
          </h2>
          <p className="text-start">
            The processing of personal data in general practice is necessary in order to protect the vital interests of the patient and for the provision of health care and public health...
          </p>
        </div>
      </section>
    </div>
  </div>

  <div className="relative p-4">
    <div className="absolute inset-0 bg-[#299258] opacity-70"></div>
    <div className="relative z-10 mt-4 md:mt-0">
      <section className="flex flex-col sm:flex-row items-center bg-transparent text-white p-6 sm:p-8 rounded-lg">
        <div className="text-blue-950 text-4xl sm:text-5xl mb-4 sm:mb-0 sm:mr-6">
          <FaCommentDots />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2 sm:mb-4">
            Complaints
          </h2>
          <p className="text-start">
            We make every effort to give the best service possible to everyone who attends our practice. However, we are aware that things can go wrong resulting in a patient feeling that they have a genuine cause for complaint...
          </p>
        </div>
      </section>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
      <div className="w-full bg-[#000000] ">
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="bg-transparent text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="mb-8 p-6 rounded-lg shadow-lg relative">
          <div className="absolute inset-0 bg-[#cc1964] opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-white text-center">
            <div className="mb-4 text-pink-600 bg-opacity-80 p-2 rounded-lg">
              <FaInfoCircle className="text-3xl mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#c77590]">Managing Your Information</h2>
            <p className="mb-4">
              In order to provide for your care, we need to collect and keep information about you and your health on our records.
            </p>
            <ul className="list-disc list-inside text-white text-start">
              <li>We retain your information securely.</li>
              <li>We will only ask for and keep necessary information.</li>
              <li>Inform us about any changes that we should know about.</li>
              <li>All staff sign a confidentiality agreement.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(53, 40, 235, 0.5)', backdropFilter: 'opacity(0.8)' }}>
          <div className="text-blue-950 text-center mb-4">
            <FaUserMd className="text-3xl mx-auto" />
          </div>
          <div className='text-white text-center'>
            <h2 className="text-2xl font-bold mb-4 text-[#89a9c4]">Disclosure to Health Professionals</h2>
            <p>
              We may need to pass some information to health and social care professionals to provide the treatment and services you need. Only the relevant part of your record will be released.
            </p>
          </div>
        </div>

        <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(235, 157, 40, 0.5)', backdropFilter: 'opacity(0.8)' }}>
          <div className="text-yellow-600 text-center mb-4">
            <FaGavel className="text-3xl mx-auto" />
          </div>
          <div className='text-white text-center'>
            <h2 className="text-2xl font-bold mb-4 text-[#814735]">Disclosures Required/Permitted Under Law</h2>
            <p>
              Personal information, including health information, can be disclosed in certain instances, such as infectious diseases.
            </p>
          </div>
        </div>

        <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(55, 17, 18, 0.5)', backdropFilter: 'opacity(0.8)' }}>
          <div className="text-red-600 text-center mb-4">
            <FaBriefcase className="text-3xl mx-auto" />
          </div>
          <div className='text-white text-center'>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Disclosure to Employers, Insurance Companies, and Solicitors</h2>
            <p>
              Medical certificates will only provide confirmation that you are unfit for work unless additional information is necessary and discussed with you.
            </p>
          </div>
        </div>

        <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(88, 196, 97, 0.5)', backdropFilter: 'opacity(0.8)' }}>
          <div className="text-green-600 text-center mb-4">
            <FaGraduationCap className="text-3xl mx-auto" />
          </div>
          <div className='text-white text-center'>
            <h2 className="text-2xl font-bold mb-4 text-[#7fc775]">Use of Information for Training and Teaching</h2>
            <p>
              It is common for GPs to discuss patient case histories for medical education. In such cases, the patient's identity is not revealed.
            </p>
          </div>
        </div>

        <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(196, 88, 88, 0.5)', backdropFilter: 'opacity(0.8)' }}>
          <div className="text-blue-950 text-center mb-4">
            <FaChartLine className="text-3xl mx-auto" />
          </div>
          <div className='text-white text-center'>
            <h2 className="text-2xl font-bold mb-4 text-[#e03be6]">Use of Information for Research and Audit</h2>
            <p>
              Patient information is used for research and audit in an anonymized or pseudonymized manner to improve services.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Statement;
