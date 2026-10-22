import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { coverageCopy, serviceAreas } from "@/lib/mock-data/service-areas";
import "./CoverageSection.css";

const audiences = ["Homeowners", "Landlords & property managers", "Commercial operators"];

export default function CoverageSection() {
  return (
    <section className="section section--alt" aria-labelledby="coverage-heading">
      <div className="container coverage-grid">
        <Reveal>
          <div className="coverage__content">
            <SectionHeading
              eyebrow="Service Areas"
              title={coverageCopy.heading}
              subtitle={coverageCopy.intro}
              id="coverage-heading"
            />
            <p className="coverage__note">{coverageCopy.note}</p>
            <Link href="/service-areas" className="btn btn--secondary btn--md">
              Explore service areas
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="coverage__panel">
            <div className="coverage__panel-glow" aria-hidden="true" />
            <div className="coverage__areas">
              {serviceAreas.map((area) => (
                <div className="coverage__area" key={area.name}>
                  <span className="coverage__pin" aria-hidden="true">
                    <Icon name="mapPin" size={22} />
                  </span>
                  <div>
                    <p className="coverage__name">{area.name}</p>
                    <p className="coverage__scope">Melbourne, VIC, Australia</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="coverage__divider" aria-hidden="true" />
            <p className="coverage__audiences-label">We work with</p>
            <ul className="coverage__audiences" role="list">
              {audiences.map((label) => (
                <li className="chip" key={label}>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
