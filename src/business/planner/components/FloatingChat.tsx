import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

interface FAQ {
  question: string;
  answer: string;
}

export default function FloatingChat() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    }
  ];

  const typeText = (text: string) => {
    setIsTyping(true);
    setShowAnswer(false);
    setTypedText("");
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        setShowAnswer(true);
      }
    }, 30);
  };

  useEffect(() => {
    if (selectedFaq !== null) {
      typeText(faqs[selectedFaq].answer);
    }
  }, [selectedFaq]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <Card className="mb-4 w-80 p-4 glass animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">{t('faq.title')}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border/20 pb-2">
                <button
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  className="text-left w-full text-sm font-medium hover:text-accent transition-colors"
                >
                  {faq.question}
                </button>
                {selectedFaq === index && (
                  <div className="mt-2 text-xs text-muted-foreground animate-in slide-in-from-top-2 duration-200">
                    {isTyping && (
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                        <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <span className="ml-2 text-accent">{t('faq.typing')}</span>
                      </div>
                    )}
                    {showAnswer && <div>{typedText}</div>}
                    {!showAnswer && !isTyping && <div>{typedText}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-border/20">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white mb-2"
              onClick={() => {
                const whatsappUrl = `https://wa.me/7373474267?text=${encodeURIComponent("Hi! I'm interested in your landing page service.")}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('faq.whatsapp')}
            </Button>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={t('faq.input.placeholder')}
                className="flex-1 text-xs bg-transparent border border-border/30 rounded px-2 py-1 focus:outline-none focus:border-accent"
              />
              <Button size="sm" className="h-6 w-6 p-0 btn-accent">
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full btn-cta shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}