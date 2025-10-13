"use client";

import { openBusinessRegister } from "../utils/urlBuilder";

interface FinalCTAProps {
  refQuery?: string;
  lgQuery?: string;
}

export default function FinalCTA({ refQuery, lgQuery }: FinalCTAProps) {
  const handleStartTrial = () => {
    openBusinessRegister({ ref: refQuery, lg: lgQuery });
  };

  const handleScheduleDemo = () => {
    // You can implement demo scheduling logic here
    console.log('Schedule demo clicked');
  };
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-[#FF6633]/20">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#5843BD]/8 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#FF6633]/15 via-transparent to-transparent"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5843BD08_1px,transparent_1px),linear-gradient(to_bottom,#FF663308_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#5843BD]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6633]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FF6633]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/70 backdrop-blur-xl border border-[#5843BD]/20 rounded-full text-sm font-medium mb-8 text-[#5843BD] shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
            Ready to Transform Your Business?
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#5843BD] via-purple-600 to-[#5843BD] bg-clip-text text-transparent">Join the </span>
            <span className="bg-gradient-to-r from-[#FF6633] via-orange-500 to-[#FF6633] bg-clip-text text-transparent">AI Revolution</span>
            <br />
            <span className="text-gray-900">Today</span>
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Don't let your competitors get ahead. Start your AI-powered business transformation 
            with Moil's comprehensive growth platform and join 500+ successful businesses.
          </p>
        </div>

        {/* Key Benefits - Sophisticated Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 hover:border-[#5843BD]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5843BD]/0 via-[#5843BD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#5843BD] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#5843BD] mb-3">Instant Setup</h3>
              <p className="text-gray-600 leading-relaxed">Get started in under 5 minutes with our intuitive onboarding process</p>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#5843BD]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 hover:border-[#FF6633]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6633]/0 via-[#FF6633]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6633] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#FF6633] mb-3">Enhanced Productivity</h3>
              <p className="text-gray-600 leading-relaxed">Boost team productivity by 20% with AI-driven automation and streamlined workflows.</p>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF6633]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 hover:border-blue-500/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#5843BD] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.414l2.26-2.26a4 4 0 10-1.15-7.446z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#5843BD] mb-3">Market Insights</h3>
              <p className="text-gray-600 leading-relaxed">Reduce market research time by 90% with AI-generated reports and competitive analysis.</p>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5843BD]/10 via-transparent to-[#FF6633]/10 rounded-3xl blur-3xl"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#5843BD]/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FF6633]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-3xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5843BD]/20 via-[#FF6633]/20 to-[#5843BD]/20 opacity-50 animate-pulse rounded-3xl"></div>
            
            <div className="relative z-10 p-12 text-center">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button 
                  onClick={handleStartTrial}
                  className="group relative bg-[#5843BD] text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden min-w-[220px]"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                    Start Free Trial Now
                  </span>
                </button>

                <button 
                  onClick={handleScheduleDemo}
                  className="group relative bg-white/80 backdrop-blur-sm border-2 border-[#FF6633]/30 hover:border-[#FF6633] text-[#FF6633] hover:text-[#FF6633] font-bold py-5 px-12 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg min-w-[220px]"
                >
                  <span className="relative flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    Schedule Demo
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/50">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">No Setup Fees</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-[#5843BD] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 0a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Cancel Anytime</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF6633] to-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">SOC 2 Compliant</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-[#5843BD]/10 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-[#FF6633]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Floating Feature Cards */}
        <div className="absolute top-10 left-10 bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-lg animate-float hidden lg:block">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5843BD] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            <div>
              <div className="text-[#5843BD] font-semibold text-sm">Market Research</div>
              <div className="text-gray-500 text-xs">Complete</div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-lg animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF6633] to-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <div className="text-[#FF6633] font-semibold text-sm">Smart Hiring</div>
              <div className="text-gray-500 text-xs">+127% ROI</div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-10 left-20 bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-lg animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            <div>
              <div className="text-green-600 font-semibold text-sm">Growth Analytics</div>
              <div className="text-gray-500 text-xs">Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
