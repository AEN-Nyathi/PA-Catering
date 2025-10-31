import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | P.A Catering',
  defaultTitle: 'P.A Catering - Delicious Food & Drinks',
  description: 'Experience the best dining with our delicious menu and warm atmosphere. Open for breakfast, lunch, and dinner.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://yourdomain.com',
    siteName: 'P.A Catering',
  },
  twitter: {
    handle: '@centraleatery',
    site: '@centraleatery',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#ef4444',
    },
  ],
};
