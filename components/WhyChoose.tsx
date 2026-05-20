'use client';

import { Target, ShieldCheck, LineChart, Briefcase } from 'lucide-react';
import FadeUp from './FadeUp';

const features = [
  {
    title: 'Business-First Approach',
    icon: Briefcase,
    desc: 'Every strategy is designed around measurable business growth.',
  },
  {
    title: 'Transparent Execution',
    icon: ShieldCheck,
    desc: 'Track campaigns, performance and results with full clarity.',
  },
  {
    title: 'Growth-Focused',
    icon: LineChart,
    desc: 'We focus on leads, conversions and long-term ROI.',
  },
  {
    title: 'Custom Strategies',
    icon: Target,
    desc: 'No templates — every business gets a tailored roadmap.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="compact-section">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-10">
            <p className="section-label">Why Choose Axira</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Built to help businesses{' '}
              <span className="gold-text">scale digitally.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeUp key={feature.title} delay={index * 0.08}>
                <div className="premium-card p-6 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-4">
                    <Icon className="text-[#d4af37]" size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
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