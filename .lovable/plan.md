# Artane Nails & Beauty Lounge — Build Plan

A luxury, editorial-feel salon site with 5 routes, built on the existing TanStack Start stack (not a single HTML file — adapted to the project's framework while keeping the design spec intact).

## Design system (src/styles.css)

Replace the default tokens with the brand palette (converted to oklch) and add brand-specific tokens:

- `--background` Warm Ivory `#FAF7F2`
- `--muted` / soft section Nude Beige `#F3EAE3`
- `--foreground` Matte Black `#111111`
- `--muted-foreground` Warm Gray `#6A6A6A`
- `--primary` Matte Black, `--primary-foreground` white
- `--accent` Dusty Rose `#D8A7B1`
- `--gold` Soft Gold `#C6A769`
- `--card` Cream White `#FFFFFF`
- `--radius` `1.75rem` (28px cards), pill radius via `rounded-full`
- Shadows: `--shadow-card`, `--shadow-card-hover`
- Load Google Fonts (Playfair Display 600/700, Poppins 400/500) via `<link>` in `__root.tsx` head.
- Tailwind theme: `--font-display: "Playfair Display"`, `--font-sans: Poppins`. Apply Poppins as body default; Playfair via `font-display` utility on headings.
- Global: `scroll-behavior: smooth`, body bg ivory, base text matte black, paragraph line-height 1.8, heading letter-spacing 0.02em.

## Routes (src/routes/)

```
__root.tsx        shared shell (fonts, Navbar, Footer, MobileCallBar, Outlet)
index.tsx         Home
about.tsx         About
services.tsx      Services
offers.tsx        Offers
contact.tsx       Contact
```

Each leaf route sets its own `head()` with title + description + og tags.

## Shared components (src/components/)

- `Navbar.tsx` — fixed top, transparent until scroll > 40px then ivory bg + subtle border; brand wordmark left (Playfair), nav links + black pill "Book Now" right; mobile hamburger with slide-down panel.
- `Footer.tsx` — `#111` bg, ivory text, gold hover, three columns, bottom copyright bar.
- `MobileCallBar.tsx` — fixed bottom on `<md`, full-width black pill "📞 Call to Book" → `tel:+353899508863`.
- `GrandOpeningBanner.tsx` — dusty-rose strip with shimmer keyframe.
- `SectionReveal.tsx` — wraps children, uses IntersectionObserver to add `opacity-100 translate-y-0` (from `opacity-0 translate-y-6`), 0.6s ease.
- `ServiceCard.tsx`, `TestimonialCard.tsx`, `PriceRow.tsx`, `CTAButton.tsx` (variants: primary black-pill, secondary outline, rose).

## Page content

**Home (`/`)** — Hero (full viewport, Unsplash editorial salon image, dark overlay 0.38, eyebrow gold "Dublin 5's Premier Beauty Destination", H1 "Enhance Your Beauty, / Feel Your Best.", subtitle, two CTAs, scroll arrow, Ken Burns animation on bg). Grand Opening banner. About preview (two-col, beige bg, "Our Story →" → /about). Services preview (3×2 grid of the 6 categories with emoji icons → /services). Dark offer highlight section. Location section with address block + Google Maps iframe (Artane, Dublin 5). Testimonials (Aoife, Sarah, Ciara, 5★).

**About (`/about`)** — Hero banner "Our Story". Brand story two-col. Full-width black mission quote in italic Playfair. 3 value cards (💎 🌸 ✅). 4-image gallery row. CTA banner → /offers.

**Services (`/services`)** — Hero "Our Services & Pricing". Grand Opening strip. Seven categories rendered as a shadcn `Accordion` (collapsible on all sizes, opens first by default on desktop): Manicure & BIAB, Pedicure, Nail Extensions, Eyes/Brows/Face, Waxing, Lash Extensions, Princess Services. Every price from the brief is included verbatim using `PriceRow` (name • dotted leader • €price). Prominent policy callout: "✅ No charge for Shellac removal when booking a new Shellac service." Bottom CTA with phone.

**Offers (`/offers`)** — Dark hero with gold heading. Centered cream offer card: "LIMITED TIME" badge, "25% Off All Services", subtext, date strip (Fri 15 · Sat 16 · Sun 17 May 2026), CTA `tel:` link. Policy section. Address + phone reminder.

**Contact (`/contact`)** — Hero "Visit Us". Two-col: left contact info + directional cues; right Google Maps iframe. CTA: call/message on (089) 950 8863.

## Animations

- Ken Burns: CSS keyframe `scale(1)→scale(1.08)` over 12s on hero `<img>`.
- Section reveal: IntersectionObserver in `SectionReveal`.
- Card hover: `transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover`.
- Navbar bg/blur via scroll listener toggling a class.
- Banner shimmer: gradient sweep keyframe across the rose strip.
- Hero text stagger via incremental `animation-delay` on spans.

## Images

Use Unsplash URLs (`https://images.unsplash.com/photo-...?w=1600&q=80`) for hero, about, gallery, and category preview cards. No image generation needed.

## Quality gates before finishing

- All 5 routes render with route-specific `head()` metadata.
- Every price from the brief is on `/services`.
- Brand strings say "Artane Nails & Beauty Lounge" everywhere; address `58 Saint Brigid's Road, Artane, Dublin 5, D05 H9W2`; phone `(089) 950 8863`.
- Mobile (375px): hamburger nav works, sticky call bar visible, accordion services usable, hero text scales to ~44px.
- No placeholder index image; default `index.tsx` placeholder fully replaced.

## Technical notes

- Framework deviation from the brief: project is TanStack Start (React + Vite), not a single HTML file. The brief's CSS, content, palette, typography, and behavior are preserved; only the file layout is framework-idiomatic (multiple route files instead of JS show/hide).
- No new dependencies — shadcn `Accordion` and `Button` already present; vanilla IntersectionObserver for reveals.
- Google Maps via standard `<iframe>` embed (no API key needed).
