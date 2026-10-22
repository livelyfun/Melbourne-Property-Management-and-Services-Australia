import Image from "next/image";
import type { CSSProperties } from "react";
import "./ImageCard.css";

type ImageCardProps = {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
  aspect?: "wide" | "tall" | "square" | "panorama" | "auto";
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
};

export default function ImageCard({
  src,
  alt,
  caption,
  label,
  aspect = "wide",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  style,
}: ImageCardProps) {
  return (
    <figure className={`image-card image-card--${aspect}`} style={style}>
      <div className="image-card__media">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        <span className="image-card__shade" aria-hidden="true" />
        {label ? <span className="image-card__label">{label}</span> : null}
      </div>
      {caption ? (
        <figcaption className="image-card__caption">
          <span>{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
