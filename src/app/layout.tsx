import type { Metadata, Viewport } from 'next';
import { DefaultSeo } from 'next-seo';
import { SEO } from './seo.config';
import './globals.css';
import './layout.css';

import { UserProvider } from '@/context/UserContext';
import Navbar from '@/components/Navbar/Navbar';
import { RouteGuard } from '@/context/RouteGuardContext';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle as string,
    template: SEO.titleTemplate ? `%s | ${SEO.titleTemplate.split('|')[1].trim()}` : '%s',
  },
  description: SEO.description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://yourdomain.com',
    siteName: 'P.A Catering',
    images: [
      {
        url: '/images/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'P.A Catering',
      },
    ],
  },
  twitter: SEO.twitter,
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ef4444',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={` antialiased min-h-screen`}>
				<DefaultSeo {...SEO} />
				<UserProvider>
					<RouteGuard>
						<Navbar />
						<main className="min-h-[calc(100vh-64px)]">
							{children}
						</main>
					</RouteGuard>
				</UserProvider>
				<Analytics />
			</body>
		</html>
	);
}
