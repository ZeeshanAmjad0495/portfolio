import { certifications, education } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Credentials() {
  return (
    <Section
      id="credentials"
      index="05"
      title="Certifications & Education"
      kicker="Continuous learning"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-panel/50 p-7">
            <h3 className="font-mono text-sm text-accent">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="font-medium text-fg">{c.name}</div>
                    <div className="mt-0.5 text-sm text-muted">{c.issuer}</div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      c.status === "Completed"
                        ? "border border-accent/30 bg-accent/10 text-accent"
                        : "border border-border bg-bg-soft text-muted"
                    }`}
                  >
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-border bg-panel/50 p-7">
            <h3 className="font-mono text-sm text-accent">Education</h3>
            <ul className="mt-5 space-y-4">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="border-b border-border/60 pb-4 last:border-0 last:pb-0"
                >
                  <div className="font-medium text-fg">{e.degree}</div>
                  <div className="mt-0.5 text-sm text-muted">{e.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
