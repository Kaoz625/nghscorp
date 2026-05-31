'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const services = [
  { label: 'Compliance Services', href: '/compliance-services/' },
  { label: 'Managing Agent Services', href: '/managing-agent/' },
  { label: 'Sell Your NYC Property', href: '/sell-your-property/' },
]

const links = [
  { label: 'About', href: '/about/' },
  { label: 'Process', href: '/work-with-us/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-charcoal/96 backdrop-blur-md border-b border-cream/8' : ''
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center overflow-hidden flex-shrink-0 ring-1 ring-cream/10 group-hover:ring-brass/40 transition-all duration-300">
            <img src="/images/logo.jpg" alt="" className="w-7 h-7 object-contain" />
          </div>
          <span className="font-display text-cream text-base tracking-[0.2em] uppercase font-bold">
            NGHS<span className="text-brass">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 font-mono text-cream/50 hover:text-cream text-xs tracking-[0.25em] uppercase transition-colors duration-200"
            >
              Services
              <span className={`text-brass text-[8px] transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-charcoal border border-cream/10 shadow-2xl">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3.5 font-mono text-cream/50 text-[11px] tracking-[0.2em] uppercase hover:text-cream hover:bg-cream/5 border-b border-cream/5 last:border-0 transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-cream/50 hover:text-cream text-xs tracking-[0.25em] uppercase transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact/"
          className="hidden md:inline-flex items-center gap-2 bg-brass text-charcoal font-mono text-xs font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-cream transition-colors duration-300"
        >
          WORK WITH US
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} bg-charcoal border-t border-cream/10`}>
        <div className="px-6 py-8 flex flex-col gap-0">
          <p className="font-mono text-cream/25 text-[10px] tracking-[0.3em] uppercase mb-3">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-cream/50 text-sm tracking-[0.2em] uppercase py-3 border-b border-cream/5 hover:text-cream transition-colors"
            >
              {s.label}
            </Link>
          ))}
          <div className="mt-5 flex flex-col gap-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-cream/60 text-sm tracking-[0.25em] uppercase hover:text-cream transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact/"
            onClick={() => setMenuOpen(false)}
            className="bg-brass text-charcoal font-mono text-xs font-medium tracking-[0.2em] uppercase px-6 py-4 text-center mt-6"
          >
            WORK WITH US
          </Link>
        </div>
      </div>
    </nav>
  )
}
