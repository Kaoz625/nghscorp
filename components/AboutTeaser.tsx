import Link from 'next/link'

export default function AboutTeaser() {
  return (
    <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-brass/40" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-brass/40" />
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="/images/team-consult.jpg"
                alt="NGHS Corp. team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-brass p-6 z-10">
              <div className="font-display text-charcoal text-3xl font-black leading-none">100%</div>
              <div className="font-mono text-charcoal/70 text-[10px] tracking-[0.2em] uppercase mt-1">NYC Only</div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-6">About NGHS Corp.</span>
            <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight mb-6">
              New York Built.<br />NYC Compliance Expert.
            </h2>
            <div className="w-12 h-px bg-brass mb-8" />
            <p className="font-sans text-cream/55 text-lg leading-relaxed mb-5">
              NGHS Corp. was founded to give NYC property owners a real partner in navigating the city's compliance system — not a middleman who passes your file around.
            </p>
            <p className="font-sans text-cream/40 text-base leading-relaxed mb-10">
              Led by Nicole, our team has deep relationships with DOB, HPD, and ECB — we know the agencies, the procedures, and the people. Whether you own one brownstone or a portfolio of 20 buildings, we bring the same level of care to every case.
            </p>
            <blockquote className="border-l-2 border-brass pl-6 mb-10">
              <p className="font-display text-cream text-xl italic leading-snug">
                "We built this firm because property owners deserve someone who actually shows up."
              </p>
              <cite className="font-mono text-brass text-xs tracking-[0.25em] uppercase block mt-3 not-italic">
                — Nicole, Founder & Principal
              </cite>
            </blockquote>
            <Link
              href="/about/"
              className="group inline-flex items-center gap-3 bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-cream transition-colors duration-300"
            >
              OUR STORY
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
