import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CaseStudySection({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="case-study-section" aria-labelledby={`${id}-title`}>
      <ScrollReveal className="case-section-grid">
        <div><p className="case-label">{label}</p><h2 id={`${id}-title`}>{title}</h2></div>
        <div className="case-section-content">{children}</div>
      </ScrollReveal>
    </section>
  );
}
