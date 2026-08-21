# Homepage Design QA — Centerline vs. Raptor

Reference reviewed: `https://raptorroofing.com/`

Scale: 1–10. Scores reflect the homepage as designed and verified on August 21, 2026.

| Category | Raptor | Centerline | Assessment |
|---|---:|---:|---|
| Visual impact | 9.2 | 9.5 | Centerline now has comparable cinematic scale with a more restrained, premium architectural direction. |
| Information hierarchy | 9.1 | 9.6 | Centerline's hero, experience cards, four-service bento system, owner story, process, service area, and final CTA create a clear progressive narrative. |
| Brand distinctiveness | 8.8 | 9.6 | Navy, blue, silver, grid lines, dimensional gradients, and disciplined typography form a recognizable Centerline system. |
| Trust and credibility | 9.3 | 9.0 | Centerline's owner-led story and repair-first positioning are strong; Raptor still benefits from verified reviews and real project photography. |
| Mobile UX | 9.0 | 9.4 | The 390px layout preserves large type, full-width CTAs, comfortable targets, readable cards, and a working navigation drawer. |
| Conversion clarity | 9.3 | 9.4 | The free-inspection action is prominent at the hero, process, mobile drawer, and final CTA without introducing pressure or unsupported offers. |
| Accessibility | 8.8 | 9.5 | Semantic headings, keyboard-ready links, visible focus, descriptive imagery, strong contrast, reduced-motion support, and large controls are built in. |
| Performance architecture | 8.6 | 9.3 | The page remains server-rendered, adds no client bundle for visual effects, and uses optimized `next/image` delivery for the hero. |
| **Overall** | **9.0** | **9.4** | **Centerline meets the first-class design target while remaining more brand-specific and restrained.** |

## Verification evidence

- Desktop visual review at 1440 × 1100.
- Mobile visual review at 390 × 844.
- Mobile navigation opened and rendered correctly in the compiled production build.
- Primary inspection CTA reached `/request-inspection` with the correct page title and form.
- Compiled production browser session reported zero console errors and zero warnings.
- Homepage heading hierarchy and service/location link targets were reviewed from the accessibility snapshot.
- Every customer-facing homepage string was reconciled against the authoritative `Centerline Homepage updates` Google Doc; abbreviated and extra public-facing copy was removed.
- Lint, TypeScript, and production build passed.

## Remaining evidence opportunity

Raptor's main advantage is proof from real projects and customer reviews. Centerline should replace atmospheric generated imagery with approved project photography when Dylan provides it and add verified social proof only after publication permission is confirmed.
