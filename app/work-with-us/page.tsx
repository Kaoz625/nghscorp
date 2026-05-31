import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work With Us — NGHS Corp.',
  description: 'How NGHS Corp. resolves NYC property violations. Our process, timelines, and what to expect.',
}

const steps = [
  {
    num: '01',
    title: 'Initial Consultation',
    duration: 'Day 1',
    desc: 'Tell us about your property and violations. We review your situation and provide an honest assessment of what we\'re dealing with, what resolution looks like, and a realistic timeline.',
    detail: 'You send us your property address (or addresses). We pull the full violation history from DOB, HPD, and ECB — no charge for the initial review.',
  },
  {
    num: '02',
    title: 'Violation Review & Strategy',
    duration: 'Days 2–5',
    desc: 'We audit your complete violation history across all agencies. Every open item, every deadline, every potential link between violations. Then we build your prioritized resolution plan.',
    detail: 'Some violations require immediate action — Class C HPD violations have 24-hour resolution requirements. We sequence the work in order of urgency and impact.',
  },
  {
    num: '03',
    title: 'Engagement & Filing',
    duration: 'Week 1–2',
    desc: 'We formally engage on your behalf with each relevant agency. This includes submitting required paperwork, scheduling inspections, and filing for ECB hearings or default vacaturs where applicable.',
    detail: 'You\'ll receive a written scope of work and engagement letter before we begin. No surprises.',
  },
  {
    num: '04',
    title: 'Active Resolution',
    duration: 'Ongoing',
    desc: 'We handle all agency communications, inspector scheduling, hearing appearances, and follow-up filings. You get regular updates — not radio silence.',
    detail: 'For ECB hearings, we prepare and present your case. For DOB and HPD, we coordinate with licensed contractors and inspectors to satisfy underlying conditions.',
  },
  {
    num: '05',
    title: 'Sign-Off & Confirmation',
    duration: 'Final Week',
    desc: 'Once violations are resolved, we confirm sign-offs with each agency, verify that records are updated in city databases, and provide you with a written compliance summary.',
    detail: 'You get documentation of every cleared violation — ready for your attorney, broker, or lender.',
  },
]

const timelines = [
  { type: 'HPD Class A Violation', range: '2–4 weeks' },
  { type: 'HPD Class B Violation', range: '3–6 weeks' },
  { type: 'HPD Class C (Hazardous)', range: '24–72 hours emergency' },
  { type: 'DOB Standard Violation', range: '4–10 weeks' },
  { type: 'DOB Stop Work Order', range: '1–3 weeks' },
  { type: 'ECB Standard Hearing', range: '3–6 weeks' },
  { type: 'ECB Default Vacatur', range: '4–8 weeks' },
  { type: 'Managing Agent Registration', range: '1–2 weeks' },
]

export default function WorkWithUs() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[50vh] flex items-end overflow-hidden pt-28 bg-charcoal">
        <div className="absolute inset-0 hero-grain opacity-[0.03]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">The Process</span>
          <h1 className="font-display text-cream text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight">
            How We Work<br />
            <span className="text-brass">With You.</span>
          </h1>
          <p className="font-sans text-cream/55 text-xl mt-6 max-w-xl leading-relaxed">
            Five steps. No surprises. You get updates at every stage, and we own every detail.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-0 divide-y divide-charcoal/10">
            {steps.map((step) => (
              <div key={step.num} className="py-14 grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-8 items-start">
                <div>
                  <span className="font-mono text-brass text-3xl font-light block">{step.num}</span>
                  <span className="font-mono text-charcoal/30 text-[10px] tracking-[0.25em] uppercase block mt-2">{step.duration}</span>
                </div>
                <div>
                  <h2 className="font-display text-charcoal text-2xl md:text-3xl font-bold mb-4 leading-tight">{step.title}</h2>
                  <p className="font-sans text-muted text-base leading-relaxed">{step.desc}</p>
                </div>
                <div className="lg:pl-8 lg:border-l lg:border-charcoal/10">
                  <p className="font-sans text-charcoal/50 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines */}
      <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">Typical Timelines</span>
              <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight">
                How Long Does<br />Resolution Take?
              </h2>
              <p className="font-sans text-cream/45 text-base leading-relaxed mt-6 max-w-sm">
                Every case is different, but these ranges reflect typical resolution times for common violation types in NYC.
              </p>
            </div>
            <div className="divide-y divide-cream/10">
              {timelines.map((t) => (
                <div key={t.type} className="py-5 flex items-center justify-between gap-8">
                  <span className="font-sans text-cream/60 text-sm">{t.type}</span>
                  <span className="font-mono text-brass text-sm tracking-wide whitespace-nowrap">{t.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="relative overflow-hidden">
        <img src="/images/consulting.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/82" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="font-display text-cream text-3xl md:text-5xl font-bold">Start with a free violation review.</h2>
              <p className="font-sans text-cream/50 text-lg mt-4 max-w-lg">Send us your address. We pull the history, assess the situation, and tell you exactly what you're looking at — before you commit to anything.</p>
            </div>
            <Link href="/contact/" className="flex-shrink-0 bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-cream transition-colors duration-300 whitespace-nowrap">
              GET YOUR REVIEW →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
