'use client'
import { useState, useEffect } from 'react'

const links = ['Services', 'About', 'Process', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/96 backdrop-blur-md border-b border-cream/8'
          : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-cream text-lg tracking-[0.2em] uppercase font-bold"
        >
          NGHS<span className="text-brass">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-cream/50 hover:text-cream text-xs tracking-[0.25em] uppercase transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-brass text-charcoal font-mono text-xs font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-cream transition-colors duration-300"
        >
          WORK WITH US
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-charcoal border-t border-cream/10`}
      >
        <div className="px-6 py-8 flex flex-col gap-7">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-cream/60 text-sm tracking-[0.25em] uppercase hover:text-cream transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-brass text-charcoal font-mono text-xs font-medium tracking-[0.2em] uppercase px-6 py-4 text-center mt-2"
          >
            WORK WITH US
          </a>
        </div>
      </div>
    </nav>
  )
}
