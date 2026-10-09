# VoiceToNotes — Pitch Deck Website

A static, frontend-only marketing/pitch site for VoiceToNotes.ai, built with Next.js 15 (App Router) and Tailwind CSS v4. Reproduces the source pitch-deck design pixel-for-pixel at desktop width, scales proportionally from 1024–1440px, and switches to a stacked mobile layout below 1024px.

## Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- Outfit via `next/font/google`
- No backend, no API routes, no forms, no data fetching — frontend only

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (or the next available port).

## Build

```bash
npm run build
npm run start   # serve the production build locally
```

`npm run build` runs type-checking and ESLint as part of the Next.js build and must pass with zero errors.

## Images

`next/image` is used throughout with local files from `public/assets/`; no `next.config.ts` image configuration is required.

## Project structure

```
app/                     # App Router: layout, globals.css, page.tsx
components/
  Slide.tsx              # desktop canvas wrapper (rem-based absolute positioning)
  RevealGroup.tsx         # client-side scroll-reveal (fade-up), no-op without JS
  icons.tsx               # inline SVG icon set
  sections/                # one component per pitch-deck section (Cover … ThankYou)
public/assets/            # all photos, mockups, logos (pre-cropped)
design-ref/                # reference renders (not served; outside public/)
BUILD_PLAN.md              # full design specification this build follows
```

## Deployment

Import the repository into [Vercel](https://vercel.com/new) — the Next.js framework is auto-detected and no environment variables are required. Any other Node static-hosting-capable platform that supports Next.js also works.
