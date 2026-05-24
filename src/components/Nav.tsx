"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { CompassIcon } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-gold/20 bg-panel/85 shadow-lg shadow-black/40 backdrop-blur"
            : "border border-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-gold transition-colors hover:text-gold-soft"
        >
          <CompassIcon className="h-5 w-5" />
          <span className="font-display text-sm font-semibold tracking-wide text-fg">
            Zeeshan Amjad
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-lg border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/20 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg md:hidden"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-20 z-50 md:hidden">
          <ul className="flex flex-col gap-1 rounded-xl border border-gold/20 bg-panel/95 p-3 shadow-lg shadow-black/40 backdrop-blur">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
