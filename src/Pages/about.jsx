import React from 'react'
import {gsap} from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function About() {
  useEffect(() => {
    gsap.to("#about,#about3", {
      scrollTrigger: {
        trigger: "#about-container",
        start: "top 80%",
        scrub: true,
      },
      rotate: 0,
      opacity: 1,
    });
  }, [])
  return (
    <div id='about-container' className=' min-h-screen w-full relative overflow-hidden'>
        <div className='flex flex-col items-center justify-center h-screen px-20 w-full'>
            <div id="about" className='bg-[#000000b3] absolute -rotate-20 mr-50 mt-10 rounded-lg p-10 w-40 h-60 max-w-2xl text-center'>
            
            </div>
            <div id="about2" className='bg-[#000000b3] absolute rounded-lg p-10 w-50 h-70 max-w-2xl text-center'>
            
            </div>
            <div id="about3" className='bg-[#000000b3] absolute rotate-20 ml-50 mt-10 rounded-lg p-10 w-40 h-60 max-w-2xl text-center'>
            
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default About;