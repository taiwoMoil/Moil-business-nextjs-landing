import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
const testimonials = [
  {
    name: "Sarah Chen",
    role: "E-commerce Founder",
    company: "StyleCraft",
    image: "/testimonial-1.jpg",
    content: "Within 48 hours of launching, I had my first three customers. The landing page converted 23% better than my previous site, and the business plan helped me secure $50k in funding.",
    metrics: {
      result: "+300% Revenue",
      timeframe: "First Month"
    }
  },
  {
    name: "Marcus Rodriguez",
    role: "SaaS Startup CEO",
    company: "DataFlow Pro",
    image: "/testimonial-2.jpg",
    content: "The AI insights revealed my target market was completely different than I thought. Pivoting based on their research saved me 6 months of wrong-direction effort and $15k in ad spend.",
    metrics: {
      result: "$50k Saved",
      timeframe: "Market Research"
    }
  },
  {
    name: "Jennifer Walsh",
    role: "Consultant",
    company: "Growth Partners",
    image: "/testimonial-3.jpg",
    content: "I've built websites before, but nothing like this. The conversion optimization and professional copy immediately elevated my brand. I'm booked solid for the next 3 months.",
    metrics: {
      result: "3x Bookings",
      timeframe: "First Week"
    }
  }
];

const trustLogos = [
  "TechCrunch",
  "Forbes",
  "Entrepreneur", 
  "Inc.com",
  "Fast Company"
];

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.section.title').split(' ').slice(0, 2).join(' ')}
            <span className="gradient-text"> {t('testimonials.section.title').split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('testimonials.section.subtitle')}
          </p>
        </div>

        {/* Trust Logos */}
        <div className="flex justify-center items-center gap-8 mb-16 opacity-60 fade-in">
          <span className="text-sm font-medium text-muted-foreground">{t('testimonials.section.featured')}</span>
          {trustLogos.map((logo, index) => (
            <div key={index} className="text-lg font-bold text-muted-foreground">
              {logo}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="testimonial-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-cta text-orange-cta" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Metrics */}
                <div className="bg-green-light/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-success">{testimonial.metrics.result}</div>
                  <div className="text-sm text-green-success/80">{testimonial.metrics.timeframe}</div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Bottom CTA */}
        <div className="text-center fade-in">
          <Button 
            size="lg" 
            className="btn-cta text-lg px-8 py-4"
            onClick={() => window.open('https://business.moilapp.com/register', '_blank')}
          >
            {t('testimonials.section.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t('testimonials.section.note')}
          </p>
        </div>
      </div>
    </section>
  );
}