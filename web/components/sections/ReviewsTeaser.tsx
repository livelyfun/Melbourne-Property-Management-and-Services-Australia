import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ReviewCard from "@/components/reviews/ReviewCard";
import { reviewDisclaimer, reviews } from "@/lib/mock-data/reviews";
import "./ReviewsTeaser.css";

export default function ReviewsTeaser() {
  return (
    <section className="section" aria-labelledby="reviews-home-heading">
      <div className="container">
        <Reveal>
          <div className="section-heading__row">
            <SectionHeading
              eyebrow="Reviews"
              title="What customers say about MPM Services"
              subtitle="A preview of the feedback we're working to verify. These sample reviews show how genuine customer experiences will appear — clear, specific and never inflated."
              id="reviews-home-heading"
            />
            <Link href="/reviews" className="btn btn--secondary btn--md section-heading__action">
              Read all reviews
            </Link>
          </div>
        </Reveal>

        <div className="reviews-teaser__grid">
          {reviews.slice(0, 3).map((review, index) => (
            <Reveal key={review.id} delay={index * 90}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <p className="reviews-sample-note">{reviewDisclaimer}</p>
      </div>
    </section>
  );
}
