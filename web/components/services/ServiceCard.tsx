import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/mock-data/services";
import ArrowRight from "@/components/ui/ArrowIcon";
import "./ServiceCard.css";

const meta = {
  "steam-cleaning": { index: "01", tag: "Carpets & upholstery" },
  "strip-and-polish": { index: "02", tag: "Hard floors" },
  "property-maintenance": { index: "03", tag: "Ongoing upkeep" },
} as const;

export default function ServiceCard({ service }: { service: Service }) {
  const { index, tag } = meta[service.slug];

  return (
    <article className="service-card">
      <div className="service-card__media">
        <Image
          src={service.cardImage}
          alt={service.cardImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw, 33vw"
        />
        <span className="service-card__tag">{tag}</span>
      </div>
      <div className="service-card__body">
        <div className="service-card__heading">
          <span className="service-card__index" aria-hidden="true">
            {index}
          </span>
          <h3 className="service-card__title">
            <Link href={service.href}>{service.name}</Link>
          </h3>
        </div>
        <p className="service-card__summary">{service.summary}</p>
        <div className="service-card__footer">
          <Link href={service.href} className="service-card__link">
            Explore this service
          </Link>
          <span className="service-card__arrow" aria-hidden="true">
            <ArrowRight />
          </span>
        </div>
      </div>
    </article>
  );
}
