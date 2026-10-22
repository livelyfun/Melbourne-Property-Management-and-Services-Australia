import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageCard from "@/components/gallery/ImageCard";
import { galleryItems } from "@/lib/mock-data/gallery";
import "./ResultsSection.css";

const pick = (id: string) => galleryItems.find((item) => item.id === id)!;

const feature = pick("sc-01");
const supporting = ["sp-03", "pm-03"].map((id) => pick(id));

export default function ResultsSection() {
  return (
    <section className="section section--alt" aria-labelledby="results-home-heading">
      <div className="container">
        <Reveal>
          <div className="section-heading__row">
            <SectionHeading
              eyebrow="Results"
              title="Real results you can see"
              subtitle="We lead with evidence. Browse the gallery for service imagery across our three core services — and updated with real MPM work as it becomes available."
              id="results-home-heading"
            />
            <Link href="/gallery" className="btn btn--secondary btn--md section-heading__action">
              View the gallery
            </Link>
          </div>
        </Reveal>
        <div className="results-bento">
          <Reveal>
            <ImageCard
              src={feature.src}
              alt={feature.alt}
              caption={feature.caption}
              label="Illustrative"
              aspect="panorama"
              sizes="(max-width: 900px) 100vw, 75vw"
            />
          </Reveal>
          <div className="results-bento__supporting">
            {supporting.map((item, index) => (
              <Reveal key={item.id} delay={index * 120}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  caption={item.caption}
                  label="Illustrative"
                  aspect="tall"
                  sizes="(max-width: 900px) 100vw, 38vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
