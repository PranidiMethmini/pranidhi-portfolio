"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { CvButton, SocialLinks } from "@/components/ui/portfolio-actions";
import { navigation } from "@/data/site";

function NavigationItems({ onNavigate, activeSection }: { onNavigate?: () => void; activeSection: string }) {
  return navigation.map((item) => item.href ? (
    <Link key={item.label} href={item.href} aria-current={item.href === `/#${activeSection}` ? "location" : undefined} onClick={onNavigate} className={`nav-link${item.href === `/#${activeSection}` ? " nav-active" : ""}`}>{item.label}</Link>
  ) : (
    <span key={item.label} role="link" aria-disabled="true" className="nav-link nav-unavailable" title={`${item.label} section is coming soon`}>{item.label}</span>
  ));
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduced = useReducedMotion();
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    let frame = 0;
    const updateSection = () => {
      frame = 0;
      const marker = 100;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= marker).at(-1);
      setActiveSection(current?.id ?? (window.location.pathname === "/" ? "home" : ""));
    };
    const scheduleUpdate = () => { if (!frame) frame = window.requestAnimationFrame(updateSection); };
    updateSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header">
      <Container>
        <div className="navbar-row">
          <Link href="/#home" className="brand" aria-label="Pranidhi Methmini — home">
            <Wordmark />
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav"><NavigationItems activeSection={activeSection} /></nav>
          <div className="desktop-actions"><SocialLinks compact /><CvButton primary /></div>
          <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls={open ? "mobile-navigation" : undefined} aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div id="mobile-navigation" className="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.22 }}>
              <nav aria-label="Mobile navigation" className="mobile-nav"><NavigationItems activeSection={activeSection} onNavigate={() => { setOpen(false); toggle.current?.focus(); }} /></nav>
              <div className="mobile-actions"><CvButton primary /><SocialLinks /></div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
