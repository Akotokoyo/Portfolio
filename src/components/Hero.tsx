import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig, stats } from "@/data/site-data";

export function Hero() {
  return (
    <section id="home" className="section-padding pt-32">
      <div className="container-max">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          {siteConfig.availability}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-up">
            <p className="mb-2 text-sm font-medium text-accent">{siteConfig.title}</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.name.split(" ").map((word, i) => (
                <span key={word}>
                  {i === 1 ? <span className="text-gradient">{word}</span> : word}
                  {i < siteConfig.name.split(" ").length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Start a project
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent/50"
              >
                Resume / CV
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { href: siteConfig.github, icon: Github, label: "GitHub" },
                { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
                { href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 via-violet-500/20 to-transparent blur-2xl" />
              <div className="glass relative h-80 w-72 overflow-hidden rounded-3xl sm:h-96 sm:w-80">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
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
