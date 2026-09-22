import { studioConfig } from "@/data/mirage-games-data";

const values = [
  {
    title: "Craft over hype",
    description:
      "We focus on mechanics that feel good and worlds that linger — not trend-chasing or feature bloat.",
  },
  {
    title: "Small team, big ownership",
    description:
      "Every developer touches multiple parts of a project. Less hand-off, more accountability, faster iteration.",
  },
  {
    title: "Built to ship",
    description:
      "From mobile puzzles to PC RPGs, we design systems and pipelines that survive real production pressure.",
  },
];

export function StudioAbout() {
  return (
    <section id="about" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">About Us</p>
        <h2 className="mb-12 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          A small studio with big ambitions.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              {studioConfig.description}
            </p>
            <p className="mt-6 text-sm text-muted">
              Based in {studioConfig.location} · Est. {studioConfig.founded}
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card/40 p-6">
              <p className="text-sm font-semibold text-foreground">
                Looking for a developer?
              </p>
              <p className="mt-2 text-sm text-muted">
                Our lead developer maintains a full portfolio with experience
                across Unity gameplay, live mobile titles, and open-source tooling.
              </p>
              <a
                href="/portfolio"
                className="mt-4 inline-flex rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
              >
                View developer portfolio →
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
