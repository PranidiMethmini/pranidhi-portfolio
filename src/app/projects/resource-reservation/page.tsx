import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { reservationCaseStudy } from "@/data/case-studies";

export const metadata: Metadata = {
  title: reservationCaseStudy.project.title,
  description: reservationCaseStudy.overview,
  openGraph: { title: reservationCaseStudy.project.title, description: reservationCaseStudy.overview, type: "article" },
  twitter: { card: "summary", title: reservationCaseStudy.project.title, description: reservationCaseStudy.overview },
};

export default function ResourceReservationPage() {
  return <CaseStudyLayout study={reservationCaseStudy} />;
}
