import { about, domains } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" index="01" title="About" kicker="Who I am">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>{about.summary}</p>
            <p>{about.detail}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-border bg-panel/50 p-5"
              >
                <div className="text-3xl font-semibold text-gradient">
                  {h.value}
                </div>
                <div className="mt-1 text-sm text-muted">{h.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-panel/50 p-6">
            <h3 className="font-mono text-sm text-accent">
              Products & domains
            </h3>
            <ul className="mt-5 space-y-5">
              {domains.map((d) => (
                <li key={d.name}>
                  <div className="font-medium text-fg">{d.name}</div>
                  <p className="mt-1 text-sm leading-6 text-muted">{d.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
