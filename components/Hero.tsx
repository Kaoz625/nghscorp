'use client'
import { useEffect, useState } from 'react'

const serviceLabels = [
  { num: '01', label: 'DOB Violations' },
  { num: '02', label: 'HPD Violations' },
  { num: '03', label: 'ECB & Oath Hearings' },
  { num: '04', label: 'Managing Agent' },
  { num: '05', label: 'Compliance Consulting' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay: number) =>
    `transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`

  return (
    <section className="relative min-h-[100dvh] flex overflow-hidden">

      {/* ── LEFT: content panel ── */}
      <div className="relative z-10 bg-charcoal flex flex-col justify-between pt-28 pb-14 px-6 md:px-12 lg:px-16 w-full lg:w-[58%] flex-shrink-0">

        {/* Subtle grain overlay on left panel */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] hero-grain" />

        {/* Top eyebrow */}
        <div className="w-full flex justify-between items-center">
          <span className={`font-mono text-brass text-xs tracking-[0.3em] uppercase ${fade(100)}`} style={{ transitionDelay: '100ms' }}>
            NYC Property Compliance
          </span>
          <span className={`hidden md:block font-mono text-cream/25 text-xs tracking-[0.2em] uppercase ${fade(200)}`} style={{ transitionDelay: '200ms' }}>
            Mon – Fri &nbsp;·&nbsp; 10am – 6pm
          </span>
        </div>

        {/* Main content */}
        <div className="w-full flex-1 flex flex-col justify-center py-14 md:py-20">

          {/* Brass rule */}
          <div
            className={`h-px bg-brass mb-10 transition-all duration-700 ${mounted ? 'opacity-100 w-14' : 'opacity-0 w-0'}`}
            style={{ transitionDelay: '250ms' }}
          />

          {/* Headline */}
          <h1 className="font-display">
            {[
              { text: 'YOUR BUILDING.', accent: false },
              { text: 'YOUR VIOLATION.', accent: false },
              { text: 'OUR PROBLEM.', accent: true },
            ].map(({ text, accent }, i) => (
              <div
                key={text}
                className={`block overflow-hidden transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + i * 130}ms` }}
              >
                <span className={`block text-[clamp(2.4rem,5.5vw,5.5rem)] font-black leading-[0.9] tracking-tight ${accent ? 'text-brass' : 'text-cream'}`}>
                  {text}
                </span>
              </div>
            ))}
          </h1>

          {/* Body copy */}
          <div className={`mt-10 max-w-lg transition-all duration-700 ${fade(700)}`} style={{ transitionDelay: '700ms' }}>
            <p className="font-sans text-cream/55 text-lg leading-relaxed">
              DOB violations, HPD complaints, ECB hearings — NGHS Corp. handles
              every step of the resolution process so NYC property owners don't
              have to.
            </p>
          </div>

          {/* Trust badge */}
          <div className={`mt-7 flex items-center gap-3 transition-all duration-700 ${fade(800)}`} style={{ transitionDelay: '800ms' }}>
            <div className="flex -space-x-1.5">
              {['#8B7355', '#6B8F71', '#5B7A9E'].map((c, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-charcoal flex items-center justify-center" style={{ backgroundColor: c }}>
                  <span className="text-[9px] text-white font-bold">{['N','J','M'][i]}</span>
                </div>
              ))}
            </div>
            <span className="font-mono text-cream/30 text-[11px] tracking-[0.15em] uppercase">Trusted by NYC landlords & investors</span>
          </div>

          {/* CTAs */}
          <div className={`mt-10 flex flex-wrap gap-4 items-center transition-all duration-700 ${fade(850)}`} style={{ transitionDelay: '850ms' }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-cream transition-colors duration-300"
            >
              RESOLVE YOUR VIOLATIONS
              <span className="group-hover:translate-x-1.5 transition-transform duration-200 text-base">→</span>
            </a>
            <a
              href="#services"
              className="font-mono text-cream/40 text-xs tracking-[0.2em] uppercase hover:text-brass transition-colors duration-200 border-b border-transparent hover:border-brass pb-px"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>

        {/* Bottom service ticker */}
        <div className={`w-full transition-all duration-700 ${fade(1000)}`} style={{ transitionDelay: '1000ms' }}>
          <div className="border-t border-cream/10 pt-6 flex flex-wrap gap-x-8 gap-y-3">
            {serviceLabels.map(({ num, label }) => (
              <span key={num} className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase">
                <span className="text-brass/50 mr-2">{num}</span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: photo panel — desktop only ── */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        {/* Left-edge gradient: blends photo into charcoal panel */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent z-10 pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/40 to-transparent z-10 pointer-events-none" />

        {/* Photo */}
        <img
          src="/images/hero.jpg"
          alt="NGHS Corp. compliance specialists at work in NYC"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Very subtle charcoal tint over photo */}
        <div className="absolute inset-0 bg-charcoal/15" />

        {/* Brass accent line on far right */}
        <div className="absolute right-0 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-brass/20 to-transparent z-20" />

        {/* Floating credential card */}
        <div
          className={`absolute bottom-20 right-10 z-20 bg-charcoal/90 backdrop-blur-sm border border-cream/10 p-5 max-w-[220px] transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1100ms' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-brass rounded-full" />
            <span className="font-mono text-brass text-[10px] tracking-[0.25em] uppercase">Est. in NYC</span>
          </div>
          <p className="font-display text-cream text-sm font-semibold leading-snug">
            DOB · HPD · ECB<br />Compliance Specialists
          </p>
          <div className="mt-3 pt-3 border-t border-cream/10 flex items-center gap-2">
            <span className="font-mono text-cream/35 text-[10px] tracking-widest">FIRST-TIME RESOLUTION</span>
          </div>
        </div>
      </div>

    </section>
  )
}
