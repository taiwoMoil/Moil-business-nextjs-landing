"use client";

import { useState } from "react";

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

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState("market-research");

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

        {/* Main Services Display */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
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
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        activeService === service.id ? 'text-[#5843BD]' : 'text-gray-800 group-hover:text-[#FF6633]'
                      }`}>
                        {service.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Feature Preview */}
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
                  
                  {/* Active Indicator */}
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
                    {/* Service Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-xl`}>
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Features Grid */}
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
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className={`flex-1 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${service.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                        Get Started Now
                      </button>
                      <button className="flex-1 py-4 px-6 rounded-xl font-bold text-[#5843BD] bg-[#5843BD]/10 hover:bg-[#5843BD]/20 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Simple & Elegant CTA */}
        <div className="text-center bg-[#5843BD] text-white rounded-2xl p-16 border border-gray-100 shadow-lg">
          <h3 className="text-4xl font-bold mb-6">
            Ready to grow your business?
          </h3>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses transforming their operations with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ff5633] hover:bg-[#ff5633] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
