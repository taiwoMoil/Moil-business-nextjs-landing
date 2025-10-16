"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

interface CustomTranslateButtonProps {
  setShowLanguageModal: (show: boolean) => void;
  setLgQuery?: (lang: string) => void;
  parentClass?: string;
  className?: string;
  textClassName?: string;
  variant?: 'business' | 'candidate' | 'home';
  showText?: boolean;
  showIcon?: boolean;
  iconOnly?: boolean;
}

const CustomTranslateButton: React.FC<CustomTranslateButtonProps> = ({
  setShowLanguageModal,
  setLgQuery,
  parentClass = '',
  className = '',
  textClassName = '',
  variant = 'business',
  showText = true,
  showIcon = true,
  iconOnly = false
}) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Check current language from cookie
    if (hasCookie('googtrans')) {
      const cookieValue = getCookie('googtrans') as string;
      const detectedLang = cookieValue === '/auto/es' ? 'es' : 'en';
      setCurrentLang(detectedLang);
      
      // Set initial lgQuery if callback is provided
      if (setLgQuery) {
        setLgQuery(detectedLang);
      }
    } else if (setLgQuery) {
      // Set default language if no cookie exists
      setLgQuery('en');
    }

    return () => {
      if (document.body.contains(addScript)) {
        document.body.removeChild(addScript);
      }
      delete window.googleTranslateElementInit;
    };
  }, [setLgQuery]);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false,
      includedLanguages: "es,en",
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  };

  const toggleLanguage = useCallback(() => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    const cookieValue = newLang === 'es' ? '/auto/es' : '/auto/en';
    
    setCookie('googtrans', cookieValue);
    setCurrentLang(newLang);
    
    // Update lgQuery if callback is provided
    if (setLgQuery) {
      setLgQuery(newLang);
    }
    
    // Trigger Google Translate without reload
    const triggerGoogleTranslate = (language: string) => {
      const checkForTranslateElement = () => {
        const translateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (translateElement) {
          translateElement.value = language;
          const event = new Event('change', { bubbles: true });
          translateElement.dispatchEvent(event);
          return true;
        }
        return false;
      };

      if (!checkForTranslateElement()) {
        setTimeout(() => {
          if (!checkForTranslateElement()) {
            setTimeout(() => {
              checkForTranslateElement();
            }, 500);
          }
        }, 100);
      }
    };
    
    triggerGoogleTranslate(newLang);
  }, [currentLang, setLgQuery]);

  // Handle translate button click
  const handleTranslateClick = useCallback(() => {
    setIsTranslating(true);
    
    // Always show the language modal for all variants
    setShowLanguageModal(true);
    setIsTranslating(false);
  }, [setShowLanguageModal]);

  // Get button styles based on variant
  const getButtonStyles = () => {
    const baseStyles = 'flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    switch (variant) {
      case 'business':
        return `${baseStyles} px-3 py-2 text-[#1A1433] text-xs rounded-full hover:bg-white/50 focus:ring-[#5843BE] ${className}`;
      case 'candidate':
        return `${baseStyles} px-3 py-2 text-xs text-gray-600 hover:text-[#5843BE] rounded-full hover:bg-gray-100/50 focus:ring-[#5843BE] ${className}`;
      case 'home':
        return `${baseStyles} px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 focus:ring-white/50 ${className}`;
      default:
        return `${baseStyles} ${className}`;
    }
  };

  // Get text styles based on variant
  const getTextStyles = () => {
    const baseStyles = 'font-medium notranslate';
    
    switch (variant) {
      case 'business':
        return `${baseStyles} text-[#1A1433] text-xs ${textClassName}`;
      case 'candidate':
        return `${baseStyles} text-xs ${textClassName}`;
      case 'home':
        return `${baseStyles} text-white text-sm ${textClassName}`;
      default:
        return `${baseStyles} ${textClassName}`;
    }
  };

  // Get flag image source - show the flag of the CURRENT language
  const getFlagSrc = () => {
    return currentLang === 'en'
      ? 'https://res.cloudinary.com/drlcisipo/image/upload/v1714663084/English_1_z3fa77.png' // English flag when in English
      : 'https://res.cloudinary.com/drlcisipo/image/upload/v1713288601/Website%20images/Spanish_2_oaawih.svg'; // Spanish flag when in Spanish
  };

  // Get display text - show the CURRENT language
  const getDisplayText = () => {
    if (variant === 'home') {
      return currentLang === 'en' ? 'English' : 'Español';
    }
    return currentLang === 'en' ? 'ENG' : 'ESP';
  };

  // Get mobile text - show current language
  const getMobileText = () => {
    return currentLang === 'en' 
      ? 'English' 
      : 'Español';
  };

  return (
    <div className={`cursor-pointer ${parentClass}`}>
      {/* Hidden Google Translate element */}
      <div 
        id="google_translate_element" 
        style={{
          width: '0px',
          height: '0px',
          position: 'absolute',
          left: '50%',
          zIndex: -99999
        }}
      />
      <button
        type="button"
        className={getButtonStyles()}
        onClick={handleTranslateClick}
        disabled={isTranslating}
        aria-label="Select Language"
      >
        {/* Loading state */}
        {isTranslating && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
        )}
        
        {/* Flag icon */}
        {showIcon && !isTranslating && (
          <img
            src={getFlagSrc()}
            alt={currentLang === 'en' ? 'English Flag' : 'Spanish Flag'}
            className="w-5 h-5 md:w-6 md:h-6 object-contain"
            width={24}
            height={24}
            loading="lazy"
          />
        )}
        
        {/* Text content */}
        {showText && !iconOnly && (
          <>
            {/* Desktop text */}
            <span className={`${getTextStyles()} lg:inline hidden ml-2`}>
              {getDisplayText()}
            </span>
            
            {/* Mobile text */}
            {variant !== 'home' && (
              <span className={`${getTextStyles()} inline lg:hidden ml-2`}>
                {getMobileText()}
              </span>
            )}
          </>
        )}
      </button>
    </div>
  );
};

// TypeScript declarations
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit?: () => void;
  }
}

export default CustomTranslateButton;
