import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-orange-400 font-[space-mono] text-sm tracking-widest uppercase mb-4">
          Get in Touch
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Let’s start <span className="text-orange-400">something.</span>
        </h1>
        <p className="text-neutral-400 font-[space-mono] text-lg mb-16">
          Have a project in mind or just want to chat? Fill out the form below, 
          and we'll get back to you within 24 hours.
        </p>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="bg-transparent border-b border-neutral-700 py-4 focus:border-orange-400 outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-b border-neutral-700 py-4 focus:border-orange-400 outline-none transition-colors"
            />
          </div>
          
          <textarea 
            placeholder="Tell us about your project" 
            rows="4"
            className="w-full bg-transparent border-b border-neutral-700 py-4 focus:border-orange-400 outline-none transition-colors"
          />

          <button 
            type="submit"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-orange-400 text-orange-400 px-8 py-4 hover:bg-orange-400 hover:text-neutral-950 transition-all duration-200"
          >
            Send Message
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;