"use client";

export default function AIResumeSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-[#5843BE]/20">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88,67,190,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,67,190,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-float 20s ease-in-out infinite'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-2">
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5843BE] to-[#4a3ba0] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">5-Minute Resume Builder</h4>
                  <p className="text-gray-600">Professional resumes with voice input</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Resume Progress</span>
                    <span className="text-[#5843BE] font-semibold">85%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-[#5843BE] to-[#4a3ba0] rounded-full transition-all duration-1000"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#5843BE]/10 rounded-lg border border-[#5843BE]/20">
                    <div className="text-sm text-[#5843BE] font-medium">ATS Optimized</div>
                  </div>
                  <div className="p-3 bg-[#5843BE]/10 rounded-lg border border-[#5843BE]/20">
                    <div className="text-sm text-[#5843BE] font-medium">Voice Input</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#5843BE] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-xl">📄</span>
            </div>
          </div>
          
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5843BE]/10 rounded-full border border-[#5843BE]/20">
                <div className="w-2 h-2 bg-[#5843BE] rounded-full animate-pulse"></div>
                <span className="text-[#5843BE] text-sm font-medium">AI-Generated</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                AI Resume Generation in <span className="text-[#5843BE]">5 Minutes</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create professional resumes using voice input or text. Our AI optimizes your resume for job applications and ATS systems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <div className="text-3xl font-bold text-[#5843BE] mb-2">5min</div>
                <div className="text-gray-700 font-medium">Average Time</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <div className="text-3xl font-bold text-[#5843BE] mb-2">98%</div>
                <div className="text-gray-700 font-medium">ATS Pass Rate</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Voice-to-text resume creation",
                  "Professional templates and designs",
                  "ATS optimization for better visibility",
                  "Multiple language support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#5843BE] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="px-8 py-4 bg-gradient-to-r from-[#5843BE] to-[#4a3ba0] text-white font-semibold rounded-full hover:from-[#4a3ba0] hover:to-[#5843BE] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Build My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
