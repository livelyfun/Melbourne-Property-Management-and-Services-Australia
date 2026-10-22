"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { galleryItems, getGalleryCategories } from "@/lib/mock-data/gallery";
import "./GalleryGrid.css";

const categories = getGalleryCategories();

const labelFor = (value: string) =>
  categories.find((category) => category.value === value)?.label ?? "";

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]["value"]>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const filtered = useMemo(
    () =>
      active === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  );

  const shown = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const openLightbox = useCallback((index: number) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    requestAnimationFrame(() => lastFocused.current?.focus());
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((current) => {
        if (current === null) return current;
        return (current + dir + filtered.length) % filtered.length;
      });
    },
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
        return;
      }
      if (event.key === "ArrowRight") {
        step(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        step(-1);
        return;
      }
      if (event.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, step]);

  const closeOnBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeLightbox();
  };

  return (
    <>
      <div className="gallery-bar">
        <div className="gallery-filters" role="group" aria-label="Filter gallery by service">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={`gallery-filter${active === category.value ? " is-active" : ""}`}
              aria-pressed={active === category.value}
              onClick={() => setActive(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-bar__meta">
          <p className="gallery-note">
            <Icon name="image" size={15} />
            Illustrative imagery
          </p>
          <p className="gallery-count" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "image" : "images"}
          </p>
        </div>
      </div>

      <ul className="gallery-grid" role="list">
        {filtered.map((item, index) => (
          <li
            key={`${active}-${item.id}`}
            className={`gallery-grid__item${index === 0 ? " is-feature" : ""}`}
            style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
          >
            <button
              type="button"
              className="gallery-card"
              onClick={() => openLightbox(index)}
              aria-label={`View larger: ${item.caption}`}
            >
              <span className="gallery-card__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                />
                <span className="gallery-card__shade" aria-hidden="true" />
                <span className="gallery-card__chip">{labelFor(item.category)}</span>
                <span className="gallery-card__expand" aria-hidden="true">
                  <Icon name="image" size={18} />
                </span>
                <span className="gallery-card__caption">{item.caption}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {shown && lightboxIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-caption"
          ref={dialogRef}
          tabIndex={-1}
          onClick={closeOnBackdrop}
        >
          <button
            ref={closeRef}
            type="button"
            className="gallery-lightbox__close"
            aria-label="Close image viewer"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            aria-label="Previous image"
            onClick={() => step(-1)}
          >
            &#8249;
          </button>

          <figure className="gallery-lightbox__figure">
            <div className="gallery-lightbox__media">
              <Image
                src={shown.src}
                alt={shown.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <span className="gallery-lightbox__counter">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
            <figcaption id="gallery-lightbox-caption">
              <strong>{shown.caption}</strong>
              <small>{labelFor(shown.category)}</small>
            </figcaption>
          </figure>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            aria-label="Next image"
            onClick={() => step(1)}
          >
            &#8250;
          </button>
        </div>
      ) : null}
    </>
  );
}
