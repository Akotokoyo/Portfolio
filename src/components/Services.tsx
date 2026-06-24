import { services } from "@/data/site-data";

export function Services() {
  return (
    <section id="services" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">Services</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Freelance Unity development for games and interactive products.
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          From prototypes to production-ready features — gameplay systems, editor
          tools, profiling, and clear technical planning.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className={`glass flex flex-col rounded-2xl p-6 sm:p-8 ${
                service.featured ? "ring-1 ring-accent/40" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-mono text-muted">{service.number}</span>
                {service.featured && (
                  <span className="rounded-full bg-accent/20 px-3 py-0.5 text-xs text-accent">
                    Most requested
                  </span>
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <p className="mb-1 text-xs text-muted">
                <span className="text-foreground">Best for:</span> {service.bestFor}
              </p>
              <p className="mb-6 text-xs text-muted">
                <span className="text-foreground">Pricing:</span> {service.pricing}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-auto inline-flex w-fit rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:border-accent/50 hover:text-accent"
              >
                Request this service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
