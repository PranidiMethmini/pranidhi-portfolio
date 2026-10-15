import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectGalleryCard } from "@/components/projects/project-gallery-card";
import { projects } from "@/data/projects";

const description = "A collection of projects showcasing my experience in full-stack development, software engineering, and embedded systems.";

export const metadata: Metadata = {
  title: "Projects — Explore My Work",
  description,
  openGraph: { title: "Projects — Pranidhi Methmini", description, type: "website" },
  twitter: { card: "summary", title: "Projects — Pranidhi Methmini", description },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="gallery-main">
        <Container>
          <nav className="case-breadcrumb" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li><li><ChevronRight size={13} aria-hidden="true" /><span aria-current="page">Projects</span></li></ol></nav>
          <header className="case-study-header">
            <ScrollReveal><p className="case-label">PROJECT PORTFOLIO</p><h1>Explore My Work</h1><p className="case-summary">{description}</p></ScrollReveal>
          </header>
          <section className="gallery-grid" aria-label="Project portfolio">
            {projects.map((project) => <ProjectGalleryCard key={project.slug} project={project} />)}
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
