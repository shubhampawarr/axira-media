'use client';

import FadeUp from './FadeUp';
import { Target, Sparkles, LineChart } from 'lucide-react';

const items = [
  {
    title: 'Custom Strategy',
    icon: Target,
    text: 'Every business gets a tailored roadmap based on goals, audience, market and budget.',
  },
  {
    title: 'Creative Execution',
    icon: Sparkles,
    text: 'We create content, campaigns and digital assets that look polished and communicate clearly.',
  },
  {
    title: 'Performance Tracking',
    icon: LineChart,
    text: 'Campaigns are monitored, optimized and improved to support measurable business growth.',
  },
];

export default function WhyBusinessesChoose() {
  return (
    <section className="py-16 md:py-20 px-6 bg-[#071a3d] text-white overflow-hidden">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[#93c5fd] uppercase tracking-[0.26em] text-[0.6rem] font-black mb-3">
              Why Businesses Choose Axira
            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto">
              Strategy, creativity and performance working together.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base text-slate-300 leading-relaxed">
              We combine planning, creative execution and performance tracking
              so every campaign has a clear purpose and measurable direction.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/10 p-6 md:p-7">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
                    <Icon className="text-[#93c5fd]" size={22} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {item.text}
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