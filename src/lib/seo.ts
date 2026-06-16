import type { Metadata } from "next";
import { hasPublicPhone, site } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.domain}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor", "HomeAndConstructionBusiness"],
    name: site.name,
    url: site.domain,
    email: site.email,
    ...(hasPublicPhone ? { telephone: site.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Zionsville",
      addressRegion: "IN",
      addressCountry: "US",
    },
    areaServed: ["Zionsville", "Carmel", "Westfield", "Indianapolis", "Fishers", "Noblesville", "Brownsburg", "Whitestown"],
    founder: {
      "@type": "Person",
      name: site.owner,
    },
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "RoofingContractor",
      name: site.name,
      url: site.domain,
    },
    areaServed: ["Central Indiana", "Zionsville", "Carmel", "Westfield", "Indianapolis", "Fishers"],
    url: `${site.domain}${path}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
