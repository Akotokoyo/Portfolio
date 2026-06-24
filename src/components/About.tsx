import { aboutFeatures } from "@/data/site-data";

export function About() {
  return (
    <section id="about" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">About</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          A Unity gameplay programmer building strong systems and shipped products.
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          From live mobile titles with 100M+ downloads to indie PC/console RPG
          development — focused on stable gameplay, performant code, and tools that
          let teams move faster.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {aboutFeatures.map((feature) => (
            <div
              key={feature.title}
              className="glass group rounded-2xl p-6 transition-colors hover:border-accent/30"
            >
              <h3 className="mb-2 text-lg font-semibold group-hover:text-accent">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
