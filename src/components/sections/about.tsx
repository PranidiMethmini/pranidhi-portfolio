import { BookOpen, Code2, GraduationCap, Layers, Lightbulb, University, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import "./about-compact.css";

const interests = [
  { title: "Software Engineering", description: "Building maintainable, reliable software solutions.", Icon: Code2 },
  { title: "Full-Stack Development", description: "Developing frontend interfaces and backend APIs.", Icon: Layers },
  { title: "Problem Solving", description: "Turning complex requirements into practical solutions.", Icon: Lightbulb },
  { title: "Continuous Learning", description: "Exploring modern technologies and improving engineering skills.", Icon: BookOpen },
];

const highlights = [
  { label: "Academic Foundation", Icon: BookOpen },
  { label: "Industry-Mentored Project Experience", Icon: Code2 },
  { label: "Collaborative Development", Icon: Users },
];

export function About() {
  return (
    <section id="about" className="about-section py-section" aria-labelledby="about-title">
      <Container>
        <ScrollReveal className="about-heading">
          <p className="about-label">01 / ABOUT</p>
          <h2 id="about-title">Building thoughtful<br className="hidden sm:block" /> software solutions.</h2>
        </ScrollReveal>
        <div className="about-grid">
          <div className="about-introduction-column">
            <ScrollReveal className="about-white-card about-introduction">
              <p>I&apos;m a third-year <strong>BSc (Hons) Information Technology &amp; Management</strong> undergraduate at the University of Moratuwa, passionate about software engineering and full-stack web development.</p>
              <p>Through academic and industry-mentored projects, I&apos;ve gained hands-on experience building web applications using React, TypeScript, NestJS, Next.js, and PostgreSQL. I enjoy solving practical problems, designing maintainable systems, and continuously improving my technical skills.</p>
            </ScrollReveal>
            <div className="about-interest-grid">
              {interests.map(({ title, description, Icon }, index) => (
                <ScrollReveal key={title} className="about-white-card about-interest-card" hover delay={index * 0.05}>
                  <article aria-label={title}>
                    <span className="about-icon"><Icon size={18} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal className="about-white-card academic-card" delay={0.1}>
            <aside aria-labelledby="academic-title">
              <header className="academic-header">
                <span className="academic-icon"><University size={25} strokeWidth={1.5} aria-hidden="true" /></span>
                <div>
                  <p className="academic-eyebrow">Academic Profile</p>
                  <h3 id="academic-title">University of Moratuwa</h3>
                  <p className="academic-faculty">Faculty of Information Technology</p>
                </div>
              </header>
              <div className="academic-content">
                <dl className="academic-details">
                  <div><dt><GraduationCap size={17} aria-hidden="true" />Degree</dt><dd>BSc (Hons) in Information Technology &amp; Management</dd></div>
                  <div><dt>Current Status</dt><dd>Third-Year Undergraduate</dd></div>
                  <div><dt>Expected Graduation</dt><dd><time dateTime="2028-07">July 2028</time></dd></div>
                </dl>
                <ul className="academic-highlights" aria-label="Academic highlights">
                  {highlights.map(({ label, Icon }) => <li key={label}><Icon size={16} strokeWidth={1.7} aria-hidden="true" /><span>{label}</span></li>)}
                </ul>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
