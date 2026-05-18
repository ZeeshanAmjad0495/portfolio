import { skillGroups } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills & Toolbox" kicker="What I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="card-glow h-full rounded-2xl border border-border bg-panel/50 p-6">
              <h3 className="font-mono text-sm text-accent">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-bg-soft px-3 py-1.5 text-sm text-fg/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
