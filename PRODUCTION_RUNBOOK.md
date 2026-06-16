# Production Runbook

Use this when sitting with Dylan to get Centerline Roofing & Exteriors live under his GitHub, Vercel, and domain accounts.

## 1. Bring Access

- Dylan's GitHub login with 2FA available.
- Dylan's Vercel login with 2FA available.
- Domain registrar login for `centerlineext.com`.
- Access to the inbox for `Dylan@centerlineext.com`.
- Final public phone number, business address or service-area-only decision, and business hours.

## 2. Local Preflight

From this project directory:

```bash
cd /Users/williammock/Centerline-Roofing
npm run lint
npm run typecheck
npm run build
```

Fix any failures before pushing or deploying.

## 3. Final Content Pass

Edit `src/lib/site.ts` before production if any of these are still placeholders:

- Public phone number and `tel:` link.
- Business address or service-area-only display.
- Business hours.
- Legal business name spelling.
- License, insurance, warranty, financing, certification, and manufacturer wording.
- Real reviews, gallery items, and project examples.

Do not publish unverified review, warranty, certification, license, financing, or insurance claims.

## 4. GitHub Setup

Preferred path:

1. Dylan creates a new GitHub repo, for example `centerline-roofing-exteriors`.
2. Add this local project as the repo contents.
3. Push `main`.

Commands after Dylan creates the empty repo:

```bash
git remote -v
git remote set-url origin git@github.com:DYLAN_GITHUB_USERNAME/centerline-roofing-exteriors.git
git push -u origin main
```

If the current `origin` should be preserved, add Dylan's repo as a second remote instead:

```bash
git remote add dylan git@github.com:DYLAN_GITHUB_USERNAME/centerline-roofing-exteriors.git
git push -u dylan main
```

## 5. Vercel Import

In Dylan's Vercel account:

1. Add the GitHub integration if Vercel has not already been connected.
2. Import Dylan's GitHub repo.
3. Confirm settings:
   - Framework preset: Next.js
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave default
4. Deploy.
5. Open the Vercel preview URL and smoke test the site.

## 6. Lead Form Decision

The current lead form has client-side validation and a placeholder success state. Before relying on it for live leads, choose one production destination:

- Resend email through a Vercel Server Action.
- HubSpot.
- Formspree.
- CRM webhook.

Add any secrets only in Vercel Project Settings -> Environment Variables. Do not commit API keys.

Suggested variables if email/CRM wiring is added:

```bash
RESEND_API_KEY=
LEAD_TO_EMAIL=Dylan@centerlineext.com
HUBSPOT_PORTAL_ID=
CRM_WEBHOOK_URL=
```

After adding variables, redeploy and submit a real test lead.

## 7. Domain Setup

In Vercel:

1. Project -> Settings -> Domains.
2. Add `centerlineext.com`.
3. Add `www.centerlineext.com`.
4. Follow Vercel's current DNS instructions exactly.

In the registrar:

- Set the apex/root record for `centerlineext.com` to the A record Vercel provides.
- Set `www` to the CNAME Vercel provides.
- Remove conflicting old A, AAAA, or CNAME records for the same hostnames.

Wait for Vercel to show the domain as valid and HTTPS issued.

## 8. Production QA

After the production URL resolves:

- Visit `https://centerlineext.com`.
- Visit `https://www.centerlineext.com`.
- Confirm one version redirects cleanly to the preferred domain.
- Test mobile navigation.
- Test tap-to-call.
- Test all primary navigation links.
- Test footer links.
- Test request estimate flow.
- Test these routes:
  - `/residential-roof-inspections`
  - `/residential-roof-replacement`
  - `/residential-storm-damage`
  - `/insurance`
- Check home, about, services, gallery, reviews, and contact on phone and desktop.

## 9. Search Setup

After launch:

1. Create or confirm Google Business Profile.
2. Add the production website URL to the profile.
3. Create Google Search Console property for `centerlineext.com`.
4. Submit `https://centerlineext.com/sitemap.xml`.
5. Confirm footer NAP matches Google Business Profile and major citations.

## 10. Go/No-Go

Go live only when:

- Production build passes.
- Domain and HTTPS are working.
- Contact details are correct.
- No placeholder reviews or project claims are presented as real.
- Lead form behavior is understood and tested.
- Dylan owns or has admin access to the GitHub repo, Vercel project, domain, and inbox.
