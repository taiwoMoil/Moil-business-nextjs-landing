"use client";

import { useEffect } from "react";
import HeroSection from "../../../src/business/planner/components/HeroSection";
import FeaturesSection from "../../../src/business/planner/components/FeaturesSection";
import TestimonialsSection from "../../../src/business/planner/components/TestimonialsSection";
import ProcessSection from "../../../src/business/planner/components/ProcessSection";
import UrgencySection from "../../../src/business/planner/components/UrgencySection";
import GuaranteeSection from "../../../src/business/planner/components/GuaranteeSection";
import FloatingChat from "../../../src/business/planner/components/FloatingChat";
import LanguageToggle from "../../../src/business/planner/components/LanguageToggle";
import { LanguageProvider } from "../../../src/business/planner/contexts/LanguageContext";

export default function PlanPage() {
  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <LanguageToggle />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ProcessSection />
        <UrgencySection />
        <GuaranteeSection />
        <FloatingChat />
      </main>
    </LanguageProvider>
  );
}
