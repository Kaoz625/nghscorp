'use client'
import { useState } from 'react'

const violationTypes = [
  'DOB Violation Removal',
  'HPD Violation Removal',
  'ECB & Oath Hearing Representation',
  'Managing Agent Services',
  'Compliance Consulting',
  'General Inquiry',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left: info block */}
          <div>
            <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase block mb-6">
              Contact
            </span>
            <h2 className="font-display text-charcoal text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight mb-8">
              Ready to Clear<br />Your Record?
            </h2>
            <p className="font-sans text-muted text-lg leading-relaxed mb-14">
              Reach out to Nicole and the NGHS Corp. team. We'll review your
              violations and outline a resolution path — no obligation.
            </p>

            <div className="space-y-8">
              <div>
                <span className="font-mono text-charcoal/35 text-xs tracking-[0.25em] uppercase block mb-2">
                  Email
                </span>
                <a
                  href="mailto:nicole@nghscorp.com"
                  className="font-display text-charcoal text-2xl hover:text-brass transition-colors duration-200"
                >
                  nicole@nghscorp.com
                </a>
              </div>
              <div>
                <span className="font-mono text-charcoal/35 text-xs tracking-[0.25em] uppercase block mb-2">
                  Hours
                </span>
                <p className="font-sans text-charcoal text-base">
                  Monday – Friday, 10:00 AM – 6:00 PM
                </p>
                <p className="font-sans text-charcoal/50 text-sm mt-1">
                  Saturday by Appointment
                </p>
              </div>
              <div>
                <span className="font-mono text-charcoal/35 text-xs tracking-[0.25em] uppercase block mb-2">
                  Location
                </span>
                <p className="font-sans text-charcoal text-base">
                  New York City, NY
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-charcoal p-8 md:p-12">
            {submitted ? (
              <div className="flex flex-col items-start justify-center min-h-[400px] gap-4">
                <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase">
                  Message Sent
                </span>
                <h3 className="font-display text-cream text-3xl font-bold">
                  We'll be in touch.
                </h3>
                <p className="font-sans text-cream/50 text-base leading-relaxed">
                  Nicole or a member of the NGHS Corp. team will reach out
                  within one business day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-cream text-2xl font-bold mb-8">
                  Send a Message
                </h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    {['First Name', 'Last Name'].map((label) => (
                      <div key={label}>
                        <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">
                          {label}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={label.split(' ')[0]}
                          className="w-full bg-cream/5 border border-cream/10 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass placeholder:text-cream/20 transition-colors duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-cream/5 border border-cream/10 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass placeholder:text-cream/20 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">
                      Violation Type
                    </label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none bg-cream/5 border border-cream/10 text-cream/60 font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass transition-colors duration-200 cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        {violationTypes.map((v) => (
                          <option key={v} value={v} className="bg-charcoal text-cream">
                            {v}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brass text-xs">
                        ▼
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your situation…"
                      className="w-full bg-cream/5 border border-cream/10 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass placeholder:text-cream/20 transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase py-4 hover:bg-cream transition-colors duration-300 mt-2"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
