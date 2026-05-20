'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-82px)] flex items-center overflow-hidden px-5 md:px-6 bg-[#071120] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,0.14),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(37,99,235,0.16),transparent_35%)]" />

      <div className="container-premium relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-10 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Digital Marketing Agency</p>

          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-black leading-[0.98] max-w-xl">
            Turn attention into{' '}
            <span className="text-[#d4af37]">measurable growth.</span>
          </h1>

          <p className="mt-5 md:mt-6 text-slate-300 text-base md:text-lg leading-7 md:leading-8 max-w-xl">
            Axira Media builds growth systems for businesses through websites,
            SEO, Google Ads, Meta campaigns and social media management.
          </p>

          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#contact"
              className="bg-[#d4af37] text-black px-6 md:px-7 py-3.5 md:py-4 rounded-2xl font-bold text-center hover:scale-105 transition flex items-center justify-center gap-2"
            >
              Start a Project <ArrowRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="border border-white/20 px-6 md:px-7 py-3.5 md:py-4 rounded-2xl text-center font-semibold text-white hover:bg-white/10 transition"
            >
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <div className="premium-card p-5 md:p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-slate-400 text-sm">Campaign Dashboard</p>
                <h3 className="text-xl md:text-2xl font-black mt-1">
                  Growth Snapshot
                </h3>
              </div>

              <div className="w-11 h-11 rounded-2xl bg-[#d4af37]/15 flex items-center justify-center">
                <TrendingUp className="text-[#d4af37]" />
              </div>
            </div>

            <div className="space-y-3">
              {[
                { icon: Target, label: 'Lead Generation', value: '+182%' },
                { icon: BarChart3, label: 'Ad Performance', value: '3.4x ROAS' },
                { icon: TrendingUp, label: 'Organic Visibility', value: '+240%' },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="bg-[#0b1628] border border-white/10 rounded-2xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                        <Icon className="text-[#d4af37]" size={20} />
                      </div>

                      <p className="text-slate-300 text-sm md:text-base">
                        {item.label}
                      </p>
                    </div>

                    <p className="text-[#d4af37] font-black text-sm md:text-base">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl bg-black/30 border border-white/10 p-4">
              <p className="text-xs text-slate-400">Services</p>
              <p className="text-white text-xl md:text-2xl font-black mt-1">
                SEO • Ads • Websites • Social
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}