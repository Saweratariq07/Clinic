import React from 'react';
import { AiFillAlert } from 'react-icons/ai'; 
import Heeder from '../navbar/Heeder';

function Patients() {
    return (
        <div>
            <div className="relative bg-black w-full h-auto overflow-hidden">
            <Heeder/>
                <div className="relative z-10  flex flex-col items-center justify-center h-full p-5 md:p-10   space-y-8">
                    <div className="flex flex-wrap justify-center items-center mt-36 space-y-4 md:space-y-0 md:space-x-12">
                        <div className="flex flex-col items-center w-full md:w-1/3">
                            <div className="flex gap-6 w-full">
                                <div className="bg-[# h-80 w-1 rounded-md"></div>
                                <div className="relative w-full">
                                    <div className="absolute inset-0 bg-[#facc15]  opacity-80"></div>
                                    <div className="relative z-10 p-4">
                                        <h1 className='font-arbel font-semibold text-[#000000] text-5xl text-center md:text-3xl lg:text-4xl'>Your Right!</h1>
                                        <h2 className='font-bold text-black mt-4 text-start text-2xl'>Your Right of Access to Your Health Info</h2>
                                        <p className="w-full text-start ms-2 text-black">
                                            You have the right of access to all the personal information held about you by this practice. If you wish to see your records, in most cases the quickest way is to discuss this with your doctor who will review the information in the record with you. You can make a formal written access request to the practice and receive a copy of your medical records.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/** Card 2 */}
                        <div className="flex flex-col items-center w-full md:w-1/3">
                            <div className="flex gap-6 w-full">
                                <div className="relative w-full">
                                    <div className="absolute inset-0 bg-[#9b8e56] opacity-70"></div>
                                    <div className="relative z-10 p-4">
                                        <h1 className='font-arbel font-semibold text-[#ffffff] text-5xl text-center md:text-3xl lg:text-4xl'>Practice surgery!</h1>
                                        <h2 className='font-bold text-white mt-4 text-start text-2xl'>To our General Practice surgery,</h2>
                                        <p className="w-full text-start ms-2 text-white">
                                            You have other rights under data protection regulations in relation to transfer of data to a third country,  restriction of processing, objection to processing and data portability. Further information on these rights in the context of general practice is described in the Guideline available at <a href=""><span className='font-semibold text-xl cursor-pointer'>........</span></a>. You also have the right to lodge a complaint with the Data Protection Commissioner.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full md:w-1/3">
                            <div className="flex gap-6  mt-12 w-full">
                                <div className="relative w-full">
                                    <div className="absolute inset-0 bg-[#975d62] opacity-70"></div>
                                    <div className="relative z-10 p-4">
                                        <h1 className='font-arbel font-semibold text-[#ffffff] text-3xl md:text-3xl lg:text-4xl'>Transferring!</h1>
                                        <h2 className='font-bold text-xl text-start p-2 text-[#ffffff]'>Transferring to Another Practice</h2>
                                        <p className="w-full text-start ms-2">
                                            If you decide at any time and for whatever reason to transfer to another practice we will facilitate that decision by making available to your new doctor a copy of your records on receipt of your signed consent from your new doctor. For medico-legal reasons we will also retain a copy of your records in this practice for an appropriate period of time which may exceed eight years.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  <div className="flex flex-wrap justify-center items-center mt-14 space-y-4 md:space-y-0 md:space-x-12">
    <div className="flex flex-col items-center w-full md:w-1/3">
        <div className="relative p-4 w-full">
            <div className="absolute inset-0 bg-[#1977cc] opacity-70"></div>
            <div className="relative z-10">
                <h1 className='font-arbel text-[#ffffff] text-4xl md:text-3xl lg:text-4xl text-center font-semibold'>Rights!</h1>
                <h2 className='font-bold text-white mt-4 text-start text-xl md:text-2xl'>Patient's Rights</h2>
                <p className="w-full text-start ms-2 text-white">
                    We are committed to giving you the best possible service. Help us to help you.
                  
                    You have a right to, and the practice will try to ensure that:
                    <ul className="list-disc pl-5 mt-2">
                        <li>You will be treated with courtesy and respect</li>
                        <li>You will be treated as a partner in the care and attention that you receive</li>
                        <li>All aspects of your visit will be dealt with in privacy and confidence</li>
                        <li>You will be seen by a doctor of your choice subject to availability</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-center w-full md:w-1/3">
        <div className="relative p-4 w-full">
            <div className="absolute inset-0 bg-[#9b8e56] opacity-70"></div>
            <div className="relative z-10">
                <h1 className='font-arbel text-[#ffffff] text-4xl md:text-3xl lg:text-4xl text-center font-semibold'>Responsibilities!</h1>
                <h2 className='font-bold text-white mt-4 text-start text-xl md:text-2xl'>Patient's Responsibilities</h2>
                <p className="w-full text-start ms-2 text-white">
                    For patients, we would respectfully request that you:
                    <ul className="list-disc pl-5 mt-2">
                        <li>Treat practice staff and doctors with the same consideration and courtesy that you would like yourself.</li>
                        <li>Please ensure that you order your repeat medication in plenty of time allowing 48 working hours.</li>
                        <li>Attend appointments on time and check in with Reception.</li>
                        <li>Please follow up any test or investigations done for you.</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-center w-full md:w-1/3">
        <div className="relative p-4 mt-8 w-full">
            <div className="absolute inset-0 bg-[#975d62] opacity-70"></div>
            <div className="relative z-10">
                <h1 className='font-arbel text-[#ffffff] text-4xl md:text-3xl lg:text-4xl text-center font-semibold'>Confidentiality!</h1>
                <h2 className='font-bold text-[#ffffff] text-xl text-start'>Confidentiality</h2>
                <p className="w-full text-start ms-2 text-white">
                    The practice complies with the Data Protection Act 1998, and the confidentiality of your health records is a priority for the practice. We adhere to national guidelines to keep your information secure and confidential. Your information is only shared with other health professionals who are involved in your care and who require access to your medical records. You will be asked to consent to this before your information is shared.
                </p>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
        </div>
    );
}

export default Patients;
