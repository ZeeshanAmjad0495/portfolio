import { profile } from "@/data/portfolio";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-32"
    >
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-4 py-1.5 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for QA automation & SDET roles
        </span>
      </div>

      <h1
        className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        style={{ animation: "var(--animate-fade-up)", animationDelay: "80ms" }}
      >
        {profile.name}
        <br />
        <span className="text-gradient">{profile.role}</span>
      </h1>

      <p
        className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
        style={{ animation: "var(--animate-fade-up)", animationDelay: "160ms" }}
      >
        {profile.tagline}
      </p>

      <div
        className="mt-10 flex flex-wrap items-center gap-4"
        style={{ animation: "var(--animate-fade-up)", animationDelay: "240ms" }}
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
        >
          View ForgeLoop & projects
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
        >
          Contact me
        </a>
      </div>

      <div
        className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
        style={{ animation: "var(--animate-fade-up)", animationDelay: "320ms" }}
      >
        <span className="font-mono">{profile.location}</span>
        <span className="hidden h-1 w-1 rounded-full bg-muted sm:inline-block" />
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
