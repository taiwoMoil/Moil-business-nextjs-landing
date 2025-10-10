import { Calendar, Wrench, Rocket, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: t('process.new.step1.title'),
      description: t('process.new.step1.desc'),
      details: [
        t('process.step1.detail1'),
        t('process.step1.detail2'),
        t('process.step1.detail3'),
        t('process.step1.detail4')
      ],
      duration: t('process.step1.duration'),
      highlight: t('process.step1.highlight')
    },
    {
      number: "02", 
      icon: Wrench,
      title: t('process.new.step2.title'),
      description: t('process.new.step2.desc'),
      details: [
        t('process.step2.detail1'),
        t('process.step2.detail2'),
        t('process.step2.detail3'),
        t('process.step2.detail4')
      ],
      duration: t('process.step2.duration'),
      highlight: t('process.step2.highlight')
    },
    {
      number: "03",
      icon: Calendar,
      title: t('process.new.step3.title'),
      description: t('process.new.step3.desc'),
      details: [
        t('process.step3.detail1'),
        t('process.step3.detail2'),
        t('process.step3.detail3'),
        t('process.step3.detail4')
      ],
      duration: t('process.step3.duration'),
      highlight: t('process.step3.highlight')
    },
    {
      number: "04",
      icon: Rocket,
      title: t('process.new.step4.title'),
      description: t('process.new.step4.desc'),
      details: [
        t('process.step4.detail1'),
        t('process.step4.detail2'),
        t('process.step4.detail3'),
        t('process.step4.detail4')
      ],
      duration: t('process.step4.duration'),
      highlight: t('process.step4.highlight')
    }
  ];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <Badge className="mb-6 px-4 py-2 bg-orange-light/30 text-orange-cta">
            {t('process.section.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('process.section.title').split(':')[0]}:
            <span className="gradient-text">{t('process.section.title').split(':')[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('process.section.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-electric via-green-success to-orange-cta" />
          
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Step Number Circle */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-light flex items-center justify-center mx-auto border-4 border-background shadow-lg relative z-20">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    
                    {/* Highlight Badge */}
                    <Badge className={`absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 z-30 ${
                      index === 0 ? 'bg-green-success text-white' :
                      index === 1 ? 'bg-blue-electric text-white' :
                      'bg-orange-cta text-white'
                    }`}>
                      {step.highlight}
                    </Badge>
                  </div>

                  {/* Step Card */}
                  <Card className="feature-card text-center h-full">
                    <CardContent className="p-6 space-y-6">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Duration */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{step.duration}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-2 text-left">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 max-w-2xl mx-auto fade-in">
          <Card className="glass p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('process.timeline.title')}</h3>
            <div className="flex items-center justify-center gap-4 text-sm md:text-lg flex-wrap">
              <span className="text-muted-foreground">{t('process.timeline.today')}</span>
              <span className="font-semibold">{t('process.timeline.create')}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{t('process.timeline.day5')}</span>
              <span className="font-semibold">{t('process.timeline.review')}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{t('process.timeline.day6')}</span>
              <span className="font-semibold text-green-success">{t('process.timeline.launch')}</span>
            </div>
            
            <div className="mt-6">
              <Button 
                size="lg" 
                className="btn-cta text-lg px-8 py-4"
                onClick={() => window.open('https://business.moilapp.com/register', '_blank')}
              >
                {t('process.timeline.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}