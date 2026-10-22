import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/lib/mock-data/faqs";
import { site } from "@/lib/site";
import "./FaqHomeSection.css";

export default function FaqHomeSection() {
  return (
    <section className="section" aria-labelledby="faq-home-heading">
      <div className="container faq-layout">
        <Reveal>
          <div className="faq-layout__intro">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions, answered honestly"
              subtitle="No promises we can't keep. These answers reflect how MPM Services actually works."
              id="faq-home-heading"
            />
            <div className="faq-help-card">
              <span className="faq-help-card__icon" aria-hidden="true">
                <Icon name="phone" size={20} />
              </span>
              <div>
                <h3>Still have a question?</h3>
                <p>
                  Talk it through with our local team — we&apos;ll give you a
                  straight answer and a no-obligation quote.
                </p>
                <a href={`tel:${site.phoneIntl}`} className="text-link">
                  {site.phoneDisplay}
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="faq-layout__list">
            <FAQAccordion items={faqs.slice(0, 5)} />
            <div className="faq-layout__more">
              <Link href="/faq" className="btn btn--secondary btn--md">
                View all FAQs
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
