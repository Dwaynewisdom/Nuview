import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const allServices = [
    {
      title: 'Web Design & UI',
      desc: 'Pixel-perfect interfaces focused on conversion and brand identity.',
      path: '/webdesign',
      icon: '🎨'
    },
    {
      title: 'Web Development',
      desc: 'High-performance, scalable builds using modern, secure frameworks.',
      path: '/development',
      icon: '⚡'
    },
    {
      title: 'SEO & Performance',
      desc: 'Technical optimization to rank your business at the top of local searches.',
      path: '/seo',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-28">
      <section className="max-w-4xl mb-24">
        <p className="text-orange-400 font-[space-mono] text-sm uppercase tracking-widest mb-4">Our Expertise</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Comprehensive digital <br />
          <span className="text-orange-400">solutions for growth.</span>
        </h1>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {allServices.map((s, idx) => (
          <div key={idx} className="group border border-neutral-800 p-8 hover:border-orange-400 transition-all duration-300">
            <div className="text-4xl mb-6">{s.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-neutral-400 font-[space-mono] text-sm mb-8">{s.desc}</p>
            <Link 
              to={s.path}
              className="inline-flex items-center gap-2 text-orange-400 font-[space-mono] text-sm group-hover:gap-4 transition-all"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </section>
      
      <section className="mt-32 py-20 border-t border-neutral-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to upgrade your online presence?</h2>
        <Link to="/contact" className="inline-block bg-orange-400 text-neutral-950 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors">
          Start a Project
        </Link>
      </section>
    </div>
  );
}

export default Services;