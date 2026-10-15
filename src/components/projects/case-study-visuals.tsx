import Image from "next/image";
import type { ProjectCaseStudy } from "@/types/project";
import { ProjectPreview } from "@/components/sections/project-preview";

export function CaseStudyVisuals({ study }: { study: ProjectCaseStudy }) {
  return (
    <div className="case-visuals">
      {study.screenshots?.length ? study.screenshots.map((screenshot) => <figure key={screenshot.src}>
        <Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} className="case-screenshot" />
        <figcaption>{screenshot.caption}</figcaption>
      </figure>) : <>
        <ProjectPreview kind={study.project.preview} />
        <p className="case-visual-note">Interface illustration, not a screenshot of the application. Actual project screenshots can be added here when available.</p>
      </>}
    </div>
  );
}
