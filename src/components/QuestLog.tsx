import { quests } from "@/data/quests";
import Section from "./Section";
import Reveal from "./Reveal";

export default function QuestLog() {
  return (
    <Section id="quests" index="06" title="The Quest Log" kicker="Where I'm headed">
      <div className="grid gap-4 sm:grid-cols-2">
        {quests.map((quest, i) => (
          <Reveal key={quest.title} delay={(i % 2) * 90}>
            <div className="card-codex flex h-full gap-4 rounded-xl border border-border bg-panel/50 p-5">
              <span
                className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  quest.state === "active"
                    ? "border-gold bg-gold/20 text-gold"
                    : "border-bronze text-bronze"
                }`}
                aria-hidden
              >
                <span
                  className={`h-1.5 w-1.5 rotate-45 ${
                    quest.state === "active" ? "bg-gold" : "bg-bronze"
                  }`}
                />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base font-semibold text-fg">
                    {quest.title}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider ${
                      quest.state === "active"
                        ? "bg-gold/15 text-gold"
                        : "bg-bg-soft text-bronze"
                    }`}
                  >
                    {quest.state === "active" ? "Active" : "Next"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {quest.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
