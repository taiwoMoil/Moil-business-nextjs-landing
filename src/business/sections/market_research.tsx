"use client";

import { useState, useEffect } from "react";

const researchHighlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>
    ),
    title: "Market Size Analysis",
    description: "TAM, SAM, SOM calculations with growth projections"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Customer Personas",
    description: "Detailed buyer profiles with demographics & behaviors"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Competitive Analysis",
    description: "Competitor mapping with pricing & positioning insights"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Financial Models",
    description: "Revenue projections, cost structure & funding needs"
  }
];

const businessPlanSteps = [
  {
    id: 1,
    title: "Business Overview",
    description: "Analyzing your business model and core value proposition",
    image: "business_overview.png",
    color: "from-[#5843BD] to-[#4a3ba0]",
    duration: "2 min",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 2h8v2H6V6zm0 4h8v2H6v-2z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Market & Audience",
    description: "Identifying target market and customer segments",
    image: "market_audience.png",
    color: "from-[#FF6633] to-[#e55a2b]",
    duration: "3 min",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Competitive Analysis",
    description: "Mapping competitors and market positioning",
    image: "competitor.png",
    color: "from-[#5843BD] to-[#FF6633]",
    duration: "4 min",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Financial Projections",
    description: "Creating revenue models and funding requirements",
    image: "financials.png",
    color: "from-[#FF6633] to-[#5843BD]",
    duration: "3 min",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Business Model",
    description: "Finalizing your complete business strategy",
    image: "business_model.png",
    color: "from-[#5843BD] to-[#4a3ba0]",
    duration: "2 min",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
      </svg>
    )
  }
];

export default function MarketResearch() {
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("austin");
  const [targetMarket, setTargetMarket] = useState("young-professionals");
  const [showResults, setShowResults] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev >= 5 ? 1 : prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generateSampleResearch = () => {
    setShowResults(true);
  };

  return (
    <section className="relative py-32 overflow-hidden" id="research">
      {/* Sophisticated White to Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#5843BD]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#5843BD]/5 to-[#5843BD]/10"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `
            linear-gradient(rgba(88, 67, 189, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88, 67, 189, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* Animated Illustration Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#5843BD]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-24 w-32 h-32 bg-gradient-to-br from-[#FF6633]/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-24 left-1/4 w-48 h-48 bg-gradient-to-br from-[#5843BD]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-[#FF6633]/12 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-[#5843BD]/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#FF6633]/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-5 h-5 bg-[#5843BD]/25 rounded-full animate-bounce" style={{ animationDelay: '5s' }}></div>
      
      {/* Floating Icons */}
      <div className="absolute top-32 right-1/4 text-[#5843BD]/20 animate-bounce" style={{ animationDelay: '2s' }}>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-1/4 text-[#FF6633]/20 animate-bounce" style={{ animationDelay: '4s' }}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium mb-6 text-gray-700 shadow-sm">
            <div className="w-2 h-2 bg-[#5843BD] rounded-full"></div>
            AI-Powered Research
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Complete Business Plan{" "}
            <span className="text-[#5843BD]">in Minutes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Skip expensive consultants and months of research. Our AI generates comprehensive 
            business plans that helped 200+ businesses secure funding and make informed decisions.
          </p>
        </div>

        {/* Research Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {researchHighlights.map((highlight, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#5843BD] rounded-lg flex items-center justify-center text-white mb-4 group-hover:bg-[#FF6633] transition-colors duration-300">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Business Plan Steps - Sophisticated Timeline Design */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Business Plan Generation Process
            </h3>
            <p className="text-gray-600">An elegant, step-by-step journey to your complete business plan</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 lg:left-1/2 lg:-translate-x-1/2"></div>

            {businessPlanSteps.map((step, index) => {
              const isCompleted = activeStep > step.id;
              const isActive = activeStep === step.id;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-center mb-8 w-full cursor-pointer group ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white ring-4 transition-all duration-300 lg:left-1/2 lg:-translate-x-1/2 z-10 ${
                    isActive ? 'ring-[#5843BD] bg-[#5843BD]' : isCompleted ? 'ring-gray-400 bg-gray-400' : 'ring-gray-300 bg-gray-300'
                  }`}>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                    isEven ? 'lg:mr-[calc(50%+2rem)]' : 'lg:ml-[calc(50%+2rem)]'
                  }`}>
                    <div className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-[#FF6633] ${
                      isActive ? 'border-[#5843BD] shadow-lg' : 'border-gray-200'
                    }`}>
                      <div className={`flex items-center justify-between mb-2 ${
                        isEven ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                          isActive ? 'text-[#5843BD]' : 'text-gray-900 group-hover:text-[#FF6633]'
                        }`}>
                          {step.title}
                        </h4>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          isActive ? 'bg-[#5843BD]/10 text-[#5843BD]' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Demo - Sophisticated Redesign */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Prominent Image Section */}
            <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 h-full flex items-center justify-center">
              <img 
                src={`/${businessPlanSteps[activeStep - 1]?.image}`} 
                alt={businessPlanSteps[activeStep - 1]?.title}
                className="aspect-[] max-w-full object-contain filter drop-shadow-2xl transition-all duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute top-6 right-6 bg-[#5843BD] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Step {activeStep} / 5
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {businessPlanSteps[activeStep - 1]?.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {businessPlanSteps[activeStep - 1]?.description}
              </p>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2 text-sm font-medium">
                  <span className="text-gray-600">AI Analysis</span>
                  <span className="text-[#5843BD]">{activeStep * 20}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-gradient-to-r from-[#5843BD] to-[#FF6633] transition-all duration-700"
                    style={{ width: `${(activeStep / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Demo Features */}
              <div className="space-y-3">
                {activeStep === 1 && (
                  <>
                    <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#5843BD] rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium">Scanning business model...</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#5843BD] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-gray-700 font-medium">Analyzing value proposition...</span>
                    </div>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#FF6633] rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium">Identifying target demographics</span>
                    </div>
                     <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#FF6633] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-gray-700 font-medium">Analyzing market size: $2.4B</span>
                    </div>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#5843BD] rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium">Mapping 12 direct competitors</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#5843BD] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-gray-700 font-medium">Analyzing pricing strategies</span>
                    </div>
                  </>
                )}
                {activeStep === 4 && (
                  <>
                    <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#FF6633] rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium">Creating 5-year revenue model</span>
                    </div>
                     <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#FF6633] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-gray-700 font-medium">ROI projections: 340% in 3 years</span>
                    </div>
                  </>
                )}
                {activeStep === 5 && (
                  <>
                    <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#5843BD] rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium">Generating executive summary</span>
                    </div>
                     <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-gray-200/50 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-[#5843BD] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-gray-700 font-medium">Finalizing business strategy</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Clean CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#5843BD] hover:bg-[#4a3ba0] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Generate My Business Plan
          </button>
          <p className="text-gray-600 mt-4">Complete business plan ready in under 15 minutes</p>
        </div>
      </div>
    </section>
  );
}
