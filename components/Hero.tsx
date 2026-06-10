'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

const focusAreas = [
  {
    icon: Target,
    label: 'Lead Flow',
    value: 'Structured',
  },
  {
    icon: BarChart3,
    label: 'Campaigns',
    value: 'Optimized',
  },
  {
    icon: TrendingUp,
    label: 'Visibility',
    value: 'Improved',
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-5 pb-16 pt-28 text-[#071a3d] md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.11),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(219,234,254,0.8),transparent_35%)]" />

      <div className="container-premium relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-label">Digital Growth Agency</p>

          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.045em] text-[#071a3d] md:text-5xl xl:text-6xl">
            Grow your business with{' '}
            <span className="text-[#2563eb]">clear digital execution.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Axira Media helps brands build a stronger online presence through
            creative marketing, performance advertising, high-converting
            websites and consistent digital strategy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
            <a
              href="/contact"
              className="premium-button flex items-center justify-center gap-2 px-7 py-4 text-center"
            >
              Get Free Consultation <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              className="rounded-[18px] border border-[#bfdbfe] bg-white/70 px-7 py-4 text-center font-bold text-[#071a3d] transition hover:bg-[#eff6ff]"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row">
            {[
              'Performance-focused',
              'Transparent execution',
              'Creative strategy',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-[#2563eb]" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65 }}
          className="relative max-w-[430px] lg:ml-auto"
        >
          <div className="premium-card p-4 md:p-5">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-[#071a3d] p-5 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.5),transparent_38%)]" />

              <div className="relative z-10 mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Campaign System</p>
                  <h3 className="mt-1 text-2xl font-black">
                    Growth Framework
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <TrendingUp className="text-[#93c5fd]" size={21} />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3">
                {[
                  ['Strategy', 'Clear'],
                  ['Creative', 'Ready'],
                  ['Tracking', 'Focused'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-3"
                  >
                    <p className="text-xs text-slate-300">{label}</p>
                    <p className="mt-1 font-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {focusAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-[#dbeafe] bg-[#f8fbff] p-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                        <Icon className="text-[#2563eb]" size={18} />
                      </div>

                      <p className="text-sm text-slate-600">{item.label}</p>
                    </div>

                    <p className="text-sm font-black text-[#071a3d]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}