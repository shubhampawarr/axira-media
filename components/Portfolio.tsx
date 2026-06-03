'use client';

import Link from 'next/link';
import FadeUp from './FadeUp';
import {
  HeartPulse,
  Utensils,
  Home,
  Sparkles,
  Store,
  Rocket,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    title: 'Healthcare',
    icon: HeartPulse,
    desc: 'Clinics, wellness brands and healthcare service providers.',
  },
  {
    title: 'Restaurants & Cafes',
    icon: Utensils,
    desc: 'Food brands, cafes, restaurants and hospitality businesses.',
  },
  {
    title: 'Interior & Real Estate',
    icon: Home,
    desc: 'Interior studios, property brands and space-focused businesses.',
  },
  {
    title: 'Beauty & Lifestyle',
    icon: Sparkles,
    desc: 'Salons, beauty brands and lifestyle businesses.',
  },
  {
    title: 'Local Businesses',
    icon: Store,
    desc: 'Local service providers looking to grow digitally.',
  },
  {
    title: 'Startups & Growing Brands',
    icon: Rocket,
    desc: 'Early-stage businesses building digital visibility.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#f8fbff]">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="section-label">Industries We Worked With</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Experience across{' '}
              <span className="text-[#2563eb]">
                multiple business sectors.
              </span>
            </h2>

            <p className="section-text max-w-2xl mx-auto mt-5">
              Axira Media works with businesses across different industries,
              creating digital strategies, campaigns and content based on each
              brand’s audience and goals.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <FadeUp key={industry.title} delay={index * 0.08}>
                <div className="premium-card p-4 md:p-7 h-full">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="text-[#2563eb]" size={22} />
                  </div>

                  <h3 className="text-base md:text-2xl font-black text-[#071a3d] leading-tight">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#071a3d] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0b2a5b] hover:scale-105"
          >
            View Portfolio Work <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}