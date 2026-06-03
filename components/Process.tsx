'use client';

import FadeUp from './FadeUp';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We understand your business, audience, goals and current digital presence.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We create a clear marketing roadmap based on platforms, content and campaign goals.',
  },
  {
    number: '03',
    title: 'Execution',
    desc: 'We launch creatives, campaigns, content and digital assets with a focused direction.',
  },
  {
    number: '04',
    title: 'Optimization',
    desc: 'We track performance, improve weak points and refine campaigns for better results.',
  },
  {
    number: '05',
    title: 'Growth',
    desc: 'We scale what works and keep improving visibility, engagement and conversions.',
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Our Process</p>

            <h2 className="section-title max-w-5xl mx-auto">
              A clear framework from strategy to scalable growth.
            </h2>

            <p className="section-text max-w-3xl mx-auto mt-5">
              Every project follows a structured process so campaigns are not
              random — they are planned, executed, measured and improved.
            </p>
          </div>
        </FadeUp>

        <div className="relative">
          <div className="hidden md:block absolute top-[4.5rem] left-[8%] right-[8%] h-px bg-[#bfdbfe]" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative z-10">
            {steps.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.08}>
                <div className="premium-card p-5 md:p-6 h-full text-center bg-white">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#071a3d] text-white shadow-[0_15px_35px_rgba(7,26,61,0.25)]">
                    <span className="text-lg font-black">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-[#071a3d]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}