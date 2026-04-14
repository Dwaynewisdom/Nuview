import React from 'react'
import {gsap} from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function About() {

  const offer =({
    Number:"1",
    Offer:"Web Design & Ui",
    Explanation:"",
    tools:""
  })

  return (
    <div id='about-container' className=' min-h-screen w-full relative overflow-hidden'>
        <div>
          
          <h1 className='text-5xl font-bold  mt-25 ml-5  '>
            Built to <span className='text-orange-400'>Perform</span>
          </h1>

          <p className='mt-5 text-2xl w-70 ml-5 font-[space-mono]'>
            We don't just build Websites. We engineer digital platforms that convert visitors into customers, scale with your ambitions, and outlast trends.
          </p>
          <div>

          </div>
        </div>
    </div>
  )
}

export default About;