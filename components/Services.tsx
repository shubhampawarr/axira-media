'use client';

import {
  Megaphone,
  MousePointerClick,
  Search,
  Globe,
  Palette,
  MapPin,
  BarChart3,
  Clapperboard,
} from 'lucide-react';
import FadeUp from './FadeUp';

const services = [
  {
    title: 'Social Media Management',
    icon: Megaphone,
    desc: 'Content strategy, posts, reels and profile growth.',
  },
  {
    title: 'Meta Ads',
    icon: MousePointerClick,
    desc: 'Facebook & Instagram campaigns focused on leads and sales.',
  },
  {
    title: 'Google Ads',
    icon: BarChart3,
    desc: 'Search, Display and YouTube advertising campaigns.',
  },
  {
    title: 'Search Engine Optimization',
    icon: Search,
    desc: 'Improve rankings, traffic and online visibility.',
  },
  {
    title: 'Website Development',
    icon: Globe,
    desc: 'Modern responsive websites built for conversions.',
  },
  {
    title: 'Branding & Design',
    icon: Palette,
    desc: 'Creative branding, graphics and marketing assets.',
  },
  {
    title: 'Google Business Listing',
    icon: MapPin,
    desc: 'Local search visibility and Google Maps optimization.',
  },
  {
    title: 'Content Creation',
    icon: Clapperboard,
    desc: 'Reels, campaign creatives and visual content for digital platforms.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 px-6 bg-white">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-10 md:mb-12">
            <p className="section-label">Our Services</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Complete digital solutions for{' '}
              <span className="text-[#2563eb]">business growth.</span>
            </h2>

            <p className="section-text max-w-2xl mx-auto mt-5">
              From social media and paid advertising to search engine
              optimization, websites, branding, content creation and local
              visibility.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeUp key={service.title} delay={index * 0.06}>
                <div className="premium-card p-4 md:p-6 h-full">
                  <div className="w-11 h-11 md:w-13 md:h-13 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-4 md:mb-5">
                    <Icon className="text-[#2563eb]" size={22} />
                  </div>

                  <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-[#071a3d] leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}