import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { navigation, siteLinks } from "@/data/site";

export function Footer() {
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: "America/Los_Angeles" }).format(new Date());
  return (
    <footer className="site-footer">
      <Container>
        <ScrollReveal className="footer-grid">
          <div className="footer-introduction">
            <Link href="/#home" className="brand footer-wordmark" aria-label="Pranidhi Methmini — home"><Wordmark /></Link>
            <p className="footer-subtitle">Aspiring Software Engineer · University of Moratuwa</p>
            <p className="footer-description">Building practical full-stack applications and thoughtful digital experiences.</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-link-column">
            <h2>Navigation</h2>
            <ul>{navigation.map(({ label, href }) => href && <li key={label}><Link href={href}>{label}</Link></li>)}<li><Link href="/projects">Projects Gallery</Link></li></ul>
          </nav>
          <div className="footer-link-column">
            <h2>Connect</h2>
            <ul>
              {siteLinks.github && <li><a href={siteLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)"><Github size={14} aria-hidden="true" />GitHub</a></li>}
              {siteLinks.linkedin && <li><a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><Linkedin size={14} aria-hidden="true" />LinkedIn</a></li>}
              {siteLinks.email && <li><a href={`mailto:${siteLinks.email}`}><Mail size={14} aria-hidden="true" />Email</a></li>}
            </ul>
          </div>
        </ScrollReveal>
        <div className="footer-bottom"><p>© {year} Pranidhi Methmini. All rights reserved.</p></div>
      </Container>
    </footer>
  );
}
