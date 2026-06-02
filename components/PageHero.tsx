'use client';

import { motion } from 'framer-motion';

type PageHeroProps = {
  label: string;
  title: string;
  highlight?: string;
  description: string;
};

export default function PageHero({
  label,
  title,
  highlight,
  description,
}: PageHeroProps) {
  return (
    <section className="relative px-6 pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(219,234,254,0.9),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="container-premium relative z-10 text-center"
      >
        <p className="section-label">{label}</p>

        <h1 className="section-title max-w-5xl mx-auto">
          {title}{' '}
          {highlight && (
            <span className="text-[#2563eb]">
              {highlight}
            </span>
          )}
        </h1>

        <p className="section-text max-w-3xl mx-auto mt-6">
          {description}
        </p>
      </motion.div>
    </section>
  );
}