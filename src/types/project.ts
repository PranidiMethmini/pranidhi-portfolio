export interface Project {
  slug: string;
  title: string;
  summary: string;
  technologies: readonly string[];
  type: string;
  highlights: readonly string[];
  preview: "documents" | "reservations" | "sorting";
  featured?: boolean;
  image?: { src: string; alt: string };
  repositoryUrl?: string;
  liveUrl?: string;
  caseStudyPath?: `/projects/${string}`;
}

export interface ProjectCaseStudy {
  project: Project;
  overview: string;
  problem: string;
  solution: string;
  features: readonly string[];
  platformFeatures: readonly string[];
  contributions: readonly string[];
  contributionTitle?: string;
  contributionIntroduction: string;
  contributionNote?: string;
  problemTitle?: string;
  solutionTitle?: string;
  learningIntroduction: string;
  technicalHighlights?: readonly { title: string; description: string }[];
  period?: { start: string; end: string };
  architectureCaption?: string;
  capabilitiesLabel?: string;
  architecture: readonly { title: string; description: string }[];
  capabilities: readonly string[];
  learningTopics: readonly string[];
  screenshots?: readonly { src: string; alt: string; caption: string; width: number; height: number }[];
}
