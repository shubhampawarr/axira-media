'use client';

import { useEffect, useRef, useState } from 'react';
import FadeUp from './FadeUp';

function AnimatedNumber({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      number: 30,
      suffix: '+',
      label: 'Brands Supported',
    },
    {
      number: 100,
      suffix: '+',
      label: 'Campaigns Managed',
    },
    {
      number: 8,
      suffix: '',
      label: 'Core Services',
    },
    {
      number: 100,
      suffix: '%',
      label: 'Growth Focused',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-[#f8fbff]">
      <div className="container-premium">
        <div className="text-center mb-10 md:mb-12">
          <p className="section-label">Trusted Growth Partner</p>

          <h2 className="section-title max-w-5xl mx-auto">
            Helping businesses scale through digital marketing.
          </h2>

          <p className="section-text max-w-3xl mx-auto mt-5">
            We help businesses improve online visibility, attract the right
            audience, generate leads and build stronger digital brands through
            strategy, creativity and performance-led execution.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.08}>
              <div className="premium-card p-5 md:p-8 text-center h-full">
                <h3 className="text-3xl md:text-5xl font-black text-[#2563eb]">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </h3>

                <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold text-slate-600">
          {[
            'Healthcare',
            'Restaurants',
            'Real Estate',
            'Beauty',
            'Local Businesses',
            'Startups',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#dbeafe] bg-white px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}