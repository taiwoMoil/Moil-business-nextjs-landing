"use client";

import { useState } from "react";
import { businessBaseUrl } from "../../common/constants/baseUrl";
import { openBusinessRegister } from "../utils/urlBuilder";

const services = [
  {
    id: "market-research",
    title: "AI Market Research",
    description: "Get deep insights into your market, competitors, and opportunities with our AI-powered research tools.",
    features: ["Competitor Analysis", "Market Trends", "Customer Insights", "Opportunity Mapping"],
    color: "from-[#5843BD] to-[#4a3ba0]",
    bgColor: "bg-[#5843BD]",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    id: "business-planning",
    title: "Smart Business Planning",
    description: "Create comprehensive business plans with AI assistance, financial projections, and strategic roadmaps.",
    features: ["Business Model Canvas", "Financial Projections", "Strategic Planning", "Risk Assessment"],
    color: "from-[#FF6633] to-[#e55a2b]",
    bgColor: "bg-[#FF6633]",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    id: "hiring-tools",
    title: "Intelligent Hiring",
    description: "Streamline your recruitment process with AI-powered candidate matching and assessment tools.",
    features: ["Resume Screening", "Skill Assessment", "Interview Scheduling", "Candidate Matching"],
    color: "from-[#5843BD] to-[#4a3ba0]",
    bgColor: "bg-[#5843BD]",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
      </svg>
    )
  },
  {
    id: "growth-analytics",
    title: "Growth Analytics",
    description: "Track your business performance with advanced analytics and predictive insights.",
    features: ["Performance Dashboards", "Predictive Analytics", "Growth Metrics", "ROI Tracking"],
    color: "from-[#FF6633] to-[#e55a2b]",
    bgColor: "bg-[#FF6633]",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>
    )
  }
];

interface MarketInsights {
  business: string;
  location: string;
  locData: {
    population: string;
    growth: string;
    avgIncome: string;
  };
  mktData: {
    size: string;
    spending: string;
    behavior: string;
  };
  bizData: {
    marketSize: string;
    growth: string;
    avgRevenue: string;
  };
  projectedRevenue: number;
}

const demoSections = [
  {
    id: "business-model",
    title: "Business Model",
    description: "Design and validate your business model with AI-powered canvas generation and analysis.",
    features: ["Value Proposition Design", "Revenue Streams", "Key Partnerships", "Cost Structure"],
    color: "#5843BD",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  },
  {
    id: "market-overview",
    title: "Market Overview",
    description: "Analyze your market size, competition, and opportunities with AI-powered research tools.",
    features: ["Market Size Analysis", "Customer Demographics", "Growth Trends", "Market Opportunities"],
    color: "#FF6633",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    id: "competitive-analysis",
    title: "Competitive Analysis",
    description: "Identify competitors and analyze their strengths, weaknesses, and market positioning.",
    features: ["Competitor Identification", "SWOT Analysis", "Market Gaps", "Pricing Strategy"],
    color: "#5843BD",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    )
  },
  {
    id: "financial-projections",
    title: "Financial Projections",
    description: "Calculate revenue, costs, and profitability forecasts with intelligent financial modeling.",
    features: ["Revenue Forecasting", "Cost Analysis", "Break-even Calculation", "ROI Projections"],
    color: "#FF6633",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    )
  },
  {
    id: "market-audience",
    title: "Market & Audience",
    description: "Define your target audience and develop customer acquisition strategies.",
    features: ["Target Segmentation", "Customer Personas", "Acquisition Channels", "Marketing Mix"],
    color: "#5843BD",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm7.5-2v-4h1v-4c0-.8-.7-1.5-1.5-1.5h-2c-.8 0-1.5.7-1.5 1.5v4h1v4h3z"/>
      </svg>
    )
  }
];

interface ServicesShowcaseProps {
  refQuery?: string;
  lgQuery?: string;
}

export default function ServicesShowcase({ refQuery, lgQuery }: ServicesShowcaseProps) {
  const [activeTab, setActiveTab] = useState("demo");
  const [activeService, setActiveService] = useState("market-research");
  const [activeDemoSection, setActiveDemoSection] = useState("business-model");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("austin");
  const [targetMarket, setTargetMarket] = useState("young-professionals");
  const [showResults, setShowResults] = useState(false);
  const [insights, setInsights] = useState<MarketInsights | null>(null);

  const generateMarketInsights = (business: string, location: string, market: string): MarketInsights => {
    const locationData: Record<string, any> = {
      'austin': { population: '2.3M', growth: '15%', avgIncome: '$85K' },
      'dallas': { population: '7.8M', growth: '14%', avgIncome: '$70K' },
      'houston': { population: '7.1M', growth: '12%', avgIncome: '$68K' },
      'sanantonio': { population: '2.6M', growth: '10%', avgIncome: '$60K' },
      'other': { population: '1.2M', growth: '8%', avgIncome: '$65K' }
    };

    const marketData: Record<string, any> = {
      'young-professionals': { size: '340K', spending: '$45K/year', behavior: 'values convenience and quality' },
      'families': { size: '180K', spending: '$65K/year', behavior: 'price-conscious but quality-focused' },
      'seniors': { size: '120K', spending: '$35K/year', behavior: 'values personal service' },
      'students': { size: '85K', spending: '$15K/year', behavior: 'highly price-sensitive' },
      'businesses': { size: '25K', spending: '$150K/year', behavior: 'seeks efficiency and ROI' },
      'tourists': { size: '2.5M/year', spending: '$800/visit', behavior: 'experience-focused' }
    };

    const businessTypes: Record<string, any> = {
      'coffee': { marketSize: '$2.8B', growth: '7%', avgRevenue: '$85K' },
      'food': { marketSize: '$127M', growth: '18%', avgRevenue: '$180K' },
      'salon': { marketSize: '$890M', growth: '5%', avgRevenue: '$95K' },
      'tech': { marketSize: '$15.2B', growth: '23%', avgRevenue: '$250K' },
      'construction': { marketSize: '$45.3B', growth: '12%', avgRevenue: '$320K' },
      'retail': { marketSize: '$1.2B', growth: '8%', avgRevenue: '$120K' }
    };

    let businessCategory = 'retail';
    const businessLower = business.toLowerCase();
    if (businessLower.includes('coffee')) businessCategory = 'coffee';
    else if (businessLower.includes('food') || businessLower.includes('restaurant')) businessCategory = 'food';
    else if (businessLower.includes('salon') || businessLower.includes('beauty')) businessCategory = 'salon';
    else if (businessLower.includes('tech') || businessLower.includes('software')) businessCategory = 'tech';
    else if (businessLower.includes('construction') || businessLower.includes('contractor')) businessCategory = 'construction';

    const locData = locationData[location] || locationData['austin'];
    const mktData = marketData[market] || marketData['young-professionals'];
    const bizData = businessTypes[businessCategory];

    const projectedRevenue = Math.floor(parseInt(bizData.avgRevenue.replace('$', '').replace('K', '')) * (0.8 + Math.random() * 0.4));

    return { business, location, locData, mktData, bizData, projectedRevenue };
  };

  const handleGenerateResearch = () => {
    const businessValue = businessType || 'Restaurant';
    const generatedInsights = generateMarketInsights(businessValue, location, targetMarket);
    setInsights(generatedInsights);
    setShowResults(true);
  };

  return (
    <section className="relative overflow-hidden py-24" id="services">
      {/* Illustrated Background with Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FF6633]/5 to-white"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5843BD]/3 via-transparent to-[#FF6633]/3"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-[#5843BD]/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-24 w-32 h-32 bg-gradient-to-br from-[#FF6633]/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-24 left-1/4 w-48 h-48 bg-gradient-to-br from-[#5843BD]/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-16 right-16 w-36 h-36 bg-gradient-to-br from-[#FF6633]/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-[#5843BD]/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#FF6633]/25 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-5 h-5 bg-[#5843BD]/15 rounded-full animate-bounce" style={{ animationDelay: '5s' }}></div>
      
      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-[#5843BD]/20 rounded-full text-sm font-bold mb-8 text-[#5843BD] shadow-xl">
            <div className="w-2 h-2 bg-[#FF6633] rounded-full animate-pulse"></div>
            Our Premium Services
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-tight">
            Complete Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5843BD] to-[#FF6633]">
              Growth Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Transform your business with our AI-powered platform. From market research to hiring, 
            we provide everything you need to scale and succeed.
          </p>
        </div>

        {/* Tab Navigation - Sophisticated Design */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-gradient-to-r from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl p-1.5 border border-gray-200/60 shadow-2xl">
            {/* Animated Background Indicator */}
            <div 
              className={`absolute top-1.5 h-[calc(100%-12px)] rounded-2xl bg-gradient-to-br transition-all duration-500 ease-out shadow-lg ${
                activeTab === "demo" 
                  ? "left-1.5 w-[calc(50%-6px)] from-[#5843BD] via-[#6b52d4] to-[#5843BD]" 
                  : "left-[calc(50%+1.5px)] w-[calc(50%-6px)] from-[#FF6633] via-[#ff7d52] to-[#FF6633]"
              }`}
              style={{
                boxShadow: activeTab === "demo" 
                  ? "0 8px 32px rgba(88, 67, 189, 0.4), 0 0 0 1px rgba(88, 67, 189, 0.1)"
                  : "0 8px 32px rgba(255, 102, 51, 0.4), 0 0 0 1px rgba(255, 102, 51, 0.1)"
              }}
            />
            
            <div className="relative flex gap-2">
              {/* Demo Tab */}
              <button
                onClick={() => setActiveTab("demo")}
                className={`relative px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 group ${
                  activeTab === "demo"
                    ? "text-white scale-105"
                    : "text-gray-700 hover:text-[#5843BD] hover:scale-102"
                }`}
              >
                <div className={`relative transition-all duration-500 ${
                  activeTab === "demo" ? "scale-110" : "scale-100 group-hover:scale-110"
                }`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  {activeTab === "demo" && (
                    <div className="absolute -inset-1 bg-white/30 rounded-full blur-md animate-pulse"></div>
                  )}
                </div>
                <span className="text-lg">Interactive Demo</span>
                {activeTab === "demo" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6633] rounded-full animate-pulse"></div>
                )}
              </button>

              {/* Services Tab */}
              <button
                onClick={() => setActiveTab("services")}
                className={`relative px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 group ${
                  activeTab === "services"
                    ? "text-white scale-105"
                    : "text-gray-700 hover:text-[#FF6633] hover:scale-102"
                }`}
              >
                <div className={`relative transition-all duration-500 ${
                  activeTab === "services" ? "scale-110" : "scale-100 group-hover:scale-110"
                }`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  {activeTab === "services" && (
                    <div className="absolute -inset-1 bg-white/30 rounded-full blur-md animate-pulse"></div>
                  )}
                </div>
                <span className="text-lg">Our Services</span>
                {activeTab === "services" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#5843BD] rounded-full animate-pulse"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "demo" && (
          <div className="grid lg:grid-cols-2 items-center gap-16 mb-20">
            {/* Demo Sections Navigation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Choose Demo Section</h3>
              {demoSections.map((section, index) => (
                <div
                  key={section.id}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeDemoSection === section.id 
                      ? 'scale-105' 
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveDemoSection(section.id)}
                >
                  <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
                    activeDemoSection === section.id 
                      ? `border-[${section.color}] shadow-2xl` 
                      : 'border-gray-200/50 hover:border-gray-300 hover:shadow-xl'
                  }`}>
                    <div className="flex items-start gap-5">
                      <div className={`flex-shrink-0 p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{backgroundColor: section.color}}>
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          activeDemoSection === section.id ? `text-gray-800` : 'text-gray-800 group-hover:text-gray-900'
                        }`}>
                          {section.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {section.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {section.features.slice(0, 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                              {feature}
                            </span>
                          ))}
                          <span className="px-3 py-1 text-xs font-medium rounded-full" style={{backgroundColor: section.color + '20', color: section.color}}>
                            +{section.features.length - 2} more
                          </span>
                        </div>
                      </div>
                    </div>
                    {activeDemoSection === section.id && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: section.color}}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Panel */}
            <div className="relative">
              <div className="sticky top-8">
                {demoSections.map((section) => (
                  activeDemoSection === section.id && (
                    <div key={section.id} className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200/50 shadow-2xl">
                      {/* Section Header */}
                      <div className="text-center mb-8">
                        <div className="inline-flex p-6 rounded-2xl text-white mb-6 shadow-xl" style={{backgroundColor: section.color}}>
                          {section.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">{section.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {section.description}
                        </p>
                      </div>

                      {/* Demo Form based on section */}
                      {section.id === "business-model" && (
                        <div className="space-y-6">
                          <div className="grid gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
                              <input
                                type="text"
                                value={businessType}
                                onChange={(e) => setBusinessType(e.target.value)}
                                placeholder="e.g., SaaS Platform, E-commerce Store"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Revenue Model</label>
                              <select className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors">
                                <option>Subscription</option>
                                <option>One-time Purchase</option>
                                <option>Freemium</option>
                                <option>Commission-based</option>
                              </select>
                            </div>
                          </div>
                          <button
                            className="w-full text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300"
                            style={{backgroundColor: section.color}}
                            onClick={() => openBusinessRegister({ ref: refQuery, lg: lgQuery })}
                          >
                            Generate Business Model Canvas
                          </button>
                          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-700 space-y-2">
                              <div><span className="font-semibold">Value Proposition:</span> AI-powered business solutions</div>
                              <div><span className="font-semibold">Key Partners:</span> Technology providers, consultants</div>
                              <div><span className="font-semibold">Revenue Streams:</span> Subscription + consulting fees</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === "market-overview" && (
                        <div className="space-y-6">
                          <div className="grid gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
                              <input
                                type="text"
                                value={businessType}
                                onChange={(e) => setBusinessType(e.target.value)}
                                placeholder="e.g., Coffee Shop, Tech Startup"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                              <select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              >
                                <option value="austin">Austin, TX</option>
                                <option value="dallas">Dallas, TX</option>
                                <option value="houston">Houston, TX</option>
                                <option value="sanantonio">San Antonio, TX</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Target Market</label>
                              <select
                                value={targetMarket}
                                onChange={(e) => setTargetMarket(e.target.value)}
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              >
                                <option value="young-professionals">Young Professionals (25-35)</option>
                                <option value="families">Families with Children</option>
                                <option value="seniors">Seniors (55+)</option>
                                <option value="students">College Students</option>
                              </select>
                            </div>
                          </div>
                          <button
                            onClick={handleGenerateResearch}
                            className="w-full text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300"
                            style={{backgroundColor: section.color}}
                          >
                            Generate Market Analysis
                          </button>
                          {showResults && insights && (
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                              <div className="text-sm text-gray-700 space-y-2">
                                <div><span className="font-semibold">Market Size:</span> {insights.bizData.marketSize}</div>
                                <div><span className="font-semibold">Growth Rate:</span> {insights.bizData.growth} annually</div>
                                <div><span className="font-semibold">Target Customers:</span> {insights.mktData.size}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {section.id === "financial-projections" && (
                        <div className="space-y-6">
                          <div className="grid gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Investment ($)</label>
                              <input
                                type="number"
                                placeholder="50000"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Operating Costs ($)</label>
                              <input
                                type="number"
                                placeholder="8000"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Monthly Revenue ($)</label>
                              <input
                                type="number"
                                placeholder="15000"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              />
                            </div>
                          </div>
                          <button
                            className="w-full text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300"
                            style={{backgroundColor: section.color}}
                            onClick={() => openBusinessRegister({ ref: refQuery, lg: lgQuery })}
                          >
                            Calculate Projections
                          </button>
                          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-700 space-y-2">
                              <div className="flex justify-between">
                                <span className="font-semibold">Year 1 Revenue:</span>
                                <span className="font-bold" style={{color: section.color}}>$180K</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-semibold">Break-even:</span>
                                <span className="text-green-600 font-bold">Month 9</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-semibold">ROI Year 1:</span>
                                <span className="font-bold" style={{color: section.color}}>24%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === "competitive-analysis" && (
                        <div className="space-y-6">
                          <div className="grid gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                              <select className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors">
                                <option>Food & Beverage</option>
                                <option>Technology</option>
                                <option>Retail</option>
                                <option>Services</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Service Area</label>
                              <input
                                type="text"
                                placeholder="5 mile radius"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Key Competitors (select multiple)</label>
                              <div className="space-y-2">
                                {["Starbucks", "Local Coffee Shop", "Dunkin'", "Independent Cafe"].map((competitor) => (
                                  <label key={competitor} className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm">{competitor}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                          <button
                            className="w-full text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300"
                            style={{backgroundColor: section.color}}
                            onClick={() => openBusinessRegister({ ref: refQuery, lg: lgQuery })}
                          >
                            Analyze Competitors
                          </button>
                          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-700 space-y-2">
                              <div className="font-semibold mb-2">Analysis Results:</div>
                              <div>• 3 Direct competitors identified</div>
                              <div>• 9 Indirect competitors found</div>
                              <div className="font-semibold mt-2" style={{color: section.color}}>Market gap identified in premium segment</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === "market-audience" && (
                        <div className="space-y-6">
                          <div className="grid gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Target Audience</label>
                              <select
                                value={targetMarket}
                                onChange={(e) => setTargetMarket(e.target.value)}
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              >
                                <option value="young-professionals">Young Professionals</option>
                                <option value="families">Families</option>
                                <option value="seniors">Seniors</option>
                                <option value="students">Students</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Marketing Budget ($)</label>
                              <input
                                type="number"
                                placeholder="5000"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Channels (select multiple)</label>
                              <div className="space-y-2">
                                {["Social Media", "Google Ads", "Local Events", "Email Marketing", "Referrals"].map((channel) => (
                                  <label key={channel} className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm">{channel}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                          <button
                            className="w-full text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300"
                            style={{backgroundColor: section.color}}
                            onClick={() => openBusinessRegister({ ref: refQuery, lg: lgQuery })}
                          >
                            Generate Strategy
                          </button>
                          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-700 space-y-2">
                              <div className="font-semibold mb-2">Recommended Strategy:</div>
                              <div>• Social Media (40% budget)</div>
                              <div>• Google Ads (30% budget)</div>
                              <div>• Local Events (20% budget)</div>
                              <div>• Referrals (10% budget)</div>
                              <div className="font-semibold mt-2" style={{color: section.color}}>Expected: 150 new customers/month</div>
                            </div>
                          </div>
                        </div>
                      )}


                      {/* Action Buttons */}
                      <div className="flex gap-4 mt-8">
                        <button 
                          className="flex-1 py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
                          style={{backgroundColor: section.color}}
                          onClick={() => window.open(businessBaseUrl, '_blank')}
                        >
                          Get Full Analysis
                        </button>
                        <button 
                          className="flex-1 py-4 px-6 rounded-xl font-bold transition-all duration-300"
                          style={{color: section.color, backgroundColor: section.color + '20'}}
                          onClick={() => window.open(businessBaseUrl, '_blank')}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="grid lg:grid-cols-2 items-center gap-16 mb-20">
            {/* Services Navigation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Choose Your Service</h3>
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeService === service.id 
                      ? 'scale-105' 
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
                    activeService === service.id 
                      ? 'border-[#5843BD] shadow-2xl shadow-[#5843BD]/20' 
                      : 'border-gray-200/50 hover:border-[#FF6633]/30 hover:shadow-xl'
                  }`}>
                    <div className="flex items-start gap-5">
                      <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          activeService === service.id ? 'text-[#5843BD]' : 'text-gray-800 group-hover:text-[#FF6633]'
                        }`}>
                          {service.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                              {feature}
                            </span>
                          ))}
                          <span className="px-3 py-1 bg-[#5843BD]/10 text-[#5843BD] text-xs font-medium rounded-full">
                            +{service.features.length - 2} more
                          </span>
                        </div>
                      </div>
                    </div>
                    {activeService === service.id && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#5843BD] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details Panel */}
            <div className="relative">
              <div className="sticky top-8">
                {services.map((service) => (
                  activeService === service.id && (
                    <div key={service.id} className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200/50 shadow-2xl">
                      <div className="text-center mb-8">
                        <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-xl`}>
                          {service.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="space-y-4 mb-8">
                        <h4 className="text-xl font-bold text-gray-800">What's Included:</h4>
                        <div className="grid gap-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50/80 rounded-xl border border-gray-200/50">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}>
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                              </div>
                              <span className="font-semibold text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button 
                          className={`flex-1 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${service.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}
                          onClick={() => window.open(businessBaseUrl, '_blank')}
                        >
                          Get Started Now
                        </button>
                        <button 
                          className="flex-1 py-4 px-6 rounded-xl font-bold text-[#5843BD] bg-[#5843BD]/10 hover:bg-[#5843BD]/20 transition-all duration-300"
                          onClick={() => window.open(businessBaseUrl, '_blank')}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Guarantee Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* 30-Day Hiring Guarantee */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5843BD] to-[#4a3ba0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">30-Day Hiring Guarantee</h3>
            <p className="text-gray-600 leading-relaxed">
              Get quality candidates within 30 days or receive a full refund. We're confident in our AI matching.
            </p>
          </div>

          {/* Enterprise Security */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF6633] to-[#e55a2b] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise Security</h3>
            <p className="text-gray-600 leading-relaxed">
              SOC 2 compliant with bank-level encryption. Trusted by growing businesses worldwide.
            </p>
          </div>

          {/* Free To Start */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5843BD] to-[#4a3ba0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Free To Start</h3>
            <p className="text-gray-600 leading-relaxed">
              Post your first job completely free. No credit card required to see how our AI works.
            </p>
          </div>
        </div>

        {/* Market Research & Business Planning CTA - Sophisticated Design */}
        <div className="relative bg-gradient-to-br from-[#5843BD] via-[#4a3ba0] to-[#3d2f85] rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute top-1/3 right-20 w-48 h-48 bg-[#FF6633]/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
            </div>
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="relative z-10 p-16">
            {/* Header with Badge */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold mb-8 text-white shadow-lg">
                <div className="w-2 h-2 bg-[#FF6633] rounded-full animate-pulse"></div>
                <span>Premium Research Service</span>
                <div className="px-3 py-1 bg-[#FF6633] rounded-full text-xs">97% Accuracy</div>
              </div>
              <h3 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Market Research &<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF6633] to-white">
                  Business Planning
                </span>
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Perfect for entrepreneurs and business owners validating ideas or seeking funding
              </p>
            </div>

            {/* Pricing Comparison - Enhanced Layout */}
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch max-w-6xl mx-auto mb-16">
              {/* Traditional Consultants */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full text-xs font-bold text-red-200 mb-6">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
                      </svg>
                      Old Method
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-6">Traditional<br/>Consultants</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3 text-white/70">
                        <svg className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm">2-4 weeks waiting time</span>
                      </div>
                      <div className="flex items-start gap-3 text-white/70">
                        <svg className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm">Limited revisions</span>
                      </div>
                      <div className="flex items-start gap-3 text-white/70">
                        <svg className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm">Generic templates</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-5xl font-black text-red-300 mb-2">$5,000<span className="text-2xl">+</span></div>
                    <p className="text-white/60 text-sm font-medium">Per project</p>
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="flex items-center justify-center lg:px-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6633] to-[#5843BD] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center border-2 border-white/30 shadow-2xl">
                    <span className="text-3xl font-black text-white">VS</span>
                  </div>
                </div>
              </div>

              {/* Moil AI Research */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6633] to-[#e55a2b] rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" style={{animationDuration: '3s'}}></div>
                <div className="relative bg-gradient-to-br from-[#FF6633] to-[#e55a2b] rounded-3xl p-10 border-2 border-white/30 shadow-2xl h-full flex flex-col transform hover:scale-105 transition-all duration-300">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-xs font-bold text-white mb-6">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      AI-Powered
                    </div>
                    <h4 className="text-3xl font-black text-white mb-6">Moil AI<br/>Research</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3 text-white">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-semibold">Instant results in minutes</span>
                      </div>
                      <div className="flex items-start gap-3 text-white">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-semibold">Unlimited revisions</span>
                      </div>
                      <div className="flex items-start gap-3 text-white">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-semibold">Personalized insights</span>
                      </div>
                      <div className="flex items-start gap-3 text-white">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-semibold">Investor-ready format</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <div className="flex items-baseline gap-2 mb-4">
                      <div className="text-6xl font-black text-white">$150</div>
                      <div className="text-white/80 text-sm font-medium">one-time</div>
                    </div>
                    <button 
                      className="w-full bg-white text-[#FF6633] py-5 px-8 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 flex items-center justify-center gap-3 group"
                      onClick={() => window.open(businessBaseUrl, '_blank')}
                    >
                      <span className="text-sm font-medium">Get Your Market Research</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <p className="text-white/70 text-xs text-center mt-4">🔒 Secure payment • 30-day money-back guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Benefits - Enhanced Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                    </svg>
                  </div>
                  <h5 className="text-white font-bold text-lg mb-3">Instant Analysis</h5>
                  <p className="text-white/80 text-sm leading-relaxed">Get comprehensive market research in minutes, not weeks</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h5 className="text-white font-bold text-lg mb-3">AI-Powered Insights</h5>
                  <p className="text-white/80 text-sm leading-relaxed">Advanced algorithms analyze thousands of data points</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 2v6h4l-5 7V9H4l5-7zm11 11h-4l3 4.5V22h-3v-4.5l3-4.5z"/>
                    </svg>
                  </div>
                  <h5 className="text-white font-bold text-lg mb-3">Investor Ready</h5>
                  <p className="text-white/80 text-sm leading-relaxed">Professional reports formatted for funding presentations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
