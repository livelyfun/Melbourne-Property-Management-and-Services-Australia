import Icon from "@/components/ui/Icon";
import type { Review } from "@/lib/mock-data/reviews";
import "./ReviewCard.css";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card">
      <div className="review-card__top">
        <span
          className="review-card__stars"
          aria-label={`Rated ${review.rating} out of 5`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              name="star"
              size={15}
              className={index < review.rating ? "is-filled" : undefined}
            />
          ))}
        </span>
        <span className="review-card__sample">Sample</span>
      </div>
      <blockquote className="review-card__quote">
        <p>{review.body}</p>
      </blockquote>
      <footer className="review-card__meta">
        <span className="review-card__avatar" aria-hidden="true">
          {initials(review.name)}
        </span>
        <span className="review-card__person">
          <strong>{review.name}</strong>
          <span>
            {review.suburb} · {review.service}
          </span>
        </span>
        <time className="review-card__date">{review.date}</time>
      </footer>
    </article>
  );
}
