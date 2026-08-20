export const site = {
  name: "Centerline Roofing & Exteriors",
  owner: "Dylan Gandy",
  domain: "https://centerlineext.com",
  displayDomain: "Centerlineext.com",
  email: "Dylan@centerlineext.com",
  phone: "",
  phoneHref: "",
  address: "Zionsville, Indiana",
  cityState: "Zionsville, IN",
  hours: "",
};

export const hasPublicPhone = Boolean(site.phone && site.phoneHref);
export const hasPublicHours = Boolean(site.hours);

export const serviceAreas = ["Zionsville", "Carmel", "Westfield", "Whitestown", "Brownsburg", "Lebanon", "Fishers", "Noblesville", "Indianapolis"];

export const primaryServices = [
  { title: "Roof Inspections", href: "/roof-inspections", summary: "Understand the condition of your roof and whether anything needs attention now." },
  { title: "Roof Repair", href: "/roof-repair", summary: "Find the source of a roofing problem and make the right repair when repair makes sense." },
  { title: "Roof Replacement", href: "/roof-replacement", summary: "Build a complete roofing system around your home, goals, and long-term performance." },
  { title: "Storm Damage Restoration", href: "/storm-damage-restoration", summary: "Inspect and document storm damage, then navigate restoration with clear guidance." },
  { title: "Gutters", href: "/gutters", summary: "Manage roof runoff with a gutter system designed for your home and lasting performance." },
  { title: "Siding", href: "/siding", summary: "Protect and transform your home with siding selected for performance and appearance." },
];

export type LocationPage = {
  slug: string; city: string; title: string; description: string; hero: string; heroCopy: string;
  introHeading: string; intro: string[]; considerationsHeading: string;
  considerations: { title: string; text: string }[]; ctaHeading: string; ctaText: string;
};

export const locationPages: LocationPage[] = [
  {
    slug: "zionsville-in", city: "Zionsville", title: "Zionsville, IN Roofing & Exterior Contractor | Centerline",
    description: "Centerline Roofing & Exteriors provides roof inspections, repair, replacement, storm restoration, gutters and siding for homeowners in Zionsville, Indiana.",
    hero: "Roofing & Exterior Contractor in Zionsville, Indiana",
    heroCopy: "Centerline Roofing & Exteriors is based right here in Zionsville. From roof inspections and repairs to complete replacements, storm damage restoration, gutters, and siding, we'll help you understand what your home needs and make a confident decision about what comes next.",
    introHeading: "Roofing & Exterior Services for Zionsville Homes",
    intro: ["Zionsville has an unusually broad mix of homes—from properties around the historic Village and established neighborhoods to newer developments, custom homes, and properties that extend into more rural parts of the community. Neighborhoods such as Amherst Meadows and Colony Woods sit within the same community as Stonegate, Austin Oaks, and custom-home development in Holliday Farms.", "That variety matters when you're making decisions about a roof or exterior. A straightforward repair may be all one home needs, while another project may involve complex rooflines, premium material choices, drainage concerns, or careful coordination between the roof, gutters, siding, masonry, and other exterior details.", "Centerline is locally based in Zionsville, and our approach is the same regardless of the size or style of the home: understand the property first, explain what we find, and recommend the solution that makes sense for that particular homeowner."],
    considerationsHeading: "Different Zionsville Homes Call for Different Solutions",
    considerations: [
      { title: "Established, New & Custom Homes", text: "Zionsville includes older homes, newer neighborhoods, custom properties, and everything in between. Roof age, design, materials, previous work, and overall condition all affect the right recommendation." },
      { title: "Architecture & Exterior Appearance", text: "For homeowners who care about the architectural character of their home, material selection, shingle profile, color, siding, gutters, trim, and other exterior details can be planned together rather than treated as separate decisions." },
      { title: "Property & Drainage Conditions", text: "Trees, open areas, roof design, gutters, grading, and drainage can affect homes differently from one property to the next. We'll evaluate the conditions that actually apply to your home rather than assuming every Zionsville property needs the same solution." },
    ], ctaHeading: "Need Roofing or Exterior Help in Zionsville?", ctaText: "Whether you've noticed a problem, experienced storm damage, or you're planning an exterior project, start with a conversation and a free inspection. We'll help you understand what your home needs and the right way to move forward.",
  },
  {
    slug: "carmel-in", city: "Carmel", title: "Carmel, IN Roofing & Exterior Contractor | Centerline",
    description: "Roof repair, replacement, inspections, storm restoration, gutters and siding for Carmel, Indiana homeowners from Centerline Roofing & Exteriors.",
    hero: "Roofing & Exterior Contractor in Carmel, Indiana", heroCopy: "Centerline Roofing & Exteriors helps Carmel homeowners with roof inspections, repairs, replacements, storm damage restoration, gutters, and siding—with clear guidance and attention to both how the home performs and how the finished project looks.",
    introHeading: "Roofing & Exterior Services for Carmel Homes", intro: ["Carmel includes a wide range of residential properties—from established areas such as Home Place and neighborhoods such as Brookshire to newer construction and architecturally distinctive communities such as the Village of WestClay. That variety means the age, design, materials, and exterior priorities of one Carmel home can look very different from another.", "The right exterior solution isn't automatically the most basic option or the most expensive one. Sometimes a targeted roof repair is enough. Other projects call for a complete roofing system, upgraded siding, improved drainage, or material and color selections that deserve careful attention.", "Centerline approaches each Carmel home individually. We'll evaluate the property, help you understand the differences between your options, and build the project around your home's needs, your priorities, and what you want to accomplish."],
    considerationsHeading: "What Matters on a Carmel Exterior Project", considerations: [
      { title: "Performance Comes First", text: "No matter the size or value of the home, the system has to work. Roofing, flashing, ventilation, siding, and water management should be evaluated based on how the home is actually built and performing." },
      { title: "Details & Design", text: "Performance comes first, but a well-planned exterior project should also enhance the look of your home. We'll help you consider materials, colors, profiles, trim, gutters, and other exterior details so the finished project performs exceptionally well and complements your home's architecture." },
      { title: "Established & Growing Neighborhoods", text: "Carmel includes homes from many different periods of development. Age alone doesn't determine what a home needs, so we'll evaluate the actual condition, materials, design, and goals of the property before making a recommendation." },
    ], ctaHeading: "Need Roofing or Exterior Help in Carmel?", ctaText: "Whether you need an answer about a roofing problem or you're planning a larger exterior project, we'll evaluate your home, explain your options, and help you determine the right next step.",
  },
  {
    slug: "westfield-in", city: "Westfield", title: "Westfield, IN Roofing & Exterior Contractor | Centerline",
    description: "Centerline provides roof inspections, roof repair and replacement, storm restoration, gutters and siding for homeowners throughout Westfield, Indiana.",
    hero: "Roofing & Exterior Contractor in Westfield, Indiana", heroCopy: "Centerline Roofing & Exteriors provides Westfield homeowners with roof inspections, repairs, replacements, storm damage restoration, gutters, and siding—along with clear recommendations based on what the home actually needs.",
    introHeading: "Roofing & Exterior Services for Westfield Homes", intro: ["Westfield has grown quickly, but its housing isn't all the same. The community includes long-established neighborhoods such as Village Farms alongside newer residential development and master-planned communities throughout the city. Westfield also includes everything from traditional residential neighborhoods to larger-lot, estate, and rural properties.", "That range is one reason we don't believe in approaching every property with the same recommendation. A newer home can still need attention after severe weather or develop a localized problem. An established home may still have years of useful roof life left. And a homeowner planning a larger exterior update may care just as much about material selection and finished appearance as the repair itself.", "We'll start with the home in front of us and help you understand the right solution from there."],
    considerationsHeading: "Roofing & Exterior Considerations for Westfield Homes", considerations: [
      { title: "Newer Doesn't Mean Identical", text: "Westfield's growth has created many newer neighborhoods, but roofs and exterior systems still vary in design, materials, exposure, and condition. We evaluate the individual home rather than making assumptions based on its age." },
      { title: "Established Homes Matter Too", text: "Westfield also has mature neighborhoods and long-established properties. Repairs, replacement planning, drainage, and exterior updates should account for the home's existing construction and character." },
      { title: "Plan the Exterior as a Whole", text: "When roofing, gutters, siding, or other visible exterior elements need attention at the same time, coordinating them can create a cleaner plan and a more cohesive finished home." },
    ], ctaHeading: "Need Roofing or Exterior Help in Westfield?", ctaText: "Tell us what you're seeing or what you're planning. We'll evaluate your home, answer your questions, and help you understand the right solution.",
  },
  {
    slug: "whitestown-in", city: "Whitestown", title: "Whitestown, IN Roofing & Exterior Contractor | Centerline",
    description: "Centerline Roofing & Exteriors provides roofing, storm restoration, gutters and siding services for homeowners in Whitestown and nearby Boone County.",
    hero: "Roofing & Exterior Contractor in Whitestown, Indiana", heroCopy: "Centerline Roofing & Exteriors helps Whitestown homeowners understand and solve roofing and exterior problems with inspections, repair, replacement, storm damage restoration, gutters, and siding.",
    introHeading: "Roofing & Exterior Services for Whitestown Homes", intro: ["Whitestown's rapid growth has added a large number of newer homes and neighborhoods, including communities such as Walker Farms, Maple Grove, Eagles Nest, and the Neighborhoods of Anson. At the same time, Whitestown still includes its older Legacy Core and established properties throughout the community and surrounding Boone County.", "A home doesn't have to be old to need attention—and an older home doesn't automatically need replacement. Severe weather can affect newer and older roofs alike, while flashing, ventilation, drainage, materials, installation, and previous work can all influence how a particular roof or exterior performs.", "Whether you have a specific concern or simply want to know how your roof or exterior is performing, Centerline will inspect the property, explain what we find, and help you understand the next step."],
    considerationsHeading: "Roofing & Exterior Considerations for Whitestown Homes", considerations: [
      { title: "Newer Homes Still Need Good Diagnostics", text: "A relatively new roof doesn't automatically rule out storm damage or a localized roofing problem. We'll evaluate what is actually happening before recommending work." },
      { title: "Newer Neighborhoods & Established Homes", text: "Whitestown's growth has created many newer neighborhoods, but the community also includes established homes and properties throughout the older parts of town and surrounding Boone County. Different ages, rooflines, materials, lots, and drainage conditions call for different solutions." },
      { title: "Storms Don't Check the Build Date", text: "Hail and high winds can affect roofing, gutters, siding, vents, and other exterior components regardless of when the home was built. If you're concerned after a storm, we'll help you determine whether damage is present." },
    ], ctaHeading: "Need Roofing or Exterior Help in Whitestown?", ctaText: "Whether something looks wrong, a storm recently moved through, or you're considering an exterior project, we'll help you understand what your home needs and what to do next.",
  },
  {
    slug: "brownsburg-in", city: "Brownsburg", title: "Brownsburg, IN Roofing & Exterior Contractor | Centerline",
    description: "Centerline Roofing & Exteriors offers roof inspection, repair, replacement, storm restoration, gutters and siding in Brownsburg, Indiana.",
    hero: "Roofing & Exterior Contractor in Brownsburg, Indiana", heroCopy: "Centerline Roofing & Exteriors provides Brownsburg homeowners with roof inspections, repairs, replacements, storm damage restoration, gutters, and siding—with recommendations based on the home, not a one-size-fits-all sales pitch.",
    introHeading: "Roofing & Exterior Services for Brownsburg Homes", intro: ["Brownsburg continues to grow while maintaining established residential neighborhoods throughout the community. Areas such as Windridge, Eagle Crossing, Muirfield, and other neighborhoods throughout town reflect the mix of homes and development patterns found across Brownsburg.", "That mix means homeowners may be dealing with very different exterior needs—from a localized repair on an otherwise serviceable roof to an aging system, storm damage, drainage concerns, or a planned update to the home's appearance.", "The right answer depends on more than the ZIP code or age of the house. We'll look at the materials, condition, roof and exterior design, previous work, drainage, and your goals before recommending a solution."],
    considerationsHeading: "The Right Scope Starts With the Right Evaluation", considerations: [
      { title: "Repair, Replace or Leave It Alone", text: "Not every problem requires a major project. We'll determine whether a targeted repair is practical before recommending replacement." },
      { title: "Protect the Whole Exterior", text: "Roofing, gutters, siding, flashing, and drainage all affect how a home handles water and weather. When one issue is connected to another, we'll explain that relationship." },
      { title: "Performance & Appearance", text: "When homeowners are investing in replacement or an exterior update, we'll help consider both long-term performance and how the selected materials fit the home." },
    ], ctaHeading: "Need Roofing or Exterior Help in Brownsburg?", ctaText: "Whether you're dealing with damage or planning an improvement, we'll take the time to understand your home and help you choose the right next step.",
  },
  {
    slug: "lebanon-in", city: "Lebanon", title: "Lebanon, IN Roofing & Exterior Contractor | Centerline",
    description: "Centerline Roofing & Exteriors provides roof inspections, repair, replacement, storm restoration, gutters and siding for Lebanon, Indiana homeowners.",
    hero: "Roofing & Exterior Contractor in Lebanon, Indiana", heroCopy: "Centerline Roofing & Exteriors serves Lebanon homeowners with roof inspections, repairs, replacements, storm damage restoration, gutters, and siding throughout a community that includes both established neighborhoods and significant new growth.",
    introHeading: "Roofing & Exterior Services for Lebanon Homes", intro: ["Lebanon has a strong base of established homes and neighborhoods while continued growth in Boone County is bringing new housing and development to the area.", "That means the exterior needs of one Lebanon homeowner can look very different from those of another. An established property may need a repair, maintenance, or thoughtful replacement plan based on age and previous work. A newer home may have a storm concern or a specific exterior issue that needs to be diagnosed. And homeowners improving a property may be considering roofing, gutters, siding, or several parts of the exterior together.", "Centerline will start with the property itself, explain what we find, and help you understand the right solution."],
    considerationsHeading: "Established Community. Continued Growth. Individual Solutions.", considerations: [
      { title: "Existing Homes", text: "Older and established homes deserve an evaluation that accounts for current condition, past repairs, materials, roof design, and the rest of the exterior system." },
      { title: "New Growth", text: "As new housing continues to develop around Lebanon and Boone County, newer properties may have very different roofing and exterior needs from long-established neighborhoods." },
      { title: "Plan for the Home You Have", text: "Whether the goal is solving a problem or improving the property, we'll recommend materials and scope based on the home, your priorities, and what makes sense for the investment." },
    ], ctaHeading: "Need Roofing or Exterior Help in Lebanon?", ctaText: "Start with a free inspection. We'll understand your concerns, evaluate the property, and help you determine the right way to move forward.",
  },
  {
    slug: "fishers-in", city: "Fishers", title: "Fishers, IN Roofing & Exterior Contractor | Centerline",
    description: "Centerline provides roof inspections, roof repairs and replacements, storm restoration, gutters and siding for homeowners throughout Fishers, Indiana.",
    hero: "Roofing & Exterior Contractor in Fishers, Indiana", heroCopy: "Centerline Roofing & Exteriors provides Fishers homeowners with clear answers for roof inspections, repair, replacement, storm damage restoration, gutters, and siding.",
    introHeading: "Roofing & Exterior Services for Fishers Homes", intro: ["Fishers has expanded considerably over the last several decades, creating a broad mix of existing and newer neighborhoods across the city. That includes established areas such as Sunblest Farms, the Sandstone communities, newer development around Saxony, and homes throughout the Geist area.", "Those properties don't all face the same exterior conditions. Roof age, architecture, nearby trees, drainage, storm exposure, gutters, siding, and the way a home sits on its lot can all change the conversation.", "Centerline doesn't begin with a predetermined solution. We'll evaluate your property, explain what we're seeing, and help you decide whether the right answer is maintenance, repair, replacement, storm restoration, or a larger exterior improvement."],
    considerationsHeading: "One City, Many Different Homes", considerations: [
      { title: "New & Established Neighborhoods", text: "Fishers includes homes built across very different periods of growth. We'll base our recommendation on the condition of your home—not simply the age of the neighborhood." },
      { title: "Lot & Drainage Differences", text: "Some properties have heavier tree coverage, different drainage conditions, or unique roof and gutter layouts. When those factors matter to the performance of the home, we'll include them in the evaluation." },
      { title: "Appearance Matters Too", text: "Performance comes first, but roofing, siding, gutters, trim, colors, and other exterior details all contribute to the finished appearance of a home. When you're planning a larger project, we'll help those decisions work together." },
    ], ctaHeading: "Need Roofing or Exterior Help in Fishers?", ctaText: "Start with a free inspection. We'll take a look at the property, explain what we find, and help you understand the right next step for your home.",
  },
  {
    slug: "noblesville-in", city: "Noblesville", title: "Noblesville, IN Roofing & Exterior Contractor | Centerline",
    description: "Roof inspections, repair, replacement, storm restoration, gutters and siding for Noblesville, Indiana homeowners from Centerline Roofing & Exteriors.",
    hero: "Roofing & Exterior Contractor in Noblesville, Indiana", heroCopy: "From roofing concerns to larger exterior projects, Centerline Roofing & Exteriors helps Noblesville homeowners understand their options and choose the right solution for their home.",
    introHeading: "Roofing & Exterior Services for Noblesville Homes", intro: ["Noblesville combines an established historic community with suburban neighborhoods and continued residential growth. Homes near the city's older core can have very different construction histories from established communities such as South Harbour or Lochaven and newer or custom-home development such as Sagamore.", "Exterior decisions should account for those differences. The right repair for an established home may look very different from the right plan for a newer roof affected by a storm or a homeowner preparing for a complete exterior update.", "Centerline will help you understand the actual condition of your roof or exterior, what needs attention, what doesn't, and which options make the most sense for your home."],
    considerationsHeading: "Recommendations Built Around the Property", considerations: [
      { title: "Older & Newer Homes", text: "Materials, roof design, previous repairs, ventilation, and overall condition can vary widely across Noblesville. Those details matter more than applying the same recommendation to every home." },
      { title: "Repair Before Replacement When It Makes Sense", text: "An aging or damaged area doesn't automatically mean the entire roof or exterior needs replacement. We'll look at the larger system before recommending the scope." },
      { title: "Complete Exterior Planning", text: "For projects involving roofing, siding, gutters, or multiple exterior components, we'll help make sure the individual decisions work together both functionally and visually." },
    ], ctaHeading: "Need Roofing or Exterior Help in Noblesville?", ctaText: "Tell us what's going on with your home. We'll evaluate the concern, answer your questions, and help you understand the best path forward.",
  },
  {
    slug: "indianapolis-in", city: "Indianapolis", title: "Indianapolis Roofing & Exterior Contractor | Centerline",
    description: "Centerline provides residential roof inspections, repair, replacement, storm restoration, gutters and siding throughout Indianapolis, Indiana.",
    hero: "Roofing & Exterior Contractor in Indianapolis, Indiana", heroCopy: "Centerline Roofing & Exteriors helps Indianapolis homeowners with roof inspections, repairs, replacements, storm damage restoration, gutters, and siding—with clear guidance built around the individual home.",
    introHeading: "Roofing & Exterior Services Across Indianapolis", intro: ["Indianapolis is too large and varied for one description of an “Indianapolis home.” Established north-side neighborhoods such as Butler-Tarkington and Meridian-Kessler alone contain a wide range of architecture, while areas such as Broad Ripple, Nora, and suburban-style neighborhoods farther from the city's core add even more variety.", "Across Indianapolis, you'll also find newer construction, larger-lot properties, and homes that have gone through decades of additions and exterior updates.", "That's exactly why a roofing or exterior recommendation needs to begin at the property rather than with a generic scope. Roof design, age, materials, flashing, ventilation, storm exposure, drainage, previous repairs, and the condition of the surrounding exterior can differ dramatically from one home to the next."],
    considerationsHeading: "Indianapolis Homes Don't Fit One Template", considerations: [
      { title: "A Wide Range of Housing", text: "Older homes, newer subdivisions, traditional neighborhoods, and larger properties can all require very different approaches to roofing and exterior work." },
      { title: "Previous Work Matters", text: "Homes that have been repaired, remodeled, or added onto over time can have transitions, flashing, ventilation, or material combinations that deserve careful attention during an inspection." },
      { title: "Solve the Actual Problem", text: "A roof leak, storm concern, failing gutter, or aging siding can have several possible causes. We'll diagnose the condition before deciding what scope of work makes sense." },
    ], ctaHeading: "Need Roofing or Exterior Help in Indianapolis?", ctaText: "Tell us what you're seeing and where the property is located. We'll evaluate the home, explain what we find, and help you determine the right next step.",
  },
];
