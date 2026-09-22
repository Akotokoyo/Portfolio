import { Facebook, Instagram, Mail } from "lucide-react";
import { studioConfig, studioSocialLinks } from "@/data/mirage-games-data";

const socialIcons = {
  Instagram,
  Facebook,
} as const;

export function StudioContact() {
  return (
    <section id="contact" className="section-padding border-t border-border/50">
      <div className="container-max">
        <div className="glass mx-auto max-w-2xl rounded-2xl p-8 text-center sm:p-12">
          <p className="mb-2 text-sm font-medium text-accent">Contact</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s talk games.
          </h2>
          <p className="mb-8 text-muted">
            Press inquiries, collaboration ideas, or just want to say hi —
            we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${studioConfig.contactEmail}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <Mail size={16} />
              {studioConfig.contactEmail}
            </a>

            {studioSocialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={16} />
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
