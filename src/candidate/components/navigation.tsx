"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { openCandidateApp, buildCandidateUrl, openCandidateRegister } from "../utils/urlBuilder";

interface CandidateNavigationProps {
  page: string;
  refQuery: string | null;
  lgQuery: string;
  setQueryLg: (query: string) => void;
  setShowLanguageModal: (show: boolean) => void;
}

export default function CandidateNavigation({
  page,
  refQuery,
  lgQuery,
  setQueryLg,
  setShowLanguageModal,
}: CandidateNavigationProps) {
  const [activeTab, setActiveTab] = useState("jobs");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();


  const handleLoginClick = () => {
    const loginUrl = buildCandidateUrl({ ref: refQuery || undefined, lg: lgQuery });
    window.open(loginUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGetStartedClick = () => {
    openCandidateRegister({ ref: refQuery || undefined, lg: lgQuery });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/candidate" className="text-2xl font-bold text-[#7d4b9e] hidden lg:block">
          {/* <img src='https://res.cloudinary.com/drlcisipo/image/upload/v1705704266/Website%20images/Moil_Logo_wfxno8.svg' alt="Moil Logo" className="w-16 h-8" /> */}
          <img src='https://res.cloudinary.com/drlcisipo/image/upload/v1705704261/Website%20images/logo_gox0fw.png' alt="Moil Logo" className="w-16 h-8" />
        </Link>
          
          {/* Navigation Tabs - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 bg-gray-100 rounded-full p-1 text-xs">
            <button 
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === "jobs" 
                  ? "bg-white text-[#5843BE] shadow-sm" 
                  : "text-gray-600 hover:text-[#5843BE]"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              I am looking for jobs
            </button>
            <Link
              href="/business"
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === "hire" 
                  ? "bg-white text-[#5843BE] shadow-sm" 
                  : "text-gray-600 hover:text-[#5843BE]"
              }`}
            >
              I want to hire workers
            </Link>
          </nav>

          {/* Section Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 text-xs">
            <a href="#ai-resume" className="px-3 py-2 text-gray-600 hover:text-[#5843BE] transition-colors">
              AI Resume
            </a>
            <a href="#voice-assistant" className="px-3 py-2 text-gray-600 hover:text-[#5843BE] transition-colors">
              Voice Assistant
            </a>
            <a href="#bilingual" className="px-3 py-2 text-gray-600 hover:text-[#5843BE] transition-colors">
              Bilingual
            </a>
          </div>

          {/* Header Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => setShowLanguageModal(true)}
              className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-[#5843BE] transition-colors"
            >
              <span>🌍</span>
              <span>ESP</span>
            </button>
            <Link 
              href="/business" 
              className="text-xs text-gray-600 hover:text-[#5843BE] transition-colors px-2 py-1"
            >
              Switch to Business
            </Link>
            <button 
              onClick={handleLoginClick}
              className="px-3 py-2 text-xs font-medium text-gray-700 hover:text-[#5843BE] transition-colors"
            >
              Login
            </button>
            <button 
              onClick={handleGetStartedClick}
              className="px-4 py-2 bg-gradient-to-r from-[#FF6633] to-[#ea580c] text-white text-xs font-medium rounded-full hover:from-[#ea580c] hover:to-[#FF6633] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#5843BE] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Tabs */}
              <div className="space-y-2">
                <button 
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === "jobs" 
                      ? "bg-[#5843BE] text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveTab("jobs");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  I am looking for jobs
                </button>
                <Link
                  href="/business"
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === "hire" 
                      ? "bg-[#5843BE] text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  I want to hire workers
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                <button 
                  onClick={() => {
                    setShowLanguageModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span>🌍</span>
                  <span>Change Language (ESP)</span>
                </button>
                <Link 
                  href="/business" 
                  className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Switch to Business
                </Link>
                <button 
                  onClick={() => {
                    handleLoginClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Login
                </button>
                <button 
                  onClick={() => {
                    handleGetStartedClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-[#FF6633] to-[#ea580c] text-white text-sm font-medium rounded-lg hover:from-[#ea580c] hover:to-[#FF6633] transition-all duration-300 text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
