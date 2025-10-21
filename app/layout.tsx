import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Analytics from '../src/common/components/analytics';
import { baseURL1 } from '../src/common/constants/baseUrl';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Moil | AI-Powered Business Growth Platform & Job Marketplace',
    template: '%s | Moil'
  },
  description: 'Moil is the complete AI-powered platform for business growth and talent acquisition. Get market research, business planning, smart hiring tools, and access to thousands of jobs. Trusted by 500+ businesses.',
  keywords: [
    'AI business platform',
    'business growth tools',
    'market research AI',
    'business planning software',
    'smart hiring platform',
    'job marketplace',
    'talent acquisition',
    'business automation',
    'AI market analysis',
    'startup tools',
    'SMB growth platform',
    'hiring software',
    'job search platform',
    'business intelligence',
    'workforce solutions'
  ],
  authors: [{ name: 'Moil Enterprise Inc.', url: 'https://moilapp.com' }],
  creator: 'Moil Enterprise Inc.',
  publisher: 'Moil Enterprise Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseURL1),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Moil | AI-Powered Business Growth Platform & Job Marketplace',
    description: 'Complete AI-powered platform for business growth and talent acquisition. Market research, business planning, smart hiring, and job search all in one place.',
    url: baseURL1,
    siteName: 'Moil',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Moil - AI-Powered Business Growth Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moil | AI-Powered Business Growth Platform & Job Marketplace',
    description: 'Complete AI-powered platform for business growth and talent acquisition. Market research, business planning, smart hiring, and job search all in one place.',
    images: ['/og_image.png'],
    creator: '@MoilApp',
    site: '@MoilApp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5843BE' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'business',
  classification: 'AI Business Growth Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#5843BE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Moil",
              "alternateName": "Moil Enterprise Inc.",
              "url": baseURL1,
              "logo": `${baseURL1}/og_image.png`,
              "description": "AI-powered business growth platform and job marketplace. Complete solution for market research, business planning, smart hiring, and talent acquisition.",
              "foundingDate": "2023",
              "industry": "Business Software",
              "numberOfEmployees": "11-50",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "Texas"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": baseURL1
              },
              "sameAs": [
                "https://twitter.com/MoilApp",
                "https://linkedin.com/company/moil-app"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Business Growth Platform",
                  "description": "AI-powered tools for market research, business planning, and smart hiring",
                  "category": "Business Software"
                },
                {
                  "@type": "Offer", 
                  "name": "Job Marketplace",
                  "description": "Connect with thousands of job opportunities and top talent",
                  "category": "Employment Platform"
                }
              ]
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Moil",
              "url": baseURL1,
              "description": "AI-powered business growth platform and job marketplace",
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${baseURL1}/candidate/searchjob?title={search_term_string}`
                  },
                  "query-input": "required name=search_term_string"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning={true}>
        <Analytics />
        <div id="modal"></div>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}