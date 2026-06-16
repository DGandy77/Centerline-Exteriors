export const site = {
  name: "Centerline Roofing & Exteriors",
  owner: "Dylan Gandy",
  domain: "https://centerlineext.com",
  displayDomain: "Centerlineext.com",
  email: "Dylan@centerlineext.com",
  phone: "",
  phoneHref: "",
  address: "Zionsville, IN",
  cityState: "Zionsville, IN",
  hours: "",
  logoNote:
    "Project includes SVG logo assets based on the provided lockup. Replace with final source logo exports if Dylan has vector artwork from the designer.",
};

export const hasPublicPhone = Boolean(site.phone && site.phoneHref);
export const hasPublicHours = Boolean(site.hours);

export const serviceAreas = [
  "Zionsville",
  "Carmel",
  "Westfield",
  "Indianapolis",
  "Fishers",
  "Noblesville",
  "Brownsburg",
  "Whitestown",
];

export const primaryServices = [
  {
    title: "Roof Inspections",
    href: "/roof-inspections",
    summary: "Clear roof condition reports for age, leaks, storm concerns, and next-step planning.",
  },
  {
    title: "Roof Replacement",
    href: "/roof-replacement",
    summary: "Residential roof replacement planned around protection, ventilation, curb appeal, and cleanup.",
  },
  {
    title: "Roof Repair",
    href: "/roof-repair",
    summary: "Targeted roof repairs for leaks, missing shingles, flashing issues, and weather damage.",
  },
  {
    title: "Storm Damage",
    href: "/storm-damage",
    summary: "Inspection, documentation, and repair planning after hail, wind, and heavy Indiana storms.",
  },
  {
    title: "Gutters",
    href: "/gutters",
    summary: "Gutter repair and installation to move water away from the roofline and foundation.",
  },
  {
    title: "Siding",
    href: "/siding",
    summary: "Exterior siding support for protection, weather resistance, and a cleaner home profile.",
  },
  {
    title: "Commercial Roofing",
    href: "/commercial-roofing",
    summary: "Roofing support for offices, retail, light industrial, and managed properties.",
  },
  {
    title: "Insurance Claims",
    href: "/insurance-claims",
    summary: "Help understanding roof condition, documenting damage, and preparing for claim conversations.",
  },
];

export type ServicePage = {
  slug: string;
  title: string;
  navTitle: string;
  description: string;
  h1: string;
  intro: string;
  who: string;
  signs: string[];
  process: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  keyword: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "roof-inspections",
    title: "Free Roof Inspections in Zionsville, IN",
    navTitle: "Roof Inspections",
    description:
      "Schedule a clear roof inspection with Centerline Roofing & Exteriors for homes in Zionsville and Central Indiana.",
    h1: "Free Roof Inspections in Zionsville and Central Indiana",
    intro:
      "A roof inspection should give you straight answers, not pressure. Centerline checks the roof system, documents visible concerns, and explains practical next steps.",
    who: "Homeowners who notice aging shingles, leaks, recent storm activity, home sale concerns, or just want a better understanding of roof condition.",
    signs: ["Missing or lifted shingles", "Granule loss near downspouts", "Water marks on ceilings", "Dented vents or soft metal", "Flashing gaps around roof penetrations"],
    process: ["Inspect the roof and exterior details", "Photograph visible concerns", "Explain repair or replacement options", "Provide next-step guidance"],
    benefits: ["Clear documentation", "No claim approval promises", "Local Central Indiana perspective", "A practical plan before you spend money"],
    faqs: [
      { question: "When should I schedule a roof inspection?", answer: "After major wind or hail, before buying or selling a home, when you see a leak, or when your roof is approaching the end of its expected life." },
      { question: "Do I need an insurance claim before an inspection?", answer: "No. An inspection can help you understand whether visible conditions are worth discussing with your insurance carrier." },
      { question: "Will Centerline tell me if repair is enough?", answer: "Yes. The goal is to explain what the roof needs, whether that is a small repair, continued monitoring, or replacement planning." },
    ],
    related: ["/roof-repair", "/storm-damage", "/insurance-claims"],
    keyword: "roof inspection Zionsville IN",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement Zionsville IN",
    navTitle: "Roof Replacement",
    description:
      "Residential roof replacement for Zionsville, Carmel, Westfield, Indianapolis, and Central Indiana homeowners.",
    h1: "Residential Roof Replacement Built for Indiana Homes",
    intro:
      "When a roof has reached the point where repairs no longer make sense, Centerline plans a replacement around protection, ventilation, curb appeal, and clean execution.",
    who: "Homeowners dealing with an aging roof, repeated leaks, storm-related damage, worn shingles, or a planned exterior upgrade.",
    signs: ["Curling or brittle shingles", "Recurring leaks", "Widespread granule loss", "Soft decking concerns", "Roof age that makes repairs less practical"],
    process: ["Inspect the current roof", "Review material and ventilation options", "Plan schedule and site protection", "Install, clean, and review final work"],
    benefits: ["Better long-term protection", "Improved curb appeal", "Coordinated ventilation details", "Cleaner project communication"],
    faqs: [
      { question: "How do I know if I need roof replacement?", answer: "A full inspection can show whether the issue is isolated or widespread enough that replacement is the better investment." },
      { question: "Can Centerline help compare shingle options?", answer: "Yes. Manufacturer, color, impact rating, and warranty options should be reviewed before final selection." },
      { question: "Will the site be cleaned after installation?", answer: "A proper roof replacement plan includes property protection, debris removal, and magnet cleanup for nails." },
    ],
    related: ["/roof-inspections", "/roof-repair", "/gutters"],
    keyword: "roof replacement Zionsville IN",
  },
  {
    slug: "roof-repair",
    title: "Roof Repair Zionsville IN",
    navTitle: "Roof Repair",
    description:
      "Roof repair for leaks, missing shingles, flashing problems, and storm concerns in Zionsville and Central Indiana.",
    h1: "Roof Repair for Leaks, Weather Damage, and Wear",
    intro:
      "Small roof problems can become expensive when they are ignored. Centerline identifies the source, explains the repair, and helps protect the home from further damage.",
    who: "Homeowners with active leaks, missing shingles, flashing problems, loose vents, or roof damage after wind and hail.",
    signs: ["Ceiling stains", "Missing shingles after wind", "Loose pipe boots", "Exposed nail heads", "Drips during heavy rain"],
    process: ["Diagnose the issue", "Document the repair area", "Explain repair scope", "Complete or schedule the work"],
    benefits: ["Prevents avoidable interior damage", "Extends useful roof life when appropriate", "Focused repair recommendations", "Local response across Central Indiana"],
    faqs: [
      { question: "Can every roof leak be repaired?", answer: "Many leaks can be repaired, but widespread roof failure may require replacement. The inspection determines the right path." },
      { question: "Do you repair storm damage?", answer: "Yes. Centerline can inspect wind and hail concerns and explain whether repair, replacement, or documentation is needed." },
      { question: "Should I wait if a leak is small?", answer: "No. Even a small leak can damage decking, insulation, drywall, and paint over time." },
    ],
    related: ["/roof-inspections", "/storm-damage", "/interior-restoration"],
    keyword: "roof repair Zionsville IN",
  },
  {
    slug: "storm-damage",
    title: "Storm Damage Roof Repair Central Indiana",
    navTitle: "Storm Damage",
    description:
      "Storm damage roof inspections and restoration support after hail, wind, and severe weather in Central Indiana.",
    h1: "Storm Damage Roofing Support After Indiana Weather",
    intro:
      "Storm damage is not always obvious from the ground. Centerline helps homeowners understand roof condition, document visible issues, and plan the next step without overpromising claim outcomes.",
    who: "Homeowners and property managers after hail, high wind, fallen limbs, lifted shingles, or sudden roof leaks.",
    signs: ["Bruised shingles", "Dented vents and gutters", "Lifted or creased shingles", "Missing ridge caps", "New leaks after a storm"],
    process: ["Inspect roof and exterior", "Photograph visible damage", "Review repair or replacement needs", "Coordinate work after scope is clear"],
    benefits: ["Calm guidance after stressful weather", "Useful documentation", "Insurance-aware communication", "No unsupported claim promises"],
    faqs: [
      { question: "Should I file an insurance claim right away?", answer: "It is often useful to inspect first so you understand the visible condition before speaking with your carrier." },
      { question: "Can Centerline meet with an adjuster?", answer: "Centerline can provide contractor-side documentation and be available for scope discussions when appropriate." },
      { question: "Does storm damage always mean roof replacement?", answer: "No. The right recommendation depends on the type, severity, and spread of the damage." },
    ],
    related: ["/insurance-claims", "/roof-inspections", "/gutters"],
    keyword: "storm damage roof repair Central Indiana",
  },
  {
    slug: "gutters",
    title: "Gutter Installation Zionsville IN",
    navTitle: "Gutters",
    description:
      "Gutter installation and repair for Zionsville and Central Indiana homes, coordinated with roofing and exterior work.",
    h1: "Gutter Installation and Repair for Better Water Control",
    intro:
      "Gutters protect the roofline, siding, landscaping, and foundation. Centerline helps repair or replace gutter systems that are leaking, sagging, undersized, or storm damaged.",
    who: "Homeowners with leaking seams, overflow, damaged downspouts, storm dents, or exterior upgrades that need a cleaner drainage plan.",
    signs: ["Overflow during rain", "Pooling near foundation", "Sagging gutter runs", "Dented downspouts", "Fascia staining"],
    process: ["Review roofline drainage", "Identify repair or replacement needs", "Plan downspout placement", "Install and clean the work area"],
    benefits: ["Better water movement", "Reduced fascia and siding damage", "Cleaner exterior appearance", "Roofing and gutter coordination"],
    faqs: [
      { question: "Can gutters be replaced with a roof?", answer: "Yes. Coordinating roof and gutter work can simplify scheduling and protect the finished roofline." },
      { question: "Do storm claims include gutters?", answer: "Sometimes. Coverage depends on policy terms and documented damage. Centerline can document visible gutter damage." },
      { question: "What causes gutters to overflow?", answer: "Common causes include clogs, poor slope, undersized runs, damaged sections, or downspout issues." },
    ],
    related: ["/roof-replacement", "/storm-damage", "/siding"],
    keyword: "gutter installation Zionsville IN",
  },
  {
    slug: "siding",
    title: "Siding Contractor Zionsville IN",
    navTitle: "Siding",
    description:
      "Siding and exterior restoration support for Zionsville, Carmel, Westfield, Indianapolis, and Central Indiana homes.",
    h1: "Siding and Exterior Restoration for Central Indiana Homes",
    intro:
      "Siding plays a major role in curb appeal and weather protection. Centerline supports exterior repairs and replacement planning when siding is aged, damaged, or part of a larger restoration.",
    who: "Homeowners with storm-damaged siding, cracked panels, fading, loose sections, or exterior projects involving roofing and gutters.",
    signs: ["Cracked or loose siding", "Hail marks", "Water behind panels", "Warped sections", "Frequent caulking failures"],
    process: ["Assess exterior condition", "Identify repairable and replacement areas", "Coordinate colors and materials", "Complete a clean exterior installation"],
    benefits: ["Improved curb appeal", "Better weather protection", "Coordinated exterior planning", "Reduced maintenance concerns"],
    faqs: [
      { question: "Does Centerline handle full siding replacement?", answer: "Final siding scope, products, and manufacturer details should be confirmed before the project is scheduled." },
      { question: "Can siding be inspected after hail?", answer: "Yes. Siding, gutters, vents, and soft metals can all show signs of storm impact." },
      { question: "Should siding and gutters be planned together?", answer: "Often yes, especially when exterior water management or curb appeal is part of the project." },
    ],
    related: ["/gutters", "/storm-damage", "/roof-replacement"],
    keyword: "siding contractor Zionsville IN",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing Central Indiana",
    navTitle: "Commercial Roofing",
    description:
      "Commercial roofing support for Central Indiana offices, retail buildings, light industrial properties, and managed facilities.",
    h1: "Commercial Roofing Support for Central Indiana Properties",
    intro:
      "Commercial roofs need practical planning, clear communication, and minimal disruption. Centerline supports inspections, repairs, replacement planning, and storm documentation.",
    who: "Building owners, property managers, small businesses, retail centers, offices, and light industrial facilities.",
    signs: ["Ponding water", "Membrane punctures", "Open seams", "Interior ceiling stains", "Storm-related roof concerns"],
    process: ["Inspect roof and drainage", "Document roof condition", "Prioritize urgent concerns", "Plan repair or replacement scope"],
    benefits: ["Clear property documentation", "Reduced business disruption", "Practical maintenance planning", "Local accountability"],
    faqs: [
      { question: "What commercial roof systems will Centerline handle?", answer: "Final system certifications should be confirmed before launch. The page is written broadly for inspection, repair, and replacement planning." },
      { question: "Can you inspect a roof before a property purchase?", answer: "Yes. A roof condition review can help buyers and owners understand likely maintenance or replacement needs." },
      { question: "Do commercial storm claims need documentation?", answer: "Documentation is important. Centerline can photograph visible damage and help organize contractor-side information." },
    ],
    related: ["/roof-inspections", "/storm-damage", "/insurance-claims"],
    keyword: "commercial roofing Central Indiana",
  },
  {
    slug: "insurance-claims",
    title: "Insurance Roof Claim Help Indiana",
    navTitle: "Insurance Claims",
    description:
      "Insurance-aware roof inspection and documentation support for storm damage claims in Zionsville and Central Indiana.",
    h1: "Insurance Claim Assistance for Roof and Exterior Damage",
    intro:
      "Insurance claims can feel confusing. Centerline helps homeowners understand visible damage, organize documentation, and communicate clearly while avoiding promises only a carrier can make.",
    who: "Homeowners considering a roof claim after hail, wind, fallen debris, or related exterior damage.",
    signs: ["Recent hail or high wind", "Damaged shingles or vents", "Dented gutters", "Interior water stains", "Carrier-requested contractor estimates"],
    process: ["Inspect and document condition", "Explain visible findings", "Prepare repair or replacement scope", "Coordinate work after approved direction"],
    benefits: ["Clearer claim conversations", "Better damage documentation", "Practical contractor estimates", "Honest expectations"],
    faqs: [
      { question: "Can Centerline guarantee my claim is approved?", answer: "No. Claim decisions are made by the insurance carrier. Centerline can document visible conditions and provide contractor information." },
      { question: "Should I call my carrier or a roofer first?", answer: "Many homeowners choose a roof inspection first so they understand visible conditions before opening a claim." },
      { question: "Can you review an insurance scope?", answer: "Centerline can review contractor-related scope details and identify questions to clarify with the carrier." },
    ],
    related: ["/storm-damage", "/roof-inspections", "/roof-replacement"],
    keyword: "insurance roof claim help Indiana",
  },
  {
    slug: "interior-restoration",
    title: "Interior Restoration After Roof Leaks",
    navTitle: "Interior Restoration",
    description:
      "Interior restoration planning for water stains and damage related to roof leaks and storm events in Central Indiana.",
    h1: "Interior Restoration After Roof Leaks and Storm Damage",
    intro:
      "When roof damage reaches the inside of the home, the exterior fix and interior repair need to be coordinated. Centerline helps connect the roof issue to the restoration plan.",
    who: "Homeowners with ceiling stains, drywall damage, paint damage, or moisture concerns connected to a roofing or storm event.",
    signs: ["Water stains", "Soft drywall", "Peeling paint", "Musty smells", "Recurring ceiling discoloration"],
    process: ["Identify the roof source", "Document interior impact", "Stop active water intrusion", "Plan interior repair scope"],
    benefits: ["Roof-first problem solving", "Better documentation", "Cleaner restoration planning", "Reduced repeat damage risk"],
    faqs: [
      { question: "Should the roof be fixed before interior repairs?", answer: "Yes. Interior work should wait until the water source is identified and addressed." },
      { question: "Can roof leaks damage insulation?", answer: "Yes. Moisture can affect insulation, drywall, paint, and framing depending on severity and duration." },
      { question: "Is interior restoration part of a storm claim?", answer: "It may be, depending on the event and policy. The insurance carrier determines coverage." },
    ],
    related: ["/roof-repair", "/storm-damage", "/insurance-claims"],
    keyword: "interior restoration roof leak Indiana",
  },
];

export const locationPages = [
  { slug: "zionsville-in", city: "Zionsville", title: "Roofing Company Zionsville IN", keyword: "roofing company Zionsville IN" },
  { slug: "carmel-in", city: "Carmel", title: "Roofing Contractor Carmel IN", keyword: "roofing contractor Carmel IN" },
  { slug: "westfield-in", city: "Westfield", title: "Roofing Contractor Westfield IN", keyword: "roofing contractor Westfield IN" },
  { slug: "indianapolis-in", city: "Indianapolis", title: "Indianapolis Roof Repair & Replacement", keyword: "Indianapolis roof repair" },
  { slug: "fishers-in", city: "Fishers", title: "Roofing Contractor Fishers IN", keyword: "roofing contractor Fishers IN" },
  { slug: "noblesville-in", city: "Noblesville", title: "Roofing Contractor Noblesville IN", keyword: "roofing contractor Noblesville IN" },
  { slug: "brownsburg-in", city: "Brownsburg", title: "Roofing Contractor Brownsburg IN", keyword: "roofing contractor Brownsburg IN" },
  { slug: "whitestown-in", city: "Whitestown", title: "Roofing Contractor Whitestown IN", keyword: "roofing contractor Whitestown IN" },
];

export const placeholderNotes = {
  phone: "Replace site.phone and site.phoneHref when Dylan confirms the business phone.",
  address: "Replace site.address when the public NAP address is confirmed.",
  reviews: "Review cards are intentionally labeled as placeholders and should be replaced with real customer reviews before public launch.",
  gallery: "Gallery cards use CSS placeholder panels until real project photography is available.",
  certifications: "Do not add manufacturer certifications, license numbers, warranties, or financing claims until verified.",
};
