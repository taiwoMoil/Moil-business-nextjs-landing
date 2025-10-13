import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Growth Platform | AI-Powered Market Research & Smart Hiring | Moil',
  description: 'Transform your business with Moil\'s AI-powered platform. Get instant market research, generate business plans, and hire top talent. Trusted by 500+ businesses. Start your free trial today.',
  keywords: [
    'business growth platform',
    'AI market research',
    'business planning software',
    'smart hiring tools',
    'startup tools',
    'SMB growth',
    'business automation',
    'market analysis AI',
    'competitor analysis',
    'business intelligence'
  ],
  openGraph: {
    title: 'Business Growth Platform | AI-Powered Market Research & Smart Hiring',
    description: 'Transform your business with AI-powered market research, business planning, and smart hiring tools. Start your free trial today.',
    url: 'https://moilapp.com/business',
    images: ['/og_image.png'],
  },
  twitter: {
    title: 'Business Growth Platform | AI-Powered Market Research & Smart Hiring',
    description: 'Transform your business with AI-powered market research, business planning, and smart hiring tools. Start your free trial today.',
  },
  alternates: {
    canonical: 'https://moilapp.com/business',
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Business-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Moil Business Growth Platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "AI-powered business growth platform with market research, business planning, and smart hiring tools",
            "url": "https://moilapp.com/business",
            "screenshot": "https://moilapp.com/og_image.png",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free trial available"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "500"
            },
            "featureList": [
              "AI Market Research",
              "Business Plan Generation", 
              "Smart Hiring Tools",
              "Competitor Analysis",
              "Growth Analytics"
            ]
          })
        }}
      />
      {children}
    </>
  );
}
