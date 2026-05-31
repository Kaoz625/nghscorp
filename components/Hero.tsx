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
    `transition-all duration-700 ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`

  return (
    <section className="relative min-h-[100dvh] bg-charcoal flex flex-col justify-between pt-28 pb-14 px-6 md:px-12 overflow-hidden">

      {/* Background architectural grid — right half */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full grid grid-cols-5 opacity-[0.04]">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="border border-cream" />
          ))}
        </div>
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brass/30 to-transparent" />
      </div>

      {/* Top eyebrow bar */}
      <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        <span
          className={`font-mono text-brass text-xs tracking-[0.3em] uppercase ${fade(100)}`}
          style={{ transitionDelay: '100ms' }}
        >
          NYC Property Compliance
        </span>
        <span
          className={`hidden md:block font-mono text-cream/25 text-xs tracking-[0.2em] uppercase ${fade(200)}`}
          style={{ transitionDelay: '200ms' }}
        >
          Mon – Fri &nbsp;·&nbsp; 10am – 6pm
        </span>
      </div>

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center py-14 md:py-20">

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
              className={`block overflow-hidden transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + i * 130}ms` }}
            >
              <span
                className={`block text-[clamp(2.4rem,7.5vw,6.5rem)] font-black leading-[0.9] tracking-tight ${
                  accent ? 'text-brass' : 'text-cream'
                }`}
              >
                {text}
              </span>
            </div>
          ))}
        </h1>

        {/* Body copy */}
        <div
          className={`mt-10 max-w-lg transition-all duration-700 ${fade(700)}`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="font-sans text-cream/55 text-lg leading-relaxed">
            DOB violations, HPD complaints, ECB hearings — NGHS Corp. handles
            every step of the resolution process so NYC property owners don't
            have to.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-wrap gap-4 items-center transition-all duration-700 ${fade(850)}`}
          style={{ transitionDelay: '850ms' }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-cream transition-colors duration-300"
          >
            RESOLVE YOUR VIOLATIONS
            <span className="group-hover:translate-x-1.5 transition-transform duration-200 text-base">
              →
            </span>
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
      <div
        className={`max-w-[1400px] mx-auto w-full transition-all duration-700 ${fade(1000)}`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="border-t border-cream/10 pt-6 flex flex-wrap gap-x-8 gap-y-3">
          {serviceLabels.map(({ num, label }) => (
            <span
              key={num}
              className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase"
            >
              <span className="text-brass/50 mr-2">{num}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
