import { aiIntro, aiPractices } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { SparkIcon } from "./Icons";

export default function AISystems() {
  return (
    <Section id="ai" index="05" title="How I Use AI" kicker="The agent's orb">
      <Reveal>
        <p className="max-w-3xl text-lg leading-8 text-muted">{aiIntro}</p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiPractices.map((practice, i) => (
          <Reveal key={practice.title} delay={(i % 4) * 80}>
            <div className="card-codex h-full rounded-xl border border-border bg-panel/50 p-5">
              <SparkIcon className="h-4 w-4 text-glow" />
              <h3 className="font-display mt-3 text-base font-semibold text-fg">
                {practice.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {practice.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
