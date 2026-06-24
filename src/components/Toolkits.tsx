import Image from "next/image";
import { ArrowRight, Github } from "lucide-react";
import { toolkits } from "@/data/site-data";

export function Toolkits() {
  return (
    <section id="toolkits" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">Open Source</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Unity toolkits built for production pipelines.
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          Complete, documented open-source modules for level streaming, world
          authoring, and in-game map systems — ready to clone and use in Unity
          projects.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {toolkits.map((toolkit) => (
            <article
              key={toolkit.name}
              className={`glass flex flex-col overflow-hidden rounded-2xl ${
                toolkit.featured ? "ring-1 ring-accent/40" : ""
              }`}
            >
              {toolkit.image && (
                <a
                  href={toolkit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-48 w-full border-b border-border/50 bg-background/50 sm:h-52"
                >
                  <Image
                    src={toolkit.image}
                    alt={`${toolkit.name} preview`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-muted">
                    <Github size={18} className="text-accent" />
                    <span className="text-xs font-mono">Akotokoyo</span>
                  </div>
                  {toolkit.featured && (
                    <span className="rounded-full bg-accent/20 px-3 py-0.5 text-xs text-accent">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-xl font-semibold">{toolkit.name}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                  {toolkit.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {toolkit.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={toolkit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-[var(--accent-hover)]"
                >
                  View on GitHub
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
