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
    <section id="about" className="bg-charcoal py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr_1fr] gap-0 lg:gap-16 xl:gap-20 items-stretch">

          {/* ── Photo column ── */}
          <div className="relative mb-12 lg:mb-0 overflow-hidden">
            {/* Brass frame accent */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brass z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brass z-10" />

            <div className="relative h-[340px] lg:h-full min-h-[420px] overflow-hidden">
              <img
                src="/images/hero.jpg"
                alt="NGHS Corp. professionals — NYC compliance specialists"
                className="absolute inset-0 w-full h-full object-cover object-[60%_30%]"
              />
              {/* Subtle charcoal overlay at top and bottom */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>

            {/* Floating label over photo */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="font-mono text-brand text-[10px] tracking-[0.3em] uppercase block mb-1">NGHS Corp.</span>
              <p className="font-display text-cream text-sm font-semibold leading-snug">NYC Compliance<br />Specialists</p>
            </div>
          </div>

          {/* ── Copy block ── */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-6">
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
              <cite className="font-mono text-brand text-xs tracking-[0.25em] uppercase block mt-4 not-italic">
                — Nicole, Founder &amp; Principal
              </cite>
            </blockquote>
          </div>

          {/* ── Stat pillars ── */}
          <div className="divide-y divide-cream/10 flex flex-col justify-center mt-12 lg:mt-0">
            {pillars.map((p) => (
              <div key={p.label} className="py-9 group">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-brand text-[2.8rem] font-bold leading-none">
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

            {/* Social links */}
            <div className="pt-9">
              <span className="font-mono text-cream/25 text-[10px] tracking-[0.3em] uppercase block mb-4">Connect</span>
              <div className="flex gap-5">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/company/nghscorp' },
                  { label: 'Instagram', href: 'https://instagram.com/nghscorp' },
                  { label: 'Facebook', href: 'https://facebook.com/nghscorp' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-cream/30 text-[10px] tracking-[0.2em] uppercase hover:text-brand transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
