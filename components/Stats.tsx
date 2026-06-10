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
    <section className="bg-[#f8fbff] px-6 py-16 md:py-20">
      <div className="container-premium">
        <div className="mb-10 text-center md:mb-12">
          <p className="section-label">Trusted Growth Partner</p>

          <h2 className="section-title mx-auto max-w-5xl">
            Helping businesses build stronger digital foundations.
          </h2>

          <p className="section-text mx-auto mt-5 max-w-3xl">
            We help businesses improve online visibility, attract the right
            audience, generate better inquiries and build stronger digital
            brands through strategy, creativity and performance-led execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeUp key={stat.title} delay={index * 0.08}>
                <div className="premium-card h-full p-6 md:p-7">
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eff6ff]">
                    <Icon className="text-[#2563eb]" size={24} />
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

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-600 md:text-sm">
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
              className="rounded-full border border-[#dbeafe] bg-white px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}