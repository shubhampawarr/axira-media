'use client';

import FadeUp from './FadeUp';

const steps = [
  { number: '01', title: 'Consultation', desc: 'Understanding goals and challenges.' },
  { number: '02', title: 'Strategy', desc: 'Creating a customized roadmap.' },
  { number: '03', title: 'Execution', desc: 'Launching campaigns and content.' },
  { number: '04', title: 'Optimization', desc: 'Improving performance continuously.' },
  { number: '05', title: 'Growth', desc: 'Scaling successful campaigns.' },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-[#f8fbff]">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-14 md:mb-16">
            <p className="section-label">Our Process</p>

            <h2 className="section-title max-w-5xl mx-auto">
              A proven framework for business growth.
            </h2>
          </div>
        </FadeUp>

        <div className="relative">
          <div className="hidden md:block absolute top-[72px] left-[10%] right-[10%] h-px bg-[#bfdbfe]" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5 relative z-10">
            {steps.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.08}>
                <div className="premium-card p-5 md:p-6 h-full text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#071a3d] text-white shadow-lg">
                    <span className="text-sm font-black">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-black text-[#071a3d]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
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