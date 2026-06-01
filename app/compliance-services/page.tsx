import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compliance Services — NGHS Corp.',
  description: 'DOB, HPD, and ECB violation removal for NYC property owners. We handle every step from discovery to sign-off.',
}

const services = [
  {
    num: '01',
    agency: 'DOB',
    title: 'DOB Violation Removal',
    desc: 'Department of Buildings violations left unresolved escalate into stop work orders, hefty fines, and blocked permits. We navigate the DOB system — paperwork, inspections, and sign-off coordination — so your building stays compliant and your permits keep moving.',
    tags: ['Open Violations', 'Stop Work Orders', 'Sign-Off Coordination', 'ECB Linkage', 'Permit Holds'],
    timeline: '4–10 weeks typical',
  },
  {
    num: '02',
    agency: 'HPD',
    title: 'HPD Violation Removal',
    desc: 'Housing Preservation & Development violations — from heat and hot water complaints to apartment maintenance orders — must be resolved before they land in housing court. We handle Class A, B, and C violations and keep you out of the courtroom.',
    tags: ['Class A, B & C', 'Heat & Hot Water', 'Hazardous Conditions', 'Court Avoidance', 'Tenant Complaints'],
    timeline: '2–6 weeks typical',
  },
  {
    num: '03',
    agency: 'ECB · OATH',
    title: 'ECB & OATH Hearing Representation',
    desc: 'Environmental Control Board and OATH hearings require skilled representation. We prepare your case, challenge invalid or improperly issued violations, and negotiate reduced penalties — including default judgments that have grown far beyond the original fine.',
    tags: ['Hearing Preparation', 'Fine Reduction', 'Default Vacatur', 'Invalid Violation Challenge', 'Penalty Negotiation'],
    timeline: '3–8 weeks typical',
  },
  {
    num: '04',
    agency: 'MULTI-AGENCY',
    title: 'Compliance Consulting',
    desc: "Proactive audits of your property's full violation history across all agencies. We identify hidden liabilities, prioritize resolution order, and build a roadmap to keep your building clean — before problems become emergencies.",
    tags: ['Violation Audits', 'Risk Assessment', 'Preventive Strategy', 'Multi-Agency Review', 'Portfolio Scanning'],
    timeline: 'Ongoing engagement',
  },
]

const faqs = [
  {
    q: 'How long does it take to clear a violation?',
    a: 'It depends on the agency and violation type. HPD violations often resolve in 2–6 weeks. DOB violations typically take 4–10 weeks. ECB default judgments can take 3–8 weeks once we file. We give you a specific timeline estimate after reviewing your property.',
  },
  {
    q: 'What happens if I ignore a violation?',
    a: 'Unresolved violations compound. DOB violations can trigger stop work orders and block future permits. ECB violations accumulate interest and can result in liens on your property. HPD violations can lead to housing court proceedings and 7(a) receiver appointments. Acting quickly saves money.',
  },
  {
    q: 'Do you handle violations in all five boroughs?',
    a: 'Yes. We work across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Agency relationships and procedures vary by borough — we know them all.',
  },
  {
    q: 'I have a defaulted ECB fine. Can you help?',
    a: 'Yes, this is one of our specialties. Defaulted ECB fines often carry interest that doubles or triples the original penalty. We file to vacate the default and represent you at the re-hearing to reduce or eliminate the fine.',
  },
]

export default function ComplianceServices() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden pt-28">
        <img src="/images/building.jpg" alt="NYC building" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">Services</span>
          <h1 className="font-display text-cream text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight">
            Compliance<br />
            <span className="text-brand">Services.</span>
          </h1>
          <p className="font-sans text-cream/55 text-xl mt-6 max-w-xl leading-relaxed">
            DOB, HPD, ECB — every NYC agency, every violation type. We handle the entire resolution process so you don't have to.
          </p>
        </div>
      </div>

      {/* Services list */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto divide-y divide-charcoal/10">
          {services.map((s) => (
            <div key={s.num} className="py-14 grid grid-cols-1 lg:grid-cols-[100px_1fr_220px] gap-8 items-start">
              <div>
                <span className="font-mono text-brand text-3xl font-light">{s.num}</span>
                <span className="font-mono text-charcoal/30 text-[10px] tracking-[0.3em] uppercase block mt-2">{s.agency}</span>
              </div>
              <div>
                <h2 className="font-display text-charcoal text-2xl md:text-3xl font-bold mb-4 leading-tight">{s.title}</h2>
                <p className="font-sans text-muted text-base leading-relaxed max-w-2xl mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/50 border border-charcoal/15 px-3 py-1">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:text-right">
                <span className="font-mono text-charcoal/30 text-[10px] tracking-[0.25em] uppercase block mb-2">Typical Timeline</span>
                <span className="font-display text-charcoal text-lg font-semibold">{s.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo + urgency */}
      <section className="relative overflow-hidden">
        <img src="/images/consulting.jpg" alt="Reviewing compliance documents" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">Don't Wait</span>
              <h2 className="font-display text-cream text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight mb-6">
                Violations Compound.<br />Act Before They Do.
              </h2>
              <p className="font-sans text-cream/55 text-lg leading-relaxed">
                Every month a violation sits open, the risk grows. ECB fines accrue interest. DOB holds block permits. HPD issues escalate to housing court. The cost of waiting almost always exceeds the cost of resolving.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-cream/10">
              {[
                { label: 'ECB interest rate', value: '9%/yr', sub: 'on unpaid fines' },
                { label: 'Typical default fine', value: '3×', sub: 'original penalty' },
                { label: 'HPD Class C', value: '24hr', sub: 'resolution deadline' },
                { label: 'Stop Work Order', value: 'Instant', sub: 'permit block' },
              ].map((stat) => (
                <div key={stat.label} className="bg-charcoal/60 p-7 text-center">
                  <div className="font-display text-brand text-3xl font-bold">{stat.value}</div>
                  <div className="font-mono text-cream/50 text-[10px] tracking-[0.2em] uppercase mt-1">{stat.sub}</div>
                  <div className="font-sans text-cream/30 text-xs mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">FAQ</span>
              <h2 className="font-display text-cream text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight">
                Common Questions.
              </h2>
            </div>
            <div className="divide-y divide-cream/10">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-8">
                  <h3 className="font-display text-cream text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="font-sans text-cream/45 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">Ready to resolve your violations?</h2>
            <p className="font-sans text-white/60 mt-2">We'll review your property and outline a plan — no obligation.</p>
          </div>
          <Link href="/contact/" className="flex-shrink-0 bg-charcoal text-cream font-mono text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-ink transition-colors duration-300">
            GET STARTED →
          </Link>
        </div>
      </section>
    </>
  )
}
