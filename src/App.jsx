import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {

    gsap.fromTo('#title', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power2.out'
    });

    gsap.fromTo('.animate-img', {
      x: 500,          
      opacity: 0,       
   
    },{
      opacity:1,
      x:0,
      stagger: 0.7,
      duration: 1.5, 
      ease: 'power2.out',
      delay: 1,

    })
  }, [])

  return (
    <div className='bg-white min-h-screen w-full relative overflow-hidden'>
      <div className='h-screen flex items-center px-20 w-50 md:flex'>
        <h1 id='title' className='text-8xl text-black font-bold z-10 font-[inria-serif] uppercase md:w-1/2 w-full'>
          Build Something that<br/> matters with NuView
        </h1>
        <img 
          src='1.jpg' 
          alt='img' 
          className='animate-img absolute right-0 w-150 h-150 mt-100 mb-150 mr-14 rounded-2xl object-cover md:block hidden' 
          id='picture'
        />
        <img
          src='3.jpg'
          alt='img'
          className='animate-img absolute right-0 w-150 h-150 mt-300 mb-250 mr-70 rounded-2xl object-cover md:block hidden'
        />
        <img
          src='2.jpg'
          alt='img'
          className='animate-img absolute right-0 w-150 h-100 mt-300 mb-200 mr-5 rounded-2xl object-cover md:block hidden'
        />
      </div>
    </div>
  )
}

export default App;