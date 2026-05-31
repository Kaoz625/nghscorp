import Link from 'next/link'

const services = [
  { label: 'Compliance Services', href: '/compliance-services/' },
  { label: 'Managing Agent Services', href: '/managing-agent/' },
  { label: 'Sell Your NYC Property', href: '/sell-your-property/' },
]

const company = [
  { label: 'About', href: '/about/' },
  { label: 'Process', href: '/work-with-us/' },
  { label: 'Contact', href: '/contact/' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/nghscorp' },
  { label: 'Instagram', href: 'https://instagram.com/nghscorp' },
  { label: 'Facebook', href: 'https://facebook.com/nghscorp' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/8 px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="/images/logo.jpg" alt="NGHS Corp." className="w-8 h-8 object-contain" />
              </div>
              <div className="font-display text-cream text-xl tracking-[0.2em] uppercase font-bold">
                NGHS<span className="text-brass">.</span>
              </div>
            </Link>
            <p className="font-sans text-cream/40 text-sm leading-relaxed mb-5">
              NYC property compliance, start to finish. DOB, HPD, ECB — we handle it.
            </p>
            <div className="flex gap-5">
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-cream/25 text-[10px] tracking-[0.2em] uppercase hover:text-brass transition-colors duration-200">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-cream/25 text-[10px] tracking-[0.3em] uppercase mb-5">Services</p>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <Link key={s.href} href={s.href}
                  className="font-sans text-cream/45 text-sm hover:text-cream transition-colors duration-200">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-cream/25 text-[10px] tracking-[0.3em] uppercase mb-5">Company</p>
            <div className="flex flex-col gap-3">
              {company.map((c) => (
                <Link key={c.href} href={c.href}
                  className="font-sans text-cream/45 text-sm hover:text-cream transition-colors duration-200">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-cream/25 text-[10px] tracking-[0.3em] uppercase mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:nicole@nghscorp.com"
                className="font-sans text-cream/45 text-sm hover:text-brass transition-colors duration-200">
                nicole@nghscorp.com
              </a>
              <p className="font-sans text-cream/30 text-sm">New York City, NY</p>
              <p className="font-sans text-cream/30 text-sm">Mon–Fri, 10am–6pm</p>
              <p className="font-sans text-cream/20 text-xs">Sat by appointment</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-cream/8 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-cream/18 text-xs tracking-widest">
            © 2025 NGHS Corp. All rights reserved. New York City, NY.
          </p>
          <p className="font-mono text-cream/15 text-xs tracking-widest">
            Trusted. Strategic. Proven.
          </p>
        </div>
      </div>
    </footer>
  )
}
