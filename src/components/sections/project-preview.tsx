import { ArrowRight, Check, CircuitBoard, FileText, Radio, ScanLine } from "lucide-react";
import type { Project } from "@/types/project";

// Illustrative UI only: these are workflow concepts, not live project telemetry.
export function ProjectPreview({ kind }: { kind: Project["preview"] }) {
  return (
    <figure className="project-preview">
      <div className="preview-dashboard" aria-hidden="true">
        <div className="preview-header"><span>{kind === "documents" ? "Document Workflow" : kind === "reservations" ? "Resource Calendar" : "Embedded System"}</span><span className="preview-header-badge">UI Concept</span></div>
        <div className="preview-body">
          {kind === "documents" && <>
            <div className="preview-row"><FileText size={19} /><div><strong>Valuation document</strong><small>Document upload &amp; extraction</small></div><Check size={16} /></div>
            <div className="preview-tiles"><div><small>Document</small><strong>Uploaded</strong></div><div><small>Extraction</small><strong>Review</strong></div><div><small>Approval</small><strong>Pending</strong></div></div>
            <div className="preview-row preview-process"><span>Upload</span><ArrowRight size={12} /><span>Review</span><ArrowRight size={12} /><span>Approve</span></div>
          </>}
          {kind === "reservations" && <>
            <div className="preview-row"><span className="preview-dot" /><div><strong>Meeting room</strong><small>Sample reservation</small></div><span className="preview-status">Reserved</span></div>
            <div className="preview-row"><span className="preview-dot preview-dot-light" /><div><strong>Seminar hall</strong><small>Resource availability</small></div><span className="preview-status">Available</span></div>
            <div className="preview-calendar">{["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => <div key={day} className={i === 2 ? "preview-day-selected" : undefined}><small>{day}</small><span className="preview-calendar-slot" /><span className="preview-calendar-slot" /></div>)}</div>
          </>}
          {kind === "sorting" && <>
            <div className="preview-sensor-grid"><div><Radio size={19} /><small>RFID Identification</small><strong>Scan object</strong></div><div><ScanLine size={19} /><small>Ultrasonic Sensors</small><strong>Detect &amp; monitor</strong></div></div>
            <div className="preview-row"><CircuitBoard size={20} /><div><strong>Robotic arm &amp; conveyor</strong><small>Motor control · LCD feedback</small></div></div>
            <div className="preview-process preview-row"><span>Identify</span><ArrowRight size={12} /><span>Sort</span><ArrowRight size={12} /><span>Feedback</span></div>
          </>}
        </div>
      </div>
      <figcaption>Illustrative {kind === "documents" ? "document processing and approval workflow" : kind === "reservations" ? "reservation calendar and resource availability" : "RFID, sensor, and robotic sorting dashboard"} concept.</figcaption>
    </figure>
  );
}
