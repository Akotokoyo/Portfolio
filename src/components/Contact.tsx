"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-data";

export function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border/50">
      <div className="container-max">
        <p className="mb-2 text-sm font-medium text-accent">Contact</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build the next Unity product with a clear technical plan.
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          Share your game idea, hiring opportunity, or project challenge. I can help
          clarify scope, estimate the work, and turn requirements into a practical
          development direction.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-sm font-bold text-accent">
                GT
              </span>
              <div>
                <p className="font-semibold">{siteConfig.name}</p>
                <p className="text-sm text-muted">{siteConfig.title}</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <Mail size={16} className="shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <Linkedin size={16} className="shrink-0 text-accent" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <Github size={16} className="shrink-0 text-accent" />
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MapPin size={16} className="shrink-0 text-accent" />
                {siteConfig.location}
              </li>
            </ul>
          </div>

          <form
            className="glass rounded-2xl p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (Connect an email service for real delivery)");
            }}
          >
            <h3 className="mb-6 text-lg font-semibold">Project inquiry</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="type" className="mb-1.5 block text-xs text-muted">
                Project type
              </label>
              <select
                id="type"
                name="type"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              >
                <option>Mobile game</option>
                <option>Unity gameplay system</option>
                <option>PC / Console game</option>
                <option>Editor tools & pipeline</option>
                <option>Performance / rescue</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
                Project description
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              Frontend form only. Email delivery can be added later.
            </p>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-accent py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] sm:w-auto sm:px-8"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
