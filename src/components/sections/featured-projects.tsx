import { ArrowRight, Check, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectPreview } from "@/components/sections/project-preview";

export function FeaturedProjects() {
  return (
    <section id="projects" className="projects-section py-section" aria-labelledby="projects-title">
      <Container>
        <ScrollReveal className="projects-heading">
          <div><p className="projects-label">03 / FEATURED WORK</p><h2 id="projects-title">Selected Engineering Projects</h2></div>
        </ScrollReveal>
        <div className="featured-project-list">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ScrollReveal key={project.slug} className="featured-project-card" hover>
              <article className={`featured-project-grid${index % 2 ? " featured-project-reversed" : ""}`} aria-labelledby={`${project.slug}-title`}>
                <div className="featured-project-visual"><ProjectPreview kind={project.preview} /></div>
                <div className="featured-project-content">
                  <ul className="project-technologies" aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                  <h3 id={`${project.slug}-title`}>{project.title}</h3>
                  <p className="project-type">{project.type}</p>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}><Check size={15} aria-hidden="true" /><span>{highlight}</span></li>)}</ul>
                  <div className="project-actions">
                    {project.caseStudyPath ? <Link href={project.caseStudyPath} className="action-button action-primary" aria-label={`View case study: ${project.title}`}>View Case Study<ArrowRight size={15} aria-hidden="true" /></Link> : <button type="button" disabled className="action-button action-primary" aria-label={`${project.title} case study — coming soon`} title="Case study coming soon">View Case Study<ArrowRight size={15} aria-hidden="true" /></button>}
                    {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="action-button action-secondary" aria-label={`${project.title} on GitHub (opens in a new tab)`}><Github size={15} aria-hidden="true" />GitHub</a>}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="project-gallery-callout">
          <div><h3>Looking for more builds &amp; explorations?</h3><p>Explore the full project collection in the gallery.</p></div>
          <Link href="/projects" className="action-button action-primary">View All Projects<ArrowRight size={15} aria-hidden="true" /></Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
