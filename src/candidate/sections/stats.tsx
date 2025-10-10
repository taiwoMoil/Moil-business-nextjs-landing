"use client";

export default function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#5843BE] via-[#4a3ba0] to-[#3d2f85]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6633]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-float 25s ease-in-out infinite'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-[#FF6633] rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Platform Statistics</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Proven Results That <span className="text-[#FF6633]">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our AI-powered platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">94%</div>
                <div className="text-lg font-semibold text-white mb-2">Interview Success Rate</div>
                <div className="text-sm text-white/70">
                  Users who practiced with our AI coach
                </div>
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5min</div>
                <div className="text-lg font-semibold text-white mb-2">Average Resume Creation</div>
                <div className="text-sm text-white/70">
                  From start to professional resume
                </div>
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10k+</div>
                <div className="text-lg font-semibold text-white mb-2">Jobs Matched Daily</div>
                <div className="text-sm text-white/70">
                  AI-powered job recommendations
                </div>
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M13 3C13.55 3 14 3.45 14 4V12L15.5 10.5C15.89 10.11 16.5 10.11 16.89 10.5C17.28 10.89 17.28 11.5 16.89 11.89L13.89 14.89C13.5 15.28 12.89 15.28 12.5 14.89L9.5 11.89C9.11 11.5 9.11 10.89 9.5 10.5C9.89 10.11 10.5 10.11 10.89 10.5L12 11.59V4C12 3.45 12.45 3 13 3ZM6 19C6 20.1 6.9 21 8 21H18C19.1 21 20 20.1 20 19V14H18V19H8V14H6V19Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">2x</div>
                <div className="text-lg font-semibold text-white mb-2">Faster Applications</div>
                <div className="text-sm text-white/70">
                  Compared to traditional methods
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF6633] to-[#ea580c] text-white font-semibold rounded-full hover:from-[#ea580c] hover:to-[#FF6633] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Join Our Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}
