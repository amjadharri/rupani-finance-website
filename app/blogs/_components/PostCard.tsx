import Link from "next/link";
import Image from "next/image";
import { formatPostDate, type Post } from "@/lib/content/posts";
import { cn } from "@/lib/utils";

/**
 * Article card from the Blogs board. The lead post is drawn wide, with the
 * photograph beside the copy instead of above it.
 */
export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article
      className={cn(
        // No h-full: grid items already stretch to their row, and the lead card
        // sits in a stretched grid column where h-full would blow it up to the
        // height of the sidebar beside it.
        "flex flex-col rounded-card border border-brand-rule bg-brand-white p-6",
        featured && "md:flex-row md:items-start md:gap-8 md:p-8",
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-card bg-brand-rule",
          featured ? "aspect-[16/13] md:w-[340px]" : "aspect-[16/9] w-full",
        )}
      >
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 340px" : "(max-width: 768px) 100vw, 390px"}
          placeholder="blur"
          className="object-cover"
        />
      </div>

      <div className={cn("flex flex-1 flex-col", featured ? "mt-6 md:mt-0" : "mt-6")}>
        <h3
          className={cn(
            "font-display font-light",
            featured ? "text-display-m" : "text-display-s",
          )}
        >
          <Link href={`/blogs/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        <p className="mt-4 text-body-s text-brand-ink-2">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span className="px-1.5" aria-hidden>
            ·
          </span>
          {post.categories.join(", ")}
        </p>

        <p className="mt-5 text-body-m text-brand-ink-2">{post.excerpt}</p>

        <Link
          href={`/blogs/${post.slug}`}
          data-tap
          className="mt-6 inline-flex items-center gap-2 text-body-m font-semibold text-brand-blue hover:underline"
        >
          Read More
          <span aria-hidden>&rarr;</span>
          <span className="sr-only">: {post.title}</span>
        </Link>
      </div>
    </article>
  );
}
