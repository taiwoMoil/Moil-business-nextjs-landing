"use client";

import { openBusinessRegister } from "../utils/urlBuilder";

const hiringHighlights = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
      </svg>
    ),
    title: "Smart Job Distribution",
    description: "Auto-posting to 10+ Facebook groups, 3x weekly for maximum reach",
    metric: "10+ Groups",
    gradient: "from-[#5843BD] to-purple-600"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
      </svg>
    ),
    title: "AI Candidate Matching",
    description: "Skills analysis, location scoring, and 95% match confidence ratings",
    metric: "95% Accuracy",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Auto-Generated Skill Tests",
    description: "Custom assessments based on job requirements to screen candidates",
    metric: "2 Min Setup",
    gradient: "from-[#FF6633] to-orange-600"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>
    ),
    title: "Real-Time Tracking",
    description: "Application dashboard with interview scheduling and analytics",
    metric: "Live Updates",
    gradient: "from-purple-500 to-pink-600"
  }
];

const featureShowcase = [
  {
    icon: (
      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
      </svg>
    ),
    title: "Social Media Reach",
    description: "Austin Jobs, Round Rock Hiring, Cedar Park Opportunities, Local Tech Jobs...",
    detail: "Weekly Distribution: Monday: Initial post • Wednesday: Highlight skills • Friday: Deadline reminder",
    gradient: "from-[#5843BD] to-purple-600"
  },
  {
    icon: (
      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
      </svg>
    ),
    title: "AI Candidate Matching",
    description: "95% match: Perfect fit • 85% match: Strong candidate • 75% match: Worth reviewing",
    detail: "Skills Analysis + Location Scoring + Experience Match",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: (
      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>
    ),
    title: "2-Minute Job Posting",
    description: "AI generates job descriptions, roles, and required skills automatically",
    detail: "Just enter job title → AI creates everything else",
    gradient: "from-[#FF6633] to-orange-600"
  }
];

const stats = [
  { number: "5x", label: "Faster than Indeed" },
  { number: "94%", label: "Interview success rate" },
  { number: "5,000+", label: "Jobs posted monthly" }
];

interface SmartHiringProps {
  refQuery?: string;
  lgQuery?: string;
}

export default function SmartHiring({ refQuery, lgQuery }: SmartHiringProps) {
  const handleGenerateBusinessPlan = () => {
    openBusinessRegister({ ref: refQuery, lg: lgQuery });
  };
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-[#FF6633]/20" id="hiring">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#5843BD]/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#FF6633]/15 via-transparent to-transparent"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5843BD08_1px,transparent_1px),linear-gradient(to_bottom,#5843BD08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#5843BD]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6633]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#5843BD]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/70 backdrop-blur-xl border border-[#5843BD]/20 rounded-full text-sm font-medium mb-8 text-[#5843BD] shadow-lg">
            <div className="w-2 h-2 bg-[#FF6633] rounded-full animate-pulse"></div>
            AI-Powered Hiring
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#5843BD] via-purple-600 to-[#5843BD] bg-clip-text text-transparent">Smart </span>
            <span className="bg-gradient-to-r from-[#FF6633] via-orange-500 to-[#FF6633] bg-clip-text text-transparent">Hiring Platform</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AI-powered recruiting tools that find, screen, and match the best local talent. 
            Post once, reach everywhere with automated distribution to 10+ groups per city.
          </p>
        </div>

        {/* Feature Cards Grid - Premium Design */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {hiringHighlights.map((highlight, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 hover:border-[#5843BD]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                {/* Animated Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5843BD]/0 via-[#5843BD]/5 to-[#FF6633]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="scale-125">
                        {highlight.icon}
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-[#FF6633]/10 border border-[#FF6633]/30 text-[#FF6633] text-sm font-bold rounded-full backdrop-blur-sm">
                      {highlight.metric}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-[#5843BD] mb-3">{highlight.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#FF6633]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Showcase - Premium Bento Grid Style */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#5843BD] mb-6">Platform Features</h3>
            <p className="text-gray-600 text-lg">See how our AI streamlines your entire hiring process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featureShowcase.map((feature, index) => (
              <div key={index} className="group relative bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-white/60 hover:border-[#5843BD]/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5843BD]/0 via-[#5843BD]/5 to-[#FF6633]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="scale-150">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h5 className="text-xl font-bold text-[#5843BD] mb-4">{feature.title}</h5>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-500 text-xs leading-relaxed">{feature.detail}</p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6633]/10 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - Glassmorphism Cards */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group relative bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border border-white/60 hover:border-[#5843BD]/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5843BD]/0 via-[#5843BD]/5 to-[#FF6633]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl text-[#5843BD] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#5843BD]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Section - Market Research Focus */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5843BD]/10 via-transparent to-[#FF6633]/10 rounded-3xl blur-3xl"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#5843BD]/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FF6633]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-3xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5843BD]/20 via-[#FF6633]/20 to-[#5843BD]/20 opacity-50 animate-pulse rounded-3xl"></div>
            
            <div className="relative z-10 p-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5843BD]/10 to-[#FF6633]/10 border border-[#5843BD]/20 rounded-full text-sm font-semibold text-[#5843BD] mb-8">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Trusted by 500+ Businesses
              </div>

              {/* Main Heading */}
              <h3 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#5843BD] via-purple-600 to-[#5843BD] bg-clip-text text-transparent">
                  Ready to Build Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#FF6633] via-orange-500 to-[#FF6633] bg-clip-text text-transparent">
                  Business Plan?
                </span>
              </h3>

              {/* Subheading */}
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Skip expensive consultants and months of research. Get your comprehensive AI-generated 
                business plan in minutes, complete with market analysis and financial projections.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={handleGenerateBusinessPlan}
                  className="group relative bg-[#5843BD] text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden min-w-[200px]"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Generate Business Plan
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-[#5843BD]/10 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-[#FF6633]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}