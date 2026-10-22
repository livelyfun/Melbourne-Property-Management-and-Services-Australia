import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/mock-data/services";

export default function ServicesSection() {
  return (
    <section className="section" aria-labelledby="services-home-heading">
      <div className="container">
        <Reveal>
          <div className="section-heading__row">
            <SectionHeading
              eyebrow="Our services"
              title="Three services. One careful standard."
              subtitle="Focused on the work that keeps a property clean, presentable and well maintained — with clear communication from quote to completion."
              id="services-home-heading"
            />
            <Link
              href="/services"
              className="btn btn--secondary btn--md section-heading__action"
            >
              Compare services
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="services-grid" style={{ marginTop: "var(--space-12)" }}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
