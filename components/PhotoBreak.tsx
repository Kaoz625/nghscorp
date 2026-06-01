export default function PhotoBreak() {
  return (
    <div className="relative h-[480px] md:h-[560px] overflow-hidden">
      <img
        src="/images/nyc-skyline.jpg"
        alt="New York City skyline at night"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="font-mono text-brand text-xs tracking-[0.4em] uppercase block mb-6">
          All Five Boroughs
        </span>
        <h2 className="font-display text-cream text-[clamp(2.4rem,6vw,5rem)] font-black leading-[0.92] tracking-tight max-w-3xl">
          If the City Issues It,<br />
          <span className="text-brand">We Handle It.</span>
        </h2>
        <p className="font-sans text-cream/50 text-lg mt-8 max-w-xl leading-relaxed">
          Manhattan, Brooklyn, Queens, the Bronx, Staten Island —
          NGHS Corp. resolves violations across every NYC borough.
        </p>
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {['DOB', 'HPD', 'ECB · OATH', 'DOT', 'DEP', 'FDNY'].map((agency) => (
            <span key={agency} className="font-mono text-cream/35 text-xs tracking-[0.3em] uppercase border border-cream/15 px-4 py-2">
              {agency}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
