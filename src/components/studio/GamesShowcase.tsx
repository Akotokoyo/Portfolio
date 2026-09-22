import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { games, type Game } from "@/data/mirage-games-data";

function StatusBadge({ status }: { status: Game["status"] }) {
  const isDev = status === "In Development";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
        isDev
          ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isDev ? "animate-pulse bg-amber-400" : "bg-emerald-400"}`}
      />
      {status}
    </span>
  );
}

function GameCard({ game, featured = false }: { game: Game; featured?: boolean }) {
  return (
    <article
      className={`glass overflow-hidden rounded-2xl ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className={`grid ${featured ? "lg:grid-cols-2" : ""}`}>
        <div
          className={`relative overflow-hidden bg-background/50 ${
            featured ? "min-h-64 lg:min-h-80" : "aspect-video"
          }`}
        >
          <Image
            src={game.image}
            alt={game.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <StatusBadge status={game.status} />
            {game.team && (
              <span className="text-xs text-muted">{game.team}</span>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight">{game.name}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{game.tagline}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
            {game.description}
          </p>

          {game.gallery && game.gallery.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {game.gallery.map((shot) => (
                <div
                  key={shot.name}
                  className="relative h-20 w-32 overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={shot.image}
                    alt={shot.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {platform}
              </span>
            ))}
            {game.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent"
              >
                {genre}
              </span>
            ))}
          </div>

          {game.storeUrl && (
            <a
              href={game.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Play on Google Play
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function GamesShowcase() {
  const featured = games.find((g) => g.featured);
  const others = games.filter((g) => !g.featured);

  return (
    <section id="games" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">Our Games</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Built with care, shipped with pride.
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          From tactical RPGs in active development to published mobile titles —
          every project reflects our focus on atmosphere, mechanics, and polish.
        </p>

        <div className="space-y-8">
          {featured && <GameCard game={featured} featured />}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {others.map((game) => (
              <article key={game.slug} className="glass flex flex-col overflow-hidden rounded-2xl">
                <div
                  className="relative aspect-video overflow-hidden bg-background/50"
                  style={game.imageBg ? { backgroundColor: game.imageBg } : undefined}
                >
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className={`${game.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <StatusBadge status={game.status} />
                  </div>
                  <h3 className="text-xl font-bold">{game.name}</h3>
                  <p className="mt-1 text-sm text-accent">{game.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {game.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {game.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  {game.storeUrl && (
                    <a
                      href={game.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-[var(--accent-hover)]"
                    >
                      View on Google Play
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
