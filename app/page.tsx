import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyBusinessesChoose from '@/components/WhyBusinessesChoose';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Results from '@/components/Results';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Digital Marketing & Creative Agency',
  description:
    'Axira Media is a digital marketing and creative agency helping brands grow through social media, paid ads, SEO, websites, branding and performance-led campaigns.',
  path: '/',
  keywords: [
    'digital marketing agency in India',
    'creative marketing agency',
    'social media agency',
    'performance marketing agency',
  ],
});

export default function Home() {
  return (
    <main className="bg-white text-[#071a3d] overflow-x-hidden">
      <Navbar />

      <Hero />

      <Stats />

      <Results />

      <About />

      <Services />

      <WhyBusinessesChoose />

      <WhyChoose />

      <Process />

      <Portfolio />

      <Testimonials />

      <FinalCTA />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}