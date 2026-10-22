import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaSection from "@/components/sections/CtaSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse illustrative imagery for steam cleaning, strip and polish, and property maintenance across Melbourne. Filter by service to see the kind of work MPM Services takes on.",
  alternates: { canonical: `${site.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A closer look at our services"
        subtitle="Filter by service to see the kind of work MPM Services takes on across Melbourne. Every image is illustrative until photos of completed MPM jobs are added."
      />

      <section className="gallery-section" aria-label="Gallery">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <CtaSection />
    </>
  );
}