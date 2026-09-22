import { studioConfig, studioNavLinks, studioSocialLinks } from "@/data/mirage-games-data";
import { StudioLogo } from "@/components/studio/StudioLogo";

export function StudioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-max section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <StudioLogo size={40} />
            </div>
            <p className="text-sm text-muted">{studioConfig.tagline}</p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Explore</p>
            <ul className="space-y-2">
              {studioNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/portfolio"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Developer Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Connect</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${studioConfig.email}`}
                  className="hover:text-foreground"
                >
                  Email
                </a>
              </li>
              {studioSocialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              {studioConfig.location}
              <br />
              {studioConfig.teamSize} developers
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted sm:flex-row">
          <p>
            Copyright {year} {studioConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
