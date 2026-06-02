'use client';

import FadeUp from './FadeUp';
import { BarChart3, Sparkles, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="section-label">About Axira</p>

            <h2 className="section-title">
              We help brands grow through{' '}
              <span className="text-[#2563eb]">
                strategy, creativity
              </span>{' '}
              and performance.
            </h2>

            <p className="section-text mt-6">
              Axira Media is a growth-focused digital marketing agency helping
              businesses improve visibility, attract customers and generate
              measurable results through content, advertising, websites and
              digital strategy.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Custom Strategies', 'Transparent Execution', 'Data Driven', 'Growth Focused'].map(
                (item) => (
                  <div key={item} className="premium-card p-4 md:p-5 font-semibold text-[#071a3d]">
                    {item}
                  </div>
                )
              )}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative rounded-[2rem] bg-[#071a3d] p-6 md:p-8 text-white overflow-hidden shadow-[0_30px_90px_rgba(7,26,61,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(37,99,235,0.55),transparent_35%)]" />

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
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
                        <p className="mt-1 font-black">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                    Mission
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    To help businesses grow online through strategic marketing,
                    creative content and measurable digital performance.
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                    Vision
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    To become a trusted digital growth partner for businesses
                    seeking sustainable success.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}