import Reveal from "./Reveal";
import { SealIcon } from "./Icons";

export default function Philosophy() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <Reveal>
        <figure className="parchment relative rounded-2xl px-8 py-12 text-center sm:px-16">
          <SealIcon className="mx-auto h-9 w-9 text-gold/60" />
          <blockquote className="font-accent mt-6 text-2xl leading-relaxed text-parchment sm:text-3xl">
            &ldquo;Good software should make things clearer and make repeated
            work dependable. Mine is shaped by quality engineering, automation,
            AI-assisted building, and a long habit of taking complex systems
            apart to see how they hold together.&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-bronze">
            Engineering philosophy
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
