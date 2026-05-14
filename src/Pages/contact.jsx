import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();


    const formData = new FormData(form.current);
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      setModalMessage("Please fill out all fields before sending your message.");
      setShowModal(true);
      return;
    }

    emailjs.sendForm('service_ocd4zwi', 'template_q5oo8wd', form.current, 'MrSvLoYRbDtp6iZvT')
      .then((result) => {
          setModalMessage("Your message has been sent successfully, we'll get back to you soon!");
          setShowModal(true);
          form.current.reset(); 
      }, (error) => {
          setModalMessage("Failed to send message. Please try again.");
          setShowModal(true);
      });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-28">
      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-8 max-w-sm w-full text-center">
            <p className="text-neutral-200 mb-6 font-[space-mono]">{modalMessage}</p>
            <button 
              onClick={() => setShowModal(false)}
              className="bg-orange-400 text-neutral-950 px-8 py-2 font-bold hover:bg-orange-500 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <p className="text-orange-400 font-[space-mono] text-sm tracking-widest uppercase mb-4">Get in Touch</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Let’s start <span className="text-orange-400">something.</span>
        </h1>
        <p className="text-neutral-400 text-lg mb-12">Have a project in mind or just want to chat? Fill out the form below, and we'll get back to you within 24 hours.</p>
        
        <form className="space-y-8" onSubmit={sendEmail} ref={form}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" placeholder="Your Name/Company" name='name' className="bg-transparent border-b border-neutral-700 py-4 focus:border-orange-400 outline-none transition-colors" />
            <input type="email" placeholder="Email Address" name='email' className="bg-transparent border-b border-neutral-700 py-4 focus:border-orange-400 outline-none transition-colors" />
          </div>
          <textarea placeholder="Tell us about your project" rows="4" name="message" className="w-full bg-transparent border-b border-neutral-700 py-4 focus:border-orange-400 outline-none transition-colors" />

          <button
            type="submit"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-orange-400 text-orange-400 px-8 py-4 hover:bg-orange-400 hover:text-neutral-950 transition-all duration-200"
          >
            Send Message
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>
      </div>
      <section className="mt-32 py-20 border-t border-neutral-800 text-center">
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

export default Contact;