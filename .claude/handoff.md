Working on: NGHS Corp website — color scheme update (brass → brand cyan #42BED5)
Last action: Updated primary accent color across 22 files — build passes (11/11 pages)
Next step: Deploy — source ~/.credentials/api-keys.env && npm run build && npx wrangler pages deploy out/ --project-name nghscorp
Key files:
  - tailwind.config.js — added brand: '#42BED5'
  - app/globals.css — added --brand: #42BED5
  - All 22 components/pages updated per color spec
  - GitHub: https://github.com/Kaoz625/nghscorp
  - Live: https://nghscorp.nyctailblazers.com

CRITICAL — DEPLOY PROCESS:
  Cloudflare Pages is NOT connected to GitHub (git provider = None).
  git push does NOT update the live site.
  Deploy command: source ~/.credentials/api-keys.env && npm run build && npx wrangler pages deploy out/ --project-name nghscorp

Color changes summary:
  - brand (#42BED5 cyan) is now PRIMARY: eyebrow labels, headline accents, CTA buttons, step numbers, stat values, hover links, form focus borders
  - brass (#C49A3C gold) KEPT for: border-brass corners/blockquotes, h-px bg-brass rules, brass/N opacity tints, NGHS dot, pulse-brass keyframe, scrollbar, selection bg
  - Section bgs changed: StatsBar, about stats section, compliance CTA, managing-agent CTA, sell-your-property CTA (all bg-brand now)
  - Floating badges changed: AboutTeaser, managing-agent (bg-brand)
  - Button text on brand bg is text-white; hover: bg-cream + text-charcoal

Notes:
  - NGHS = NG Home Solutions Corp (logo reveals full name)
  - Worker fix applied: nghscorp in PAGES_PROXY in nyctailblazers-subdomain-router
  - CLOUDFLARE_WRANGLER_OAUTH saved to api-keys.env (full access token)
Blockers: none
