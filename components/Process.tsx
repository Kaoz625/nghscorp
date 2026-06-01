const steps = [
  {
    num: '01',
    title: 'Violation Review',
    desc: 'We pull your complete violation history from DOB, HPD, and ECB systems — every open item, every deadline, fully assessed.',
  },
  {
    num: '02',
    title: 'Strategy & Plan',
    desc: 'We build a prioritized resolution plan and walk you through every step before anything moves.',
  },
  {
    num: '03',
    title: 'Active Resolution',
    desc: 'We handle all agency communications, inspector scheduling, paperwork filing, and hearing appearances.',
  },
  {
    num: '04',
    title: 'Clean Record',
    desc: "Violations cleared, agency records updated, and a compliance summary in hand. You're covered.",
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <span className="font-mono text-brand text-xs tracking-[0.3em] uppercase block mb-5">
              The Process
            </span>
            <h2 className="font-display text-cream text-[clamp(2rem,5vw,4rem)] font-bold leading-tight tracking-tight">
              How It Works.
            </h2>
          </div>
          <p className="font-sans text-cream/40 text-sm max-w-xs leading-relaxed md:text-right">
            Four steps. No surprises. We manage everything from the first
            review to the final clearance.
          </p>
        </div>

        {/* Steps grid — 1 row of 4, 2x2 on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-ink p-8 md:p-10 flex flex-col gap-8 group hover:bg-charcoal transition-colors duration-300"
            >
              {/* Number + arrow row */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-brand text-3xl">{step.num}</span>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block font-sans text-cream/10 text-xl group-hover:text-brass/30 transition-colors duration-300">
                    →
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-display text-cream text-xl font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-cream/40 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
