# Deployment Tasks

Use this file as the execution queue. When ready, type `Perform Step 1`, then continue with `Perform Step 2`, and so on.

## Step 1: Confirm Access

**Task:** Confirm Dylan has access to every account needed for launch.

**Prompt:**

```text
Perform Step 1. Help us verify launch access for Dylan's GitHub, Vercel, domain registrar for centerlineext.com, the Dylan@centerlineext.com inbox, and any 2FA devices. Tell us exactly what to check, what access level is required, and what blockers would stop us from continuing.
```

## Step 2: Run Local Preflight

**Task:** Run local quality checks before pushing or deploying.

**Prompt:**

```text
Perform Step 2. In /Users/williammock/Centerline-Roofing, run the local preflight checks: npm run lint, npm run typecheck, and npm run build. If anything fails, diagnose the failure and fix it before continuing.
```

## Step 3: Final Content Pass

**Task:** Verify production business facts and remove risky placeholders.

**Prompt:**

```text
Perform Step 3. Review the launch-critical content in src/lib/site.ts and related files. Check phone number, tel link, business address or service-area-only display, hours, legal business name, reviews, gallery/project examples, and any claims about license, insurance, warranty, financing, certifications, or manufacturers. Flag anything that must be confirmed before launch and make safe edits where the answer is known.
```

## Step 4: Create Dylan's GitHub Repo

**Task:** Put the code under Dylan's GitHub ownership.

**Prompt:**

```text
Perform Step 4. Help us create or connect a GitHub repository under Dylan's GitHub account for this site, then push the local main branch from /Users/williammock/Centerline-Roofing. Preserve the existing repo history. If the current origin should not be replaced, add Dylan's repo as a second remote instead.
```

## Step 5: Import Into Vercel

**Task:** Deploy the GitHub repo through Dylan's Vercel account.

**Prompt:**

```text
Perform Step 5. Guide us through importing Dylan's GitHub repo into Dylan's Vercel account. Confirm the project settings are correct for Next.js: install command npm install, build command npm run build, default output directory, and production branch main. Deploy and inspect the first Vercel URL.
```

## Step 6: Decide Lead Form Handling

**Task:** Decide whether the lead form is acceptable for launch or needs production wiring first.

**Prompt:**

```text
Perform Step 6. Inspect the current lead form implementation and tell us whether it actually sends leads anywhere in production. If it is placeholder-only, help us choose a launch-safe option: Resend email through Vercel, HubSpot, Formspree, or CRM webhook. Implement the chosen option only if we have the required account/API details.
```

## Step 7: Configure Environment Variables

**Task:** Add production secrets only in Vercel, not in git.

**Prompt:**

```text
Perform Step 7. Based on the chosen lead form destination, identify the exact production environment variables needed in Vercel. Walk us through adding them to the Vercel project and redeploying. Do not commit secrets to the repository.
```

## Step 8: Add Production Domains

**Task:** Add `centerlineext.com` and `www.centerlineext.com` to the Vercel project.

**Prompt:**

```text
Perform Step 8. In Dylan's Vercel project, help us add centerlineext.com and www.centerlineext.com as domains. Capture the exact DNS records Vercel asks us to create and identify which domain should be primary.
```

## Step 9: Update Registrar DNS

**Task:** Point the domain registrar DNS records at Vercel.

**Prompt:**

```text
Perform Step 9. Help us update the domain registrar DNS for centerlineext.com using the exact records Vercel provided. Tell us which existing records conflict and should be removed or replaced. Then verify DNS and HTTPS status from Vercel.
```

## Step 10: Production QA

**Task:** Smoke test the live production site.

**Prompt:**

```text
Perform Step 10. Test the production site on centerlineext.com and www.centerlineext.com. Verify redirects, HTTPS, mobile navigation, tap-to-call, primary navigation, footer links, request estimate flow, and these routes: /residential-roof-inspections, /residential-roof-replacement, /residential-storm-damage, and /insurance. Report any launch blockers and fix code issues where possible.
```

## Step 11: Search Setup

**Task:** Connect the new production site to local search basics.

**Prompt:**

```text
Perform Step 11. Guide us through post-launch search setup: Google Business Profile website URL, Google Search Console property for centerlineext.com, sitemap submission at https://centerlineext.com/sitemap.xml, and NAP consistency checks across the site and profile.
```

## Step 12: Final Go/No-Go

**Task:** Decide whether the site is production-ready.

**Prompt:**

```text
Perform Step 12. Run a final go/no-go review. Confirm the build passes, production domain and HTTPS work, contact details are correct, no placeholder claims are presented as real, lead form behavior is understood and tested, and Dylan owns or has admin access to GitHub, Vercel, domain, and inbox. Give a clear go/no-go decision with remaining risks.
```
