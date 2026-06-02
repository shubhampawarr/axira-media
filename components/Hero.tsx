'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, BarChart3, CheckCircle2 } from 'lucide-react';

const metrics = [
  { icon: Target, label: 'Lead Generation', value: '+182%' },
  { icon: BarChart3, label: 'Ad Performance', value: '3.4x ROAS' },
  { icon: TrendingUp, label: 'Organic Visibility', value: '+240%' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-5 md:px-6 pt-28 pb-16 bg-white text-[#071a3d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.11),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(219,234,254,0.8),transparent_35%)]" />

      <div className="container-premium relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-label">Digital Growth Agency</p>

          <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl xl:text-6xl font-black leading-[0.95] tracking-[-0.045em] text-[#071a3d]">
            Grow your business with{' '}
            <span className="text-[#2563eb]">result-driven marketing.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-slate-600 text-base md:text-lg leading-8">
            Axira Media helps brands grow online through creative marketing,
            powerful advertising, high-converting websites and strong digital
            presence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="/contact"
              className="premium-button px-7 py-4 text-center flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              className="border border-[#bfdbfe] bg-white/70 px-7 py-4 rounded-[18px] text-center font-bold text-[#071a3d] hover:bg-[#eff6ff] transition"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
            {['Performance-focused', 'Transparent execution', 'Creative strategy'].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#2563eb]" size={18} />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65 }}
          className="relative max-w-[430px] lg:ml-auto"
        >
          <div className="premium-card p-4 md:p-5">
            <div className="rounded-[1.25rem] bg-[#071a3d] p-5 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.5),transparent_38%)]" />

              <div className="relative z-10 flex items-center justify-between mb-5">
                <div>
                  <p className="text-slate-300 text-sm">Campaign Dashboard</p>
                  <h3 className="text-2xl font-black mt-1">Growth Snapshot</h3>
                </div>

                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                  <TrendingUp className="text-[#93c5fd]" size={21} />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3">
                {[
                  ['Reach', '240K'],
                  ['Leads', '1.8K'],
                  ['ROI', '3.4x'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white/10 border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-300">{label}</p>
                    <p className="mt-1 font-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {metrics.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="bg-[#f8fbff] border border-[#dbeafe] rounded-2xl p-3.5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <Icon className="text-[#2563eb]" size={18} />
                      </div>

                      <p className="text-slate-600 text-sm">{item.label}</p>
                    </div>

                    <p className="text-[#071a3d] font-black text-sm">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl bg-[#eff6ff] border border-[#dbeafe] p-4">
              <p className="text-xs text-slate-500">Services</p>
              <p className="text-[#071a3d] text-xl font-black mt-1">
                SEO • Ads • Websites • Social
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}