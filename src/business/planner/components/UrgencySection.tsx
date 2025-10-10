import { useState, useEffect } from "react";
import { Clock, Users, ArrowRight, AlertCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/LanguageContext";

export default function UrgencySection() {
  const { t } = useLanguage();
  
  // Calculate time until end of August
  const getTimeUntilEndOfAugust = () => {
    const now = new Date();
    const endOfAugust = new Date(now.getFullYear(), 7, 31, 23, 59, 59); // August is month 7 (0-indexed)
    
    // If we're past August, use next year
    if (now > endOfAugust) {
      endOfAugust.setFullYear(endOfAugust.getFullYear() + 1);
    }
    
    const timeDiff = endOfAugust.getTime() - now.getTime();
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeUntilEndOfAugust());

  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilEndOfAugust());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate spots decreasing
  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpotsLeft(prev => prev > 3 ? prev - 1 : 3);
    }, 30000); // Decrease every 30 seconds

    return () => clearInterval(spotTimer);
  }, []);

  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-primary to-navy-deep opacity-90" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-electric via-green-success to-orange-cta" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alert Badge */}
          <Badge className="mb-6 px-4 py-2 bg-orange-cta text-white animate-pulse">
            <AlertCircle className="w-4 h-4 mr-2" />
            {t('urgency.badge')}
          </Badge>

          {/* Main Headline */}
          <div className="space-y-6 mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t('urgency.title.line1')}
              <span className="gradient-text block">{t('urgency.title.line2')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('urgency.subtitle')}
            </p>
          </div>

          {/* Countdown Timer */}
          <Card className="glass mb-8 fade-in bg-white/10 backdrop-blur-md">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-orange-cta" />
                <span className="text-lg font-semibold text-white">Special Pricing Expires In:</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-xs md:max-w-md mx-auto">
                {[
                  { label: t('urgency.timer.days'), value: timeLeft.days },
                  { label: t('urgency.timer.hours'), value: timeLeft.hours },
                  { label: t('urgency.timer.minutes'), value: timeLeft.minutes },
                  { label: t('urgency.timer.seconds'), value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-navy-deep/80 rounded-lg p-2 md:p-4 mb-2 border border-white/20">
                      <span className="text-xl md:text-3xl font-bold text-white tabular-nums">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spots Remaining */}
          <div className="mb-8 fade-in">
            <Card className="glass inline-block bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-green-success flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-lg md:text-2xl font-bold text-white">
                      Only <span className="text-orange-cta">{spotsLeft}</span> {t('urgency.spots.title')}
                    </div>
                    <div className="text-xs md:text-sm text-gray-300">{t('urgency.spots.subtitle')}</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 w-40 md:w-48">
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>{t('urgency.spots.taken')}</span>
                    <span>{10 - spotsLeft}/10</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-cta to-green-success h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((10 - spotsLeft) / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Comparison */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-12 fade-in">
            {/* Current Offer */}
            <Card className="glass border-2 border-green-success relative bg-white/10 backdrop-blur-md">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-success text-white px-3 md:px-4 py-1 text-sm">
                  {t('urgency.pricing.current')}
                </Badge>
              </div>
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{t('urgency.pricing.special')}</h3>
                <div className="text-3xl md:text-4xl font-bold text-green-success mb-2">$300</div>
                <div className="text-gray-300 text-sm md:text-base">{t('urgency.pricing.complete')}</div>
              </CardContent>
            </Card>

            {/* Regular Price */}
            <Card className="glass opacity-60 bg-white/5 backdrop-blur-md">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{t('urgency.pricing.regular')}</h3>
                <div className="text-3xl md:text-4xl font-bold text-gray-400 mb-2">$1,000</div>
                <div className="text-gray-400 text-sm md:text-base">{t('urgency.pricing.next')}</div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="fade-in">
            <Button size="lg" className="btn-cta text-xl px-12 py-6 font-bold mb-4">
              Secure Your Spot Now - $300
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-gray-300">
              Next batch starts at $1,000 • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}