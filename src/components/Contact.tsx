import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-panel via-bg-soft to-panel px-8 py-16 text-center sm:px-16">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <span className="font-mono text-sm text-accent">06 / Contact</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build reliable software together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
              Open to QA Automation / SDET opportunities and collaboration on
              AI-assisted delivery workflows. The fastest way to reach me is
              email.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
