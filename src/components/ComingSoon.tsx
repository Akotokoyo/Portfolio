import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { comingSoonProjects } from "@/data/site-data";

export function ComingSoon() {
  return (
    <section id="coming-soon" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">Coming Soon</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Projects in active development.
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          Games and prototypes I&apos;m building toward release — documented here
          as they move from prototype to a shippable product.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {comingSoonProjects.map((project) => (
            <article
              key={project.name}
              className="glass overflow-hidden rounded-2xl ring-1 ring-amber-500/20"
            >
              <div className="relative h-52 w-full border-b border-border/50 sm:h-60">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-300">
                  {project.status}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-[var(--accent-hover)]"
                  >
                    Work in progress on GitHub
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
