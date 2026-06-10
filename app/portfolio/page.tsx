import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

import PortfolioPageClient from '@/components/PortfolioPageClient';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Portfolio',
  description:
    'Explore Axira Media portfolio work across healthcare, real estate, restaurants, cafes, beauty, lifestyle, digital campaigns, brand creatives and promotional videos.',
  path: '/portfolio',
  keywords: [
    'Axira Media portfolio',
    'digital marketing portfolio',
    'creative agency work',
    'social media portfolio',
    'branding portfolio',
    'campaign videos',
  ],
});

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}