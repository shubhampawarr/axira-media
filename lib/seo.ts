import type { Metadata } from 'next';

const siteUrl = 'https://axiramedia.com';

const defaultTitle = 'Axira Media | Digital Marketing & Creative Agency';
const defaultDescription =
  'Axira Media helps brands grow through social media marketing, performance ads, website development, SEO, branding, and creative digital campaigns.';

export const siteConfig = {
  name: 'Axira Media',
  url: siteUrl,
  title: defaultTitle,
  description: defaultDescription,
  ogImage: `${siteUrl}/og-image.jpg`,
};

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
};

export function generateSeoMetadata({
  title,
  description = defaultDescription,
  path = '',
  keywords = [],
}: SeoProps): Metadata {
  const pageTitle = title ? `${title} | Axira Media` : defaultTitle;
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      'Axira Media',
      'digital marketing agency',
      'social media marketing',
      'performance marketing',
      'Meta Ads',
      'Google Ads',
      'SEO services',
      'website development',
      'branding agency',
      'creative agency',
      ...keywords,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: 'Axira Media',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: 'Axira Media Digital Marketing Agency',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}