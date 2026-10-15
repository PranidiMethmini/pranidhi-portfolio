import { Blocks, Braces, Database, GraduationCap, ListTree, Network, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const subjectAreas = [
  { title: "Software Engineering & Design", Icon: Blocks },
  { title: "Data Structures & Algorithms", Icon: ListTree },
  { title: "Database Management Systems", Icon: Database },
  { title: "Object-Oriented Programming", Icon: Braces },
  { title: "Web Technologies", Icon: Network },
  { title: "IT Project Management", Icon: Users },
];

export function Education() {
  return (
    <section id="education" className="education-section py-section" aria-labelledby="education-title">
      <Container>
        <ScrollReveal className="education-heading">
          <div>
            <p className="education-label">04 / EDUCATION</p>
            <h2 id="education-title">Academic Background</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal className="education-card" hover>
          <article className="education-card-grid" aria-labelledby="education-institution">
            <div className="education-details">
              <p className="education-period"><time dateTime="2024-03">March 2024</time> – Present</p>
              <h3 id="education-institution"><GraduationCap size={23} strokeWidth={1.6} aria-hidden="true" />University of Moratuwa</h3>
              <p className="education-degree">BSc (Hons) in Information Technology &amp; Management</p>
              <p className="education-faculty">Faculty of Information Technology</p>
              <dl className="education-status">
                <div><dt>Expected Graduation</dt><dd><time dateTime="2028-07">July 2028</time></dd></div>
                <div><dt>Current Status</dt><dd>Third-Year Undergraduate</dd></div>
              </dl>
            </div>
            <div className="education-coursework">
              <h3 id="coursework-title">Relevant Coursework &amp; Competencies</h3>
              <ul className="education-subjects" aria-labelledby="coursework-title" aria-describedby="coursework-note">
                {subjectAreas.map(({ title, Icon }) => (
                  <li key={title}><Icon size={17} strokeWidth={1.7} aria-hidden="true" /><span>{title}</span></li>
                ))}
              </ul>
              <p id="coursework-note" className="education-note">Relevant subject areas.</p>
            </div>
          </article>
        </ScrollReveal>
      </Container>
    </section>
  );
}
