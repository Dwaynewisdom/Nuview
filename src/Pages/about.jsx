import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Web Design & UI',
    explanation:
      'Pixel-perfect interfaces built for conversion. We craft visually striking layouts that guide users effortlessly from landing to checkout.',
    tools: ['Figma', 'Framer', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Web Development',
    explanation:
      'Scalable, performant builds using modern frameworks. From landing pages to full-stack applications — clean code, zero compromise.',
    tools: ['React',],
  },
  {
    number: '03',
    title: 'SEO & Performance',
    explanation:
      'Visibility is everything. We engineer sites that rank, load fast, and keep Google happy without sacrificing design quality.',
    tools: ['Lighthouse', 'Semrush', 'Schema.org'],
  },
];

const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4x',  label: 'Avg. Conversion Lift' },
  { value: '5yr', label: 'In the Industry' },
];

const techStack = [
  'React', 'Javascript',
  'Tailwind CSS', 'Vercel',
  'Figma', 'GSAP', 'Framer Motion', 'Stripe',
];

function About() {
  const containerRef   = useRef(null);
  const headingRef     = useRef(null);
  const paraRef        = useRef(null);
  const dividerRef     = useRef(null);
  const serviceRefs    = useRef([]);
  const statRefs       = useRef([]);
  const stackRef       = useRef(null);
  const ctaRef         = useRef(null);

  serviceRefs.current  = [];
  statRefs.current     = [];

  const addServiceRef  = (el) => el && serviceRefs.current.push(el);
  const addStatRef     = (el) => el && statRefs.current.push(el);

  return (
    <div
      id="about-container"
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden bg-neutral-950 text-white"
    >

      <section className="px-6 md:px-16 pt-28 pb-20 max-w-5xl">

        <p className="text-orange-400 font-[space-mono] text-sm tracking-widest uppercase mb-4">
          About Us
        </p>

        <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold leading-tight">
          Built to{' '}
          <span className="text-orange-400 relative inline-block">
            Perform
          </span>
        </h1>

        <p
          ref={paraRef}
          className="mt-8 text-xl md:text-2xl text-neutral-400 max-w-2xl font-[space-mono] leading-relaxed"
        >
          We don't just build websites. We engineer digital platforms that convert
          visitors into customers, scale with your ambitions, and outlast trends.
        </p>

        <div
          ref={dividerRef}
          className="mt-12 h-px from-orange-400 via-orange-400/30 to-transparent w-full max-w-2xl"
        />
      </section>

      <section className="px-6 md:px-16 py-20 max-w-6xl">

        <h2 className="text-sm font-[space-mono] text-orange-400 tracking-widest uppercase mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px ">
          {services.map((s) => (
            <div
              key={s.number}
              ref={addServiceRef}
              className="group bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span className="font-[space-mono] text-orange-400/50 text-xs tracking-widest">
                {s.number}
              </span>

              <h3 className="text-2xl font-bold mt-3 mb-4 group-hover:text-orange-400 transition-colors duration-200">
                {s.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {s.explanation}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="font-[space-mono] text-xs px-3 py-1 border border-neutral-700 text-neutral-400 rounded-full group-hover:border-orange-400/40 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-20 max-w-5xl">

        <h2 className="text-sm font-[space-mono] text-orange-400 tracking-widest uppercase mb-10">
          Our Stack
        </h2>

        <div ref={stackRef} className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-[space-mono] text-sm px-4 py-2 border border-neutral-700 text-neutral-300 hover:border-orange-400 hover:text-orange-400 transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section
        ref={ctaRef}
        className="px-6 md:px-16 py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-neutral-800 max-w-6xl"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to build<br />
            <span className="text-orange-400">something real?</span>
          </h2>
          <p className="mt-4 text-neutral-400 font-[space-mono] text-sm max-w-md">
            Let's talk about your project, no templates, your ideas shape your design and we give the <span className='uppercase text-amber-600 font-bold text-2xl'> results</span>
          </p>
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-orange-400 text-orange-400 px-8 py-4 hover:bg-orange-400 hover:text-neutral-950 transition-all duration-200 shrink-0"
        >
          Start a Project
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </section>
      <section>
        <div>
      <footer className="w-full border-t border-neutral-900 bg-neutral-950 pt-16 pb-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
      
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">NuView</h3>
            <p className="text-neutral-400 font-[space-mono] text-xs leading-relaxed">
              Helping <span className='text-amber-600 font-bold uppercase'>Local</span> businesses stand out online with modern, fast, and affordable web solutions.
            </p>
            <p className="mt-6 text-[10px] font-[space-mono] uppercase tracking-widest text-neutral-600">
              Est. 2026 / Based in Portmore
            </p>
          </div>

        
          <div>
            <h4 className="font-[space-mono] text-xs uppercase tracking-widest text-orange-400 mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-[space-mono]">
              <li className="hover:text-white transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">SEO Optimization</li>
              <li className="hover:text-white transition-colors cursor-pointer">Site Maintenance</li>
              <li className="hover:text-white transition-colors cursor-pointer">E-commerce</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-[space-mono] text-xs uppercase tracking-widest text-orange-400 mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-[space-mono]">
              <li className="hover:text-white transition-colors cursor-pointer underline decoration-orange-400/30">LinkedIn</li>
              <li className="hover:text-white transition-colors cursor-pointer underline decoration-orange-400/30">Instagram</li>
              <li className="hover:text-white transition-colors cursor-pointer underline decoration-orange-400/30">Twitter / X</li>
            </ul>
          </div>

      
          <div>
            <h4 className="font-[space-mono] text-xs uppercase tracking-widest text-orange-400 mb-6">Inquiries</h4>
            <p className="text-sm text-neutral-300 font-[space-mono] mb-2">hello@nuview.dev</p>
            <p className="text-sm text-neutral-500 font-[space-mono]">Available Mon — Fri</p>
          </div>
        </div>

       
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-[space-mono] text-neutral-300 uppercase tracking-tighter">
            © 2026 NuView Web Development. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-[space-mono] text-neutral-600 uppercase">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms</span>
          </div>
        </div>
      </footer>
        </div>
      </section>

    </div>
  );
}

export default About;