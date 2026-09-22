"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { studioNavLinks } from "@/data/mirage-games-data";
import { StudioLogo } from "@/components/studio/StudioLogo";

export function StudioNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container-max flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center">
          <StudioLogo size={36} />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
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
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Privacy
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#games"
            className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            Our Games
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {studioNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/portfolio" className="block text-sm text-muted">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/privacy" className="block text-sm text-muted">
                Privacy
              </a>
            </li>
            <li className="flex gap-3 pt-2">
              <a
                href="#games"
                className="flex-1 rounded-lg border border-border px-4 py-2 text-center text-sm"
                onClick={() => setOpen(false)}
              >
                Our Games
              </a>
              <a
                href="#contact"
                className="flex-1 rounded-lg bg-accent px-4 py-2 text-center text-sm text-white"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
