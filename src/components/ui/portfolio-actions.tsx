import { Download, Github, Linkedin } from "lucide-react";
import { siteLinks } from "@/data/site";

export function CvButton({ primary = false }: { primary?: boolean }) {
  const className = `action-button ${primary ? "action-primary" : "action-secondary"}`;
  const content = <><Download size={16} aria-hidden="true" /><span>Download CV</span></>;
  return siteLinks.cv ? (
    <a href={siteLinks.cv} download className={className}>{content}</a>
  ) : (
    <button type="button" disabled className={className} title="CV will be available soon" aria-label="Download CV — available soon">{content}</button>
  );
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? "social-compact" : ""}`} aria-label="Social profiles">
      {[{ name: "GitHub", Icon: Github, href: siteLinks.github }, { name: "LinkedIn", Icon: Linkedin, href: siteLinks.linkedin }].map(({ name, Icon, href }) =>
        href ? (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="social-button" aria-label={`${name} profile (opens in a new tab)`}><Icon size={18} aria-hidden="true" /></a>
        ) : (
          <button key={name} type="button" disabled className="social-button" aria-label={`${name} profile — available soon`} title={`${name} profile will be available soon`}><Icon size={18} aria-hidden="true" /></button>
        ),
      )}
    </div>
  );
}
