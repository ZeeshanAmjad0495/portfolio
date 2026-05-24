import { certifications, education } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { DownloadIcon } from "./Icons";

export default function Resume() {
  return (
    <Section
      id="resume"
      index="08"
      title="The Record"
      kicker="Resume & credentials"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="parchment flex h-full flex-col justify-between rounded-2xl p-7">
            <div>
              <h3 className="font-display text-xl font-semibold text-fg">
                Resume
              </h3>
              <p className="mt-3 leading-7 text-muted">
                The PDF is the ATS-friendly QA / SDET resume. The systems above
                are the fuller picture.
              </p>
            </div>
            <a
              href="/Zeeshan-Amjad-Resume.pdf"
              download
              className="group mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume PDF
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-panel/50 p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Certifications
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-sm font-medium text-fg">{c.name}</div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[0.6rem] font-medium ${
                          c.status === "Completed"
                            ? "border border-emerald/40 bg-emerald/10 text-glow"
                            : "border border-border bg-bg-soft text-muted"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <div className="mt-0.5 text-xs text-muted">{c.issuer}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-panel/50 p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Education
              </h3>
              <ul className="mt-4 space-y-3">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="text-sm font-medium text-fg">{e.degree}</div>
                    <div className="mt-0.5 text-xs text-muted">{e.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
