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
} from 'lucide-react';

const portfolioSections = [
  {
    section: 'Healthcare',
    description: 'Marketing creatives and social content for healthcare brands.',
    clients: [
      {
        name: 'AF Care Physio',
        sector: 'Physiotherapy Clinic',
        work: 'Social Media Marketing',
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780390002/af_care_gnbso3.mp4',
      },
    ],
  },
  {
    section: 'Interior & Real Estate',
    description:
      'Brand videos and promotional creatives for space-focused businesses.',
    clients: [
      {
        name: 'Kraft Associate Interior',
        sector: 'Interior Design',
        work: 'Brand Content',
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780389960/kraft-assosiate-interior_meakta.mp4',
      },
    ],
  },
  {
    section: 'Restaurants & Cafes',
    description:
      'Reels and visual campaigns for food, cafe and restaurant brands.',
    clients: [
      {
        name: 'Basyl Cafe Vapi',
        sector: 'Cafe / Food & Beverage',
        work: 'Social Media Reels',
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780389962/basyl-cafe-vapi_m5ccac.mp4',
      },
      {
        name: "Pete's Pizzeria",
        sector: 'Restaurant',
        work: 'Social Media Marketing',
        video:
          'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780390010/pwswcwkmtaa0cm6azmg3.mp4',
      },
    ],
  },
  {
    section: 'Beauty & Lifestyle',
    description:
      'Content marketing assets for beauty, lifestyle and salon brands.',
    clients: [
      {
        name: 'Nail Express Salon',
        sector: 'Salon / Beauty',
        work: 'Content Marketing',
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
          title="Real work for"
          highlight="real businesses."
          description="Explore client campaigns, social media content, brand creatives and promotional videos created across different industries."
        />

        <section className="px-6 pb-24">
          <div className="container-premium">
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
                          Sector
                        </p>

                        <h2 className="mt-2 text-2xl md:text-4xl font-black tracking-[-0.04em] text-[#071a3d]">
                          {group.section}
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
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
                        <div className="grid gap-5 md:grid-cols-2">
                          {group.clients.map((client) => (
                            <article
                              key={client.name}
                              className="premium-card bg-white p-5 md:p-6"
                            >
                              <h3 className="text-xl md:text-2xl font-black text-[#071a3d]">
                                {client.name}
                              </h3>

                              <div className="mt-5 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                  <Building2
                                    size={17}
                                    className="text-[#2563eb]"
                                  />
                                  <span>{client.sector}</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                  <Briefcase
                                    size={17}
                                    className="text-[#2563eb]"
                                  />
                                  <span>{client.work}</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                  <Clapperboard
                                    size={17}
                                    className="text-[#2563eb]"
                                  />
                                  <span>Campaign Creative</span>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => setActiveVideo(client.video)}
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#071a3d] px-5 py-3.5 text-sm font-black text-white transition hover:scale-[1.02] hover:bg-[#0b2a5b]"
                              >
                                <Play size={17} />
                                Watch Campaign
                              </button>
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