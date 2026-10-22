export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  blocks: PostBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-often-steam-clean-carpets-upholstery",
    title: "How often should you steam clean carpets and upholstery?",
    excerpt:
      "There is no single right answer for every Melbourne home. Here is a practical way to think about timing, based on how the space is used.",
    category: "Steam Cleaning",
    date: "2026-09-18",
    readingTime: "5 min read",
    image: "/images/steam-cleaning-detail.jpg",
    imageAlt: "Upholstery being cleaned with a professional cleaning machine",
    blocks: [
      {
        type: "p",
        text: "Search for carpet cleaning advice and you will find confident answers: every six months, every twelve months, every season. The truth is that timing depends far more on how a property is used than on the calendar.",
      },
      {
        type: "h2",
        text: "Start with how the room is used",
      },
      {
        type: "p",
        text: "A spare bedroom that is rarely entered accumulates very little. A living room with a dog, a toddler and a north-facing window is a different story. High-traffic areas — hallways, living rooms, stairs — generally benefit from more regular attention than rooms that are used occasionally.",
      },
      {
        type: "h2",
        text: "Practical timing for most households",
      },
      {
        type: "ul",
        items: [
          "Once a year is a reasonable baseline for an average home with no pets or young children.",
          "Every six to nine months suits homes with pets, allergies or heavy daily use.",
          "Before moving in or after moving out, a clean is usually worth doing regardless of the schedule.",
          "After a one-off event — a spill, a renovation, a period of illness — clean when the issue happens rather than waiting for the annual booking.",
        ],
      },
      {
        type: "h2",
        text: "Watch for signals rather than dates",
      },
      {
        type: "p",
        text: "If carpets look dull in the traffic lanes, hold odours after vacuuming, or feel stiff underfoot, those are better indicators than a date on the fridge. Upholstery is similar: cushions that have lost their freshness or show darker patches on the arms and headrests are telling you something.",
      },
      {
        type: "quote",
        text: "The right schedule is the one that matches your property — not a generic rule from the internet.",
      },
      {
        type: "h2",
        text: "What to expect on the day",
      },
      {
        type: "p",
        text: "Professional steam cleaning uses hot water and controlled pressure to lift built-up dirt from carpet fibres and fabric. Drying time varies with the material, pile and airflow in the room, so it is worth planning around. A good operator will explain realistic drying times and any aftercare before they start, not after.",
      },
      {
        type: "p",
        text: "If you are unsure whether your carpets or furniture are due, describe the space and its condition when you request a quote. A short conversation is usually enough to work out whether a clean will make a meaningful difference.",
      },
    ],
  },
  {
    slug: "strip-and-polish-what-to-expect",
    title: "Strip and polish: what the process actually involves",
    excerpt:
      "A straight explanation of what happens during a strip and polish, how long floors stay clear, and what results are realistic.",
    category: "Strip & Polish",
    date: "2026-09-05",
    readingTime: "4 min read",
    image: "/images/strip-polish-floor.jpg",
    imageAlt: "Two technicians operating a floor machine on a hard floor",
    blocks: [
      {
        type: "p",
        text: "Hard floors that have been mopped for years can still look dull. That is often because the issue is not dirt on the surface but layers of old polish, wax and scuff marks sitting on top of it. A strip and polish removes that build-up and starts again with a clean, even finish.",
      },
      {
        type: "h2",
        text: "1. Assessing the floor",
      },
      {
        type: "p",
        text: "Not every hard floor is a candidate. The first step is confirming the floor type and what finish has been applied. Vinyl, tile and some timber floors respond well; others may need a different approach. This is the conversation to have before any work is booked.",
      },
      {
        type: "h2",
        text: "2. Stripping the old finish",
      },
      {
        type: "p",
        text: "A stripping solution is applied and worked into the surface with a rotary machine to break down old product. The floor is then rinsed and cleared so the new finish can bond properly. Preparation is the part that determines the final result, which is why it should not be rushed.",
      },
      {
        type: "h2",
        text: "3. Applying fresh polish",
      },
      {
        type: "p",
        text: "Once the floor is clean and dry, fresh polish is applied in thin, even coats. Each coat needs time to set. Rushing this stage or applying too much product leads to streaks and uneven patches.",
      },
      {
        type: "h2",
        text: "What to plan for",
      },
      {
        type: "ul",
        items: [
          "The area needs to be clear of furniture and foot traffic while work is underway.",
          "Drying and curing times depend on the product and the room's ventilation.",
          "Results depend on the condition of the floor beneath the old finish.",
          "A maintenance routine after the job will help the finish last longer.",
        ],
      },
      {
        type: "quote",
        text: "A good strip and polish is mostly preparation. The polish itself is the last step, not the whole job.",
      },
      {
        type: "p",
        text: "If your floor is worn in the traffic lanes or has patches where the finish has worn through, send through the floor type, approximate area and a photo when requesting a quote. That makes it much easier to give you an honest expectation of the outcome.",
      },
    ],
  },
  {
    slug: "end-of-lease-cleaning-checklist-melbourne",
    title: "A practical end-of-lease cleaning checklist for Melbourne rentals",
    excerpt:
      "Moving out is stressful enough. This room-by-room checklist helps you cover the details property managers actually look for.",
    category: "Property Care",
    date: "2026-08-22",
    readingTime: "6 min read",
    image: "/images/hero-home.jpg",
    imageAlt: "Clean, modern open-plan living space",
    blocks: [
      {
        type: "p",
        text: "End-of-lease cleaning is judged on the details. The property needs to be returned in a condition that reflects fair wear and tear — not perfection — but the areas that are easy to overlook are usually the ones that cause friction.",
      },
      {
        type: "h2",
        text: "Kitchen",
      },
      {
        type: "ul",
        items: [
          "Oven, grill and range hood degreased, including the trays and racks.",
          "Cupboards and drawers emptied, wiped inside and out.",
          "Fridge cleaned and defrosted if it is included in the lease.",
          "Splashbacks, bench edges and the tops of cupboards.",
          "Sink, taps and drain cleared of residue.",
        ],
      },
      {
        type: "h2",
        text: "Bathrooms and laundry",
      },
      {
        type: "ul",
        items: [
          "Shower screens and tiles free of soap scum and mould.",
          "Exhaust fans and vents dusted.",
          "Toilet cleaned inside, outside and around the base.",
          "Washing machine taps, trough and dryer lint filter.",
        ],
      },
      {
        type: "h2",
        text: "Living areas and bedrooms",
      },
      {
        type: "ul",
        items: [
          "Skirting boards, cornices and light switches wiped.",
          "Wardrobes cleaned inside, including shelves and tracks.",
          "Carpets vacuumed and, where needed, professionally steam cleaned.",
          "Windows, tracks and blinds dusted or washed.",
        ],
      },
      {
        type: "h2",
        text: "Outdoors and extras",
      },
      {
        type: "ul",
        items: [
          "Balcony or courtyard swept and cobwebs removed.",
          "Bins emptied and cleaned.",
          "Garage swept and any oil marks treated.",
          "Keys, remotes and manuals left where the agent expects them.",
        ],
      },
      {
        type: "quote",
        text: "Photograph each room once it is finished. It is the simplest way to resolve a disagreement about condition later.",
      },
      {
        type: "p",
        text: "If carpets or upholstery need more than a vacuum, book the clean early enough that everything has time to dry before the final inspection. Steam cleaning can be arranged alongside the rest of your move-out list.",
      },
    ],
  },
  {
    slug: "maintenance-jobs-before-rental-inspection",
    title: "Five maintenance jobs worth doing before a rental inspection",
    excerpt:
      "Small issues become expensive ones when they are left. These five checks are quick, practical and make a property easier to manage.",
    category: "Property Maintenance",
    date: "2026-08-08",
    readingTime: "4 min read",
    image: "/images/gallery-pm-02.jpg",
    imageAlt: "Property maintenance tools laid out ready for a job",
    blocks: [
      {
        type: "p",
        text: "Routine inspections are easier for everyone when the property is in good order. You do not need to renovate — but a handful of small maintenance tasks can prevent bigger problems and make a better impression.",
      },
      {
        type: "h2",
        text: "1. Check for leaks and water damage",
      },
      {
        type: "p",
        text: "Look under sinks, around the base of the toilet and near the hot water system. Slow leaks are easy to miss and expensive to ignore. A stain on a ceiling or a swollen cabinet panel is worth investigating before it spreads.",
      },
      {
        type: "h2",
        text: "2. Test smoke alarms and safety switches",
      },
      {
        type: "p",
        text: "Replace batteries where needed and confirm that safety switches trip correctly. These checks are simple, but they matter for tenant safety and for your own records.",
      },
      {
        type: "h2",
        text: "3. Repair damaged walls and trim",
      },
      {
        type: "p",
        text: "Small holes, scuffed paint and loose skirting boards make a property feel tired. Patching and touching up these areas is usually quick and lifts the overall presentation considerably.",
      },
      {
        type: "h2",
        text: "4. Clear gutters and drainage",
      },
      {
        type: "p",
        text: "Blocked gutters cause water to track into eaves and walls. Clear them before the wetter months and check that outdoor drains flow freely.",
      },
      {
        type: "h2",
        text: "5. Address doors, windows and hardware",
      },
      {
        type: "ul",
        items: [
          "Sticking doors and windows adjusted so they close properly.",
          "Loose handles, hinges and locks tightened or replaced.",
          "Fly screens repaired.",
          "Exterior locks checked for smooth operation.",
        ],
      },
      {
        type: "quote",
        text: "Maintenance is cheapest when it is boring and regular. The expensive jobs are the ones that were postponed.",
      },
      {
        type: "p",
        text: "If the list is longer than you want to manage, group the tasks into a single visit. A clear scope and one point of contact makes routine upkeep far less disruptive for tenants.",
      },
    ],
  },
  {
    slug: "steam-cleaning-vs-dry-cleaning-upholstery",
    title: "Steam cleaning vs dry cleaning: which suits your furniture?",
    excerpt:
      "Both approaches have a place. The right choice comes down to the fabric, the stain and how the piece is used.",
    category: "Steam Cleaning",
    date: "2026-07-25",
    readingTime: "5 min read",
    image: "/images/gallery-sc-01.jpg",
    imageAlt: "Close-up of upholstery being cleaned with a professional extraction tool",
    blocks: [
      {
        type: "p",
        text: "Upholstery cleaning is not one method applied to every sofa. The fabric, the filling and the type of soiling all influence which approach will work best — and which one might cause damage.",
      },
      {
        type: "h2",
        text: "How steam and hot water extraction work",
      },
      {
        type: "p",
        text: "Steam cleaning uses hot water and controlled pressure to loosen dirt, then extracts it along with the moisture. It is effective on many synthetic fabrics and on carpets, and it leaves the surface fresh. Dry cleaning uses minimal moisture and specialised solvents, which suits fabrics that are sensitive to water or where quick drying matters.",
      },
      {
        type: "h2",
        text: "When steam cleaning is a good fit",
      },
      {
        type: "ul",
        items: [
          "Everyday soiling and general freshness on suitable synthetic fabrics.",
          "Carpets and rugs in high-traffic areas.",
          "Mattresses, where thorough extraction and drying are practical.",
          "Pieces where the care label allows water-based cleaning.",
        ],
      },
      {
        type: "h2",
        text: "When to be more careful",
      },
      {
        type: "p",
        text: "Natural fibres such as wool, silk or viscose can react differently to moisture. Some fabrics may shrink, mark or lose shape. Delicate or antique pieces may need a specialist. Always check the care label, and raise any uncertainty before cleaning rather than afterwards.",
      },
      {
        type: "h2",
        text: "The honest answer",
      },
      {
        type: "p",
        text: "A professional should assess the fabric before committing to a method. If someone promises a perfect result on any material without seeing it, that is a reason to ask more questions. Results depend on the fibre, the stain and its age, and no responsible operator guarantees a stain will disappear completely.",
      },
      {
        type: "quote",
        text: "The right method protects the fabric first and cleans it second.",
      },
      {
        type: "p",
        text: "Send a photo of the care label and the affected area when requesting a quote. It is a small step that helps set realistic expectations and avoids surprises on the day.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
