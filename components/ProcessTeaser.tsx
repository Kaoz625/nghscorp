import Link from 'next/link'

const steps = [
  { num: '01', title: 'Violation Review', desc: 'We pull your full violation history from DOB, HPD, and ECB — every open item, every deadline.' },
  { num: '02', title: 'Strategy & Plan', desc: 'A prioritized resolution plan built for your specific situation. No guesswork.' },
  { num: '03', title: 'Active Resolution', desc: 'We handle all agency communications, filings, scheduling, and hearing appearances.' },
  { num: '04', title: 'Clean Record', desc: 'Violations cleared, records updated. You get a compliance summary and peace of mind.' },
]

export default function ProcessTeaser() {
  return (
    <section className="bg-surface py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-4">How It Works</span>
            <h2 className="font-display text-cream text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight">
              Four Steps.<br />
              <em className="font-normal text-cream/35">No Surprises.</em>
            </h2>
          </div>
          <Link
            href="/work-with-us/"
            className="group inline-flex items-center gap-3 font-mono text-brand text-xs tracking-[0.2em] uppercase border border-brand/30 px-6 py-3 hover:border-brand hover:bg-brand hover:text-white transition-all duration-300 self-start md:self-auto"
          >
            Full Process Details
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/8">
          {steps.map((step, i) => (
            <div key={step.num} className="bg-surface p-8 md:p-10 flex flex-col gap-6 group hover:bg-charcoal transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="font-mono text-brand text-3xl">{step.num}</span>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block text-cream/10 group-hover:text-brass/30 transition-colors duration-300">→</span>
                )}
              </div>
              <div>
                <h3 className="font-display text-cream text-xl font-bold mb-3 leading-snug">{step.title}</h3>
                <p className="font-sans text-cream/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
