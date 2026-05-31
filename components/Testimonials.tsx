const testimonials = [
  {
    quote: 'NGHS Corp. cleared a $14,000 ECB default judgment in under 6 weeks. We were days away from losing the deal at closing.',
    name: 'James K.',
    role: 'Property Manager, Brooklyn',
    outcome: '$14,000 fine eliminated',
  },
  {
    quote: 'HPD had flagged us for three Class C violations. Nicole\'s team resolved all three before our refinancing closed. Didn\'t miss a single deadline.',
    name: 'Sandra M.',
    role: 'Homeowner, Queens',
    outcome: '3 Class C violations cleared',
  },
  {
    quote: 'We use NGHS Corp. as managing agent for two buildings now. Zero open violations in 18 months. That\'s never happened before.',
    name: 'David T.',
    role: 'Portfolio Owner, The Bronx',
    outcome: '18 months violation-free',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-14">
          <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-4">Results</span>
          <h2 className="font-display text-charcoal text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight">
            What NYC Property Owners<br />
            <em className="font-normal text-muted">Say About Us.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-charcoal/8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream p-8 md:p-10 flex flex-col gap-6">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-brass text-sm">★</span>
                ))}
              </div>

              {/* Outcome badge */}
              <div className="inline-flex">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brass border border-brass/30 px-3 py-1.5 bg-brass/5">
                  {t.outcome}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-charcoal text-base leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-charcoal/10 pt-5">
                <p className="font-display text-charcoal font-semibold">{t.name}</p>
                <p className="font-mono text-muted text-[11px] tracking-[0.2em] uppercase mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
