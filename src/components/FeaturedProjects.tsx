import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import Reveal from "./Reveal";

const featured = projects.filter((project) => project.featured);

export default function FeaturedProjects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Featured Projects"
      kicker="The shipped work"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center font-mono text-xs text-muted">
        More locations, including work in progress, are out on{" "}
        <a href="#world-map" className="text-gold hover:text-gold-soft">
          the world map
        </a>
        .
      </p>
    </Section>
  );
}
