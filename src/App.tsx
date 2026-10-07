import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { AboutSection } from './components/AboutSection';
import { TechUniverseSection } from './components/TechUniverseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AISystemsSection } from './components/AISystemsSection';
import { SystemsLabSection } from './components/SystemsLabSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ImpactSection } from './components/ImpactSection';
import { TerminalSection } from './components/TerminalSection';
import { EducationAndResumeSection } from './components/EducationAndResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { NAV_SECTIONS } from './data/navigation';
import { useScrollReveals } from './hooks/useScrollReveals';
import { DemoId } from './data/demos';

export default function App() {
  useScrollReveals();
  const [activeSection, setActiveSection] = useState('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<DemoId>('pipeline');
  const navigationTarget = useRef<string | null>(null);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Keep the clicked tab selected while smooth scrolling crosses other sections.
      clearTimeout(navigationTimer.current);
      navigationTarget.current = sectionId;
      setActiveSection(sectionId);
      navigationTimer.current = setTimeout(() => { navigationTarget.current = null; }, 1000);
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 64;
      window.scrollTo({
        top: Math.max(0, window.scrollY + element.getBoundingClientRect().top - headerHeight - 16),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      });
    }
  };

  // Track every section, including Contact at the bottom of the page.
  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      frame = 0;
      if (navigationTarget.current) return;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
        setActiveSection('contact');
        return;
      }
      const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 72;
      const current = [...NAV_SECTIONS].reverse().find(({ id }) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= headerBottom + 48;
      });
      setActiveSection(current?.id ?? 'home');
    };
    const scheduleUpdate = () => {
      if (navigationTarget.current) {
        clearTimeout(navigationTimer.current);
        navigationTimer.current = setTimeout(() => {
          navigationTarget.current = null;
          updateSection();
        }, 160);
      }
      if (!frame) frame = window.requestAnimationFrame(updateSection);
    };
    const cancelNavigation = () => {
      clearTimeout(navigationTimer.current);
      navigationTarget.current = null;
      scheduleUpdate();
    };
    const handleScrollKey = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)
        && !(event.target instanceof Element && event.target.closest('input, textarea, select, button, [role="tab"], [contenteditable="true"]'))) cancelNavigation();
    };
    updateSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('wheel', cancelNavigation, { passive: true });
    window.addEventListener('touchstart', cancelNavigation, { passive: true });
    window.addEventListener('keydown', handleScrollKey);
    return () => {
      window.cancelAnimationFrame(frame);
      clearTimeout(navigationTimer.current);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('wheel', cancelNavigation);
      window.removeEventListener('touchstart', cancelNavigation);
      window.removeEventListener('keydown', handleScrollKey);
    };
  }, []);

  return (
    <div className="portfolio-app min-h-screen bg-[#121318] text-[#e3e1e9] flex flex-col font-sans selection:bg-[var(--accent-strong)] selection:text-[#071722]">
      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="page-container pt-[72px] flex-1">
        <HeroSection
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
          onSelectProject={() => handleNavigate('projects')}
        />

        <ArchitectureSection />

        <AboutSection />

        <TechUniverseSection />

        <ProjectsSection
          onOpenDemo={(demo) => { setActiveDemo(demo); handleNavigate('playground'); }}
        />

        <AISystemsSection />

        <SystemsLabSection activeDemo={activeDemo} onSelectDemo={setActiveDemo} />

        <ExperienceSection />

        <ImpactSection />

        <TerminalSection />

        <EducationAndResumeSection
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        <ContactSection
          onOpenContactModal={() => setContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
