"use client";

export default function VoiceAssistantSection() {
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full border border-[#FF6633]/20 shadow-lg mb-6">
            <div className="w-3 h-3 bg-[#FF6633] rounded-full animate-pulse"></div>
            <span className="text-[#FF6633] font-semibold">AI Voice Interview Coach</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Master Interviews with <br />
            <span className="text-[#FF6633] bg-gradient-to-r from-[#FF6633] to-[#ea580c] bg-clip-text text-transparent">Voice AI Coaching</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transform your interview performance with real-time AI analysis of your speech patterns,
            confidence levels, and answer quality. Get personalized feedback to land your dream job.
          </p>
        </div>

        {/* Main Content - Linear Design */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left Column - Analysis Features */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Voice Analysis</h3>
                <p className="text-gray-600">Real-time speech insights</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6633]">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ),
                  title: "Speech Clarity",
                  desc: "Analyze pronunciation and articulation",
                  score: "92%"
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6633]">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Pace & Rhythm",
                  desc: "Optimize speaking speed and flow",
                  score: "88%"
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6633]">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Confidence Level",
                  desc: "Measure vocal confidence indicators",
                  score: "95%"
                }
              ].map((feature, index) => (
                <div key={index} className="p-4 rounded-xl hover:bg-gray-50/50 transition-colors border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF6633]/10 to-[#ea580c]/10 rounded-xl flex items-center justify-center border border-[#FF6633]/20">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                    <div className="text-[#FF6633] font-bold text-lg">{feature.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - Live Coaching */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 h-full relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Live Coaching</h3>
                <p className="text-gray-600">Interactive practice sessions</p>
              </div>
            </div>

            {/* Interview Simulation */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#FF6633] rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-gray-700">Recording Interview Response...</div>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-900 mb-1">Current Question:</div>
                  <div className="text-sm text-gray-600">"Tell me about your greatest professional achievement."</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#FF6633]">2:34</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#FF6633]">A+</div>
                    <div className="text-xs text-gray-600">Current Grade</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Feedback */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Real-time Feedback</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Great eye contact and posture</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Try speaking slightly slower</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Excellent use of specific examples</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-lg">🎯</span>
            </div>
          </div>
        </div>

        {/* Right Column - Results & CTA */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 h-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FF6633] to-[#ea580c] rounded-2xl flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M9 11H15M9 15H15M17 21L12 16L7 21V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Success Metrics</h3>
              <p className="text-gray-600">Proven interview results</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-[#FF6633]/10 to-[#ea580c]/10 rounded-xl border border-[#FF6633]/20">
              <div className="text-3xl font-bold text-[#FF6633] mb-1">94%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-[#FF6633]/10 to-[#ea580c]/10 rounded-xl border border-[#FF6633]/20">
              <div className="text-3xl font-bold text-[#FF6633] mb-1">4.8★</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-[#FF6633]/10 to-[#ea580c]/10 rounded-xl border border-[#FF6633]/20">
              <div className="text-3xl font-bold text-[#FF6633] mb-1">25K+</div>
              <div className="text-sm text-gray-600">Interviews Coached</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-[#FF6633]/10 to-[#ea580c]/10 rounded-xl border border-[#FF6633]/20">
              <div className="text-3xl font-bold text-[#FF6633] mb-1">15min</div>
              <div className="text-sm text-gray-600">Avg. Session</div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">Practice Areas</h4>
            <div className="space-y-2">
              {[
                "Behavioral Questions",
                "Technical Interviews",
                "Leadership Scenarios",
                "Salary Negotiations"
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-[#FF6633] rounded-full"></div>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-xl p-4 mb-8">
            <div className="text-sm text-gray-600 italic mb-2">
              "Landed my dream job after just 3 coaching sessions. The AI feedback was incredibly detailed!"
            </div>
            <div className="text-xs text-gray-500">- Alex K., Product Manager</div>
          </div>

          {/* CTA Button */}
          <button className="w-full px-6 py-4 bg-gradient-to-r from-[#FF6633] to-[#ea580c] text-white font-semibold rounded-2xl hover:from-[#ea580c] hover:to-[#FF6633] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-3">
            Start Voice Coaching
          </button>

          <p className="text-xs text-gray-500 text-center">
            Free 3-session trial • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}