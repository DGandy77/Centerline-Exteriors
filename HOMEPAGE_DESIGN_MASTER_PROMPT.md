# Centerline Homepage — Master Design Prompt

Act as a principal web designer, conversion strategist, brand director, UX architect, accessibility specialist, and senior Next.js engineer. Redesign the Centerline Roofing & Exteriors homepage into a first-class digital flagship for an owner-led Central Indiana exterior contractor.

## Goal

Create a page that feels as visually confident and conversion-focused as Raptor Roofing while remaining unmistakably Centerline. Match or exceed the reference in hierarchy, pacing, polish, responsiveness, clarity, and emotional trust. Do not copy its layout, language, green palette, claims, or branded details.

## Brand direction

- Use Centerline navy `#061a33`, bright blue `#1d66c2`, electric blue highlights, silver, white, and restrained sky-blue gradients.
- Make typography larger and more editorial: a commanding hero, oversized section headlines, concise supporting copy, and clear visual contrast.
- Combine strong rectilinear construction cues with selective rounded geometry, layered cards, diagonal accents, roofline-inspired patterns, and subtle motion.
- Use premium architectural imagery with honest alt text. Generated imagery is atmospheric brand imagery, not represented as completed Centerline work.
- The personality is calm authority: clear answers, trusted guidance, disciplined execution, excellent craftsmanship, and no pressure.

## Page experience

1. Build a cinematic, full-bleed hero with an immediate service-area signal, large outcome-led headline, readable supporting message, primary inspection CTA, and a secondary path to explore services.
2. Follow with a compact trust/positioning band that communicates local ownership, homeowner-first recommendations, and complete exterior capability without inventing numbers or credentials.
3. Present the Centerline Experience as four highly scannable principles with strong numbering and progressive visual rhythm.
4. Turn services into a premium bento-style system with differentiated color, iconography, hierarchy, and clear page links.
5. Give storm response its own urgent-but-calm conversion moment.
6. Make Dylan’s owner story a meaningful trust section using his approved NFL, teaching, coaching, and Zionsville story—never fabricate a portrait or testimonial.
7. Present the Inspect → Explain → Plan → Build process as a visual journey.
8. Close with local service-area confidence and a high-contrast inspection CTA.

## UX, accessibility, and performance requirements

- Design mobile-first and verify at 390px and 1440px.
- Preserve semantic heading order, keyboard operation, visible focus, minimum target sizes, readable line length, and strong color contrast.
- Respect `prefers-reduced-motion`; motion must never hide content or block action.
- Use `next/image`, an accurate `sizes` value, and priority loading for the hero.
- Keep the homepage as a Server Component; introduce no unnecessary client JavaScript.
- Do not publish a phone number, address, review, rating, award, financing offer, warranty, certification, or performance claim that Dylan has not verified.
- Every primary conversion action must point to `/request-inspection`.
- Preserve working SEO metadata and structured data.

## Final quality gate

Run lint, TypeScript, and production build. Inspect desktop and mobile screenshots, console output, navigation, CTA targets, image loading, overflow, contrast, and content completeness. Grade Centerline against Raptor from 1–10 in visual impact, hierarchy, brand distinctiveness, trust, mobile UX, conversion clarity, accessibility, and performance. Iterate until the overall score is at least 9.0 and no category is below 8.5.
