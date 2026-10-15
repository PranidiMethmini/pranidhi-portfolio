import { Code2, GraduationCap, Sparkles, Sprout } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="profile-card" aria-label="Engineering profile">
      <div className="editor-header">
        <div className="window-controls" aria-hidden="true"><span /><span /><span /></div>
        <span>engineer.profile.ts</span>
        <Code2 size={17} className="editor-icon" aria-hidden="true" />
      </div>
      <div className="profile-body">
        <pre className="profile-code"><code>
          <span className="code-keyword">const</span>{" engineerProfile = {\n"}
          {"  name: "}<span className="code-string">&apos;Pranidhi Methmini&apos;</span>{",\n"}
          {"  institution: "}<span className="code-string">&apos;University of Moratuwa&apos;</span>{",\n"}
          {"  technologies: [\n"}
          {"    "}<span className="code-string">&apos;TypeScript&apos;, &apos;React&apos;, &apos;Next.js&apos;,</span>{"\n"}
          {"    "}<span className="code-string">&apos;NestJS&apos;, &apos;PostgreSQL&apos;</span>{"\n  ],\n"}
          {"  focus: "}<span className="code-string">&apos;Full-Stack Software Engineering&apos;</span>{",\n"}
          {"  status: "}<span className="code-string">&apos;Open to Software Engineering Internships&apos;</span>{"\n} "}<span className="code-keyword">as const</span>{";"}
        </code></pre>
        <dl className="profile-facts">
          <div><dt>Education</dt><dd><span>Third-Year</span> Undergraduate</dd></div>
          <div><dt>Target Role</dt><dd><span>Software Engineering</span> Intern</dd></div>
        </dl>
        <div className="profile-tags" aria-label="Engineering interests">
          <span><Sparkles size={13} aria-hidden="true" />Modular Architecture</span>
          <span><Sprout size={13} aria-hidden="true" />Clean Code</span>
          <span><GraduationCap size={13} aria-hidden="true" />Always Learning</span>
        </div>
      </div>
    </div>
  );
}
