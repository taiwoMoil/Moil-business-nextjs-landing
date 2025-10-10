import { Shield, CheckCircle, RefreshCw, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/LanguageContext";

export default function GuaranteeSection() {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: Shield,
      title: t('guarantee.guarantee1.title'),
      description: t('guarantee.guarantee1.desc'),
      details: [
        t('guarantee.guarantee1.detail1'),
        t('guarantee.guarantee1.detail2'),
        t('guarantee.guarantee1.detail3'),
        t('guarantee.guarantee1.detail4')
      ]
    },
    {
      icon: CheckCircle,
      title: t('guarantee.guarantee2.title'),
      description: t('guarantee.guarantee2.desc'),
      details: [
        t('guarantee.guarantee2.detail1'),
        t('guarantee.guarantee2.detail2'),
        t('guarantee.guarantee2.detail3'),
        t('guarantee.guarantee2.detail4')
      ]
    },
    {
      icon: Clock,
      title: t('guarantee.guarantee3.title'),
      description: t('guarantee.guarantee3.desc'),
      details: [
        t('guarantee.guarantee3.detail1'),
        t('guarantee.guarantee3.detail2'),
        t('guarantee.guarantee3.detail3'),
        t('guarantee.guarantee3.detail4')
      ]
    },
    {
      icon: RefreshCw,
      title: t('guarantee.guarantee4.title'),
      description: t('guarantee.guarantee4.desc'),
      details: [
        t('guarantee.guarantee4.detail1'),
        t('guarantee.guarantee4.detail2'),
        t('guarantee.guarantee4.detail3'),
        t('guarantee.guarantee4.detail4')
      ]
    }
  ];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <Badge className="mb-6 px-4 py-2 bg-green-light/30 text-green-success">
            <Shield className="w-4 h-4 mr-2" />
            {t('guarantee.section.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('guarantee.section.title').split(' ').slice(0, 3).join(' ')}
            <span className="gradient-text"> {t('guarantee.section.title').split(' ').slice(3).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('guarantee.section.subtitle')}
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            
            return (
              <Card 
                key={index} 
                className="feature-card fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-light/20 text-green-success flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <CardTitle className="text-xl">{guarantee.title}</CardTitle>
                  
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {guarantee.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>


        {/* Bottom CTA */}
        <div className="text-center fade-in">
          <h3 className="text-2xl font-bold mb-4">
            {t('guarantee.bottom.title')}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('guarantee.bottom.desc')}
          </p>
          
          <Button 
            size="lg" 
            className="btn-cta text-lg px-8 py-4"
            onClick={() => window.open('https://business.moilapp.com/register', '_blank')}
          >
            {t('guarantee.bottom.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            {t('guarantee.bottom.note')}
          </p>
        </div>
      </div>
    </section>
  );
}