import React from 'react';
import { Link } from 'react-router-dom'

function SEO() {
  const features = [
    { title: 'Lightning Speed', desc: 'Optimized Core Web Vitals to ensure your site loads under 2 seconds.' },
    { title: 'Local Dominance', desc: 'Targeted keyword strategies to rank your business at the top of Portmore searches.' },
    { title: 'Structured Data', desc: 'Implementing Schema markup so Google understands your services perfectly.' },
    { title: 'Conversion Tracking', desc: 'Deep integration with Analytics to see exactly how your traffic converts.' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-28">
      {/* Header */}
      <section className="max-w-4xl mb-24">
        <p className="text-orange-400 font-[space-mono] text-sm uppercase tracking-widest mb-4">Service: SEO & Performance</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Don't just exist. <br />
          <span className="text-orange-400">Be found.</span>
        </h1>
        <p className="mt-8 text-xl text-neutral-400 font-[space-mono] max-w-2xl">
          A beautiful site is useless if it’s invisible. We combine technical 
          performance with aggressive SEO to ensure your customers find you first.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-20 border-t border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-neutral-900 p-8 border border-neutral-800 hover:border-orange-400/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
              <p className="text-neutral-400 text-sm font-[space-mono] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-neutral-900/50 px-8 md:px-16 rounded-2xl border border-neutral-800">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-400">90+</div>
            <div className="text-xs uppercase tracking-widest font-[space-mono] mt-2">Avg. Lighthouse Score</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400">3x</div>
            <div className="text-xs uppercase tracking-widest font-[space-mono] mt-2">More Local Leads</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400">2s</div>
            <div className="text-xs uppercase tracking-widest font-[space-mono] mt-2">Load Time</div>
          </div>
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

export default SEO;