import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger , SplitText,)

function App() {

  useEffect(() => {
    let split = SplitText.create('#title', { type: 'words' });

    

    gsap.from(split.words, {
      x: -100,
      autoAlpha: 0,
      stagger:0.2,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.fromTo('.animate-img', {
      x: 500,
      opacity: 0,

    }, {
      opacity: 1,
      x: 0,
      stagger: 0.7,
      duration: 1.5,
      ease: 'power2.out',
      delay: 1,

    })
  }, [])

  return (
    <div className='bg-neutral-950 min-h-screen w-full relative overflow-hidden'>
      <div className='md:h-screen mt-10 md:flex md:flex-row items-center flex flex-col md:items-center md:px-20 md:w-50'>
        <h1 id='title' className='text-gray-100 text-5xl  w-100 font-bold text-center md:text-left mt-0 uppercase md:text-8xl md:text-gray-100 md:z-10 font-[inria-serif]'>
          Build Something that<br /><span className='text-amber-600'> matters</span> with NuView
          <br />
          <button className='bg-amber-600 hover:bg-amber-700 hover:text-white text-black text-2xl px-4 rounded w-50 h-10'>
            Get Started
          </button>
        </h1>

        <img
          src='1.jpg'
          alt='img'
          className='animate-img  w-60 ml-5 mt-80 absolute h-60 rounded-2xl md:absolute md:right-0 md:w-150 md:h-150 md:mt-100 md:mb-150 md:mr-14 md:rounded-2xl md:object-cover'
          id='picture'
        />
        <img
          src='3.jpg'
          alt='img'
          className='animate-img  w-40 ml-60 mt-100 absolute h-40 rounded-2xl md:absolute md:right-0 md:w-150 md:h-150 md:mt-300 md:mb-250 md:mr-70 md:rounded-2xl md:object-cover '
        />
        <img
          src='2.jpg'
          alt='img'
          className='animate-img  w-40 mr-60 mt-100 absolute h-40 rounded-2xl  md:absolute md:right-0 md:w-150 md:h-100 md:mt-300 md:mb-200 md:mr-5 md:rounded-2xl md:object-cover '
        />
      </div>
    </div>
  )
}

export default App;