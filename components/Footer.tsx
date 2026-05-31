const navLinks = ['Services', 'About', 'Process', 'Contact']

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/nghscorp' },
  { label: 'Instagram', href: 'https://instagram.com/nghscorp' },
  { label: 'Facebook', href: 'https://facebook.com/nghscorp' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/8 px-6 md:px-12 py-14">
      <div className="max-w-[1400px] mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-white flex items-center justify-center overflow-hidden flex-shrink-0 ring-1 ring-cream/10">
                <img src="/images/logo.jpg" alt="NGHS Corp. logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="font-display text-cream text-xl tracking-[0.2em] uppercase font-bold">
                NGHS<span className="text-brass">.</span>
              </div>
            </div>
            <p className="font-mono text-cream/25 text-xs tracking-[0.25em] uppercase">
              Trusted. Strategic. Proven.
            </p>
            <p className="font-mono text-cream/15 text-[10px] tracking-[0.2em] uppercase mt-1">
              New York City, NY
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-cream/30 text-xs tracking-[0.25em] uppercase hover:text-brass transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-6">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-cream/25 text-xs tracking-[0.25em] uppercase hover:text-brass transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/8 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-cream/18 text-xs tracking-widest">
            © 2025 NGHS Corp. All rights reserved. New York City, NY.
          </p>
          <a
            href="mailto:nicole@nghscorp.com"
            className="font-mono text-cream/25 text-xs tracking-widest hover:text-brass transition-colors duration-200"
          >
            nicole@nghscorp.com
          </a>
        </div>
      </div>
    </footer>
  )
}
