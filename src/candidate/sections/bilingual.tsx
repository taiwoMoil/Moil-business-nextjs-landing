"use client";

export default function BilingualSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-[#FF6633]/20">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
            backgroundImage: `
              linear-gradient(rgba(255,102,51,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,102,51,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-float 20s ease-in-out infinite'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6633]/10 rounded-full border border-[#FF6633]/20">
                  <div className="w-2 h-2 bg-[#FF6633] rounded-full animate-pulse"></div>
                  <span className="text-[#FF6633] text-sm font-medium">Voice-Powered</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Complete Voice & <span className="text-[#FF6633]">Bilingual</span> Experience
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Navigate the entire platform using voice commands in English or Spanish. Switch languages seamlessly throughout your job search.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  <div className="text-2xl mb-2">🇺🇸</div>
                  <div className="text-gray-700 font-medium">English</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  <div className="text-2xl mb-2">🇪🇸</div>
                  <div className="text-gray-700 font-medium">Español</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Voice commands throughout the platform",
                    "English and Spanish language support",
                    "Real-time language switching",
                    "Voice-guided job applications"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#FF6633] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF6633] to-[#ea580c] text-white font-semibold rounded-full hover:from-[#ea580c] hover:to-[#FF6633] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Voice Features
              </button>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Voice & Bilingual</h4>
                    <p className="text-gray-600">Speak your way to success in any language</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-medium">Voice Recognition</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600 text-sm font-medium">Active</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">"Find construction jobs near me"</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1 p-3 bg-[#FF6633]/10 rounded-lg border border-[#FF6633]/20 text-center">
                      <div className="text-[#FF6633] font-medium text-sm">🇺🇸 English</div>
                    </div>
                    <div className="flex-1 p-3 bg-gray-100 rounded-lg text-center">
                      <div className="text-gray-500 font-medium text-sm">🇪🇸 Español</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF6633] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-xl">🗣️</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}