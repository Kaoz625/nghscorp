import Link from 'next/link'

const clients = [
  {
    icon: '🏠',
    title: 'Homeowners',
    desc: 'Single-family and condo owners facing DOB or HPD violations. We resolve issues before they become fines or court matters.',
    href: '/compliance-services/',
  },
  {
    icon: '🏢',
    title: 'Landlords & Portfolio Owners',
    desc: 'Multi-family building owners managing ongoing compliance across one or many properties. We handle the paperwork, you handle the rent.',
    href: '/managing-agent/',
  },
  {
    icon: '📋',
    title: 'Property Managers',
    desc: 'Managing agents and property management firms that need a reliable compliance partner to keep buildings clean and current.',
    href: '/managing-agent/',
  },
  {
    icon: '🔑',
    title: 'Real Estate Professionals',
    desc: 'Attorneys, brokers, and buyers who need violations cleared fast before a closing, refinance, or title search.',
    href: '/sell-your-property/',
  },
]

export default function WhoWeHelp() {
  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-14 md:mb-18">
          <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-4">Who We Help</span>
          <h2 className="font-display text-charcoal text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight">
            Built for Every Type of<br />
            <em className="font-normal text-muted">NYC Property Owner.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/8">
          {clients.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group bg-cream p-8 md:p-10 flex flex-col gap-5 hover:bg-charcoal transition-colors duration-300"
            >
              <span className="text-3xl">{c.icon}</span>
              <div>
                <h3 className="font-display text-charcoal group-hover:text-cream text-xl font-bold mb-3 leading-snug transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="font-sans text-muted group-hover:text-cream/55 text-sm leading-relaxed transition-colors duration-300">
                  {c.desc}
                </p>
              </div>
              <span className="font-mono text-brass text-xs tracking-[0.2em] uppercase mt-auto group-hover:translate-x-1 transition-transform duration-200">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
