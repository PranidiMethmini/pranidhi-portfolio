import Link from "next/link";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CaseStudySection } from "@/components/projects/case-study-section";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { CaseStudyVisuals } from "@/components/projects/case-study-visuals";
import { CaseStudyParagraphs, CaseStudyText } from "@/components/projects/case-study-text";
import type { ProjectCaseStudy } from "@/types/project";

function DetailList({ items }: { items: readonly string[] }) {
  return <ul className="case-detail-list">{items.map((item) => <li key={item}><Check size={16} aria-hidden="true" /><span><CaseStudyText text={item} /></span></li>)}</ul>;
}

export function CaseStudyLayout({ study }: { study: ProjectCaseStudy }) {
  const { project } = study;
  const formatMonth = (value: string) => new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}-01T00:00:00Z`));
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="case-study-main">
        <Container>
          <nav aria-label="Breadcrumb" className="case-breadcrumb"><ol>
            <li><Link href="/">Home</Link></li><li><ChevronRight size={13} aria-hidden="true" /><Link href="/#projects">Projects</Link></li>
            <li><ChevronRight size={13} aria-hidden="true" /><span aria-current="page">{project.title}</span></li>
          </ol></nav>
          <header className="case-study-header">
            <ScrollReveal><p className="case-label">{project.type}</p><h1>{project.title}</h1><p className="case-summary">{project.summary}</p><ul className="project-technologies" aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></ScrollReveal>
          </header>
          {study.period && <p className="case-label">Project period: <time dateTime={study.period.start}>{formatMonth(study.period.start)}</time> – <time dateTime={study.period.end}>{formatMonth(study.period.end)}</time></p>}
          <nav className="case-index" aria-label="Case study sections">
            <p className="case-label">Inside this case study</p>
            <ul>{[{ id: "overview", title: "Overview" }, { id: "problem", title: "Problem" }, { id: "solution", title: "Solution" }, { id: "features", title: "Features" }, { id: "contributions", title: "Contributions" }, { id: "architecture", title: "Architecture" }, { id: "learning", title: "Learning" }, ...(study.technicalHighlights?.length ? [{ id: "technical-highlights", title: "Technical highlights" }] : [])].map(({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ul>
          </nav>
          <CaseStudySection id="overview" label="01 / CONTEXT" title="Project overview">
            <CaseStudyParagraphs text={study.overview} /><CaseStudyVisuals study={study} />
          </CaseStudySection>
          <CaseStudySection id="problem" label="02 / THE PROBLEM" title={study.problemTitle ?? "From fragmented workflows"}><CaseStudyParagraphs text={study.problem} /></CaseStudySection>
          <CaseStudySection id="solution" label="03 / THE SOLUTION" title={study.solutionTitle ?? "A centralized platform"}><CaseStudyParagraphs text={study.solution} /></CaseStudySection>
          <CaseStudySection id="features" label="04 / CAPABILITIES" title="Key features">
            <DetailList items={study.features} />{study.platformFeatures.length > 0 && <div className="case-platform-note"><h3>Platform-level features</h3><DetailList items={study.platformFeatures} /><p>These are broader team capabilities, rather than claims of individual implementation.</p></div>}
          </CaseStudySection>
          <CaseStudySection id="contributions" label="05 / IMPLEMENTATION" title={study.contributionTitle ?? "My individual contributions"}>
            <p>{study.contributionIntroduction}</p><DetailList items={study.contributions} />{study.contributionNote && <p className="case-platform-note">{study.contributionNote}</p>}
          </CaseStudySection>
          <CaseStudySection id="architecture" label="06 / SYSTEM DESIGN" title="Technical architecture"><ArchitectureDiagram layers={study.architecture} capabilities={study.capabilities} caption={study.architectureCaption} capabilitiesLabel={study.capabilitiesLabel} /></CaseStudySection>
          <CaseStudySection id="learning" label="07 / ENGINEERING PRACTICE" title="Challenges and learning">
            <p>{study.learningIntroduction}</p><DetailList items={study.learningTopics} />
          </CaseStudySection>
          {study.technicalHighlights?.length && <CaseStudySection id="technical-highlights" label="08 / IMPLEMENTATION DETAILS" title="Technical highlights">
            {study.technicalHighlights.map(({ title, description }) => <div className="case-platform-note" key={title}><h3>{title}</h3><CaseStudyParagraphs text={description} /></div>)}
          </CaseStudySection>}
          <div className="case-back"><Link href="/#projects" className="action-button action-primary"><ArrowLeft size={17} aria-hidden="true" />Back to Projects</Link></div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
