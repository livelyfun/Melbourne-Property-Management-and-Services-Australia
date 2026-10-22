import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import "./WhySection.css";

const points = [
  {
    icon: "mapPin",
    title: "Local to Melbourne",
    body: "A Melbourne-based team that understands local homes, rentals and business spaces.",
  },
  {
    icon: "phone",
    title: "Clear communication",
    body: "We talk through your job before starting, so you always know what to expect.",
  },
  {
    icon: "sparkles",
    title: "Attention to detail",
    body: "Careful, thorough work on every property — then honest guidance on aftercare.",
  },
  {
    icon: "shield",
    title: "Practical property care",
    body: "Focused on the three services that keep properties clean, presentable and maintained.",
  },
];

export default function WhySection() {
  return (
    <section className="section why-section" aria-labelledby="why-heading">
      <div className="container why-section__grid">
        <Reveal>
          <div className="why-section__visual">
            <div className="why-section__media">
              <Image
                src="/images/about-work.jpg"
                alt="Tradesperson carrying out practical work at a property"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
            <div className="why-section__stat">
              <span className="why-section__stat-value">3</span>
              <span className="why-section__stat-label">
                Core services,
                <br />
                one local team
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="why-section__content">
            <SectionHeading
              eyebrow="Why MPM"
              title="The dependable local choice for property services"
              subtitle="MPM Services is built around reliable service, honest communication and practical results — the qualities Melbourne property owners value most."
              id="why-heading"
            />
            <ul className="why-section__points" role="list">
              {points.map((point) => (
                <li key={point.title}>
                  <span className="why-section__point-icon" aria-hidden="true">
                    <Icon name={point.icon} size={20} />
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
