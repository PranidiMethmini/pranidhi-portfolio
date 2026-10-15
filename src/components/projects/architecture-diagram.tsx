import { ArrowDown, Layers } from "lucide-react";
import type { ProjectCaseStudy } from "@/types/project";

export function ArchitectureDiagram({ layers, capabilities, caption = "High-level application architecture. Capabilities describe the broader platform.", capabilitiesLabel = "Application capabilities" }: { layers: ProjectCaseStudy["architecture"]; capabilities: ProjectCaseStudy["capabilities"]; caption?: string; capabilitiesLabel?: string }) {
  return (
    <figure className="case-architecture">
      <ol className="architecture-layers">
        {layers.map((layer, index) => <li key={layer.title}>
          <div className="architecture-node"><span className="case-icon"><Layers size={20} aria-hidden="true" /></span><div><h3>{layer.title}</h3><p>{layer.description}</p></div></div>
          {index < layers.length - 1 && <ArrowDown className="architecture-arrow" size={22} aria-hidden="true" />}
        </li>)}
      </ol>
      <div className="architecture-capabilities"><p>{capabilitiesLabel}</p><ul>{capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
