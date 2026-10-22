export type Review = {
  id: string;
  name: string;
  suburb: string;
  rating: 1 | 2 | 3 | 4 | 5;
  service: string;
  date: string;
  body: string;
  /** Sample content for layout preview. Never presented as a verified testimonial. */
  isSample: true;
};

export const reviews: Review[] = [
  {
    id: "rv-01",
    name: "Sarah M.",
    suburb: "Brunswick",
    rating: 5,
    service: "Steam Cleaning",
    date: "September 2026",
    body: "Booked a steam clean for the carpets and two sofas before we moved in. The team explained what would happen, how long things would take to dry, and left the place feeling genuinely fresh. Clear quote and no surprises on the day.",
    isSample: true,
  },
  {
    id: "rv-02",
    name: "Daniel K.",
    suburb: "Docklands",
    rating: 5,
    service: "Strip & Polish",
    date: "August 2026",
    body: "Our office floor had gone dull from years of mopping. The strip and polish brought the finish back and the space looks far more professional. They worked around our hours and kept us updated throughout.",
    isSample: true,
  },
  {
    id: "rv-03",
    name: "Priya R.",
    suburb: "Richmond",
    rating: 5,
    service: "Property Maintenance",
    date: "August 2026",
    body: "Had a handful of small maintenance jobs that had been building up. Everything was handled in one visit, the property was left tidy, and I appreciated the honest advice about what could wait until later.",
    isSample: true,
  },
  {
    id: "rv-04",
    name: "Tom H.",
    suburb: "South Yarra",
    rating: 4,
    service: "Steam Cleaning",
    date: "July 2026",
    body: "Great communication from the first message. The mattress and dining chairs came up much better than expected. Drying took a little longer than I planned for, but they had warned me about that up front.",
    isSample: true,
  },
  {
    id: "rv-05",
    name: "Angela W.",
    suburb: "Carlton",
    rating: 5,
    service: "Property Maintenance",
    date: "July 2026",
    body: "As a property manager I need people who turn up when they say they will. MPM Services were easy to deal with, sent through a clear quote, and the work was done properly. Happy to use them again.",
    isSample: true,
  },
  {
    id: "rv-06",
    name: "Michael B.",
    suburb: "Melbourne CBD",
    rating: 5,
    service: "Strip & Polish",
    date: "June 2026",
    body: "The floors in our retail space were looking tired and we needed them ready before a busy weekend. The result was a clean, even finish and a much better first impression for customers.",
    isSample: true,
  },
];

export const reviewDisclaimer =
  "Sample reviews are shown to demonstrate the layout. They are illustrative placeholders — not verified customer testimonials — and will be replaced with genuine, permission-based feedback.";

export const reviewStats = {
  average: 4.8,
  count: reviews.length,
  breakdown: [
    { stars: 5, count: 5 },
    { stars: 4, count: 1 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ],
};
