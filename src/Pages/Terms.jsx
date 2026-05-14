import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

function Terms() {
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    window.scrollTo(0, 0)
  }, [])

  const clauses = [
    {
      number: '01',
      title: 'Project Initiation',
      text: 'All projects begin with a formal discovery phase. Work commences only after the initial deposit is secured and all necessary brand assets are provided by the client.'
    },
    {
      number: '02',
      title: 'Intellectual Property',
      text: 'Upon final payment, the client owns the frontend code and visual design. NuView retains the right to use non-proprietary code snippets and display the work in our portfolio.'
    },
    {
      number: '03',
      title: 'Payment Terms',
      text: 'Invoices are issued at project milestones. Late payments exceeding 15 days may result in a temporary suspension of development and hosting services.'
    },
    {
      number: '04',
      title: 'Revisions & Scope',
      text: 'Two rounds of minor revisions are included. Requests that fall outside the original Project Roadmap will be quoted as additional features at our standard hourly rate.'
    }
  ]

  return (
    <div className="bg-neutral-950 min-h-screen w-full text-white font-sans selection:bg-orange-400 selection:text-neutral-950">
      <div className="h-20" />

      <main ref={contentRef} className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-orange-400 font-[space-mono] text-sm tracking-widest uppercase mb-4">
          Service Agreement
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 font-[inria-serif]">
          Terms of <span className="text-orange-400">Service</span>
        </h1>

        <div className="h-px bg-gradient-to-red from-orange-400/50 to-transparent w-full mb-12" />

        <div className="space-y-16">
          <section>
            <p className="text-xl text-neutral-400 font-[space-mono] leading-relaxed">
              By partnering with NuView, you agree to the following terms. We believe in clear expectations and zero compromise on quality.
            </p>
          </section>

          {/* Clauses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {clauses.map((clause) => (
              <div key={clause.number} className="group relative">
                <div className="absolute -left-4 top-0 h-full w-0.5 bg-orange-400/20 group-hover:bg-orange-400 transition-colors duration-300" />
                <span className="font-[space-mono] text-orange-400 text-xs tracking-widest uppercase">
                  Clause {clause.number}
                </span>
                <h2 className="text-2xl font-bold mt-2 mb-4">
                  {clause.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {clause.text}
                </p>
              </div>
            ))}
          </div>

          <section className="mt-20 pt-10 border-t border-neutral-900">
            <h3 className="font-[space-mono] text-orange-400 text-sm uppercase mb-6">Liability & Warranty</h3>
            <p className="text-neutral-500 text-xs leading-relaxed uppercase tracking-tight">
              NuView provides services "as is." While we build for performance and security, we are not liable for third-party hosting failures, data breaches on client-managed servers, or loss of revenue due to site downtime.
            </p>
          </section>
        </div>

        <div className="mt-20 flex flex-col md:flex-row gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-neutral-700 text-neutral-400 px-8 py-4 hover:border-orange-400 hover:text-orange-400 transition-all duration-200"
          >
            ← Return Home
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm bg-orange-400 text-neutral-950 px-8 py-4 hover:bg-white transition-all duration-200"
          >
            Accept & Start Project
          </Link>
        </div>
      </main>

      <footer className="border-t border-neutral-900 py-10 px-6 text-center">
        <p className="text-[10px] font-[space-mono] text-neutral-600 uppercase tracking-widest">
          Legal Revision: 2026.05.14 / NuView Web Dev
        </p>
      </footer>
    </div>
  )
}

export default Terms