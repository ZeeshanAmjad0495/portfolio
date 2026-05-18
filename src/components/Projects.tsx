import { profile, projects } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowIcon, GitHubIcon, SparkIcon } from "./Icons";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Projects"
      kicker="What I've built"
    >
      {featured.map((project) => (
        <Reveal key={project.name}>
          <article className="card-glow relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-panel via-bg-soft to-panel p-8 sm:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-2/15 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                <SparkIcon className="h-4 w-4" />
                Featured project
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-lg text-accent">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-7 max-w-3xl space-y-3">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 leading-7 text-muted"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Explore on GitHub
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      ))}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <article className="card-glow flex h-full flex-col rounded-2xl border border-border bg-panel/50 p-7">
              <h3 className="text-xl font-semibold text-fg">{project.name}</h3>
              <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
              <ul className="mt-5 flex-1 space-y-3">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[0.95rem] leading-7 text-muted"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-bg-soft px-3 py-1.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
