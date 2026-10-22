import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import Icon from "@/components/ui/Icon";
import { formatPostDate, getPostBySlug, posts } from "@/lib/mock-data/posts";
import { site } from "@/lib/site";
import "@/components/ui/PageHeader.css";
import "../blog.css";
import "../post.css";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: `${site.url}${post.image}` }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="post">
        <header className="post__header">
          <div className="container post__header-inner">
            <p className="post-meta">
              <span className="chip chip--brand">{post.category}</span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span>{post.readingTime}</span>
            </p>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__lede">{post.excerpt}</p>
          </div>
        </header>

        <div className="container post__media-wrap">
          <div className="post__media">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </div>

        <div className="container container--narrow">
          <Reveal>
            <div className="prose post__body">
              {post.blocks.map((block, index) => {
                if (block.type === "h2") {
                  return <h2 key={index}>{block.text}</h2>;
                }
                if (block.type === "ul") {
                  return (
                    <ul key={index}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote key={index}>
                      <p>{block.text}</p>
                    </blockquote>
                  );
                }
                return <p key={index}>{block.text}</p>;
              })}
            </div>
          </Reveal>

          <div className="post__footer">
            <div className="post__author">
              <span className="post__author-mark" aria-hidden="true">
                MPM
              </span>
              <div>
                <strong>MPM Services</strong>
                <p>Practical property care notes from our Melbourne team.</p>
              </div>
            </div>
            <Link href="/quote" className="btn btn--primary btn--md">
              Get a free quote
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="section section--alt" aria-labelledby="related-posts-heading">
          <div className="container">
            <div className="section-heading__row">
              <div className="section-heading">
                <p className="eyebrow" aria-hidden="true">
                  Keep reading
                </p>
                <h2 className="section-heading__title" id="related-posts-heading">
                  More property care notes
                </h2>
              </div>
              <Link href="/blog" className="btn btn--secondary btn--md section-heading__action">
                All articles
              </Link>
            </div>
            <div className="post-grid">
              {related.map((item) => (
                <article className="post-card" key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="post-card__media">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Link>
                  <div className="post-card__body">
                    <p className="post-meta">
                      <span className="chip chip--brand">{item.category}</span>
                      <span>{item.readingTime}</span>
                    </p>
                    <h3 className="post-card__title">
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="post-card__foot">
                      <time dateTime={item.date}>{formatPostDate(item.date)}</time>
                      <Link href={`/blog/${item.slug}`} aria-label={`Read: ${item.title}`}>
                        Read
                        <Icon name="arrowRight" size={15} />
                      </Link>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection dark />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `${site.url}${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "MPM Services",
              "@id": `${site.url}/#localbusiness`,
            },
            publisher: { "@id": `${site.url}/#localbusiness` },
            mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          }),
        }}
      />
    </>
  );
}
