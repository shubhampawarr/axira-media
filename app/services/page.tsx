import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import {
  Megaphone,
  MousePointerClick,
  Search,
  Globe,
  Palette,
  MapPin,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Services',
  description:
    'Explore Axira Media services including Social Media Management, Meta Ads, Google Ads, Search Engine Optimization, Website Development, Branding & Design and Google Business Listing.',
  path: '/services',
  keywords: [
    'social media management',
    'Meta Ads agency',
    'Google Ads agency',
    'SEO services',
    'website development agency',
    'branding and design agency',
    'Google Business Profile management',
  ],
});

const services = [
  {
    title: 'Social Media Management',
    icon: Megaphone,
    intro: 'Build a consistent and engaging social media presence.',
    deliverables: [
      'Strategy Planning',
      'Post & Reel Ideas',
      'Captions & Hashtags',
      'Profile Growth',
    ],
  },
  {
    title: 'Meta Ads',
    icon: MousePointerClick,
    intro: 'Run Facebook and Instagram campaigns for leads and sales.',
    deliverables: [
      'Lead Campaigns',
      'Retargeting',
      'Audience Research',
      'Ad Optimization',
    ],
  },
  {
    title: 'Google Ads',
    icon: BarChart3,
    intro: 'Reach customers actively searching for your services.',
    deliverables: ['Search Ads', 'Display Ads', 'YouTube Ads', 'Tracking Setup'],
  },
  {
    title: 'Search Engine Optimization',
    icon: Search,
    intro: 'Improve rankings, visibility and organic traffic.',
    deliverables: ['SEO Audit', 'On-Page SEO', 'Technical SEO', 'Local SEO'],
  },
  {
    title: 'Website Development',
    icon: Globe,
    intro: 'Build professional websites designed for conversion.',
    deliverables: [
      'Business Sites',
      'Landing Pages',
      'E-Commerce',
      'Responsive Design',
    ],
  },
  {
    title: 'Branding & Design',
    icon: Palette,
    intro: 'Create a polished identity for a stronger brand presence.',
    deliverables: [
      'Logo Design',
      'Brand Identity',
      'Social Creatives',
      'Ad Designs',
    ],
  },
  {
    title: 'Google Business Listing',
    icon: MapPin,
    intro: 'Improve local visibility through Google Maps and listings.',
    deliverables: [
      'Profile Setup',
      'Listing Optimization',
      'Map Visibility',
      'Review Guidance',
    ],
  },
];

const servicePromises = [
  {
    title: 'Clear Strategy',
    text: 'Every project starts with goals, audience, positioning and the right channel plan.',
  },
  {
    title: 'Creative Execution',
    text: 'Campaigns and assets are built to look polished, memorable and platform-ready.',
  },
  {
    title: 'Performance Focus',
    text: 'We track visibility, leads, engagement and growth outcomes across campaigns.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        <PageHero
          label="Our Services"
          title="Digital marketing capabilities built for"
          highlight="serious growth."
          description="From visibility and traffic to leads, conversions and brand trust — Axira Media provides end-to-end digital growth services for modern businesses."
        />

        <section className="px-6 pb-24">
          <div className="container-premium">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {['Strategy', 'Creativity', 'Performance', 'Growth'].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-[#dbeafe] bg-white/80 p-4 md:p-6 text-center shadow-[0_18px_45px_rgba(7,26,61,0.08)] backdrop-blur-xl"
                  >
                    <p className="text-xs md:text-sm font-black text-[#071a3d]">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="container-premium">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group relative overflow-hidden rounded-[1.6rem] md:rounded-[2rem] border border-[#bfdbfe] bg-[#071a3d] text-white shadow-[0_18px_50px_rgba(7,26,61,0.2)] transition-all duration-300 hover:-translate-y-1 md:shadow-[0_28px_80px_rgba(7,26,61,0.22)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />

                    <div className="relative z-10 p-4 md:p-8">
                      <div className="mb-5 md:mb-8 flex items-start justify-between gap-3">
                        <div className="flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                          <Icon size={21} className="text-[#93c5fd]" />
                        </div>

                        <span className="rounded-full bg-white/10 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.18em] text-[#bfdbfe]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h2 className="text-base md:text-4xl font-black tracking-[-0.03em] text-white leading-tight">
                        {service.title}
                      </h2>

                      <p className="mt-3 md:mt-4 text-xs md:text-base leading-relaxed text-slate-300">
                        {service.intro}
                      </p>

                      <div className="mt-5 md:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 md:px-4 py-2.5 md:py-3 text-[11px] md:text-sm font-medium text-slate-200 border border-white/10"
                          >
                            <CheckCircle2
                              size={14}
                              className="shrink-0 text-[#93c5fd]"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 bg-[#f8fbff]">
          <div className="container-premium">
            <div className="text-center mb-14">
              <p className="section-label">How We Work</p>

              <h2 className="section-title max-w-4xl mx-auto">
                Strategy, creative execution and performance in one system.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {servicePromises.map((item) => (
                <div key={item.title} className="premium-card p-8">
                  <h3 className="text-xl md:text-2xl font-black text-[#071a3d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}