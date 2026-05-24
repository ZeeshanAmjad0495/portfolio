import { experience } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="07"
      title="The Chronicle"
      kicker="Where I've worked"
    >
      <div className="relative">
        <div className="absolute left-0 top-2 hidden h-full w-px bg-gradient-to-b from-gold/50 via-bronze/30 to-transparent sm:left-2 sm:block" />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="relative sm:pl-12">
                <span
                  className={`absolute -left-[5px] top-1.5 hidden h-3 w-3 rounded-full border-2 sm:block ${
                    job.current
                      ? "animate-ember border-gold bg-gold/30"
                      : "border-bronze bg-bg"
                  }`}
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {job.role}{" "}
                    <span className="text-gold">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-bronze">
                  {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.95rem] leading-7 text-muted"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
