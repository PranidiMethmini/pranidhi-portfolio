import { ArrowRight, GraduationCap, Code2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CvButton, SocialLinks } from "@/components/ui/portfolio-actions";
import { HeroEntrance, HeroReveal } from "@/components/ui/hero-entrance";
import { ProfileCard } from "@/components/sections/profile-card";

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <Container>
        <HeroEntrance>
          <div className="hero-copy">
            <HeroReveal><p className="availability-badge"><span aria-hidden="true" />Open to Software Engineering Internships</p></HeroReveal>
            <HeroReveal><h1 id="hero-title">Hi, I&apos;m <em>Pranidhi</em><br />Methmini.</h1></HeroReveal>
            <HeroReveal><p className="hero-subtitle">Aspiring Software Engineer · IT &amp; Management Undergrad</p></HeroReveal>
            <HeroReveal><p className="hero-description">Passionate about building meaningful, resilient software solutions through clean modular architectures, deliberate design systems, and modern full-stack technologies.</p></HeroReveal>
            <HeroReveal><div className="hero-actions">
              <a href="#projects" className="action-button action-primary">Explore My Projects<ArrowRight size={17} aria-hidden="true" /></a>
              <CvButton /><SocialLinks />
            </div></HeroReveal>
            <HeroReveal><ul className="hero-details">
              <li><GraduationCap size={17} aria-hidden="true" />University of Moratuwa</li>
              <li><Code2 size={17} aria-hidden="true" />Full-Stack Software Engineering</li>
            </ul></HeroReveal>
          </div>
          <HeroReveal className="hero-visual"><ProfileCard /></HeroReveal>
        </HeroEntrance>
      </Container>
    </section>
  );
}
