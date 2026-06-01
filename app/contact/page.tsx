import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — NGHS Corp.',
  description: 'Reach out to NGHS Corp. for NYC property violation removal and compliance services.',
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <div className="bg-charcoal pt-32 pb-16 px-6 md:px-12 border-b border-cream/8">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">Contact</span>
          <h1 className="font-display text-cream text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight">
            Let's Resolve<br />
            <span className="text-brand">Your Violations.</span>
          </h1>
          <p className="font-sans text-cream/50 text-xl mt-6 max-w-xl leading-relaxed">
            Send us your property address. We'll pull the violation history and outline a resolution path — no obligation, no charge.
          </p>
        </div>
      </div>

      {/* Contact grid */}
      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-16 md:gap-24 items-start">

          {/* Left: info */}
          <div>
            <div className="space-y-10 mb-14">
              <div>
                <span className="font-mono text-cream/30 text-[10px] tracking-[0.3em] uppercase block mb-3">Email</span>
                <a href="mailto:nicole@nghscorp.com" className="font-display text-cream text-2xl md:text-3xl hover:text-brand transition-colors duration-200">
                  nicole@nghscorp.com
                </a>
              </div>
              <div>
                <span className="font-mono text-cream/30 text-[10px] tracking-[0.3em] uppercase block mb-3">Hours</span>
                <p className="font-sans text-cream text-base">Monday – Friday, 10:00 AM – 6:00 PM</p>
                <p className="font-sans text-cream/40 text-sm mt-1">Saturday by Appointment</p>
              </div>
              <div>
                <span className="font-mono text-cream/30 text-[10px] tracking-[0.3em] uppercase block mb-3">Location</span>
                <p className="font-sans text-cream text-base">New York City, NY</p>
                <p className="font-sans text-cream/40 text-sm mt-1">All Five Boroughs</p>
              </div>
              <div>
                <span className="font-mono text-cream/30 text-[10px] tracking-[0.3em] uppercase block mb-4">Follow Us</span>
                <div className="flex gap-6">
                  {[
                    { label: 'LinkedIn', href: 'https://linkedin.com/company/nghscorp' },
                    { label: 'Instagram', href: 'https://instagram.com/nghscorp' },
                    { label: 'Facebook', href: 'https://facebook.com/nghscorp' },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-cream/30 text-xs tracking-[0.25em] uppercase hover:text-brand transition-colors duration-200">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden aspect-[16/9] hidden lg:block">
              <img src="/images/building.jpg" alt="NYC building" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-charcoal/30" />
              <div className="absolute bottom-5 left-5">
                <span className="font-mono text-cream/60 text-[10px] tracking-[0.3em] uppercase">Serving All Five Boroughs</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-surface border border-cream/8 p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
