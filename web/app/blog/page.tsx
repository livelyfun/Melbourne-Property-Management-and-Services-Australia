import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import Icon from "@/components/ui/Icon";
import { formatPostDate, posts } from "@/lib/mock-data/posts";
import { site } from "@/lib/site";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes on steam cleaning, strip and polish, and property maintenance for Melbourne homes, rentals and commercial spaces.",
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical property care notes"
        subtitle="Straightforward guidance on looking after carpets, hard floors and the everyday maintenance that keeps a property in good shape. No jargon, no inflated promises."
      />

      <section className="section" aria-labelledby="blog-listing-heading">
        <div className="container">
          <h2 id="blog-listing-heading" className="sr-only">
            Latest articles
          </h2>

          <Reveal>
            <article className="post-feature">
              <Link href={`/blog/${featured.slug}`} className="post-feature__media">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
                <span className="post-feature__badge">Featured</span>
              </Link>
              <div className="post-feature__body">
                <p className="post-meta">
                  <span className="chip chip--brand">{featured.category}</span>
                  <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
                  <span>{featured.readingTime}</span>
                </p>
                <h3 className="post-feature__title">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h3>
                <p className="post-feature__excerpt">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="text-link">
                  Read the article
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="post-grid">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={index * 80}>
                <article className="post-card">
                  <Link href={`/blog/${post.slug}`} className="post-card__media">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="post-card__body">
                    <p className="post-meta">
                      <span className="chip chip--brand">{post.category}</span>
                      <span>{post.readingTime}</span>
                    </p>
                    <h3 className="post-card__title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="post-card__excerpt">{post.excerpt}</p>
                    <p className="post-card__foot">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      <Link href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`}>
                        Read
                        <Icon name="arrowRight" size={15} />
                      </Link>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection dark />
    </>
  );
}
