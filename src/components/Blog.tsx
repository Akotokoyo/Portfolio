import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/site-data";

export function Blog() {
  return (
    <section id="blog" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">Blog</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Unity notes, production lessons, and technical thinking.
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          Practical articles on gameplay systems, architecture, profiling, and
          lessons learned from real projects — coming soon.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass group flex flex-col rounded-2xl p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-4 flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full border border-border px-2 py-0.5">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <a
                href={`#blog-${post.slug}`}
                className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-[var(--accent-hover)]"
              >
                Read article
                <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
