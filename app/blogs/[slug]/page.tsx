import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { ClosingBand, PageHero } from "@/components/sections";
import { formatPostDate, getPost, posts, postsNewestFirst } from "@/lib/content/posts";
import { PostCard } from "../_components";
import { ShareRow } from "./_components";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: (post.hero ?? post.cover).src }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = postsNewestFirst.findIndex((item) => item.slug === post.slug);
  const previous = postsNewestFirst[index + 1];
  const related = postsNewestFirst.filter((item) => item.slug !== post.slug).slice(0, 3);
  const hero = post.hero ?? post.cover;

  return (
    <>
      <PageHero
        trail={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blogs" },
          { label: post.title },
        ]}
        eyebrow={post.categories[0]}
        title={post.title}
      >
        <p className="mt-8 flex flex-wrap items-center gap-x-3 text-body-s text-brand-ink-2">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.author}</span>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </p>

        <Image
          src={hero}
          alt={post.coverAlt}
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          placeholder="blur"
          className="mt-12 h-auto w-full rounded-card bg-brand-rule"
        />
      </PageHero>

      <section className="bg-surface py-16 md:py-32">
        <Container>
          <article className="mx-auto max-w-[780px]">
            {post.body ? (
              post.body.map((block, blockIndex) =>
                block.type === "quote" ? (
                  <blockquote
                    key={blockIndex}
                    className="my-10 border-l-4 border-brand-blue pl-8 font-display text-display-m font-light text-brand-ink"
                  >
                    {block.text}
                  </blockquote>
                ) : (
                  <p
                    key={blockIndex}
                    className={
                      blockIndex === 0
                        ? "text-body-l font-semibold text-brand-ink"
                        : "mt-6 text-body-m text-brand-ink-2"
                    }
                  >
                    {block.text}
                  </p>
                ),
              )
            ) : (
              <>
                <p className="text-body-l font-semibold text-brand-ink">{post.excerpt}</p>
                {/*
                  PLACEHOLDER: only the article the Blog Detail board is drawn
                  from has its full copy in the design. The rest need their body
                  text from the USIF team.
                */}
                <p className="mt-8 rounded-card border border-dashed border-brand-rule bg-brand-blue-05 px-6 py-5 text-body-m text-brand-ink-2">
                  The full text of this article is still to come from the USIF team.
                </p>
              </>
            )}

            {post.tags ? (
              <p className="mt-12 text-body-m text-brand-ink-2">
                Tags: {post.tags.join(", ")}
              </p>
            ) : null}

            <ShareRow title={post.title} />

            <div className="mt-10 flex flex-wrap items-start justify-between gap-6 border-t border-brand-rule pt-8">
              {previous ? (
                <div>
                  <p className="text-body-s text-brand-ink-2">
                    <span aria-hidden>&larr;</span> Previous article
                  </p>
                  <Link
                    href={`/blogs/${previous.slug}`}
                    className="mt-2 block text-title-m font-semibold text-brand-blue hover:underline"
                  >
                    {previous.title}
                  </Link>
                </div>
              ) : (
                <span />
              )}

              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-body-m font-semibold text-brand-blue hover:underline"
              >
                All articles <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-brand-blue-05 py-16 md:py-32">
        <Container>
          <Eyebrow className="text-brand-blue">Insights</Eyebrow>
          <Heading level={2} className="mt-6">
            Blogs
          </Heading>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingBand
        title="Contact USIF to connect with an agent in your area or to learn more about becoming a partner agent."
        primaryLabel="Become an Agent"
        primaryHref="/become-an-agent"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
