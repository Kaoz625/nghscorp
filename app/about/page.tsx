import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — NGHS Corp.',
  description: 'NGHS Corp. is a NYC property compliance firm led by Nicole. Trusted by landlords, homeowners, and property managers across all five boroughs.',
}

const values = [
  { title: 'Transparency', desc: 'We tell you the timeline, the process, and the realistic outcome upfront — before you commit to anything.' },
  { title: 'Accountability', desc: 'We own the entire resolution process. If something needs to happen, we make it happen. No hand-offs.' },
  { title: 'NYC Expertise', desc: 'We work exclusively in New York City. No generalist firms, no out-of-state consultants — just deep local knowledge.' },
  { title: 'Urgency', desc: 'Violations don\'t wait. Neither do we. Every case is treated with the urgency it deserves from day one.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden pt-28">
        <img src="/images/hero.jpg" alt="NGHS Corp. team" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">Our Story</span>
          <h1 className="font-display text-cream text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight">
            About<br />
            <span className="text-brass">NGHS Corp.</span>
          </h1>
        </div>
      </div>

      {/* Story section */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-6">Founded in NYC</span>
            <h2 className="font-display text-charcoal text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight mb-8">
              Built by Someone Who Knows<br />the System.
            </h2>
            <div className="w-12 h-px bg-brass mb-8" />
            <p className="font-sans text-muted text-lg leading-relaxed mb-5">
              NGHS Corp. was founded by Nicole with one clear purpose: give NYC property owners a real partner — not a middleman — for navigating the city's compliance landscape.
            </p>
            <p className="font-sans text-muted text-base leading-relaxed mb-5">
              Before starting NGHS Corp., Nicole spent years working within and alongside NYC's regulatory agencies. She learned the DOB, HPD, and ECB systems from the inside — which inspectors to call, which filings move fast, and where the hidden bottlenecks are.
            </p>
            <p className="font-sans text-muted text-base leading-relaxed mb-10">
              That experience became the foundation of NGHS Corp. We're not a vendor who files paperwork and hopes for the best. We are active advocates for your property — showing up, following up, and seeing every case through to resolution.
            </p>
            <blockquote className="border-l-2 border-brass pl-6">
              <p className="font-display text-charcoal text-xl italic leading-snug">
                "I started this firm because property owners deserve someone who actually shows up — at the hearing, at the agency window, on the phone. That's what we do."
              </p>
              <cite className="font-mono text-brass text-xs tracking-[0.25em] uppercase block mt-4 not-italic">
                — Nicole, Founder & Principal
              </cite>
            </blockquote>
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img src="/images/team-consult.jpg" alt="NGHS Corp. team consultation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-charcoal/10" />
            </div>
            <div className="relative overflow-hidden aspect-[4/3]">
              <img src="/images/meeting.jpg" alt="Client meeting" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-charcoal/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">What We Stand For</span>
          <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight mb-16">
            Our Values.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/8">
            {values.map((v) => (
              <div key={v.title} className="bg-charcoal p-8 md:p-10">
                <div className="w-8 h-px bg-brass mb-6" />
                <h3 className="font-display text-cream text-xl font-bold mb-4">{v.title}</h3>
                <p className="font-sans text-cream/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — stats */}
      <section className="bg-brass py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Violations Cleared' },
              { value: '5', label: 'Boroughs Served' },
              { value: '100%', label: 'NYC-Focused' },
              { value: 'First', label: 'Time Resolution' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-charcoal text-4xl md:text-5xl font-black leading-none">{s.value}</div>
                <div className="font-mono text-charcoal/55 text-[10px] tracking-[0.3em] uppercase mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-display text-cream text-3xl md:text-4xl font-bold">Ready to work with us?</h2>
            <p className="font-sans text-cream/45 mt-2">Reach out to Nicole and the team. No obligation.</p>
          </div>
          <Link href="/contact/" className="flex-shrink-0 bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-cream transition-colors duration-300">
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </>
  )
}
