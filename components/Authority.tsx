const pillars = [
  {
    stat: '100%',
    label: 'NYC-Focused',
    desc: 'We work exclusively in New York City — deeply versed in DOB, HPD, and ECB systems, their quirks, and the people who run them.',
  },
  {
    stat: 'Start',
    label: 'to Finish',
    desc: 'From violation discovery through final sign-off, you never have to manage the process yourself. We own the whole thing.',
  },
  {
    stat: 'First',
    label: 'Time Resolution',
    desc: 'We resolve violations correctly the first time — minimizing delays, late fees, and the cost of return trips.',
  },
]

export default function Authority() {
  return (
    <section id="about" className="bg-charcoal py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left: copy block */}
          <div>
            <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-6">
              Why NGHS Corp.
            </span>
            <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight mb-8 tracking-tight">
              Trusted by NYC<br />Property Owners.
            </h2>
            <div className="w-12 h-px bg-brass mb-9" />
            <p className="font-sans text-cream/55 text-lg leading-relaxed mb-6">
              NGHS Corp. was built to give New York City property owners a
              reliable, knowledgeable partner for navigating the city's
              complex compliance landscape.
            </p>
            <p className="font-sans text-cream/45 text-base leading-relaxed mb-14">
              Whether you're managing a single brownstone or a multi-family
              portfolio, our team knows the agencies, the procedures, and the
              people — and we put that expertise to work for you.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-brass pl-6">
              <p className="font-display text-cream text-xl md:text-2xl italic leading-snug">
                "Trusted. Strategic. Proven."
              </p>
              <cite className="font-mono text-brass text-xs tracking-[0.25em] uppercase block mt-4 not-italic">
                — Nicole, Founder &amp; Principal
              </cite>
            </blockquote>
          </div>

          {/* Right: stat pillars */}
          <div className="divide-y divide-cream/10">
            {pillars.map((p) => (
              <div key={p.label} className="py-9 group">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-brass text-[2.8rem] font-bold leading-none">
                    {p.stat}
                  </span>
                  <span className="font-display text-cream/25 text-2xl">
                    {p.label}
                  </span>
                </div>
                <p className="font-sans text-cream/45 text-sm leading-relaxed max-w-sm">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
