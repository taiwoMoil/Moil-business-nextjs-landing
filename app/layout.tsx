import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Moil | Connect Blue-Collar Workers with Employers',
    template: '%s | Moil'
  },
  description: 'Moil connects skilled blue-collar workers with employers. Find jobs, hire talent, and build careers in construction, manufacturing, logistics, and more.',
  keywords: [
    'blue collar jobs',
    'skilled labor',
    'construction jobs',
    'manufacturing jobs',
    'logistics jobs',
    'hire workers',
    'job search',
    'employment platform',
    'skilled trades',
    'worker recruitment'
  ],
  authors: [{ name: 'Moil Enterprise Inc.', url: 'https://moilapp.com' }],
  creator: 'Moil Enterprise Inc.',
  publisher: 'Moil Enterprise Inc.',
  metadataBase: new URL('https://moilapp.com'),
  alternates: {
    canonical: 'https://moilapp.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Moil | Connect Blue-Collar Workers with Employers',
    description: 'The leading platform connecting skilled blue-collar workers with employers across various industries.',
    url: 'https://moilapp.com',
    siteName: 'Moil',
    images: [
      {
        url: '/moil-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moil - Connecting Blue-Collar Workers with Employers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moil | Blue-Collar Job Platform',
    description: 'Connect skilled workers with employers. Find your next opportunity or hire top talent.',
    images: ['/moil-og-image.jpg'],
    creator: '@MoilApp',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
  classification: 'Employment and Recruitment Platform',
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6633" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning={true}>
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