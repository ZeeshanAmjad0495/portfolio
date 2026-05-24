import { arsenal } from "@/data/skills";
import { iconMap } from "./Icons";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Arsenal() {
  return (
    <Section id="arsenal" index="02" title="The Arsenal" kicker="Tools & disciplines">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {arsenal.map((group, i) => {
          const Icon = iconMap[group.icon] ?? iconMap.compass;
          return (
            <Reveal key={group.title} delay={(i % 3) * 90}>
              <div className="card-codex parchment h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-accent text-sm tracking-wide text-gold/80">
                      {group.artifact}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-bg-soft/60 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
