import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selling With Violations — NGHS Corp.',
  description: 'Violations blocking your NYC property sale or refinance? NGHS Corp. clears them fast so closings stay on schedule.',
}

const steps = [
  { num: '01', title: 'Send Us the Address', desc: 'We pull the full violation history from all NYC agencies within 24 hours.' },
  { num: '02', title: 'Get a Clearance Plan', desc: 'We tell you exactly what needs to be resolved, in what order, and how long it takes.' },
  { num: '03', title: 'We Handle Everything', desc: 'Filings, hearings, inspections — all managed by our team. You stay focused on the deal.' },
  { num: '04', title: 'Close Clean', desc: 'Violations cleared, records updated, documentation in hand. Your closing proceeds.' },
]

export default function SellYourProperty() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden pt-28">
        <img src="/images/brownstone.jpg" alt="NYC brownstone" className="absolute inset-0 w-full h-full object-cover object-[center_20%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">Real Estate</span>
          <h1 className="font-display text-cream text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight">
            Selling With<br />
            <span className="text-brass">Violations?</span>
          </h1>
          <p className="font-sans text-cream/55 text-xl mt-6 max-w-xl leading-relaxed">
            Open violations kill deals. We clear them before closing — fast enough to keep your transaction on track.
          </p>
        </div>
      </div>

      {/* The problem */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">The Problem</span>
            <h2 className="font-display text-charcoal text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight mb-6">
              Violations Show Up in Every Title Search.
            </h2>
            <div className="w-12 h-px bg-brass mb-8" />
            <p className="font-sans text-muted text-lg leading-relaxed mb-5">
              When a buyer's attorney runs a title search on your NYC property, every open DOB, HPD, and ECB violation appears. Buyers use them to renegotiate price, demand escrow holdbacks, or walk away entirely.
            </p>
            <p className="font-sans text-muted text-base leading-relaxed mb-8">
              Lenders are even stricter. A property with open DOB violations or ECB judgments often can't be refinanced until those issues are resolved. The same applies to 1031 exchange timelines, estate sales, and partnership buyouts.
            </p>
            <div className="space-y-4">
              {[
                'Buyers use violations to negotiate price reductions',
                'Lenders may refuse to fund with open ECB judgments',
                'Title companies require clearance before insuring',
                'Closings get delayed or killed entirely',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-brass mt-0.5 flex-shrink-0">→</span>
                  <p className="font-sans text-charcoal/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-charcoal p-10 md:p-14">
            <p className="font-mono text-brass text-[10px] tracking-[0.3em] uppercase mb-6">How We Help</p>
            <h3 className="font-display text-cream text-2xl font-bold mb-6 leading-snug">We Clear Violations Before Your Closing Date.</h3>
            <p className="font-sans text-cream/50 text-sm leading-relaxed mb-8">
              We work backward from your target closing date. Tell us when you need the property clean, and we build a resolution schedule that gets there — or tells you honestly if it can't be done in time.
            </p>
            <Link href="/contact/" className="group inline-flex items-center gap-3 bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-cream transition-colors duration-300">
              CHECK YOUR PROPERTY
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">The Process</span>
          <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight mb-16">
            From Violations to Clean Title.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/8">
            {steps.map((step) => (
              <div key={step.num} className="bg-charcoal p-8 md:p-10">
                <span className="font-mono text-brass text-3xl font-light block mb-6">{step.num}</span>
                <h3 className="font-display text-cream text-xl font-bold mb-3">{step.title}</h3>
                <p className="font-sans text-cream/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this serves */}
      <section className="bg-brass py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-charcoal/60 text-[10px] tracking-[0.3em] uppercase mb-8">We Work With</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Property Owners', 'Real Estate Attorneys', 'Brokers & Agents', 'Estate Executors'].map((role) => (
              <div key={role} className="text-center">
                <p className="font-display text-charcoal text-lg font-bold">{role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-charcoal/15">
            <p className="font-sans text-charcoal/70 text-base">Send us the property address and your closing date. We'll tell you what's there and whether we can clear it in time.</p>
            <Link href="/contact/" className="flex-shrink-0 bg-charcoal text-cream font-mono text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-ink transition-colors duration-300 whitespace-nowrap">
              GET STARTED →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
