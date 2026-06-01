import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Agent Services — NGHS Corp.',
  description: 'NYC managing agent services. HPD registration, ongoing compliance oversight, and full regulatory coverage for property owners.',
}

const services = [
  { title: 'HPD Managing Agent Registration', desc: 'NYC law requires every multi-family building to have a registered managing agent. We handle the registration, keep it current, and ensure you\'re never out of compliance with this baseline requirement.' },
  { title: 'Ongoing Violation Monitoring', desc: 'We scan your property\'s record across DOB, HPD, and ECB on a regular basis — catching new violations before they compound, and flagging anything that needs immediate attention.' },
  { title: 'Tenant Complaint Response', desc: 'When HPD receives a tenant complaint, the clock starts. We coordinate your response, document conditions, and resolve the underlying issue before a violation is formally issued.' },
  { title: 'Annual Compliance Filings', desc: 'From annual HPD registration renewals to required certifications of correction, we track every deadline and handle every filing — so nothing falls through the cracks.' },
  { title: 'Multi-Building Portfolio Management', desc: 'Own more than one building? We manage compliance across your entire portfolio from a single engagement. One point of contact, full visibility across all properties.' },
]

export default function ManagingAgent() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden pt-28">
        <img src="/images/brownstone.jpg" alt="NYC brownstone building" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">Services</span>
          <h1 className="font-display text-cream text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight">
            Managing Agent<br />
            <span className="text-brand">Services.</span>
          </h1>
          <p className="font-sans text-cream/55 text-xl mt-6 max-w-xl leading-relaxed">
            NYC law requires a managing agent. We are that agent — handling registration, compliance, and everything in between.
          </p>
        </div>
      </div>

      {/* What is a managing agent */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">What It Means</span>
            <h2 className="font-display text-charcoal text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight mb-6">
              Every NYC Building Needs a Managing Agent.
            </h2>
            <div className="w-12 h-px bg-brass mb-8" />
            <p className="font-sans text-muted text-lg leading-relaxed mb-5">
              Under NYC law, any residential building with three or more units must designate a managing agent and register them with HPD. The managing agent is the person responsible for building compliance — they're who the city contacts when something is wrong.
            </p>
            <p className="font-sans text-muted text-base leading-relaxed mb-8">
              Many owners use themselves or a building superintendent as managing agent — but that creates personal liability and often leads to missed filings, unanswered complaints, and accumulated violations. NGHS Corp. steps in as your professional, registered managing agent.
            </p>
            <div className="bg-charcoal/5 border border-charcoal/10 p-6">
              <p className="font-mono text-brand text-[10px] tracking-[0.3em] uppercase mb-3">Why It Matters</p>
              <p className="font-sans text-charcoal text-sm leading-relaxed">
                When HPD issues a violation or receives a complaint, they contact the managing agent. If that agent doesn't respond — or doesn't know what to do — the violation escalates. We respond fast, every time.
              </p>
            </div>
          </div>

          <div className="relative">
            <img src="/images/meeting.jpg" alt="Managing agent consultation" className="w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-5 -left-5 bg-brand p-6">
              <div className="font-display text-charcoal text-2xl font-black">Zero</div>
              <div className="font-mono text-charcoal/70 text-[10px] tracking-[0.2em] uppercase mt-1">Missed Deadlines</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">What's Included</span>
          <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight mb-16">
            Full-Scope Managing<br />Agent Coverage.
          </h2>
          <div className="divide-y divide-cream/10">
            {services.map((s, i) => (
              <div key={s.title} className="py-10 grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 items-start group">
                <span className="font-mono text-brass/40 text-2xl font-light">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-cream text-xl md:text-2xl font-bold mb-3 leading-tight">{s.title}</h3>
                  <p className="font-sans text-cream/45 text-base leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">Need a managing agent?</h2>
            <p className="font-sans text-white/60 mt-2">We'll review your property and get you properly registered.</p>
          </div>
          <Link href="/contact/" className="flex-shrink-0 bg-charcoal text-cream font-mono text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-ink transition-colors duration-300">
            TALK TO US →
          </Link>
        </div>
      </section>
    </>
  )
}
