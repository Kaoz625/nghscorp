const services = [
  {
    num: '01',
    title: 'DOB Violation Removal',
    desc: 'Navigate New York City Department of Buildings violations with precision. We handle the paperwork, inspections, and sign-off process so you stay compliant and avoid escalating penalties.',
    tags: ['Open Violations', 'Sign-Off Coordination', 'ECB Linkage'],
  },
  {
    num: '02',
    title: 'HPD Violation Removal',
    desc: 'From heat and hot water complaints to apartment maintenance orders, we resolve Housing Preservation & Development violations before they become housing court matters.',
    tags: ['Class A, B & C', 'Hazardous Conditions', 'Court Avoidance'],
  },
  {
    num: '03',
    title: 'ECB & Oath Hearing Representation',
    desc: 'Skilled representation at Environmental Control Board and OATH hearings. We prepare your defense, challenge invalid violations, and negotiate reduced penalties.',
    tags: ['Hearing Prep', 'Fine Reduction', 'Default Vacatur'],
  },
  {
    num: '04',
    title: 'Managing Agent Services',
    desc: 'Full property management compliance oversight. NGHS Corp. acts as your designated managing agent, ensuring your building meets all NYC regulatory requirements.',
    tags: ['HPD Registration', 'Ongoing Oversight', 'Landlord Compliance'],
  },
  {
    num: '05',
    title: 'Compliance Consulting',
    desc: "Proactive audits of your property's violation history, scheduled inspections, and a clear roadmap to keep your building clean, current, and protected.",
    tags: ['Violation Audits', 'Preventive Strategy', 'Owner Education'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">
              What We Do
            </span>
            <h2 className="font-display text-charcoal text-[clamp(2rem,5vw,4rem)] font-bold leading-tight tracking-tight">
              Compliance Services<br />
              <em className="font-normal text-muted">Built for NYC.</em>
            </h2>
          </div>
          <p className="font-sans text-muted text-base max-w-xs leading-relaxed md:text-right">
            Every service is managed end-to-end. No hand-offs, no confusion — just results.
          </p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-charcoal/10">
          {services.map((s) => (
            <div
              key={s.num}
              className="group py-10 md:py-12 grid grid-cols-1 md:grid-cols-[90px_1fr_48px] gap-4 md:gap-10 items-start -mx-6 md:-mx-12 px-6 md:px-12 hover:bg-black/[0.03] transition-colors duration-300 cursor-default"
            >
              {/* Number */}
              <span className="font-mono text-brand text-4xl font-light leading-none pt-1">
                {s.num}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-display text-charcoal text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="font-sans text-muted text-base leading-relaxed max-w-2xl">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/50 border border-charcoal/15 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-start justify-end pt-2">
                <span className="font-sans text-2xl text-charcoal/10 group-hover:text-brand group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under list */}
        <div className="mt-16 flex justify-start">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-charcoal/20 text-charcoal font-mono text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            GET STARTED
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
