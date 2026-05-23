# Launch Checklist

## Business Facts

- [ ] Confirm public phone number.
- [ ] Confirm public business address or service-area-only display.
- [ ] Confirm business hours.
- [ ] Confirm legal business name spelling.
- [ ] Confirm license, insurance, registration, and required Indiana contractor wording.
- [ ] Confirm warranty language.
- [ ] Confirm financing availability before mentioning it.
- [ ] Confirm manufacturer certifications or partnerships before adding logos.

## Brand Assets

- [ ] Replace project-created SVG logo assets with final designer source exports if available.
- [ ] Confirm favicon/app icons against the final logo package.
- [ ] Add real roofing, exterior, project, and owner photography.
- [ ] Replace all placeholder gallery cards.
- [ ] Add optimized image alt text for real images.

## Reviews and Proof

- [ ] Create or confirm Google Business Profile.
- [ ] Add Google review link.
- [ ] Replace placeholder review cards with real, permissioned reviews.
- [ ] Add real project examples with city, service, and material details.

## Forms and Tracking

- [ ] Choose lead destination: email, CRM, HubSpot, Formspree, or webhook.
- [ ] Implement server-side form handling.
- [ ] Add spam protection if needed.
- [ ] Add production environment variables in Vercel.
- [ ] Test form delivery.
- [ ] Add analytics only after Dylan approves provider and privacy approach.

## SEO

- [ ] Verify every page title and meta description after final copy edits.
- [ ] Submit sitemap in Google Search Console.
- [ ] Connect Google Business Profile.
- [ ] Add real NAP consistently across footer, GBP, and citations.
- [ ] Review local SEO pages for any overstatement before indexing.
- [ ] Confirm no placeholder review content is presented as real.

## Vercel and Domain

- [ ] Dylan imports the repo into Vercel under `Dylan@centerlineext.com`.
- [ ] Build passes with `npm run build`.
- [ ] Add `centerlineext.com` in Vercel project domains.
- [ ] Configure registrar DNS using Vercel's provided records.
- [ ] Add `www.centerlineext.com` if desired.
- [ ] Verify HTTPS certificate issuance.
- [ ] Test redirects:
  - [ ] `/residential-roof-inspections`
  - [ ] `/residential-roof-replacement`
  - [ ] `/residential-storm-damage`
  - [ ] `/insurance`

## Final QA

- [ ] Test mobile navigation.
- [ ] Test tap-to-call after phone number is live.
- [ ] Test all internal links.
- [ ] Test lead form validation and production delivery.
- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Review pages on mobile, tablet, and desktop.
