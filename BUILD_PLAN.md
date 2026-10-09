# VoiceToNotes — Pitch Deck Website · Build Plan

Static, frontend-only marketing/pitch site. Deploys to Vercel. No backend, no forms, no data fetching.

Source of truth: `Design.pdf` (one page, **1440 × 8355 pt**) in the parent folder, already decomposed for you into:

- `design-ref/01..08-*.png` — per-section reference renders at **1.4×** (so reference px ÷ 1.4 = design pt). **Open these. Build against them. Compare your result to them.**
- `public/assets/*` — every photographic / mockup / logo asset, pre-cropped from the PDF at the correct aspect ratio.

Everything that is **not** in `public/assets` (cards, text, icons, chips, gradients, rings, player bars) must be rebuilt in HTML/CSS/SVG. Do not screenshot-stuff the page.

---

## 1. Stack

- **Next.js 15**, App Router, **TypeScript**
- **Tailwind CSS v4** (`@import "tailwindcss"` in `globals.css`, `@theme` for tokens)
- **Poppins** via `next/font/google`, weights `400 500 600 700`, with `display: swap`
- Plain `<img>` with explicit `width`/`height`, or `next/image` with `unoptimized` — either is fine; prefer `next/image` for the big photos with `sizes` set.
- No other runtime dependencies. No animation library — the handful of entrance effects below are plain CSS.

Scaffold with `npx create-next-app@latest` (TypeScript, Tailwind, App Router, no src dir, no Turbopack flag needed) **into this existing folder**, keeping `public/assets/`, `design-ref/`, and this file intact.

Deliverables: a `pnpm build`/`npm run build` that passes clean (no TS errors, no ESLint errors), and a `README.md` with run + deploy steps.

---

## 2. The scaling system (read this before writing any layout)

The design is a fixed **1440 pt** canvas. Reproduce it exactly at ≥1440px, scale it proportionally down to 1024px, and switch to a real stacked layout below that.

```css
/* globals.css */
html { font-size: 16px; }

/* 1024–1439px: proportional shrink of the whole desktop canvas.
   1440 / 16 = 90, so 100vw/90 == 16px exactly at 1440px wide. */
@media (min-width: 1024px) and (max-width: 1439.98px) {
  html { font-size: calc(100vw / 90); }
}
```

**Consequence — the one rule you must follow:** every desktop dimension, position, gap, radius, and font size is authored in **`rem`, where `1rem = 16 design pt`**. A 48pt heading is `3rem`. A 413pt card is `25.8125rem`. A 24pt radius is `1.5rem`. Never write a raw `px` value in the desktop layout. The canvas itself is `max-width: 90rem` (= 1440) centered.

Below `1024px`, `html` is back to a fixed `16px` and the desktop grids collapse (section 9).

Because every section is a fixed-height slide in the PDF, build each section as a **relative-positioned block with `height` set in rem** and absolutely-positioned children at their design coordinates. This is the most faithful approach for ≥1024px, and it is why the mobile layout is written separately.

Suggested helper:

```tsx
// components/Slide.tsx — desktop canvas wrapper
function Slide({ h, className, children }: { h: number; className?: string; children: React.ReactNode }) {
  return (
    <section className={`w-full ${className}`}>
      <div className="relative mx-auto w-full max-w-[90rem]" style={{ height: `${h / 16}rem` }}>
        {children}
      </div>
    </section>
  );
}
```

All coordinates below are given as **design pt, relative to the top-left of that section**. Divide by 16 for rem.

---

## 3. Design tokens

```
--bg            #E8E8E8   page / slide background
--card          #FFFFFF
--card-muted    #F6F6F6   inset tiles, "Why" outer columns
--slate-50      #F8FAFC   pros/cons row fill
--slate-100     #F1F5F9   pros/cons row border
--slate-200     #E3E8EF
--ink           #100E24   darkest headings (customers, market)
--ink-900       #1A1A2E   "Why VoiceToNotes.ai?" heading
--ink-800       #1E293B   body headings in Why section
--ink-700       #272727   cover + problem/solution headings
--muted         #8B8B9B   secondary copy (market sublabels)
--slate-500     #64748B   secondary copy
--slate-400     #94A3B8   tertiary copy
--brand         #FF0D4A   primary red (logo dot, Customers heading, rings)
--rose-500      #F43F5E
--rose-600      #E11D48
--rose-700      #BE123C
--rose-100      #FFE4E6   "Business Perspective" panel fill
--rose-200      #FECDD3
--pink-tile     #F8C2CB   "Monthly Pro" highlighted pricing tile
--purple-50     #F3E8FF   Why column-3 feature card border tint
--black         #000000   credit tiles, team slide
```

Radii: large cards **24**, inset tiles **16**, pill rows **12**, chips **full**.
Shadow for white cards on `--bg`: `0 1px 2px rgb(0 0 0 / .04), 0 8px 24px rgb(0 0 0 / .06)` — soft and low; match the reference, do not over-shadow.

Type: Poppins throughout. Headings 600/700, body 400/500. Use the exact pt sizes listed per section.

---

## 4. Asset manifest (`public/assets/`)

| File | Used in | Notes |
|---|---|---|
| `logo-mark.png` | cover, favicon | transparent, waveform + pen + sparkle |
| `logo-lockup.png` | §3 card A | transparent, mark + wordmark, 352×68 pt |
| `wordmark.png` | cover, §8 | transparent, "VoiceToNotes" 561×89 pt |
| `hero-devices.jpg` | §1 | laptop/phone/watch/card, sits on `--bg` |
| `s2-problem-photo.jpg` | §2 card 1 right | man on phone, light-blue bg |
| `s2-solution-photo.jpg` | §2 card 2 left | phone on desk, Audio Generation UI |
| `s3-audio-video.jpg` | §3 card C | dark photo card, text is baked in |
| `s3-multilang.jpg` | §3 card I | dark gradient card, text is baked in |
| `s3-video-thumb.jpg` | §3 card G | cabin/lake video still with controls |
| `s3-audio-player.png` | §3 card E | player bar + 3 buttons (use as image; do not rebuild) |
| `s4-tech-1-speech.jpg` … `s4-tech-6-ondevice.jpg` | §4 | pastel 3D card backgrounds, **text NOT baked in** — overlay it |
| `s4-laptop.jpg` | §4 | MacBook app mockup, already on white |
| `s5-phones.jpg` | §5 | two tilted phones, bg already `--bg` |
| `s7-sandeep.jpg` | §7 | founder portrait |
| `s7-team-photo.jpg` | §7 | group photo, already darkened |
| `s8-phone-photo.jpg` | §8 | phone on concrete |

`s3-audio-video.jpg` and `s3-multilang.jpg` have their headline text baked into the image. Keep the text as part of the image, and add the same text to `alt`. Every other image gets a short descriptive `alt`; purely decorative ones get `alt=""`.

Icons are **not** provided. Draw them as inline SVG in `components/icons.tsx` (stroke or filled, matching the reference): microphone, sparkle, person-speaking, pencil, graduation cap, magnifier, document-lines, user, rocket, bar-chart, book/EdTech, medical cross, box, flask, building, phone, lightning, wifi-off, shield, ×, trending-up, globe, target, database, cloud, clock, alert, crown, coin, infinity, translate, chip, cube, note-pen.

---

## 5. Sections

Eight full-bleed sections stacked in `app/page.tsx`, in order. Background `--bg` unless stated.
Heights: 1023, 1022, 1022, 1022, 997, 1159, 1024, 1024 pt.

### §1 Cover — `Cover.tsx` · h 1023

- `hero-devices.jpg` absolutely placed at `left 335, top 0, width 1105, height 872`, `object-fit: cover`.
- `logo-mark.png` at `left 66, top 58, width 112` (auto height ~132).
- `"Pitch Deck"` — `left 105, top 635`, **48pt / 400**, `--ink-700`.
- `wordmark.png` at `left 105, top 759, width 561, height 89`.
- `"Stop Typing, Start Speaking."` — `left 105, top 851`, **34pt / 400**, `--ink-700`.

### §2 Problem & Solution — `ProblemSolution.tsx` · h 1022

Two cards, radius 24, bg `--card`, overflow hidden, soft shadow.

**Card 1** — `x 46→1397, y 41→486` (1351 × 445):
- Left white panel `x 46→622`. Centered text block, **48pt / 400**, `--ink-700`, line-height 58, three lines: `Problem Statement` / `&` / `Pain Point`.
- Chevron `›` at `x ≈ 587`, vertically centered — a thin 48pt chevron (inline SVG, ~2.5pt stroke, round cap).
- Right: `s2-problem-photo.jpg` fills `x 622→1397`, `object-fit: cover`.

**Card 2** — `x 46→1397, y 536→981` (mirrored):
- Left: `s2-solution-photo.jpg` fills `x 46→821`.
- Right white panel `x 821→1397`: chevron `‹` at `x ≈ 866` vertically centered, then `Solution` — **48pt / 400**, `--ink-700`, ink spans `x 1023→1193`.

### §3 Solution bento — `SolutionBento.tsx` · h 1022

Three columns: **L** `x 43→456` (413), **M** `x 473→970` (497), **R** `x 985→1400` (415). All cards radius 24.

| id | rect (x0→x1, y0→y1) | content |
|---|---|---|
| A | 43→456, 33→292 | white. `logo-lockup.png` at `x 71, y 79, w 352`. Body **24pt / 400**, `--slate-500`, ink `x 95→412, y 169→246`, 3 lines: *"Turn your voice, ideas, and / creativity into powerful notes, / audios, and videos with AI"* |
| B | 473→970, 33→270 | white. Three inset tiles `--card-muted`, radius 16, at `x 489→634`, `649→794`, `809→954`, `y 45→257`. Each: centred icon (48pt) at `y ≈ 83`, title **20pt / 600** at `y ≈ 150`, body **17–18pt / 400** `--slate-500` centred. ① mic · **Voice-to-Text** · *High-precision transcription* ② sparkle · **AI Writing** · *Smart refinement & organization* ③ person-speaking · **Smart Notes** · *Summarize and organize* |
| C | 985→1400, 33→336 | `s3-audio-video.jpg`, cover, radius 24. Text baked in. |
| D | 473→970, 292→990 | **white, empty.** See §7 note below. |
| E | 43→456, 316→619 | white. **Text-to-Audio** **32pt / 600** at `x 85, y 338`. `s3-audio-player.png` at `x 66, y 396, w 365`. Body **22pt / 400** `--slate-500` at `x 72, y 513`, 3 lines: *"Convert notes into natural, high- / quality audio with multiple voices / and tones."* |
| F | 985→1400, 358→571 | white. **Customizable** / **Parameters** **32pt / 600** at `x 1030, y 393`, two lines. Body **22pt / 400** `--slate-500`, 2 lines: *"Control voice, mood, background / sounds, style and visual themes."* |
| G | 43→456, 647→990 | white. **Text-to-Video** **32pt / 600** at `x 85, y 671`. `s3-video-thumb.jpg` at `x 70, y 688, w 359, h 203`, radius 12. Body **22pt / 400** `--slate-500` at `x 74, y 886`, 3 lines: *"Turn your written content into / engaging videos with AI-generated / visuals."* |
| H | 985→1400, 588→766 | white. **Cross-Device Sync** **32pt / 600** at `x 1030, y 625`. Body **22pt / 400** `--slate-500`, 2 lines: *"Access and edit your notes, / creations anywhere"* |
| I | 985→1400, 783→995 | `s3-multilang.jpg`, cover, radius 24. Text baked in. |

### §4 Technology Stack + Pricing — `TechPricing.tsx` · h 1022

- Heading **Technology Stack** — `x 55, y 75`, **38pt / 700**, near-black.
- Six tech cards, radius 16, each a background image with overlaid text **30pt / 600** (dark) at `~22pt` padding from top-left, wrapping to two lines:

  | rect | image | label |
  |---|---|---|
  | 36→295, 154→390 | `s4-tech-1-speech.jpg` | Speech / Recognition |
  | 295→535, 154→394 | `s4-tech-2-ai.jpg` | AI / Processing |
  | 545→824, 154→365 | `s4-tech-3-modular.jpg` | Modular / AI Workflows |
  | 46→279, 380→594 | `s4-tech-4-note.jpg` | Note / Structuring |
  | 290→535, 380→594 | `s4-tech-5-cloud.jpg` | Cloud / Sync |
  | 545→824, 381→591 | `s4-tech-6-ondevice.jpg` | On-device ML / Trancription *(keep this spelling — it is in the design)* |

  The first card also carries the small logo mark above its label. Match the reference for exact text offsets.
- Laptop card: white, radius 24, `x 856→1398, y 154→594`, containing `s4-laptop.jpg` cover.

- **Pricing card** — white, radius 24, `x 46→729, y 628→966`. Heading **Pricing** **32pt / 600** at `x 67, y 686`. Three tiles radius 16, `y 735→920`:
  - `x 57→262` white, 1pt `--slate-200` border — person icon, **Free Plan** 26pt/500, **$ 0** 36pt/700
  - `x 272→496` **`--pink-tile`** fill — crown icon in `--brand`, **Monthly Pro** 26pt/500, **$ 1.49** 36pt/700 + **/ month** 28pt/500
  - `x 505→713` white, border — crown icon black, **Yearly Pro** 26pt/500, **$ 12.99** 36pt/700 + **/ year** 28pt/500
- **Credits card** — white, radius 24, `x 742→1398, y 628→966`. Heading **Audio /Video Generation Credits** **32pt / 600** at `x 766, y 679` *(note the space placement — keep it)*. Four black tiles radius 16, `y 737→922`, at `x 760→904`, `916→1060`, `1074→1218`, `1232→1376`. Each: coin icon (white outline) top-left, then amount **20pt / 600** white, `Credits` **16pt / 400** white-70, price **30pt / 700** white:
  `562,500 / $9.99` · `1,140,000 / $19.99` · `2,325,000 / $39.99` · `4,762,000 / $79.99`

### §5 Core & Targeted Customers + Market — `CustomersMarket.tsx` · h 997

- Heading `x 63, y 75`: **Core & Targeted** / **Customers** — 36pt and 35pt, 700. Line 1 `--ink`, line 2 **`--brand`**.
- **Customers card** white radius 24 `x 37→469, y 173→689`. Six tiles `--card-muted` radius 16, 122 × 136, at `x 56/192/328`, `y 196→332` and `y 349→485`. Each: 52pt rounded-square icon centred at top (`y+14`), label **13pt / 500** centred below: `Writers`, `Students`, `Researchers`, `Journal Keepers`, `Content Creators`, `Entrepreneurs`. Then a hairline divider, then a 68pt icon tile at `x 67, y 559` + **Productivity-focused users** **18pt / 600** `--ink` at `x 154, y 574`, two lines.
- `s5-phones.jpg` at `x 470, y 31, w 490, h 670` (bg already matches).
- **Key Industries card** white radius 24 `x 961→1409, y 63→689`. Title **Key Industries** **22pt / 600** at `x 981, y 82`. Five rows, each: 52pt rounded-square icon at `x 981` (`y 131 / 204 / 277 / 350 / 423`), title **15pt / 600** `--ink` at `x 1047`, subtitle **14pt / 400** `--slate-500`:
  - EdTech Companies — Lecture transcription
  - Healthcare Platforms — Medical terminology transcription
  - Productivity SaaS — SDK integration
  - Research Organizations — Voice documentation
  - Enterprise Teams — Internal knowledge capture

  Divider, then **SDK Positioning** **18pt / 600** at `x 981, y 514`. Six 52pt icon tiles at `x 986/1055/1124/1194/1263/1332`, `y 563→615`, each with a two-line **9.3pt / 500** caption centred underneath: `On-device transcription`, `Low latency`, `Offline capable`, `Privacy-focused`, `Medical terminology`, `Unlimited scalability`.
- **Market card** white radius 24 `x 37→1409, y 711→947`.
  - **Market Analysis & Scope** **22pt / 600** `--ink` at `x 57, y 722`; sub **16pt / 400** `--slate-500`: *"Large and growing opportunity for AI-powered productivity and voice-first computing."*
  - Pill `--card-muted` radius full `x 1129→1389, y 731→779`: bar-chart icon + **Rapid growth in AI voice tools** **12.5pt / 500**.
  - Three tiles `--card-muted` radius 16, 432 × 139, at `x 57 / 507 / 957`, `y 798→937`. Each has a **ring** on the left (≈116pt outer diameter, ~10pt stroke, conic/linear gradient `#FF7A18 → #FF0D4A`, centred at `x+67, y+56`) with the value **19pt / 700** `--ink` centred inside, and to its right the label **13.4pt / 600** `--ink` + sublabel **15pt / 400** `--muted`:
    - `$170B - $330B+` · Total Addressable Market (TAM) · *Global Productivity & AI Software Market*
    - `$2.8B - $5.6B+` · Serviceable Available Market (SAM) · *AI Writing, Note-Taking & Creator Productivity Segment*
    - `$1B+` · Serviceable Obtainable Market (SOM) · *Early AI Voice Productivity Market*

### §6 Why VoiceToNotes.ai? — `WhyVoiceToNotes.tsx` · h 1159

- Heading **Why VoiceToNotes.ai?** **40pt / 700** `--ink-900` at `x 58, y 80`; sub **18pt / 400** `--slate-500`: *"The best of accuracy, privacy, and real-time — without the trade-offs."*
- Three outer columns `--card-muted`, radius 24, width 420, at `x 58 / 510 / 962`, `y 193`, heights `842 / 939 / 919`. Each holds a logo + subtitle at the top, then an inner **white** card (radius 24, inset 0, starting `y ≈ 402`) holding the rows.
- Row style: radius 12, fill `--slate-50`, 1pt border `--slate-100`, height 52 (65 when two lines), icon 20pt + label **16pt / 600** `--ink-800`, optional sub **13pt / 400** `--slate-400`.
- Chips: **Pros** = green text `#16A34A` on `#DCFCE7`; **Cons** = `--rose-600` on `--rose-100`; radius full, **13pt / 600**.
- "Business Perspective" panel: `--rose-100` fill, radius 16, icon tile white, label **Business Perspective** **14pt / 500** `--rose-600`, value **24pt / 600** `--rose-600`.

**Column 1 — Google** (wordmark: render the word `Google` in Poppins 600, 44pt, near-black; sub **Mono Lingual models** 18pt/400 `--slate-500`)
- Pros: `Small model size` (globe) · `Higher Accuracy` (target) · `Real-Time` (target)
- Cons: `Large model size` / *In GBs, can't run on device* (database)
- Business Perspective → **No Cost**

**Column 2 — Flow** (logo: small waveform glyph + `Flow` in Poppins 700, 44pt; sub **Multi Lingual models**)
- Pros: `Supports all listed languages` (globe) · `Good accuracy` (target)
- Cons: `Large model size` / *In GBs, can't run on device* (database) · `Requires network` / *Record and upload* (cloud) · `Higher latency` / *Not real-time* (clock) · `Data leak risk` (alert)
- Business Perspective → **Cost involved**, then *Lack in compliances (HIPPA).* **16pt / 500**, then an info row (ⓘ + **13pt / 400** `--slate-500`): *"In case of HIPPA, they are bound to inform customers if data has been leaked. Wispr cannot guarantee 100% data security for all users."*

**Column 3 — VoiceToNotes** (`logo-lockup.png`, width ~352; sub **Best of both worlds**)
Five feature cards — white fill, radius 16, 1pt `--purple-50` border, each with a **48pt rose-tinted rounded-square icon tile** (`--rose-100` bg, `--brand` glyph) on the left, title **16pt / 600** `--ink-800`, sub **13pt / 400** `--slate-400`. Rects `x 996→1348` at `y 430 / 526 / 632` and two more below (match reference):
1. wifi-off — **No network required** / *Works completely offline*
2. translate — **Bilingual models** / *EN-JP, EN-HI, EN-FR* / *Most of the audience is bilingual.*
3. lightning — **Real-time & Streaming** / *Extremely low latency*
4. phone — **On-device** / *No internet required*
5. infinity — **Unlimited** / *No computation/service cost from company side*

Business Perspective → **No cost** / *No computation/service involved, on-device, offline, real-time and unlimited.*

### §7 The Team — `Team.tsx` · h 1024 · **background `#000000`**

- `s7-team-photo.jpg` absolutely placed at `x 474→1440`, full height, `object-fit: cover`. Overlay a left-to-right gradient `linear-gradient(90deg, #000 0%, #000 22%, transparent 55%)` so it blends into the black panel. All text on this slide is **white**.
- **The Team** **36.8pt / 600** at `x 97, y 174`.
- Founder card: white, radius 24, `x 62→467, y 231→737`. `s7-sandeep.jpg` fills the top `~410pt` (top corners rounded). Below, on white: **Sandeep Rana** **33.7pt / 600** `--ink` centred; **CEO & CTO** **18.4pt / 400** `--slate-500` centred; then a bulleted list **21.4pt / 500** `--ink`, `x 89`:
  - Developed Scan & Go (Decathlon) and Driver's App (Ola Cabs) from scratch.
  - Helped make my trip's Flights, Commons, GI and Payment gateway improve transaction success rate and Developed it's UPI app.

  *(Keep the copy verbatim, including "my trip's" and "it's".)*
- Right, two text columns at `x 622` and `x 1022`. Group headings **36.8pt / 600**, role labels **18.4pt / 500**, names **15.3pt / 400** as `·`-bulleted items at `x +23`.

  **x 622 — Development Team** (y 161): iOS Developers — Anish Varshney, Mayank Thapliyal, Ashmi Singh · Android Developers — Manish Singh, Vikas Verma · Backend Developers — Jhanvi Nagori, Kushagra Seth · Web Developers — Vikas Singh, Lakshay Dawar · Machine Learning Engineers — Pratyush Ranjan, Aman Sinha. Then **Marketing** (y 709): SEO Managers — Divyanshu Dwivedi.

  **x 1022 — Product Strategy** (y 170): Product Managers — Rimpi Kaur · Designers — Nupur Sharma. **Management** (y 383): Project Managers — Rishita Singh · Human Resources Manager — Naina Agarwal. **Quality Assurance** (y 598): Testers — Pranav Rai.

### §8 Thank You — `ThankYou.tsx` · h 1024

- `s8-phone-photo.jpg` radius 24 at `x 46→813, y 119→893`, cover.
- Right column, centred around `x ≈ 1125`:
  - **Thank You!** **38pt / 600** `--ink-700` at `y ≈ 275`
  - *This slide was created using the VoiceToNotes platform.* **24pt / 400** `--ink-700`, two lines, centred, at `y ≈ 331`
  - `wordmark.png` at `x 911, y 538, w 430`
  - **Stop Typing, Start Speaking.** **22pt / 400** at `x 967, y 615`
  - Right-aligned block ending at `x 1389`, `y ≈ 826`, **22pt / 400**: `Contact Information` / `Website: VoiceToNotes.ai` / `Email: admin@voicetonotes.ai`
- Make the email a `mailto:` link and the website a plain `https://voicetonotes.ai` link; both inherit the text style, with a subtle hover underline.

**Note on §3 card D (the empty one):** `Design.pdf` genuinely shows this 497 × 698 card as blank white — almost certainly a video or animation that did not survive the PDF export. Reproduce it faithfully as an empty white rounded card at the exact rect, and leave this comment in the JSX so it is easy to fill later:

```tsx
{/* Design.pdf shows this card empty — likely a video/animation that did not export.
    Drop the real media in here when it is supplied. */}
```

Do not invent filler content for it.

---

## 6. Interaction & polish

Keep it restrained — this is a display site.

- `scroll-behavior: smooth` on `html`; `prefers-reduced-motion: reduce` disables every transition and reveal.
- A light **fade-up on scroll** for each section's cards: `opacity 0 → 1`, `translateY(16px) → 0`, 500ms `cubic-bezier(.22,.61,.36,1)`, staggered ~60ms within a section. Use a single small `IntersectionObserver` hook (`useReveal`) in a client component, applied via a `data-reveal` attribute. Everything must be visible with JS disabled — author the CSS so the revealed state is the default and the hook only adds the "hidden" class on mount.
- Hover on cards: `translateY(-2px)` + slightly deeper shadow, 200ms. No hover effects below `1024px`.
- No parallax, no scroll-jacking, no autoplaying media.

## 7. Accessibility & SEO

- One `<h1>` (`VoiceToNotes — Stop Typing, Start Speaking.`, visually the cover wordmark; use `sr-only` text if the wordmark stays an image). Section headings as `<h2>`, card titles as `<h3>`.
- Every section is a `<section>` with `aria-labelledby` pointing at its heading.
- Colour contrast: body copy on `--bg` must stay ≥4.5:1 — `--slate-500` on `#E8E8E8` is fine; do not lighten it further.
- Focus-visible rings on the two links.
- `app/layout.tsx` metadata: title `VoiceToNotes — Stop Typing, Start Speaking.`, description from the cover body copy, `metadataBase`, OpenGraph + Twitter card using `public/assets/hero-devices.jpg`, `icons` from `logo-mark.png`, `lang="en"`, `theme-color #E8E8E8`.

## 8. Responsive behaviour below 1024px

`html` returns to `16px`. Replace the absolute desktop canvas with stacked flow inside a `max-w-[720px] mx-auto px-5` container. Per section:

- **§1** — logo, `Pitch Deck`, wordmark (`max-width: 85%`), tagline stacked; hero image below, full width.
- **§2** — each card becomes a vertical stack: photo (16:10) on top, text panel below. Drop the chevrons.
- **§3** — single column, cards in this reading order: A, B (three tiles stack), C, E, F, G, H, I. **Omit card D** on mobile (an empty box reads as a bug at small sizes).
- **§4** — heading, tech cards 2-up (1-up under 480px), laptop card, pricing card, credits card (tiles 2-up).
- **§5** — heading, customers card (tiles 3-up → 2-up under 480px), phones image, key industries card (SDK tiles 3-up), market card (tiles stack; ring above text).
- **§6** — three columns stack; inner cards full width.
- **§7** — black background, `The Team` heading, founder card, then the role columns stacked; use `s7-team-photo.jpg` as a `background-image` with a dark overlay so the names stay legible.
- **§8** — photo, then the text block, centred.

Type scale at mobile: section headings ~28px, card titles ~18px, body ~15px. Tap targets ≥44px.

Test at **390, 768, 1024, 1280, 1440, 1920**. At 1920 the canvas stays 1440 and centres on `--bg`; nothing stretches.

## 9. Deployment

- `next.config.ts`: nothing exotic. If you use `next/image` with local files no config is needed; if you set `images: { unoptimized: true }`, say so in the README.
- Add `.gitignore` (node_modules, .next, .vercel).
- `design-ref/` lives outside `public/`, so it is not served — leave it there as reference, don't delete it.
- README: `npm install` → `npm run dev` → `npm run build`; deploy by importing the repo into Vercel (framework auto-detected, no env vars).

## 10. Definition of done

1. `npm run build` passes with zero TypeScript and ESLint errors.
2. Every section visually matches its `design-ref/*.png` at 1440px — same card rects, same copy, same colours, same type sizes. Check them side by side, section by section, and fix what drifts.
3. All copy is verbatim from this plan (including the design's own typos: *Trancription*, *HIPPA*, *my trip's*, *it's*).
4. No horizontal scrollbar at any width from 320px to 1920px.
5. No console errors or warnings; no 404s on assets.
6. Reduced-motion and keyboard focus both behave.
