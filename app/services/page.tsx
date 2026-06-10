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
  ArrowRight,
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
    text: 'We track practical campaign signals such as visibility, inquiries, engagement and conversion intent.',
  },
];

const pillars = ['Strategy', 'Creativity', 'Performance', 'Growth'];

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

        <section className="px-6 pb-14 md:pb-16">
          <div className="container-premium">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-[#dbeafe] bg-white/80 p-4 text-center shadow-[0_14px_40px_rgba(7,26,61,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#f8fbff] md:p-5"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2563eb]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-20">
          <div className="container-premium">
            <div className="mb-9 text-center md:mb-10">
              <p className="section-label">What We Do</p>

              <h2 className="section-title mx-auto max-w-4xl">
                Services designed to improve visibility, trust and inquiries.
              </h2>

              <p className="section-text mx-auto mt-4 max-w-2xl">
                Choose a focused service or combine multiple capabilities into a
                complete digital growth system.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-[#bfdbfe] bg-[#071a3d] text-white shadow-[0_18px_55px_rgba(7,26,61,0.18)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />
                    <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#2563eb]/20 blur-3xl" />

                    <div className="relative z-10 p-5 md:p-6">
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                          <Icon size={21} className="text-[#93c5fd]" />
                        </div>

                        <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#bfdbfe]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black leading-tight tracking-[-0.04em] text-white md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {service.intro}
                      </p>

                      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2.5 text-xs font-semibold text-slate-200"
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

              <article className="group relative overflow-hidden rounded-[1.6rem] border border-[#dbeafe] bg-[#f8fbff] p-5 shadow-[0_18px_55px_rgba(7,26,61,0.08)] transition hover:-translate-y-1 md:p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <ArrowRight className="text-[#2563eb]" size={21} />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2563eb]">
                  Custom Plan
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071a3d] md:text-3xl">
                  Need a mixed service package?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We can combine content, ads, SEO, website development and
                  local visibility into one practical growth plan.
                </p>

                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#071a3d] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0b2a5b]"
                >
                  Discuss Project <ArrowRight size={16} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbff] px-6 py-16 md:py-20">
          <div className="container-premium">
            <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
              <p className="section-label">How We Work</p>

              <h2 className="section-title mx-auto max-w-4xl">
                Strategy, creative execution and performance in one system.
              </h2>

              <p className="section-text mx-auto mt-4 max-w-2xl">
                Every campaign is built around practical goals, clear
                deliverables and consistent improvement.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {servicePromises.map((item, index) => (
                <div
                  key={item.title}
                  className="premium-card group h-full p-6 transition hover:-translate-y-1 md:p-7"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eff6ff] text-sm font-black text-[#2563eb] transition group-hover:bg-[#071a3d] group-hover:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.03em] text-[#071a3d] md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
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