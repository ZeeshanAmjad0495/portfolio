import { profile } from "@/data/portfolio";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";

function CompassRose({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      >
        <circle cx="100" cy="100" r="92" strokeOpacity="0.5" />
        <circle cx="100" cy="100" r="70" strokeOpacity="0.3" />
        <circle cx="100" cy="100" r="6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x = 100 + Math.cos(a) * 88;
          const y = 100 + Math.sin(a) * 88;
          return (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              strokeOpacity={i % 2 === 0 ? 0.55 : 0.25}
            />
          );
        })}
        <path
          d="M100 16 L112 100 L100 184 L88 100 Z"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path d="M16 100 L100 112 L184 100 L100 88 Z" strokeOpacity="0.4" />
        <path d="M100 16 L106 94 L100 100 L94 94 Z" fill="currentColor" fillOpacity="0.5" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center overflow-hidden px-6 pb-20 pt-32"
    >
      <CompassRose className="animate-flicker pointer-events-none absolute -right-16 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 text-gold/25 sm:-right-4 lg:right-8" />

      <div
        className="animate-unfurl relative"
        style={{ animationDelay: "0ms" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full chip px-4 py-1.5 font-mono text-xs text-parchment">
          <span className="animate-ember inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          Available for freelance & contract work
        </span>
      </div>

      <p
        className="animate-unfurl font-accent relative mt-8 text-lg tracking-[0.18em] text-gold/80"
        style={{ animationDelay: "60ms" }}
      >
        {profile.name}
      </p>

      <h1
        className="animate-unfurl font-display relative mt-3 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl"
        style={{ animationDelay: "120ms" }}
      >
        Automation Engineer,
        <br />
        Systems Builder,
        <br />
        <span className="text-gilt">AI-Assisted Architect.</span>
      </h1>

      <p
        className="animate-unfurl relative mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
        style={{ animationDelay: "200ms" }}
      >
        {profile.tagline}
      </p>

      <div
        className="animate-unfurl relative mt-10 flex flex-wrap items-center gap-3"
        style={{ animationDelay: "280ms" }}
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
        >
          View projects
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#world-map"
          className="inline-flex items-center gap-2 rounded-lg border border-gold/60 bg-gold/10 px-6 py-3.5 text-sm font-semibold text-gold-soft transition-colors hover:border-gold hover:bg-gold/20"
        >
          Explore my world
        </a>
        <a
          href="/Zeeshan-Amjad-Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-muted transition-colors hover:border-gold/40 hover:text-parchment"
        >
          <DownloadIcon className="h-4 w-4" />
          Resume
        </a>
      </div>

      <div
        className="animate-unfurl relative mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-muted"
        style={{ animationDelay: "360ms" }}
      >
        <span>{profile.location}</span>
        <span className="hidden h-1 w-1 rounded-full bg-bronze sm:inline-block" />
        <span>{profile.yearsExperience}+ yrs in QA & automation</span>
        <span className="hidden h-1 w-1 rounded-full bg-bronze sm:inline-block" />
        <span>7 systems shipped</span>
        <span className="hidden h-1 w-1 rounded-full bg-bronze sm:inline-block" />
        <div className="flex items-center gap-4 text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-gold"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-gold"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-gold"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
