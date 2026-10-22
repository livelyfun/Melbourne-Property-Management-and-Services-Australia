import type { ServiceSlug } from "./services";

export type GalleryCategory = "all" | ServiceSlug;

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: ServiceSlug;
  caption: string;
  /** Stock imagery is shown as generic service-context illustration, never as completed MPM work. */
  isStock: true;
  aspect: "wide" | "tall" | "square";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "sc-01",
    src: "/images/gallery-sc-01.jpg",
    alt: "Close-up of upholstery being cleaned with a professional extraction tool",
    category: "steam-cleaning",
    caption: "Upholstery cleaning — sofa refresh",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "sc-02",
    src: "/images/gallery-sc-02.jpg",
    alt: "Carpet being vacuumed in a comfortable, bright living room",
    category: "steam-cleaning",
    caption: "Steam cleaning — carpet and upholstery care",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "sc-03",
    src: "/images/gallery-sc-03.jpg",
    alt: "Professional cleaner using a wet extraction machine in a bright commercial space",
    category: "steam-cleaning",
    caption: "Deep cleaning — professional equipment at work",
    isStock: true,
    aspect: "tall",
  },
  {
    id: "sp-01",
    src: "/images/gallery-sp-01.jpg",
    alt: "Freshly polished timber floorboards in a bright, empty room",
    category: "strip-and-polish",
    caption: "Strip & polish — freshly finished timber floor",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "sp-02",
    src: "/images/gallery-sp-02.jpg",
    alt: "A floor polishing machine working across a tiled floor",
    category: "strip-and-polish",
    caption: "Strip & polish — floor machine at work",
    isStock: true,
    aspect: "tall",
  },
  {
    id: "sp-03",
    src: "/images/gallery-sp-03.jpg",
    alt: "Polished flooring running through a modern commercial corridor",
    category: "strip-and-polish",
    caption: "Strip & polish — polished commercial flooring",
    isStock: true,
    aspect: "tall",
  },
  {
    id: "pm-01",
    src: "/images/gallery-pm-01.jpg",
    alt: "Tradesperson carrying out an interior wall repair",
    category: "property-maintenance",
    caption: "Property maintenance — interior repairs",
    isStock: true,
    aspect: "tall",
  },
  {
    id: "pm-02",
    src: "/images/gallery-pm-02.jpg",
    alt: "Professional tools laid out ready for a property maintenance job",
    category: "property-maintenance",
    caption: "Property maintenance — the right tools for the job",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "pm-03",
    src: "/images/gallery-pm-03.jpg",
    alt: "Maintenance work being carried out on a building exterior",
    category: "property-maintenance",
    caption: "Property maintenance — exterior upkeep",
    isStock: true,
    aspect: "tall",
  },
];

export function getGalleryCategories(): { value: GalleryCategory; label: string }[] {
  return [
    { value: "all", label: "All" },
    { value: "steam-cleaning", label: "Steam Cleaning" },
    { value: "strip-and-polish", label: "Strip & Polish" },
    { value: "property-maintenance", label: "Property Maintenance" },
  ];
}
