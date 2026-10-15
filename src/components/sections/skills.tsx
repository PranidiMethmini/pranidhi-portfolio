import { Braces, Database, PanelsTopLeft, Server, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const categories = [
  { title: "Programming Languages", Icon: Braces, technologies: ["JavaScript", "TypeScript", "Java", "C", "PHP", "SQL"] },
  { title: "Frontend Development", Icon: PanelsTopLeft, technologies: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { title: "Backend & APIs", Icon: Server, technologies: ["Node.js", "NestJS", "REST APIs"] },
  { title: "Databases & ORM", Icon: Database, technologies: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"] },
  { title: "Tools & Development Workflow", Icon: Wrench, technologies: ["Git", "GitHub", "Postman", "Figma", "VS Code"], wide: true },
];

export function Skills() {
  return (
    <section id="skills" className="skills-section py-section" aria-labelledby="skills-title">
      <Container>
        <ScrollReveal className="skills-heading">
          <div>
            <p className="skills-label">02 / SKILLS</p>
            <h2 id="skills-title">Technical Toolkit &amp; Competencies</h2>
          </div>
        </ScrollReveal>
        <div className="skills-grid">
          {categories.map(({ title, Icon, technologies, wide }, index) => (
            <ScrollReveal key={title} className={`skills-card${wide ? " skills-card-wide" : ""}`} hover delay={index * 0.04}>
              <article aria-labelledby={`skill-category-${index}`}>
                <div className="skills-card-heading">
                  <span className="skills-icon"><Icon size={18} strokeWidth={1.7} aria-hidden="true" /></span>
                  <h3 id={`skill-category-${index}`}>{title}</h3>
                </div>
                <ul className="skills-badges" aria-label={`${title} technologies`}>
                  {technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
