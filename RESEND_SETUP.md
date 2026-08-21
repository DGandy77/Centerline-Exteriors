# Resend Production Setup for Dylan

The website code is ready to send every contact and inspection request to `Dylan@centerlineext.com`. Complete these account-level steps before the forms can deliver email in production.

## 1. Verify a sending domain in Resend

1. Sign in to Dylan's Resend account.
2. Open **Domains** and choose **Add Domain**.
3. Add `send.centerlineext.com` as a dedicated sending subdomain.
4. Resend will display DNS records for verification. Sign in to the DNS provider for `centerlineext.com` and add those records exactly as Resend shows them.
5. Do not delete or replace the root domain's existing MX, SPF, DKIM, or DMARC records. The dedicated `send` subdomain keeps website delivery separate from Dylan's normal mailbox.
6. Return to Resend and wait until the domain status is **Verified**.

If the DNS provider automatically appends the domain name, enter only the host portion shown by its interface. Use the final values shown by Resend as the source of truth.

## 2. Create the API key

1. In Resend, open **API Keys** and choose **Create API Key**.
2. Name it `Centerline Production Website`.
3. Select **Sending access** and restrict it to `send.centerlineext.com` if Resend offers that option.
4. Copy the key when it is shown. Treat it like a password: do not email it, paste it into chat, or commit it to GitHub.

## 3. Add environment variables in Dylan's Vercel project

Open Dylan's Centerline project environment settings:

`https://vercel.com/dylan-gandy-s-projects/centerline-exteriors/settings/environment-variables`

Add these three variables for **Production**:

```text
RESEND_API_KEY=re_your_private_key
RESEND_FROM_EMAIL=Centerline Website <website@send.centerlineext.com>
LEAD_TO_EMAIL=Dylan@centerlineext.com
```

Mark `RESEND_API_KEY` as sensitive. Add the same variables to **Preview** only if Dylan wants forms on PR preview deployments to send real email.

## 4. Redeploy and test

1. In Vercel, open **Deployments**.
2. Open the latest production deployment and choose **Redeploy**. Environment-variable changes apply only to new deployments.
3. Open the live Centerline website and submit the form using a real email address you control.
4. Confirm the website shows the success message only after submission.
5. Confirm the lead arrives at `Dylan@centerlineext.com` with all form fields.
6. Reply to the message and verify the reply is addressed to the homeowner's submitted email.
7. In Resend, open **Emails** or **Logs** and confirm the message is accepted and delivered.

If delivery fails, check the Resend log first. The most common causes are an unverified sending domain, an incorrect `RESEND_FROM_EMAIL`, or environment variables that were added without a subsequent deployment.

## Security and operations

- The API key exists only on the server; it is never sent to the browser.
- The API route validates submitted values, escapes email HTML, and uses a honeypot to suppress simple bots.
- If the key is ever exposed, revoke it in Resend immediately, create a replacement, update Vercel, and redeploy.
- The recipient can be changed later by editing only `LEAD_TO_EMAIL` in Vercel and redeploying.
