import type { Metadata } from 'next';
import { baseURL1 } from '../../src/common/constants/baseUrl';

export const metadata: Metadata = {
  title: 'Find Jobs | AI-Powered Job Search & Career Platform | Moil',
  description: 'Discover your dream job with Moil\'s AI-powered job search platform. Access thousands of opportunities, get AI resume assistance, and connect with top employers. Start your career journey today.',
  keywords: [
    'job search platform',
    'AI job matching',
    'career opportunities',
    'resume builder AI',
    'job marketplace',
    'employment platform',
    'career development',
    'job finder',
    'talent platform',
    'professional networking',
    'job alerts',
    'career coaching'
  ],
  openGraph: {
    title: 'Find Jobs | AI-Powered Job Search & Career Platform',
    description: 'Discover your dream job with AI-powered job search. Access thousands of opportunities and connect with top employers.',
    url: `${baseURL1}/candidate`,
    images: ['/og_image.png'],
  },
  twitter: {
    title: 'Find Jobs | AI-Powered Job Search & Career Platform',
    description: 'Discover your dream job with AI-powered job search. Access thousands of opportunities and connect with top employers.',
  },
  alternates: {
    canonical: `${baseURL1}/candidate`,
  },
};

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Candidate-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Moil Job Search Platform",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Web",
            "description": "AI-powered job search platform connecting candidates with employers",
            "url": `${baseURL1}/candidate`,
            "screenshot": `${baseURL1}/og_image.png`,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free job search platform"
            },
            "featureList": [
              "AI Job Matching",
              "Resume Builder",
              "Job Alerts",
              "Career Coaching",
              "Interview Preparation",
              "Salary Insights"
            ]
          })
        }}
      />
      
      {/* JobPosting structured data for job search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Job Opportunities",
            "description": "Latest job opportunities available on Moil platform",
            "url": `${baseURL1}/candidate/searchjob`,
            "numberOfItems": "10000+"
          })
        }}
      />
      {children}
    </>
  );
}
