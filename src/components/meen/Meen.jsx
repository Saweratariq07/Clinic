'use client'
import React from 'react'
import './styles.css';
import { useState, useEffect, useRef } from "react";
import Sects from '../sects/Sects';

function Meen() {
  const [placeholderText, setPlaceholderText] = useState("");
  const [highlightText, setHighlightText] = useState(false);
  const placeholderWords = ["Enhance", "Strenghen", "Boost", "Elevate", "Advance", "Refine", "Optimize", "Amplify", "Elevate", "Facilities", "Drive", "Empower", "Perfect", "Streamline", "Transform", "Reinforce"];
  const typingSpeed = 200;
  const wordPauseDuration = 2000;
  const highlightDuration = 1000;
  const wordIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const typeNextChar = () => {
      const word = placeholderWords[wordIndex.current];
      if (charIndex.current < word.length) {
        setPlaceholderText((prev) => word.slice(0, charIndex.current + 1));
        charIndex.current++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        setTimeout(() => {
          setHighlightText(true);
          setTimeout(() => {
            setHighlightText(false);
            setPlaceholderText("");
            wordIndex.current = (wordIndex.current + 1) % placeholderWords.length;
            charIndex.current = 0;
            setTimeout(typeNextChar, typingSpeed);
          }, highlightDuration);
        }, wordPauseDuration);
      }
    };

    typeNextChar();
  }, []);

  return (
    <div>
      <div className=''>

      <div className="relative w-full h-auto overflow-hidden">
      <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
    src="https://videos.pexels.com/video-files/2603664/2603664-uhd_2560_1440_24fps.mp4" 
  ></video>
  {/* Color Overlay */}
  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

  <div className="home-pic relative pt-20 z-10 flex flex-col items-center justify-center h-full p-10 text-[#facc15] space-y-4">
    <div className="bg">
      <div className="relative pt-16 w-full flex flex-col items-center justify-center">
        <div className="relative z-10 text-[#facc15] py-2 opacity-80 w-full rounded-md text-center">
          <Sects />
        </div>
      </div>
    </div>
  </div>
</div>


        <div className="container-fluid bg-gradient-to-r from-[#2a3a5d] to-[#4b0051] text-[#ffffff]">
          <div className="container mx-auto p-16">
            <div className="flex gap-8">
              <div className="col-md-4 bg-[#e470cb] rounded-md w-1 h-96"></div>
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex  text-4xl text-[#2abd4f] flex-wrap p-4">

                  <div className="flex-1 text-start">
                    <h1 className="text-center text-[#e470cb] font-semibold">Important Update:</h1>
                  </div>
                </div>
                <div>
                  <h4 className='ms-8 mt-1 text-lg text-start'>
                    <span className='text-start font-semibold'>Surgi Medical</span> Practice will now be led by <span className='font-bold'>Dr Muhammad Fahad</span>, as <span className='font-bold'>Dr. ....</span> transitions to a part-time role under his guidance. All medical card and private patients will be automatically transferred to the care of <span className='font-bold'>Dr Muhammad Fahad</span>.
                  </h4>
                </div>
                <div>
                  <h1 className='text-3xl text-[#e470cb] ms-4 text-start font-semibold'>For Patients:</h1>
                  <h4 className=' ms-8 mt-2 text-lg text-start'>If you wish to transfer your care to another practice, please speak to your new GP to arrange for the transfer of your medical records.</h4>
                  <h4 className='text-start ms-8'>For any inquiries, feel free to <a href="/contact" className='text-green-600 font-bold'>Email us</a> us for further information.</h4>
                </div>
                <div>
                  <div className="flex mt-6 gap-1 text-3xl text-[#41f350]">

                    <div className="flex-1">
                      <h1 className=" text-2xl ms-4 font-bold text-[#e470cb] text-start">A Message from Dr. ...:</h1>
                    </div>
                  </div>
                  <h4 className='mt-3 ms-8 text-start'>
                    <span className='font-bold'>Dr. ...</span> would like to extend heartfelt thanks to all the staff and patients for their support over the last 12 years. He wishes <span className='font-bold'>Dr Muhammad Fahad</span> many happy and successful years at <span className='font-bold'>Surgi Home </span>.
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Meen
