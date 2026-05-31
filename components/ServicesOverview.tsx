import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Compliance Services',
    subtitle: 'DOB · HPD · ECB',
    desc: 'Full-service violation removal across all NYC agencies. We handle every step from discovery to final sign-off.',
    photo: '/images/building.jpg',
    href: '/compliance-services/',
    tags: ['DOB Violations', 'HPD Violations', 'ECB Hearings', 'Default Vacatur'],
  },
  {
    num: '02',
    title: 'Managing Agent Services',
    subtitle: 'Ongoing Compliance',
    desc: 'NGHS Corp. acts as your designated NYC managing agent — keeping your buildings clean, registered, and protected.',
    photo: '/images/brownstone.jpg',
    href: '/managing-agent/',
    tags: ['HPD Registration', 'Ongoing Oversight', 'Multi-Building'],
  },
  {
    num: '03',
    title: 'Selling With Violations',
    subtitle: 'Real Estate Transactions',
    desc: 'Violations blocking your sale or refinance? We clear them fast so closings stay on schedule.',
    photo: '/images/consulting.jpg',
    href: '/sell-your-property/',
    tags: ['Pre-Sale Clearance', 'Title Search Prep', 'Fast Resolution'],
  },
]

export default function ServicesOverview() {
  return (
    <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-4">What We Do</span>
            <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight">
              Three Ways We<br />
              <em className="font-normal text-cream/40">Protect Your Property.</em>
            </h2>
          </div>
          <p className="font-sans text-cream/40 text-sm max-w-xs leading-relaxed md:text-right">
            Every service managed end-to-end. No hand-offs, no confusion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-cream/8">
          {services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group relative bg-charcoal flex flex-col overflow-hidden hover:bg-surface transition-colors duration-300"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.photo}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/30 transition-colors duration-300" />
                <span className="absolute top-5 left-5 font-mono text-brass text-2xl font-light">{s.num}</span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div>
                  <span className="font-mono text-brass/60 text-[10px] tracking-[0.3em] uppercase block mb-2">{s.subtitle}</span>
                  <h3 className="font-display text-cream text-2xl font-bold leading-snug">{s.title}</h3>
                </div>
                <p className="font-sans text-cream/45 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] tracking-[0.15em] uppercase text-cream/30 border border-cream/10 px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2 font-mono text-brass text-xs tracking-[0.2em] uppercase group-hover:gap-4 transition-all duration-200">
                  Learn More <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
