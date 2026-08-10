// Shared content for the Gridline Studio site.
// Edit project + service data here. Home, Work, and Project pages read from this file.
// Note: individual case-study pages (Panacea, Ashworth, etc.) hold their own copy inline;
// this file drives the Work grid, project panels, and the Services tiers.

export const projects = [
  {
    id: 'panacea', title: 'Panacea Junkiez', cat: 'Logo refresh',
    year: '2026', sub: 'Juice bar rebrand', tier: 'Tier 1',
    hasCaseStudy: true,
  },
  {
    id: 'ashworth', title: 'Ashworth', cat: 'Full identity',
    year: '2026', sub: 'Hometown apparel', tier: 'Tier 2',
    hasCaseStudy: true,
  },
  {
    id: 'k1', title: 'K1 Fitness', cat: 'Full rebrand',
    year: '2026', sub: '24-hour gym', tier: 'Tier 3',
    hasCaseStudy: false,
  },

  // Gridline Livery — vehicle graphics division. One concept per service tier.
  {
    id: 'cross-county', title: 'Coors Banquet — 410 Winged Sprint', cat: 'Race livery',
    year: '2026', sub: 'A classic American brewery on the dirt ovals — a 410 winged sprint car concept', tier: 'Tier 1',
    division: 'Livery', hasCaseStudy: false,
  },
  {
    id: 'marrow-bakery', title: 'Andes — Next Gen Toyota Camry', cat: 'Race livery',
    year: '2026', sub: 'Andes Mints on the modern NASCAR Camry body — a full No. 6 Cup Series livery concept', tier: 'Tier 2',
    division: 'Livery', hasCaseStudy: true,
  },
  {
    id: 'circle-k', title: 'Circle K — ARCA Chevrolet', cat: 'Race livery',
    year: '2026', sub: 'Convenience-store red on an ARCA Menards Chevrolet — a single-sponsor stock car livery concept', tier: 'Tier 1',
    division: 'Livery', hasCaseStudy: true,
  },
];

export const services = [
  { n: '01', anchor: 'tier-1', title: 'Tier 1: Logo refresh', timeline: '$500', desc: 'A focused refresh for a business whose product is stronger than its look. One clean mark, a color and type system, and templates to keep it consistent.', included: ['Primary logo, 2 variations', 'Color palette (3 to 5 core colors)', 'Two-font type system', 'Condensed branding guide PDF', '1 round of revisions'] },
  { n: '02', anchor: 'tier-2', title: 'Tier 2: Full identity system', timeline: '$1,500', desc: 'Everything in Tier 1, expanded into a complete identity. A full logo suite, signage and stationary concepts, and branded mockups across every touchpoint.', included: ['Logo suite, 3 marks', 'Signage and stationary concepts', '4 to 6 branded mockups', '6 to 8 social templates, 2 platforms', 'Full branding guide PDF', '2 rounds of revisions'] },
  { n: '03', anchor: 'tier-3', title: 'Tier 3: Full rebrand + website', timeline: '$4,000', desc: 'The complete rebrand. Product and lifestyle renders, a storefront concept, multi-platform social, print collateral, and a simple website built from the brand system.', included: ['Product & lifestyle renders', 'Storefront and exterior concept', 'Multi-platform social + content plan', 'Expanded print collateral', 'Simple 5-page website', 'Comprehensive branding guide PDF'] },
];
