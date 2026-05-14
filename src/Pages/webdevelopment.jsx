import React from 'react';
import { Link } from 'react-router-dom'

function WebDevelopment() {
  const stacks = [
    { name: 'React', desc: 'Component-based architecture for dynamic, fast-loading interfaces.' },
    { name: 'Tailwind CSS', desc: 'Custom, responsive styling that keeps your site lightweight.' },
    { name: 'Vercel/Hosting', desc: 'Global edge deployment for 99.9% uptime and instant load speeds.' },
    { name: 'Stripe/API', desc: 'Secure payment gateways and custom functionality integration.' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-28">
      {/* Header */}
      <section className="max-w-4xl mb-24">
        <p className="text-orange-400 font-[space-mono] text-sm uppercase tracking-widest mb-4">Service: Web Development</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Code built to <span className="text-orange-400">scale.</span>
        </h1>
        <p className="mt-8 text-xl text-neutral-400 font-[space-mono] max-w-2xl">
          We don't just put text on a page. We build high-performance digital engines 
          using modern frameworks to ensure your business stays fast, secure, and ready for growth.
        </p>
      </section>

      {/* Tech Breakdown */}
      <section className="py-20 border-t border-neutral-800">
        <h2 className="text-sm font-[space-mono] text-orange-400 tracking-widest uppercase mb-16">The NuView Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stacks.map((item, idx) => (
            <div key={idx} className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-bold mb-4">{item.name}</h3>
              <p className="text-neutral-400 text-sm font-[space-mono]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 flex flex-col md:flex-row gap-16 bg-neutral-900/30 p-12 rounded-2xl border border-neutral-800">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Built for the Long Term</h2>
          <p className="text-neutral-400 mb-4">
            Many agencies build "disposable" websites that break after a year. We focus on 
            clean, maintainable code that allows you to add new features as your business grows.
          </p>
          <p className="text-neutral-400">
            From seamless database management to custom API integrations, we handle the 
            technical complexity so you can focus on running your business in Portmore.
          </p>
        </div>
        <div className="flex-1 border-l border-orange-400/30 pl-8">
          <h4 className="font-bold mb-4 uppercase text-orange-400">Our Promise</h4>
          <ul className="space-y-4 text-neutral-300 font-[space-mono]">
            <li>• Zero "bloat" or legacy code</li>
            <li>• Secure deployment cycles</li>
            <li>• Mobile-first architecture</li>
            <li>• Transparent development process</li>
          </ul>
        </div>
      </section>
      <section className="mt-20 text-center">
        <Link
            to="/"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-neutral-700 text-neutral-400 px-8 py-4 hover:border-orange-400 hover:text-orange-400 transition-all duration-200"
          >
            ← Back to Dashboard
          </Link>
      </section>
    </div>
  );
}

export default WebDevelopment;