import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, Clock, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [counter, setCounter] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: Target, text: t('hero.feature1'), color: "text-blue-electric" },
    { icon: TrendingUp, text: t('hero.feature2'), color: "text-green-success" },
    { icon: Zap, text: t('hero.feature3'), color: "text-orange-cta" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => (prev < 500 ? prev + 5 : 500));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const featureTimer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(featureTimer);
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-electric/20 rounded-full blur-xl animate-pulse hover-scale" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-success/20 rounded-full blur-xl animate-pulse hover-scale" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-cta/20 rounded-full blur-xl animate-pulse hover-scale" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse hover-scale" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 fade-in">
            {/* Trust Badge */}
            <Badge className="glass px-6 py-3 text-sm font-medium hover-scale animate-in slide-in-from-top-5 duration-500">
              <Users className="w-4 h-4 mr-2" />
              Join <span className="counter font-bold mx-1 text-green-success">{counter}+</span> successful launches
            </Badge>

            {/* Main Headline with Dynamic Feature */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700">
                {t('hero.title.line1')}
                <span className="gradient-text block">{t('hero.title.line2')}</span>
              </h1>
              
              {/* Dynamic Feature Showcase */}
              <div className="flex items-center justify-center gap-2 md:gap-4 p-4 glass rounded-2xl max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-1 md:gap-2 p-2 md:p-3 rounded-xl transition-all duration-500 ${
                        activeFeature === index 
                          ? 'bg-white/20 scale-110 ' + feature.color
                          : 'text-gray-400 scale-95'
                      }`}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-medium text-xs md:text-sm">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '200ms' }}>
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Enhanced Pricing Display */}
            <div className="space-y-6 animate-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '400ms' }}>
              <div className="glass p-6 rounded-2xl max-w-md mx-auto hover-scale">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">$300</span>
                  <div className="space-y-1">
                    <span className="text-lg md:text-xl text-gray-400 line-through">$1,000</span>
                    <Badge className="bg-green-success text-white text-sm animate-pulse">70% OFF</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Shield className="w-4 h-4 text-green-success animate-pulse" />
                  {t('hero.guarantee')}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="animate-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '600ms' }}>
              <Button 
                size="lg" 
                className="btn-cta text-lg px-8 py-4 font-semibold hover-scale group relative overflow-hidden"
                onClick={() => window.open('https://business.moilapp.com/register', '_blank')}
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-cta to-orange-light opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex items-center justify-center gap-4 md:gap-8 pt-6 animate-in slide-in-from-bottom-5 duration-700 flex-wrap" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center gap-2 group">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-success group-hover:scale-110 transition-transform" />
                <span className="text-xs md:text-sm text-gray-300">3-5 day delivery</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-success animate-pulse group-hover:scale-110 transition-transform" />
                <span className="text-xs md:text-sm text-gray-300">Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}