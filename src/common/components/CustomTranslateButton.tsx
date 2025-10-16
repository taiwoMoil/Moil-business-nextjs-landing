"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

interface CustomTranslateButtonProps {
  setShowLanguageModal: (show: boolean) => void;
  setLgQuery?: (lang: string) => void;
  lgQuery?: string; // Add lgQuery prop to receive language changes
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
  lgQuery,
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
  const [selected, setSelected] = useState<string>('/auto/en');

  // Google Translate initialization function (simplified approach)
  const googleTranslateElementInit = () => {
    console.log('Initializing Google Translate...');
    
    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'auto',
          autoDisplay: false,
          includedLanguages: "es,en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
      console.log('Google Translate initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Translate:', error);
    }
  };

  // Language change handler (following tutorial approach)
  const handleLanguageChange = (newLang: 'en' | 'es') => {
    console.log(`Changing language to: ${newLang}`);
    
    const cookieValue = newLang === 'es' ? '/auto/es' : '/auto/en';
    
    // Set cookie
    setCookie('googtrans', cookieValue, { path: '/', domain: window.location.hostname });
    setSelected(cookieValue);
    setCurrentLang(newLang);
    
    // Update lgQuery for external links
    if (setLgQuery) {
      setLgQuery(newLang);
    }
    
    // Update URL parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lg', newLang);
    window.history.replaceState({}, '', url);
    
    // Reload page to apply translation (as per tutorial)
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Load Google Translate script (simplified tutorial approach)
  useEffect(() => {
    console.log('Loading Google Translate script...');
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="translate.google.com/translate_a/element.js"]');
    
    if (!existingScript) {
      var addScript = document.createElement('script');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
      console.log('Google Translate script added');
    } else {
      console.log('Google Translate script already exists');
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  // Initialize language from cookie or URL (tutorial approach)
  useEffect(() => {
    console.log('Initializing language state...');
    
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lg');
    
    if (urlLang && (urlLang === 'en' || urlLang === 'es')) {
      const cookieValue = urlLang === 'es' ? '/auto/es' : '/auto/en';
      setSelected(cookieValue);
      setCurrentLang(urlLang);
      if (setLgQuery) {
        setLgQuery(urlLang);
      }
    } else if (hasCookie('googtrans')) {
      const cookieValue = getCookie('googtrans') as string;
      setSelected(cookieValue);
      const detectedLang = cookieValue === '/auto/es' ? 'es' : 'en';
      setCurrentLang(detectedLang);
      if (setLgQuery) {
        setLgQuery(detectedLang);
      }
    } else {
      setSelected('/auto/en');
      setCurrentLang('en');
      if (setLgQuery) {
        setLgQuery('en');
      }
    }
  }, [setLgQuery]);

  // Listen for language changes from the modal (simplified)
  useEffect(() => {
    if (lgQuery && (lgQuery === 'en' || lgQuery === 'es') && lgQuery !== currentLang) {
      console.log(`Language change detected from modal: ${currentLang} -> ${lgQuery}`);
      handleLanguageChange(lgQuery);
    }
  }, [lgQuery, currentLang]);


  // Handle translate button click
  const handleTranslateClick = useCallback(() => {
    console.log('Translate button clicked');
    
    // Set current language in lgQuery immediately when button is clicked
    if (setLgQuery) {
      setLgQuery(currentLang);
    }
    
    // Always show the language modal for all variants
    setShowLanguageModal(true);
  }, [setShowLanguageModal, setLgQuery, currentLang]);

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
      {/* Hidden Google Translate element (tutorial style) */}
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
