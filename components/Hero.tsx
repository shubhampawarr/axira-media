'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
  Sparkles,
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

const systemSteps = [
  {
    label: 'Strategy',
    value: 'Clear',
  },
  {
    label: 'Creative',
    value: 'Ready',
  },
  {
    label: 'Tracking',
    value: 'Focused',
  },
];

const trustPoints = [
  'Performance-focused',
  'Transparent execution',
  'Creative strategy',
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-5 pb-10 pt-28 text-[#071a3d] md:px-6 md:pb-12 md:pt-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,0.14),transparent_34%),radial-gradient(circle_at_12%_88%,rgba(219,234,254,0.9),transparent_38%)]" />
      <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-[#eff6ff] blur-3xl md:h-80 md:w-80" />

      <div className="container-premium relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-white/80 px-3.5 py-2 shadow-[0_12px_35px_rgba(7,26,61,0.05)] backdrop-blur-xl">
            <Sparkles className="text-[#2563eb]" size={15} />

            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2563eb]">
              Digital Growth Agency
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-[2.35rem] font-black leading-[0.94] tracking-[-0.055em] text-[#071a3d] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
            Build a sharper digital presence for your business.
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base md:leading-8">
            Axira Media helps brands grow through strategy-led social media,
            performance advertising, conversion-focused websites, SEO and
            creative digital execution.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="premium-button flex items-center justify-center gap-2 px-6 py-3.5 text-center text-sm"
            >
              Get Free Consultation <ArrowRight size={17} />
            </a>

            <a
              href="/portfolio"
              className="rounded-[18px] border border-[#bfdbfe] bg-white/75 px-6 py-3.5 text-center text-sm font-black text-[#071a3d] shadow-[0_12px_35px_rgba(7,26,61,0.05)] transition hover:-translate-y-0.5 hover:bg-[#eff6ff]"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-2.5 text-[13px] text-slate-600 sm:flex-row sm:flex-wrap">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-[#dbeafe] bg-white/70 px-3.5 py-2"
              >
                <CheckCircle2 className="text-[#2563eb]" size={16} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative mx-auto w-full max-w-[430px] lg:ml-auto"
        >
          <div className="premium-card relative overflow-hidden p-3.5 md:p-4">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-[#071a3d] p-4.5 text-white md:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.58),transparent_36%)]" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#2563eb]/20 blur-3xl" />

              <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[13px] font-medium text-slate-300">
                    Campaign System
                  </p>

                  <h3 className="mt-1 text-2xl font-black tracking-[-0.04em]">
                    Growth Framework
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <TrendingUp className="text-[#93c5fd]" size={20} />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-2.5">
                {systemSteps.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-3"
                  >
                    <p className="text-[11px] text-slate-300">{item.label}</p>

                    <p className="mt-1 text-sm font-black">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-4 rounded-2xl border border-white/10 bg-white/10 p-3.5">
                <div className="mb-2.5 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#93c5fd]">
                    Funnel Readiness
                  </p>

                  <p className="text-[11px] font-bold text-slate-300">
                    Strategy → Creative → Inquiry
                  </p>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[76%] rounded-full bg-[#93c5fd]" />
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-2.5">
              {focusAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-[#dbeafe] bg-[#f8fbff] p-3.5 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon className="text-[#2563eb]" size={18} />
                      </div>

                      <p className="text-[13px] font-semibold text-slate-600">
                        {item.label}
                      </p>
                    </div>

                    <p className="text-[13px] font-black text-[#071a3d]">
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