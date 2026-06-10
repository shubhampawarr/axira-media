import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import { Sparkles, ShieldCheck, BarChart3 } from 'lucide-react';

export const metadata: Metadata = generateSeoMetadata({
  title: 'About Us',
  description:
    'Learn about Axira Media, our mission, vision and values. We help businesses grow through digital marketing, advertising, websites and creative strategy.',
  path: '/about',
  keywords: [
    'about Axira Media',
    'digital marketing team',
    'creative agency values',
    'brand growth agency',
  ],
});

const values = [
  {
    title: 'Creativity',
    icon: Sparkles,
    text: 'We create digital content and campaigns that help brands stand out and connect with the right audience.',
  },
  {
    title: 'Transparency',
    icon: ShieldCheck,
    text: 'We believe in clear communication, simple strategies and honest execution throughout every project.',
  },
  {
    title: 'Performance',
    icon: BarChart3,
    text: 'We focus on measurable outcomes including visibility, engagement, leads, sales and business growth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        <PageHero
          label="About Axira Media"
          title="Your growth partner in the digital world."
          description="Axira Media is a creative digital marketing agency focused on helping businesses build a strong online presence, reach the right audience and generate measurable results."
        />

        <section className="px-6 pb-24">
          <div className="container-premium grid lg:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#071a3d] p-8 text-white shadow-[0_30px_90px_rgba(7,26,61,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />

              <div className="relative z-10">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                  Mission
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Helping businesses grow digitally.
                </h2>

                <p className="mt-5 leading-relaxed text-slate-300">
                  To help businesses grow through innovative marketing
                  strategies, creative branding and result-focused campaigns.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#071a3d] p-8 text-white shadow-[0_30px_90px_rgba(7,26,61,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />

              <div className="relative z-10">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                  Vision
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Becoming a trusted digital growth partner.
                </h2>

                <p className="mt-5 leading-relaxed text-slate-300">
                  To become a trusted digital growth partner by delivering
                  powerful, affordable and high-performing marketing solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 bg-[#f8fbff]">
          <div className="container-premium">
            <div className="text-center mb-14">
              <p className="section-label">Axira Values</p>

              <h2 className="section-title max-w-4xl mx-auto">
                Values that guide every campaign.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div key={value.title} className="premium-card p-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff6ff]">
                      <Icon className="text-[#2563eb]" size={26} />
                    </div>

                    <h3 className="text-2xl font-black text-[#071a3d]">
                      {value.title}
                    </h3>

                    <p className="section-text mt-4">{value.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}