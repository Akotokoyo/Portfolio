import { navLinks, siteConfig } from "@/data/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-max section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-sm font-bold text-accent">
                GT
              </span>
              <div>
                <p className="text-sm font-semibold">{siteConfig.name}</p>
                <p className="text-xs text-muted">{siteConfig.title}</p>
              </div>
            </div>
            <p className="text-sm text-muted">
              Building gameplay systems, Unity editor tools, mobile game features,
              and reusable technical foundations for teams that need reliable execution.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Explore</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Connect</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href={siteConfig.github} className="hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} className="hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  Email
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted">
              {siteConfig.location}
              <br />
              {siteConfig.availability}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted sm:flex-row">
          <p>Copyright {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
