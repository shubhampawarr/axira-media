import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import {
  Sparkles,
  ShieldCheck,
  BarChart3,
  Target,
  Eye,
} from 'lucide-react';

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
    text: 'We focus on practical outcomes including visibility, engagement, inquiries and business growth.',
  },
];

const principles = [
  'Strategy before execution',
  'Clear communication',
  'Platform-ready creatives',
  'Consistent optimization',
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        <PageHero
          label="About Axira Media"
          title="A digital growth partner for modern businesses."
          description="Axira Media is a creative digital marketing agency focused on helping businesses build stronger online presence, communicate clearly and turn digital attention into meaningful business opportunities."
        />

        <section className="px-6 pb-16 md:pb-20">
          <div className="container-premium">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#071a3d] p-6 text-white shadow-[0_24px_70px_rgba(7,26,61,0.22)] md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />
                <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#2563eb]/20 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Target className="text-[#93c5fd]" size={22} />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                    Mission
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] md:text-3xl">
                    Helping businesses grow digitally.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-300 md:text-[15px]">
                    To help businesses grow through innovative marketing
                    strategies, creative branding and result-focused campaigns
                    that are practical, clear and built for modern digital
                    platforms.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#071a3d] p-6 text-white shadow-[0_24px_70px_rgba(7,26,61,0.22)] md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />
                <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#2563eb]/20 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Eye className="text-[#93c5fd]" size={22} />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                    Vision
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] md:text-3xl">
                    Becoming a trusted digital growth partner.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-300 md:text-[15px]">
                    To become a trusted digital growth partner by delivering
                    powerful, affordable and high-performing marketing solutions
                    that help brands grow with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.75rem] border border-[#dbeafe] bg-[#f8fbff] p-5 md:p-6">
              <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-600 md:text-sm">
                {principles.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#dbeafe] bg-white px-4 py-2 transition hover:bg-[#eff6ff] hover:text-[#2563eb]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbff] px-6 py-16 md:py-20">
          <div className="container-premium">
            <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
              <p className="section-label">Axira Values</p>

              <h2 className="section-title mx-auto max-w-4xl">
                Values that guide every campaign.
              </h2>

              <p className="section-text mx-auto mt-4 max-w-2xl">
                Our work is built around simple principles: clear thinking,
                polished execution and measurable improvement.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="premium-card group h-full p-6 transition hover:-translate-y-1 md:p-7"
                  >
                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eff6ff] transition group-hover:bg-[#071a3d]">
                      <Icon
                        className="text-[#2563eb] transition group-hover:text-white"
                        size={24}
                      />
                    </div>

                    <h3 className="text-xl font-black tracking-[-0.03em] text-[#071a3d] md:text-2xl">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {value.text}
                    </p>
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