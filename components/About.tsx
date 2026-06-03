'use client';

import FadeUp from './FadeUp';
import { BarChart3, Sparkles, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 bg-[#f8fbff]">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <FadeUp>
            <p className="section-label">About Axira</p>

            <h2 className="section-title">
              We help brands grow through{' '}
              <span className="text-[#2563eb]">strategy, creativity</span> and
              performance.
            </h2>

            <p className="section-text mt-6">
              Axira Media is a growth-focused digital marketing agency helping
              businesses improve visibility, attract customers and generate
              measurable results through content, advertising, websites and
              digital strategy.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                'Custom Strategies',
                'Transparent Execution',
                'Data Driven',
                'Growth Focused',
              ].map((item) => (
                <div
                  key={item}
                  className="premium-card p-4 md:p-5 font-semibold text-[#071a3d]"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative rounded-[2rem] bg-[#071a3d] p-6 md:p-8 text-white overflow-hidden shadow-[0_30px_90px_rgba(7,26,61,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(37,99,235,0.55),transparent_35%)]" />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: 'Strategy', value: 'Focused' },
                  { icon: Sparkles, label: 'Creative', value: 'Content' },
                  { icon: BarChart3, label: 'Growth', value: 'Results' },
                  { icon: Target, label: 'Execution', value: 'Clear' },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4"
                    >
                      <Icon className="text-[#93c5fd]" size={20} />

                      <p className="mt-4 text-xs text-slate-300">
                        {item.label}
                      </p>

                      <p className="mt-1 font-black">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <FadeUp delay={0.1}>
            <div className="premium-card p-6 md:p-8 h-full">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                Mission
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                To help businesses grow online through strategic marketing,
                creative content and measurable digital performance.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="premium-card p-6 md:p-8 h-full">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                Vision
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                To become a trusted digital growth partner for businesses
                seeking sustainable success through digital-first marketing.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Visibility', 'Engagement', 'Lead Generation', 'Conversions'].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#dbeafe] bg-white px-4 py-3 text-center text-sm font-bold text-[#071a3d]"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}