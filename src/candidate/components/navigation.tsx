"use client";

import { useState } from "react";
import Link from "next/link";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5843BE] to-[#4a3ba0] rounded-xl flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#5843BE] leading-none">moil</span>
              <span className="text-xs text-[#FF6633] font-medium leading-none">Find Your Career</span>
            </div>
          </Link>
          
          {/* Navigation Tabs - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 bg-gray-100 rounded-full p-1">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "jobs" 
                  ? "bg-white text-[#5843BE] shadow-sm" 
                  : "text-gray-600 hover:text-[#5843BE]"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              I am looking for jobs
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "hire" 
                  ? "bg-white text-[#5843BE] shadow-sm" 
                  : "text-gray-600 hover:text-[#5843BE]"
              }`}
              onClick={() => setActiveTab("hire")}
            >
              I want to hire workers
            </button>
          </nav>

          {/* Header Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => setShowLanguageModal(true)}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-[#5843BE] transition-colors"
            >
              <span>🌍</span>
              <span>ESP</span>
            </button>
            <Link 
              href="/business" 
              className="text-sm text-gray-600 hover:text-[#5843BE] transition-colors"
            >
              Switch to Business
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#5843BE] transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 bg-gradient-to-r from-[#FF6633] to-[#ea580c] text-white text-sm font-medium rounded-full hover:from-[#ea580c] hover:to-[#FF6633] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
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
                <button 
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === "hire" 
                      ? "bg-[#5843BE] text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveTab("hire");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  I want to hire workers
                </button>
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
                <Link 
                  href="/login" 
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="block w-full px-6 py-3 bg-gradient-to-r from-[#FF6633] to-[#ea580c] text-white text-sm font-medium rounded-lg hover:from-[#ea580c] hover:to-[#FF6633] transition-all duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
