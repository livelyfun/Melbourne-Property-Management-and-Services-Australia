import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ReviewCard from "@/components/reviews/ReviewCard";
import CtaSection from "@/components/sections/CtaSection";
import Icon from "@/components/ui/Icon";
import { reviewDisclaimer, reviews, reviewStats } from "@/lib/mock-data/reviews";
import { site } from "@/lib/site";
import "../reviews.css";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read feedback from MPM Services customers across Melbourne. This page shows a sample review layout while genuine, verified customer reviews are collected with permission.",
  alternates: { canonical: `${site.url}/reviews` },
};

const sources = [
  {
    label: "Facebook",
    body: "Follow MPM Services for regular updates and customer activity.",
    href: site.facebook,
  },
  {
    label: "Instagram",
    body: "See recent work and behind-the-scenes updates on Instagram.",
    href: site.instagram,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What working with us is like"
        subtitle="We'd rather earn trust than invent it. The reviews below are sample content that shows how verified customer feedback will appear — each one clearly marked until it is confirmed and published with permission."
      />

      <section className="section" aria-labelledby="reviews-page-heading">
        <div className="container">
          <Reveal>
            <div className="reviews-summary">
              <div className="reviews-summary__score">
                <p className="reviews-summary__number">{reviewStats.average}</p>
                <span className="reviews-summary__stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="star" size={18} className="is-filled" />
                  ))}
                </span>
                <p className="reviews-summary__caption">
                  Based on {reviewStats.count} sample reviews
                </p>
              </div>
              <div className="reviews-summary__breakdown">
                {reviewStats.breakdown.map((row) => (
                  <div className="reviews-summary__row" key={row.stars}>
                    <span className="reviews-summary__row-label">{row.stars} star</span>
                    <span className="reviews-summary__bar" aria-hidden="true">
                      <span
                        style={{
                          width: `${(row.count / reviewStats.count) * 100}%`,
                        }}
                      />
                    </span>
                    <span className="reviews-summary__row-count">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="reviews-page__grid" aria-labelledby="reviews-page-heading">
            <h2 id="reviews-page-heading" className="sr-only">
              Customer reviews
            </h2>
            {reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 60}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>

          <p className="reviews-disclaimer" role="note">
            <strong>Please note:</strong> {reviewDisclaimer}
          </p>

          <Reveal delay={120}>
            <ul className="reviews-sources" role="list">
              {sources.map((source) => (
                <li key={source.label}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reviews-source-card"
                  >
                    <span className="reviews-source-card__icon" aria-hidden="true">
                      <Icon name="link" size={20} />
                    </span>
                    <span>
                      <span className="reviews-source-card__label">{source.label}</span>
                      <span className="reviews-source-card__body">{source.body}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <div className="reviews-invite">
              <h3>Had work done by MPM Services?</h3>
              <p>
                We&apos;d love to hear about your experience. Get in touch and we&apos;ll
                work with you to publish a verified review.
              </p>
              <a className="btn btn--primary btn--md" href={`mailto:${site.email}`}>
                Email {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
