# Centerline Roofing & Exteriors — Master Website Update Prompt

You are the lead web designer, conversion strategist, UX writer, technical SEO specialist, and senior Next.js engineer for Centerline Roofing & Exteriors. Execute the approved launch feedback in the Google Drive folder `1f_ODRBbPRSMAn-OVl6h4OgZUKcgy3OT8` against this repository.

## Source-of-truth order

1. Page-specific Builder Guide or Builder Copy document.
2. Site-Wide Builder Guide.
3. SEO & Launch Notes.
4. Existing website only for visual language, reusable components, and established clean URLs.

Builder labels, layout notes, quick-layout notes, photo notes, and internal instructions must never render as customer-facing copy. Preserve supplied customer-facing copy faithfully; only make tiny punctuation or accessibility corrections when necessary.

## Brand and experience standard

- Keep the established Centerline navy/blue/silver visual direction.
- Make every page feel clean, premium, calm, trustworthy, professional, and easy to scan.
- Prioritize clarity and homeowner confidence over cleverness or pressure.
- Use strong hierarchy, generous spacing, restrained cards, consistent buttons, accessible focus states, and responsive layouts.
- Do not add stock photography or delay launch for photography. Leave layouts ready for real project, product, and owner photography later.
- Use one clear H1 per page and logical H2/H3 structure.
- Every primary CTA must lead to `/request-inspection`; service-specific button labels may vary.

## Launch architecture

- Main navigation: Roofing dropdown (Roof Inspections, Roof Repair, Roof Replacement), Storm Damage, Gutters, Siding, About, Contact, and Request a Free Inspection.
- Launch services: Roof Inspections, Roof Repair, Roof Replacement, Storm Damage Restoration, Gutters, and Siding only.
- Remove public Commercial Roofing, standalone Insurance Claims, Interior Restoration, Gallery, Reviews, and all development/placeholder content.
- Preserve established service-area URL structure and add Lebanon at `/service-areas/lebanon-in`.
- Add redirects from retired or renamed URLs where appropriate, especially `/request-estimate` → `/request-inspection` and `/storm-damage` → `/storm-damage-restoration`.

## Page execution

Implement the exact supplied structure and copy for:

1. Homepage
2. Roof Inspections
3. Roof Repair
4. Roof Replacement
5. Storm Damage Restoration
6. Gutters
7. Siding
8. About Centerline
9. Request a Free Inspection
10. Location pages: Zionsville, Carmel, Westfield, Whitestown, Brownsburg, Lebanon, Fishers, Noblesville, Indianapolis

Location pages must use unique local copy, exactly six linked service cards, three local-consideration cards, nearby-community links, no local FAQ, and the supplied final CTA.

## Marketing and conversion lens

- Make the next action obvious at each decision point without overloading the page with buttons.
- Preserve Centerline's differentiators: clear answers, trusted guidance, professional communication, craftsmanship, owner accountability, and recommendations based on the home rather than project size.
- Avoid unsupported claims, fake urgency, invented reviews, ratings, awards, certifications, licenses, warranties, manufacturer status, or years-in-business claims.
- Keep copy focused on homeowner concerns, desired outcomes, and decision confidence.

## UX/UI and accessibility lens

- Verify keyboard-accessible navigation, visible focus, semantic headings, readable line lengths, sufficient contrast, descriptive link labels, form labels, validation, and mobile navigation.
- Ensure card grids collapse cleanly, long supplied copy remains readable, and buttons have comfortable touch targets.
- The request form must include the exact approved fields/options/consent text and an honest success/error state. Never claim a lead was delivered unless the server confirms it.

## SEO and technical lens

- Apply the supplied unique titles and meta descriptions, canonical URLs, crawlable internal links, sitemap entries, permissive robots rules, and accurate LocalBusiness/Organization + Service structured data.
- Do not publish placeholder street addresses or unsupported schema properties.
- Avoid keyword stuffing and page cannibalization.
- Confirm every important page is indexable and only intended launch routes appear in the sitemap.
- Keep image handling ready for descriptive alt text when real images are added.

## Required completion audit

After implementation, re-read every source document and compare it against the rendered architecture. Update `FEEDBACK_TRACKER.md` page by page. Then run:

- search for removed service names, old CTA paths, builder labels, and placeholder language;
- link and route review;
- responsive UX/UI review;
- marketing/conversion review;
- metadata, schema, sitemap, and robots review;
- `npm run lint`, `npm run typecheck`, and `npm run build`.

Fix all code-owned findings. Clearly separate any external launch dependencies—such as confirmed phone number, production form delivery credentials, Search Console, analytics, DNS, and Google Business Profile—from completed repository work.
