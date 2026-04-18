import React from 'react';

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We analyze your local competitors and identify the unique value your business offers.' },
  { step: '02', title: 'UX Strategy', desc: 'We map out a user journey designed to turn casual visitors into loyal customers.' },
  { step: '03', title: 'Visual Design', desc: 'Crafting high-fidelity, responsive interfaces that reflect your brand identity.' },
  { step: '04', title: 'Optimization', desc: 'Final testing for speed, mobile responsiveness, and SEO readiness.' },
];

function WebDesign() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 pt-28">
      
    
      <section className="max-w-4xl mb-24">
        <p className="text-orange-400 font-[space-mono] text-sm uppercase tracking-widest mb-4">Service: Web Design & UI</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Design that <span className="text-orange-400">converts</span>, <br />
          not just looks good.
        </h1>
        <p className="mt-8 text-xl text-neutral-400 font-[space-mono] max-w-2xl">
          Your website is your best salesperson. We build interfaces that load fast, 
          look premium, and guide your customers directly to the 'Buy' or 'Book' button.
        </p>
      </section>

     
      <section className="py-20 border-t border-neutral-800">
        <h2 className="text-sm font-[space-mono] text-orange-400 tracking-widest uppercase mb-16">The NuView Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item) => (
            <div key={item.step} className="group border-l border-neutral-800 pl-6 hover:border-orange-400 transition-colors">
              <span className="text-3xl font-bold text-neutral-700 group-hover:text-orange-400 transition-colors">{item.step}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm font-[space-mono]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-neutral-900 p-12 rounded-lg border border-neutral-800">
           <h3 className="text-3xl font-bold mb-6">Why Local Matters</h3>
           <ul className="space-y-4 text-neutral-400">
             <li className="flex items-center gap-3">✓ Mobile-first local SEO</li>
             <li className="flex items-center gap-3">✓ Google Maps integration</li>
             <li className="flex items-center gap-3">✓ Fast-loading contact forms</li>
             <li className="flex items-center gap-3">✓ Clean, professional trust-building layouts</li>
           </ul>
        </div>
        <div>
          <h2 className="text-4xl font-bold">Your brand, <br/><span className="text-amber-600">digitally elevated.</span></h2>
          <p className="mt-6 text-neutral-400">Stop losing customers to outdated, slow websites. Get a platform that actually generates revenue for your business in Portmore and beyond.</p>
        </div>
      </section>

      
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to start your redesign?</h2>
        <a href="#contact" className="inline-block border border-orange-400 text-orange-400 px-10 py-4 font-[space-mono] hover:bg-orange-400 hover:text-neutral-950 transition-all">
          Get a Free Audit
        </a>
      </section>

    </div>
  );
}

export default WebDesign;