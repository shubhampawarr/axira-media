'use client';

import { Globe, Search, BarChart3, Megaphone } from 'lucide-react';
import FadeUp from './FadeUp';

const services = [
  {
    title: 'Website Development',
    icon: Globe,
    desc: 'Modern responsive websites built for conversions, speed and premium brand presence.',
  },
  {
    title: 'SEO Optimization',
    icon: Search,
    desc: 'Improve search rankings, organic visibility and long-term traffic growth.',
  },
  {
    title: 'Google Ads',
    icon: BarChart3,
    desc: 'Performance-focused ad campaigns designed to generate leads and measurable ROI.',
  },
  {
    title: 'Social Media Marketing',
    icon: Megaphone,
    desc: 'Content, strategy and campaign execution for stronger brand awareness.',
  },
];

export default function Services() {
  return (
    <section id="services" className="compact-section">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="section-label">Services</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Digital solutions designed for{' '}
              <span className="gold-text">business growth.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeUp key={service.title} delay={index * 0.08}>
                <div className="premium-card p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-6">
                    <Icon className="text-[#d4af37]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                  <p className="text-slate-400 leading-relaxed">
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