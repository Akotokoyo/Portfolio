import Image from "next/image";
import { studioConfig, studioStats } from "@/data/mirage-games-data";

export function StudioHero() {
  return (
    <section id="home" className="section-padding pt-32">
      <div className="container-max">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          Independent studio · {studioConfig.teamSize} developers
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl animate-slide-up">
            <p className="mb-2 text-sm font-medium text-accent">Welcome to</p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{studioConfig.name}</span>
            </h1>
            <p className="mb-8 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              {studioConfig.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#games"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Explore our games
              </a>
              <a
                href="#about"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent/50"
              >
                About the studio
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-sky-400/25 via-orange-400/15 to-transparent blur-2xl" />
              <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
                <Image
                  src={studioConfig.logo}
                  alt={studioConfig.name}
                  width={320}
                  height={320}
                  priority
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {studioStats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6">
              <p className="text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
