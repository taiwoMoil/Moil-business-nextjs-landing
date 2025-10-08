import { useState, useEffect } from "react";
import Link from "next/link";

// Local Imports
import TranslateButton from "./translate_btn";
import { businessBaseUrl, workerBaseUrl } from "../../common/constants/baseUrl";

interface BusinessNavigationProps {
  page: string;
  refQuery: any;
  lgQuery: any;
  setQueryLg: (lang: string) => void;
  setShowLanguageModal: (show: boolean) => void;
}

export default function BusinessNavigation({ page, refQuery, lgQuery, setQueryLg, setShowLanguageModal }: BusinessNavigationProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const position = {
        x: window.scrollX,
        y: window.scrollY
      };
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let [ queryString, setQueryString ] = useState("");
  // Automatically update queryString when refQuery or lgQuery change
  useEffect(() => {
    if (refQuery && lgQuery) {
      setQueryString(`?ref=${refQuery}&lg=${lgQuery}`);
    } else if (refQuery && !lgQuery) {
      setQueryString(`?ref=${refQuery}`);
    } else if (!refQuery && lgQuery) {
      setQueryString(`?lg=${lgQuery}`);
    } else {
      setQueryString(""); // No query parameters
    }
  }, [refQuery, lgQuery]); // Runs when refQuery or lgQuery changes




  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const deleteRefFromLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('ref');
      return true;
    } else {
      console.error('Local storage is not available in this environment');
      return false;
    }
  }

  return (
    <header className={`w-full ${scrollPosition.y >= 100 && isOpen ? 'fixed z-[1000]' : scrollPosition.y >= 100 ? `fixed z-[1000]` : scrollPosition.y < 100 && isOpen ? 'absolute z-[1000]' : ''} top-0 bg-[#F7F8FC] navigation-border flex justify-center`}>
      <nav className={`max-w-[1200px] w-full py-4 px-8 flex justify-between items-center`}>
        <Link href="/business" className="text-2xl font-bold text-[#7d4b9e] hidden lg:block">
          {/* <img src='https://res.cloudinary.com/drlcisipo/image/upload/v1705704266/Website%20images/Moil_Logo_wfxno8.svg' alt="Moil Logo" className="w-16 h-8" /> */}
          <img src='https://res.cloudinary.com/drlcisipo/image/upload/v1705704261/Website%20images/logo_gox0fw.png' alt="Moil Logo" className="w-16 h-8" />
        </Link>

        <div className="hidden  text-sm lg:flex space-x-6 items-center">
          <TranslateButton className="bg-transparent flex items-center" textClassName="font-medium text-[#1A1433]" parentClass="" setShowLanguageModal={setShowLanguageModal} />

          {page === "pricing" ? (
            <>
              <Link href={`/business${queryString}#services`} className="px-5 py-3 text-[#1A1433]">
                Services
              </Link>
              <Link href={`/business${queryString}#features`} className="px-5 py-3 text-[#1A1433]">
                Features
              </Link>
              <Link href={`/business${queryString}#testimonials`} className="px-5 py-3 text-[#1A1433]">
                Testimonials
              </Link>
            </>
          ) : (
            <>
              <button onClick={() => handleScrollTo('services')} className="px-5 py-3 text-[#1A1433]">
                Services
              </button>
              <button onClick={() => handleScrollTo('features')} className="px-5 py-3 text-[#1A1433]">
                Features
              </button>
              <button onClick={() => handleScrollTo('testimonials')} className="px-5 py-3 text-[#1A1433]">
                Testimonials
              </button>
            </>
          )}


          <Link className="px-5 py-3 max-w-[87px] text-[#1A1433]" href={`/business/pricing${queryString}`} >
            Pricing
          </Link>

          <Link className="px-5 py-3 max-w-[87px] text-[#1A1433]" href={`${businessBaseUrl}/login${queryString}`} >
            Login
          </Link>
          <Link className="gradient-btn px-5 py-3 max-w-[135px] text-white" href={`${businessBaseUrl}/register${queryString}`} >
            Get started
          </Link>
        </div>

        <div className={`lg:hidden h-[32px] ${isOpen && "open-nav"} overflow-y-hidden gap-y-8 flex w-full flex-col`}>
          <div className="flex w-full justify-between items-center">
            <Link href="/business" className="text-2xl font-bold text-[#7d4b9e]">
              {/* <img src='https://res.cloudinary.com/drlcisipo/image/upload/v1705704266/Website%20images/Moil_Logo_wfxno8.svg' alt="Moil Logo" className="w-16 h-8" /> */}
              <img src='https://res.cloudinary.com/drlcisipo/image/upload/v1705704261/Website%20images/logo_gox0fw.png' alt="Moil Logo" className="w-16 h-8 lg:hidden" />
            </Link>
            <button className="lg:hidden text-gray-500" onClick={handleToggle} aria-label="Toggle Navigation">
              {!isOpen ? <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg> : <svg
                className={`h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>}
            </button>
          </div>

          <div className={`lg:hidden h-full justify-center flex flex-col ${isOpen ? '' : 'hidden'}`}>
            {page === "pricing" ? (
              <Link className="flex self-start items-center justify-center px-5 py-3 gap-2" href={`/business${queryString}`}>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.616 16C1.15533 16 0.771 15.846 0.463 15.538C0.155 15.23 0.000666667 14.8453 0 14.384V10.5H7V12H11V10.5H18V14.385C18 14.845 17.846 15.229 17.538 15.537C17.23 15.845 16.8457 15.9993 16.385 16H1.616ZM8 11V9H10V11H8ZM0 9.5V4.616C0 4.15534 0.154333 3.771 0.463 3.463C0.771667 3.155 1.15567 3.00067 1.615 3H6V1.615C6 1.155 6.15433 0.770669 6.463 0.462002C6.77167 0.153335 7.156 -0.000664511 7.616 2.15517e-06H10.385C10.845 2.15517e-06 11.2293 0.154002 11.538 0.462002C11.8467 0.770002 12.0007 1.15434 12 1.615V3H16.385C16.845 3 17.229 3.15434 17.537 3.463C17.845 3.77167 17.9993 4.156 18 4.616V9.5H11V8H7V9.5H0ZM7 3H11V1.615C11 1.46167 10.936 1.32067 10.808 1.192C10.68 1.06334 10.539 0.999335 10.385 1H7.615C7.46167 1 7.32067 1.064 7.192 1.192C7.06333 1.32 6.99933 1.461 7 1.615V3Z" fill="#5843BD" />
                </svg>
                <span className="text-base text-[#1A1433] font-medium">Switch to Business</span>
              </Link>
            ) : (
              <button onClick={() => handleScrollTo('services')} className="px-5 py-3 text-[#1A1433]">
                Services
              </button>
            )}

            {page === "pricing" ? (
              <>
                <Link href={`/business${queryString}#features`} className="px-5 py-3 text-[#1A1433]">
                  Features
                </Link>
                <Link href={`/business${queryString}#testimonials`} className="px-5 py-3 text-[#1A1433]">
                  Testimonials
                </Link>
              </>
            ) : (
              <>
                <button onClick={() => handleScrollTo('features')} className="px-5 py-3 text-[#1A1433]">
                  Features
                </button>
                <button onClick={() => handleScrollTo('testimonials')} className="px-5 py-3 text-[#1A1433]">
                  Testimonials
                </button>
              </>
            )}

            <Link className="px-5 py-3 max-w-[87px] text-[#1A1433]" href={`/business/pricing${queryString}`} >
              Pricing
            </Link>

            {/* <Link className="px-5 py-3 max-w-[87px] text-[#1A1433]" to={page === "pricing" ? '/business/pricing' : `pricing`} >
              Pricing
            </Link> */}

            <Link className="px-5 py-3 max-w-[87px] text-[#1A1433]" href={`${businessBaseUrl}/login${queryString}`} >
              Login
            </Link>
            <Link className="gradient-btn px-5 py-3 max-w-[135px] text-white" href={`${businessBaseUrl}/register${queryString}`} >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}