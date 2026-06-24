import Image from "next/image";
import { experience } from "@/data/site-data";

function ProjectCard({
  name,
  image,
  url,
}: {
  name: string;
  image?: string;
  url?: string;
}) {
  const content = (
    <>
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 140px, 160px"
        />
      ) : (
        <span className="px-2 text-center text-xs text-muted">{name}</span>
      )}
      {image && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-2">
          <span className="text-xs font-medium text-white">{name}</span>
        </div>
      )}
    </>
  );

  const className =
    "relative flex h-28 w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background/50 transition-colors hover:border-accent/40 sm:h-32 sm:w-44";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        title={name}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">Experience</p>
        <h2 className="mb-12 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          A project timeline shaped by real Unity production work.
        </h2>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${index}`}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-accent">{item.period}</p>
                  <h3 className="mt-1 text-xl font-semibold">{item.role}</h3>
                  <p className="text-muted">{item.company}</p>
                </div>
              </div>

              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              {item.projects.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-3">
                  {item.projects.map((project) => (
                    <ProjectCard
                      key={project.name}
                      name={project.name}
                      image={project.image}
                      url={project.url}
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
