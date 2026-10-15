import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { sortingCaseStudy } from "@/data/case-studies";

export const metadata: Metadata = {
  title: sortingCaseStudy.project.title,
  description: sortingCaseStudy.overview,
  openGraph: { title: sortingCaseStudy.project.title, description: sortingCaseStudy.overview, type: "article" },
  twitter: { card: "summary", title: sortingCaseStudy.project.title, description: sortingCaseStudy.overview },
};

export default function ObjectSortingPage() {
  return <CaseStudyLayout study={sortingCaseStudy} />;
}
