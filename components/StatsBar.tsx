const stats = [
  { value: '500+', label: 'Violations Cleared' },
  { value: '5', label: 'NYC Boroughs Served' },
  { value: '100%', label: 'NYC-Focused Practice' },
  { value: '1st', label: 'Time Resolution Rate' },
]

export default function StatsBar() {
  return (
    <div className="bg-brand">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-charcoal/15">
          {stats.map((s) => (
            <div key={s.label} className="py-8 px-6 text-center">
              <div className="font-display text-charcoal text-3xl md:text-4xl font-black leading-none mb-1">
                {s.value}
              </div>
              <div className="font-mono text-charcoal/60 text-[10px] tracking-[0.25em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
