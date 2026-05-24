import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import {
  SealIcon,
  GitHubIcon,
  LinkedInIcon,
  UpworkIcon,
  MailIcon,
  MapPinIcon,
  ArrowIcon,
} from "./Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-4xl scroll-mt-24 px-6 py-24 sm:py-28"
    >
      <Reveal>
        <div className="parchment relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16">
          <div className="gold-rule absolute inset-x-12 top-0" />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-crimson/50 bg-crimson/15 text-crimson/80">
            <SealIcon className="h-8 w-8" />
          </div>
          <h2 className="font-display mt-6 text-3xl font-semibold text-fg sm:text-4xl">
            Send word
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">
            {profile.availability}
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <GitHubIcon className="h-5 w-5" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
            {profile.upwork ? (
              <a
                href={profile.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <UpworkIcon className="h-5 w-5" />
                Upwork
              </a>
            ) : null}
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-bronze" />
              {profile.location}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
