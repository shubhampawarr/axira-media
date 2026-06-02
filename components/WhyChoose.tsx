'use client';

import { Target, ShieldCheck, LineChart, Briefcase } from 'lucide-react';
import FadeUp from './FadeUp';

const features = [
  {
    title: 'Business-First',
    icon: Briefcase,
    desc: 'Strategies built around measurable growth.',
  },
  {
    title: 'Transparent',
    icon: ShieldCheck,
    desc: 'Clear reporting and communication.',
  },
  {
    title: 'Growth Focused',
    icon: LineChart,
    desc: 'Focused on leads, sales and ROI.',
  },
  {
    title: 'Custom Plans',
    icon: Target,
    desc: 'Tailored strategies for every business.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-24 px-6 bg-white">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-10 md:mb-14">
            <p className="section-label">Why Choose Axira</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Built to help businesses{' '}
              <span className="text-[#2563eb]">
                scale digitally.
              </span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeUp key={feature.title} delay={index * 0.08}>
                <div className="premium-card p-4 md:p-6 h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-3 md:mb-4">
                    <Icon className="text-[#2563eb]" size={20} />
                  </div>

                  <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-[#071a3d] leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {feature.desc}
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