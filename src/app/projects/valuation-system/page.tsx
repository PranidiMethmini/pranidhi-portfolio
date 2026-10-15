import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { valuationCaseStudy } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Valuation Document Management & CRM System",
  description: valuationCaseStudy.project.summary,
  openGraph: { title: valuationCaseStudy.project.title, description: valuationCaseStudy.project.summary, type: "article" },
  twitter: { card: "summary", title: valuationCaseStudy.project.title, description: valuationCaseStudy.project.summary },
};

export default function ValuationSystemPage() {
  return <CaseStudyLayout study={valuationCaseStudy} />;
}
