import React from 'react';
import { FaUserMd, FaUserNurse, FaBriefcase } from 'react-icons/fa';
import Nav from '../home/Nav';

const staffMembers = [
  {
    name: 'Dr Muhammad Fahad',
    role: 'General Surgeon',
    bio: `Dr Muhammad Fahad is a dedicated family physician with a passion for providing comprehensive medical care to patients of all ages. A proud graduate of Dow Medical College, where he earned his MBBS degree in 2009, Dr. Fahad brings over a decade of experience in diagnosing and managing a wide range of health conditions.

Committed to patient-centered care, he focuses on building lasting relationships with his patients to promote their overall well-being. Dr. Fahad's approach emphasizes preventive care and personalized treatment plans tailored to each individual's needs.

With a warm and approachable demeanor, Dr Muhammad Fahad is dedicated to ensuring his patients receive the highest standard of medical attention. He is passionate about improving quality of life through accurate diagnoses. and ongoing support for those with neurological conditions.`,
    qualifications: [
      'MBBS',
      '',
     
    ],
    icon: <FaUserMd className="text-5xl text-purple-600  mx-auto" />,
  },
  {
    name: 'Dr.Shamim Haidar',
    role: 'Neurology and Neurophysiology ',
    bio: `Dr. Shamim Haider is a highly qualified and       experienced  in Neurology and Neurophysiology, dedicated to diagnosing and managing a wide spectrum of neurological disorders. He is a graduate of Dow Medical College, where he earned his MBBS.

Dr. Haider further honed his expertise by completing a Master’s in Clinical Neurology from the prestigious University College London (UCL). His multidisciplinary background and commitment to continuous learning equip him with the knowledge and skills to provide cutting-edge care in neurology.

Known for his patient-focused approach, Dr. Haider combines clinical expertise with compassion, ensuring his patients receive comprehensive care tailored to their unique needs. He is passionate about improving quality of life through accurate diagnoses, innovative treatments, and ongoing support for those with neurological conditions.`,   
qualifications: [
      'MBBS.',
      'MRCP (UK)',
      'MRCPI (Ireland',
      'MRCP (Acute Medicine)',
      'MSc Clinical Neurology (UCL)',
    ],
    icon: <FaUserMd className="text-5xl text-purple-600  mx-auto" />,
  },
 
];

const Doctor = () => {
  return (
    <div>
      <div className="relative  w-full h-auto overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
    src="https://videos.pexels.com/video-files/2603664/2603664-uhd_2560_1440_24fps.mp4" 
  ></video>
  {/* Color Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

<Nav/>
        <div className="relative z-10 pt-44 flex flex-col items-center justify-center h-full p-10 text-white  space-y-8">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#db53b2]  inline-block p-2 mb-14">
              Clinic Staff
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6">
              {staffMembers.map((member, index) => (
                <div
                  key={index}
                  className=" bg-opacity-80  shadow-lg rounded-lg  border-2 border-white  p-6 flex flex-col items-center"
                >
                  <div className="mb-4">{member.icon}</div>
                  <div className="text-center ">
                    <h3 className="text-2xl font-bold text-white ">{member.name}</h3>
                    <p className="text-white  text-lg mb-4">{member.role}</p>
                  </div>
                  
                  {member.bio && <p className="text-white  mb-4 text-justify">{member.bio}</p>}
                  
                  {member.qualifications.length > 0 && (
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-white   mb-2">Qualifications:</h4>
                      <ul className="list-none text-white ">
                        {member.qualifications.map((qualification, idx) => (
                          <li key={idx} className="mb-1">
                            {qualification}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
