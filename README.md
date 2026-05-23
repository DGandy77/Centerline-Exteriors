# Centerline Roofing & Exteriors

Production-ready Next.js App Router site for Centerline Roofing & Exteriors.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static generation-ready route structure
- JSON-LD schema helpers
- Accessible lead form scaffold

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content Editing

Most business data, placeholders, services, service-area pages, FAQs, and launch notes live in:

`src/lib/site.ts`

Update these before launch:

- Business phone and `tel:` link
- Public address or service-area-only NAP decision
- Business hours
- Final designer-provided logo source exports if available
- Real project images
- Real reviews
- License, insurance, certifications, warranties, financing, and manufacturer partnership wording only after verified

## Lead Form Wiring

The lead form is implemented in:

`src/components/LeadForm.tsx`

It currently uses safe client-side validation and a placeholder success state. Production options:

- Vercel Server Action + Resend
- HubSpot forms/API
- Formspree
- CRM webhook

Suggested environment variables:

```bash
RESEND_API_KEY=
LEAD_TO_EMAIL=Dylan@centerlineext.com
HUBSPOT_PORTAL_ID=
CRM_WEBHOOK_URL=
```

Do not commit secrets.

## Vercel Deployment

1. Push this project to a GitHub repository Dylan controls or can access.
2. Dylan signs in to Vercel with `Dylan@centerlineext.com`.
3. Import the GitHub repository in Vercel.
4. Framework should auto-detect as Next.js.
5. Build command: `npm run build`.
6. Install command: `npm install`.
7. Add production environment variables once form/email wiring is implemented.
8. Deploy.

## Domain Setup

In Dylan's Vercel account:

1. Open the project.
2. Go to Settings -> Domains.
3. Add `centerlineext.com`.
4. Add `www.centerlineext.com` if desired.
5. Follow Vercel's DNS instructions for the registrar.

Typical DNS patterns:

- Apex/root domain uses an A record pointed to Vercel's provided IP.
- `www` usually uses a CNAME pointed to Vercel.

Use Vercel's live instructions because exact values can change.

## Hawk3 Structure Notes

Hawk3 was used only as a UX and information-architecture benchmark. Observed public structure included home, about, residential roof inspections, residential roof replacement, roof upgrades, residential roof repair, storm damage restoration, commercial roofing, solar roof installation, outdoor living, gallery, reviews, contact, repeated request-estimate forms, trust blocks, service CTAs, footer NAP, service area mentions, and review/gallery flows.

Centerline equivalents included:

- Home
- About
- Roof inspections
- Roof replacement
- Roof repair
- Storm damage
- Gutters
- Siding/exteriors
- Commercial roofing
- Insurance claims assistance
- Interior restoration
- Gallery
- Reviews
- Contact
- Request estimate
- Service areas and local SEO pages

Not included:

- Outdoor living/custom pools/custom homes: outside Centerline's stated core roofing and exteriors offer.
- Solar: intentionally not published in navigation because Centerline's core should remain roofing and exteriors. Add later only if Dylan confirms it as a real service.
- Referral rewards, specific warranties, manufacturer certifications, BBB ratings, years in business, and license numbers: omitted because they are unverified for Centerline.

## SEO

Implemented:

- Unique metadata for every route
- Canonicals on `https://centerlineext.com`
- Open Graph and Twitter metadata
- `sitemap.xml`
- `robots.txt`
- Breadcrumbs
- JSON-LD LocalBusiness/RoofingContractor/HomeAndConstructionBusiness
- Service schema
- FAQ schema
- Breadcrumb schema
- Local service-area routes
