import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EmailCopy } from "@/components/ui/email-copy";
import { siteLinks } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="contact-section py-section" aria-labelledby="contact-title">
      <Container>
        <ScrollReveal className="contact-panel">
          <p className="contact-label">05 / GET IN TOUCH</p>
          <h2 id="contact-title">Let&apos;s build something meaningful together.</h2>
          <p className="contact-description">I&apos;m actively seeking Software Engineering Internship opportunities. Whether you have an open position or would like to discuss a project, I&apos;d love to connect.</p>
          <div className="contact-actions">
            {siteLinks.email && <a href={`mailto:${siteLinks.email}`} className="action-button action-primary"><Mail size={16} aria-hidden="true" />Email Me Directly</a>}
            {siteLinks.linkedin && <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" className="action-button contact-social" aria-label="Connect on LinkedIn (opens in a new tab)"><Linkedin size={16} aria-hidden="true" />Connect on LinkedIn</a>}
            {siteLinks.github && <a href={siteLinks.github} target="_blank" rel="noopener noreferrer" className="action-button contact-social" aria-label="GitHub profile (opens in a new tab)"><Github size={16} aria-hidden="true" />GitHub Profile</a>}
          </div>
          {siteLinks.email && <EmailCopy email={siteLinks.email} />}
        </ScrollReveal>
      </Container>
    </section>
  );
}
