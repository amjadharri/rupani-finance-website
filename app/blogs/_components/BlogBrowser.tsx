"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  categoryCounts,
  formatPostDate,
  postsNewestFirst,
  type Category,
} from "@/lib/content/posts";
import { cn } from "@/lib/utils";
import { PostCard } from "./PostCard";

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section data-reveal className="rounded-card border border-brand-rule bg-brand-white p-6">
      <h2 className="text-title-m font-semibold">{title}</h2>
      {children}
    </section>
  );
}

/**
 * Blogs 02 / Insights — the article list and its rail.
 *
 * The board draws a search field and a category list, so both filter for real
 * rather than sitting there inert. Nine posts is small enough to filter in the
 * browser; move this to the server if the archive grows.
 */
export function BlogBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | null>(null);

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return postsNewestFirst.filter((post) => {
      const inCategory = !category || post.categories.includes(category);
      const inQuery =
        !needle ||
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle);

      return inCategory && inQuery;
    });
  }, [query, category]);

  const [lead, ...rest] = matches;
  const isFiltered = Boolean(query.trim()) || category !== null;

  return (
    <div data-reveal-stagger className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-10">
      <div>
        {matches.length === 0 ? (
          <p className="rounded-card border border-brand-rule bg-brand-white p-8 text-body-m text-brand-ink-2">
            No articles match that search.
          </p>
        ) : (
          <>
            {/* The lead article is only drawn wide when the full list is
                showing; a filtered list is a plain grid. */}
            {isFiltered ? null : <PostCard post={lead} featured />}

            <div className={cn("grid gap-8 md:grid-cols-2", !isFiltered && "mt-8")}>
              {(isFiltered ? matches : rest).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}

        <p className="mt-8 rounded-card border border-dashed border-brand-rule bg-brand-blue-05 px-6 py-5 text-body-m text-brand-ink-2">
          Contact us to submit your blog ideas or guest posts.
        </p>
      </div>

      <aside className="flex flex-col gap-8">
        <Panel title="Search">
          <div className="relative mt-4">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink-3"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              aria-label="Search articles"
              className="min-h-11 w-full rounded-card border border-brand-rule bg-brand-white py-3 pl-11 pr-4 text-body-m placeholder:text-brand-ink-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            />
          </div>
        </Panel>

        <Panel title="Categories">
          <ul className="mt-2">
            {categoryCounts.map((entry) => {
              const isActive = category === entry.name;

              return (
                <li key={entry.name} className="border-b border-brand-rule last:border-b-0">
                  <button
                    data-tap
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setCategory(isActive ? null : entry.name)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-body-m hover:text-brand-blue"
                  >
                    <span className={cn(isActive && "font-semibold text-brand-blue")}>
                      {entry.name}
                    </span>
                    <span className="text-brand-blue">{entry.count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Panel>

        <Panel title="Recent Posts">
          <ul className="mt-2">
            {postsNewestFirst.slice(0, 5).map((post) => (
              <li key={post.slug} className="border-b border-brand-rule py-4 last:border-b-0">
                <Link href={`/blogs/${post.slug}`} className="text-body-m font-semibold hover:underline">
                  {post.title}
                </Link>
                <p className="mt-1.5 text-body-s text-brand-ink-2">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </p>
              </li>
            ))}
          </ul>
        </Panel>
      </aside>
    </div>
  );
}
