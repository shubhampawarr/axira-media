'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import {
  ChevronDown,
  Play,
  X,
  Briefcase,
  Building2,
  Clapperboard,
  Target,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

const portfolioSections = [
  {
    section: 'Healthcare',
    description:
      'Marketing creatives and social content for healthcare and wellness-focused businesses.',
    clients: [
      {
        name: 'AF Care Physio',
        sector: 'Physiotherapy Clinic',
        work: 'Social Media Marketing',
        campaignType: 'Healthcare Awareness Content',
        challenge:
          'The brand needed clearer digital communication to present its physiotherapy services in a simple, trustworthy and approachable way.',
        approach:
          'Axira created platform-ready social media content focused on service awareness, patient trust and clear visual storytelling.',
        deliverables: [
          'Service-focused creatives',
          'Clinic awareness content',
          'Social media reel direction',
          'Trust-building visual communication',
        ],
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780390002/af_care_gnbso3.mp4',
      },
    ],
  },
  {
    section: 'Interior & Real Estate',
    description:
      'Brand videos and promotional creatives for interior, real estate and space-focused businesses.',
    clients: [
      {
        name: 'Kraft Associate Interior',
        sector: 'Interior Design',
        work: 'Brand Content',
        campaignType: 'Interior Brand Showcase',
        challenge:
          'The business needed premium visual content to communicate design quality, project style and brand credibility.',
        approach:
          'Axira developed brand-focused video content designed to highlight interiors, visual aesthetics and the overall service experience.',
        deliverables: [
          'Brand showcase video',
          'Visual storytelling direction',
          'Premium service positioning',
          'Social-ready campaign creative',
        ],
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780389960/kraft-assosiate-interior_meakta.mp4',
      },
    ],
  },
  {
    section: 'Restaurants & Cafes',
    description:
      'Reels and visual campaigns for food, cafe and restaurant brands looking to improve online appeal.',
    clients: [
      {
        name: 'Basyl Cafe Vapi',
        sector: 'Cafe / Food & Beverage',
        work: 'Social Media Reels',
        campaignType: 'Cafe Experience Content',
        challenge:
          'The cafe needed engaging content that could communicate ambience, food appeal and brand personality for social media audiences.',
        approach:
          'Axira created short-form content designed around visual appeal, atmosphere, product presentation and platform-friendly storytelling.',
        deliverables: [
          'Cafe reel content',
          'Food and ambience visuals',
          'Short-form campaign creative',
          'Social media content direction',
        ],
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780389962/basyl-cafe-vapi_m5ccac.mp4',
      },
      {
        name: "Pete's Pizzeria",
        sector: 'Restaurant',
        work: 'Social Media Marketing',
        campaignType: 'Restaurant Promotional Content',
        challenge:
          'The restaurant needed food-first content that could make the brand more visually memorable and suitable for social platforms.',
        approach:
          'Axira focused on appetising visuals, simple campaign messaging and content designed to support online discovery and recall.',
        deliverables: [
          'Restaurant reel creative',
          'Food-focused visual content',
          'Promotional campaign direction',
          'Social media-ready assets',
        ],
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780390010/pwswcwkmtaa0cm6azmg3.mp4',
      },
    ],
  },
  {
    section: 'Beauty & Lifestyle',
    description:
      'Content marketing assets for beauty, lifestyle and salon brands that rely heavily on visual trust.',
    clients: [
      {
        name: 'Nail Express Salon',
        sector: 'Salon / Beauty',
        work: 'Content Marketing',
        campaignType: 'Beauty Service Promotion',
        challenge:
          'The salon needed polished visual content that could highlight services, style and customer-facing brand presentation.',
        approach:
          'Axira created lifestyle-led marketing content focused on service appeal, visual quality and social media suitability.',
        deliverables: [
          'Beauty service creative',
          'Salon-focused content',
          'Lifestyle visual direction',
          'Campaign-ready social assets',
        ],
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780389966/nail-express-salon_d6uyzg.mp4',
      },
    ],
  },
];

export default function PortfolioPageClient() {
  const [openSection, setOpenSection] = useState<string>('Healthcare');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        <PageHero
          label="Portfolio"
          title="Real work shaped into"
          highlight="clear case studies."
          description="Explore client campaigns, creative direction and promotional content created across healthcare, interiors, restaurants, cafes, beauty and lifestyle businesses."
        />

        <section className="px-6 pb-24">
          <div className="container-premium">
            <div className="mb-10 rounded-[2rem] border border-[#dbeafe] bg-[#f8fbff] p-6 text-center md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2563eb]">
                Portfolio Approach
              </p>

              <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-[-0.04em] text-[#071a3d] md:text-5xl">
                We present the work through context, not inflated claims.
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                Each case study highlights the business context, creative
                approach and deliverables. Performance numbers are only used
                when they are verified and available.
              </p>
            </div>

            <div className="space-y-5">
              {portfolioSections.map((group) => {
                const isOpen = openSection === group.section;

                return (
                  <div
                    key={group.section}
                    className="overflow-hidden rounded-[2rem] border border-[#dbeafe] bg-white shadow-[0_20px_60px_rgba(7,26,61,0.08)]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSection(isOpen ? '' : group.section)
                      }
                      className="flex w-full items-center justify-between gap-5 bg-white px-5 py-6 text-left md:px-8 md:py-8"
                    >
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2563eb]">
                          Industry
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#071a3d] md:text-4xl">
                          {group.section}
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                          {group.description}
                        </p>
                      </div>

                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] text-[#2563eb] transition ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <ChevronDown size={22} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#dbeafe] bg-[#f8fbff] px-5 py-6 md:px-8 md:py-8">
                        <div className="grid gap-6">
                          {group.clients.map((client) => (
                            <article
                              key={client.name}
                              className="overflow-hidden rounded-[2rem] border border-[#dbeafe] bg-white shadow-[0_22px_70px_rgba(7,26,61,0.08)]"
                            >
                              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                                <div className="p-5 md:p-8">
                                  <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-[#eff6ff] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#2563eb]">
                                      Case Study
                                    </span>

                                    <span className="rounded-full bg-[#071a3d] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                                      {client.work}
                                    </span>
                                  </div>

                                  <h3 className="mt-6 text-3xl font-black tracking-[-0.04em] text-[#071a3d] md:text-5xl">
                                    {client.name}
                                  </h3>

                                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                                    <div className="rounded-2xl border border-[#dbeafe] bg-[#f8fbff] p-4">
                                      <Building2
                                        size={18}
                                        className="text-[#2563eb]"
                                      />
                                      <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#2563eb]">
                                        Sector
                                      </p>
                                      <p className="mt-1 text-sm font-bold text-[#071a3d]">
                                        {client.sector}
                                      </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#dbeafe] bg-[#f8fbff] p-4">
                                      <Briefcase
                                        size={18}
                                        className="text-[#2563eb]"
                                      />
                                      <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#2563eb]">
                                        Work
                                      </p>
                                      <p className="mt-1 text-sm font-bold text-[#071a3d]">
                                        {client.work}
                                      </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#dbeafe] bg-[#f8fbff] p-4">
                                      <Clapperboard
                                        size={18}
                                        className="text-[#2563eb]"
                                      />
                                      <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#2563eb]">
                                        Type
                                      </p>
                                      <p className="mt-1 text-sm font-bold text-[#071a3d]">
                                        {client.campaignType}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                                    <div className="rounded-[1.5rem] border border-[#dbeafe] bg-white p-5">
                                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff]">
                                        <Target
                                          size={20}
                                          className="text-[#2563eb]"
                                        />
                                      </div>

                                      <h4 className="text-lg font-black text-[#071a3d]">
                                        Challenge
                                      </h4>

                                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        {client.challenge}
                                      </p>
                                    </div>

                                    <div className="rounded-[1.5rem] border border-[#dbeafe] bg-white p-5">
                                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff]">
                                        <Lightbulb
                                          size={20}
                                          className="text-[#2563eb]"
                                        />
                                      </div>

                                      <h4 className="text-lg font-black text-[#071a3d]">
                                        What Axira Did
                                      </h4>

                                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        {client.approach}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="relative bg-[#071a3d] p-5 text-white md:p-8">
                                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.5),transparent_35%)]" />

                                  <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div>
                                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                                        Deliverables
                                      </p>

                                      <div className="mt-6 space-y-3">
                                        {client.deliverables.map((item) => (
                                          <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-slate-200"
                                          >
                                            <CheckCircle2
                                              size={16}
                                              className="shrink-0 text-[#93c5fd]"
                                            />
                                            <span>{item}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="mt-8">
                                      <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
                                        <video
                                          src={client.video}
                                          muted
                                          loop
                                          playsInline
                                          preload="metadata"
                                          className="h-64 w-full object-cover opacity-90"
                                        />
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          setActiveVideo(client.video)
                                        }
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#071a3d] transition hover:scale-[1.02]"
                                      >
                                        <Play size={17} />
                                        Watch Campaign
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />

        <Footer />
      </main>

      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a3d]/90 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071a3d]"
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}