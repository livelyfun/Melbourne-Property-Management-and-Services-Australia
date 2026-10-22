"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/mock-data/services";
import { site } from "@/lib/site";
import ArrowRight from "@/components/ui/ArrowIcon";
import Icon from "@/components/ui/Icon";
import "./Hero.css";

const serviceMeta = {
  "steam-cleaning": { icon: "sparkles", note: "Carpets, rugs & upholstery" },
  "strip-and-polish": { icon: "layers", note: "Hard floors, stripped & finished" },
  "property-maintenance": { icon: "home", note: "Practical ongoing upkeep" },
} as const;

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setLoaded(true));
      return () => cancelAnimationFrame(raf);
    }
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__grid">
        <div className={`hero__content${loaded ? " is-loaded" : ""}`}>
          <p className="eyebrow">Melbourne property services</p>
          <h1 className="hero__title">
            Property care,
            <br />
            done <span className="hero__accent">properly.</span>
          </h1>
          <p className="hero__subtitle">
            Steam cleaning, strip &amp; polish and practical maintenance for
            homes, rentals and commercial spaces — delivered by one local team
            with clear communication from first quote to finished job.
          </p>

          <ul className="hero__chips" role="list">
            <li>
              <Icon name="check" size={15} />
              Free, no-obligation quotes
            </li>
            <li>
              <Icon name="mapPin" size={15} />
              Melbourne-wide
            </li>
            <li>
              <Icon name="home" size={15} />
              Homes · Rentals · Commercial
            </li>
          </ul>

          <div className="hero__actions">
            <Link href="/quote" className="btn btn--primary btn--lg">
              Get a free quote
              <ArrowRight />
            </Link>
            <a
              href={`tel:${site.phoneIntl}`}
              className="btn btn--secondary btn--lg"
            >
              <Icon name="phone" size={18} />
              {site.phoneShort}
            </a>
          </div>

          <p className="hero__note">
            Tell us about the job — we&apos;ll confirm what&apos;s involved before
            any work begins.
          </p>
        </div>

        <div className={`hero__visual${loaded ? " is-loaded" : ""}`}>
          <Image
            src="/images/hero-home.jpg"
            alt="Sunlit modern Melbourne living room with timber floors and garden views"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
          <div className="hero__visual-shade" aria-hidden="true" />
          <span className="hero__visual-label">
            <Icon name="mapPin" size={14} />
            Melbourne, VIC
          </span>
          <div className="hero__badge">
            <span className="hero__badge-mark" aria-hidden="true">
              <Icon name="shield" size={20} />
            </span>
            <span>
              <strong>One local team.</strong>
              <span>Clean, cared-for properties.</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container hero__quick-wrap">
        <ul className="hero__quick-list" role="list">
          {services.map((service, index) => {
            const meta = serviceMeta[service.slug];
            return (
              <li key={service.slug}>
                <Link href={service.href} className="hero__quick-item">
                  <span className="hero__quick-icon" aria-hidden="true">
                    <Icon name={meta.icon} size={21} />
                  </span>
                  <span className="hero__quick-text">
                    <span className="hero__quick-index" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span className="hero__quick-name">{service.name}</span>
                    <span className="hero__quick-note">{meta.note}</span>
                  </span>
                  <span className="hero__quick-arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
