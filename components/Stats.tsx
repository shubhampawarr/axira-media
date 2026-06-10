'use client';

import FadeUp from './FadeUp';
import {
  BadgeCheck,
  BriefcaseBusiness,
  Layers3,
  MapPin,
} from 'lucide-react';

const stats = [
  {
    icon: BriefcaseBusiness,
    title: 'Industry Experience',
    label: 'Healthcare, restaurants, interiors, beauty and local businesses',
  },
  {
    icon: Layers3,
    title: 'Full-Funnel Services',
    label: 'Strategy, creatives, ads, websites, SEO and local visibility',
  },
  {
    icon: MapPin,
    title: 'Local Business Focus',
    label: 'Marketing support built for discovery, trust and inquiries',
  },
  {
    icon: BadgeCheck,
    title: 'Execution Clarity',
    label: 'Clear deliverables, practical reporting and focused optimization',
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-6 py-[4.5rem] md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="container-premium relative z-10">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="section-label">Trusted Growth Partner</p>

          <h2 className="section-title mx-auto max-w-5xl">
            A practical marketing system for growing businesses.
          </h2>

          <p className="section-text mx-auto mt-5 max-w-3xl">
            We help businesses improve online visibility, attract the right
            audience, generate better inquiries and build stronger digital
            brands through strategy, creativity and performance-led execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeUp key={stat.title} delay={index * 0.08}>
                <div className="premium-card group h-full p-6 transition hover:-translate-y-1 md:p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff6ff] transition group-hover:bg-[#071a3d]">
                    <Icon
                      className="text-[#2563eb] transition group-hover:text-white"
                      size={24}
                    />
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.03em] text-[#071a3d] md:text-2xl">
                    {stat.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#dbeafe] bg-white/75 p-5 shadow-[0_18px_55px_rgba(7,26,61,0.06)] backdrop-blur-xl md:p-6">
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-600 md:text-sm">
            {[
              'Healthcare',
              'Restaurants',
              'Real Estate',
              'Beauty',
              'Local Businesses',
              'Startups',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#dbeafe] bg-[#f8fbff] px-4 py-2 transition hover:bg-[#eff6ff] hover:text-[#2563eb]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}