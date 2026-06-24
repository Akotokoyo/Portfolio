"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container-max flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-sm font-bold text-accent">
            GT
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none">{siteConfig.name}</p>
            <p className="text-xs text-muted">{siteConfig.title}</p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.resumeUrl}
            className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            CV
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Contact me
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
            {navLinks.map((link) => (
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
            <li className="flex gap-3 pt-2">
              <a
                href={siteConfig.resumeUrl}
                className="flex-1 rounded-lg border border-border px-4 py-2 text-center text-sm"
              >
                CV
              </a>
              <a
                href="#contact"
                className="flex-1 rounded-lg bg-accent px-4 py-2 text-center text-sm text-white"
                onClick={() => setOpen(false)}
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
