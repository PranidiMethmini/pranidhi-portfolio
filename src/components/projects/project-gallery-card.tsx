import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ProjectPreview } from "@/components/sections/project-preview";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Project } from "@/types/project";

export function ProjectGalleryCard({ project }: { project: Project }) {
  return (
    <ScrollReveal className="gallery-card" hover>
      <article aria-labelledby={`gallery-${project.slug}`}>
        <ProjectPreview kind={project.preview} />
        <div className="gallery-card-content">
          <p className="project-type">{project.type}</p>
          <h2 id={`gallery-${project.slug}`}>{project.title}</h2>
          <p className="project-summary">{project.summary}</p>
          <ul className="project-technologies" aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}><Check size={15} aria-hidden="true" /><span>{highlight}</span></li>)}</ul>
          <div className="gallery-card-actions">
            {project.caseStudyPath ? <Link href={project.caseStudyPath} className="action-button action-primary" aria-label={`View case study: ${project.title}`}>View Case Study<ArrowRight size={16} aria-hidden="true" /></Link> : <button type="button" disabled className="action-button action-primary">Case study coming soon</button>}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
