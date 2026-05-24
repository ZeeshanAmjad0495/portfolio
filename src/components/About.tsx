import { about, domains } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { SealIcon } from "./Icons";

export default function About() {
  return (
    <Section id="about" index="01" title="About" kicker="The hand behind the work">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="parchment relative rounded-2xl p-7 sm:p-9">
            <SealIcon className="absolute right-6 top-6 h-10 w-10 text-crimson/70" />
            <div className="space-y-5 text-[1.05rem] leading-8 text-parchment/90">
              <p>
                <span className="font-display float-left mr-3 mt-1 text-5xl leading-none text-gold">
                  {about.summary.charAt(0)}
                </span>
                {about.summary.slice(1)}
              </p>
              <p className="text-muted">{about.bridge}</p>
              <p className="text-muted">{about.personal}</p>
            </div>

            <div className="gold-rule my-7" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {about.highlights.map((h) => (
                <div key={h.label}>
                  <div className="font-display text-3xl font-semibold text-gilt">
                    {h.value}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-muted">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-border bg-panel/50 p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Domains charted
            </h3>
            <p className="mt-2 text-xs leading-5 text-muted">
              Products I&apos;ve tested at Arbisoft, by category.
            </p>
            <ul className="mt-6 space-y-5">
              {domains.map((d) => (
                <li key={d.name} className="border-l-2 border-bronze/50 pl-4">
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
