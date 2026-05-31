import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/brownstone.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/85" />

      <div className="relative z-10 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-10">

          <div>
            <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-5">Ready?</span>
            <h2 className="font-display text-cream text-[clamp(2.4rem,5.5vw,4.5rem)] font-black leading-[0.92] tracking-tight">
              Let's Clear Your<br />
              <span className="text-brass">Violation Record.</span>
            </h2>
            <p className="font-sans text-cream/50 text-lg mt-6 max-w-lg leading-relaxed">
              Send us your property address. We'll pull the violation history and
              outline a resolution path — no obligation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start flex-shrink-0">
            <Link
              href="/contact/"
              className="group inline-flex items-center gap-3 bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-cream transition-colors duration-300 whitespace-nowrap"
            >
              GET STARTED
              <span className="group-hover:translate-x-1.5 transition-transform duration-200 text-base">→</span>
            </Link>
            <a
              href="mailto:nicole@nghscorp.com"
              className="font-mono text-cream/40 text-xs tracking-[0.2em] uppercase hover:text-brass transition-colors duration-200 border-b border-transparent hover:border-brass pb-px self-center whitespace-nowrap"
            >
              nicole@nghscorp.com
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
