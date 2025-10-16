"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import SelectLanguage from "../../src/common/components/selectLanguage";
import FooterSection from "../../src/common/sections/footer";

// Candidate Components
import CandidateNavigation from "../../src/candidate/components/navigation";
import CandidateHero from "../../src/candidate/sections/hero";
import AIResumeSection from "../../src/candidate/sections/ai_resume";
import VoiceAssistantSection from "../../src/candidate/sections/voice_assistant";
import BilingualSection from "../../src/candidate/sections/bilingual";
import StatsSection from "../../src/candidate/sections/stats";
import TestimonialsSection from "../../src/candidate/sections/testimonial_section";
import FAQSection from "../../src/candidate/sections/FAQ_section";
import NewsletterSection from "../../src/candidate/sections/newsletter";

export default function CandidatePage() {
  const [refQuery, setRefQuery] = useState<string | null>(null);
  const [queryLg, setQueryLg] = useState("");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    // Get URL parameters on client side
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    setRefQuery(searchParams.get('ref'));
    
    // Get lg parameter from URL
    const lgParam = searchParams.get('lg');
    if (lgParam) {
      setQueryLg(lgParam);
    }

    const tlang = localStorage.getItem("tlang");
    if (tlang == null) {
      setTimeout(() => {
        setShowLanguageModal(true);
      }, 50);
    }
  }, []);

  const handleGetStarted = () => {
    // Scroll to job search section or handle signup
    document.getElementById('job-search')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showModal = showLanguageModal ? createPortal(
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="top-0 left-0 fixed bottom-0 right-0 z-50 h-screen flex justify-center items-center md:bg-black md:bg-opacity-70 backdrop-blur-[2px] sm:bg-white vsm:bg-white overflow-y-scroll ScrollOnly"
    >
      <SelectLanguage handleClick={() => setShowLanguageModal(false)} setQueryLg={setQueryLg} />
    </motion.div>, document.getElementById("modal")!
  ) : null;

  return (
    <>
      <div className="bg-white">
        {/* Enhanced Candidate Landing Page */}
        <CandidateNavigation
          page="home"
          refQuery={refQuery}
          lgQuery={queryLg}
          setQueryLg={setQueryLg}
          setShowLanguageModal={setShowLanguageModal}
        />
        <CandidateHero onGetStarted={handleGetStarted} refQuery={refQuery || undefined} lgQuery={queryLg} />
        <div id="ai-resume">
          <AIResumeSection refQuery={refQuery || undefined} lgQuery={queryLg} />
        </div>
        <div id="voice-assistant">
          <VoiceAssistantSection refQuery={refQuery || undefined} lgQuery={queryLg} />
        </div>
        <div id="bilingual">
          <BilingualSection refQuery={refQuery || undefined} lgQuery={queryLg} />
        </div>
        <div id="stats">
          <StatsSection refQuery={refQuery || undefined} lgQuery={queryLg} />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <NewsletterSection />
        <FooterSection refQuery={refQuery} lgQuery={queryLg} />
        {showModal}
      </div>

      {/* Modal Container */}
      <div id="modal"></div>
    </>
  );
}