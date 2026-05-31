'use client'
import { useState } from 'react'

const violationTypes = [
  'DOB Violation Removal',
  'HPD Violation Removal',
  'ECB & OATH Hearing Representation',
  'Managing Agent Services',
  'Selling With Violations',
  'Compliance Consulting',
  'General Inquiry',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center min-h-[500px] gap-5">
        <div className="w-12 h-px bg-brass" />
        <span className="font-mono text-brass text-xs tracking-[0.3em] uppercase">Message Received</span>
        <h3 className="font-display text-cream text-3xl font-bold">We'll be in touch.</h3>
        <p className="font-sans text-cream/50 text-base leading-relaxed">
          Nicole or a member of the NGHS Corp. team will reach out within one business day to discuss your property and next steps.
        </p>
      </div>
    )
  }

  return (
    <>
      <h2 className="font-display text-cream text-2xl font-bold mb-2">Send a Message</h2>
      <p className="font-sans text-cream/35 text-sm mb-8">We'll review your violations and get back to you within one business day.</p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {['First Name', 'Last Name'].map((label) => (
            <div key={label}>
              <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">{label}</label>
              <input type="text" required placeholder={label.split(' ')[0]}
                className="w-full bg-cream/5 border border-cream/10 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass placeholder:text-cream/20 transition-colors duration-200" />
            </div>
          ))}
        </div>
        <div>
          <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">Email</label>
          <input type="email" required placeholder="your@email.com"
            className="w-full bg-cream/5 border border-cream/10 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass placeholder:text-cream/20 transition-colors duration-200" />
        </div>
        <div>
          <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">Property Address</label>
          <input type="text" placeholder="123 Main St, Brooklyn, NY"
            className="w-full bg-cream/5 border border-cream/10 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass placeholder:text-cream/20 transition-colors duration-200" />
        </div>
        <div>
          <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">Service Needed</label>
          <div className="relative">
            <select defaultValue="" className="w-full appearance-none bg-cream/5 border border-cream/10 text-cream/60 font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass transition-colors duration-200 cursor-pointer">
              <option value="" disabled>Select a service…</option>
              {violationTypes.map((v) => (
                <option key={v} value={v} className="bg-charcoal text-cream">{v}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brass text-xs">▼</span>
          </div>
        </div>
        <div>
          <label className="font-mono text-cream/35 text-[10px] tracking-[0.25em] uppercase block mb-2">Message</label>
          <textarea rows={4} placeholder="Describe your situation or violation…"
            className="w-full bg-cream/5 border border-cream/10 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-brass placeholder:text-cream/20 transition-colors duration-200 resize-none" />
        </div>
        <button type="submit"
          className="w-full bg-brass text-charcoal font-mono text-xs font-semibold tracking-[0.2em] uppercase py-4 hover:bg-cream transition-colors duration-300 mt-2">
          SEND MESSAGE
        </button>
      </form>
    </>
  )
}
