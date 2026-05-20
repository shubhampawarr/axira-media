'use client';

import FadeUp from './FadeUp';

export default function About() {
  return (
    <section id="about" className="compact-section">
      <div className="container-premium grid md:grid-cols-2 gap-16 items-center">
        <FadeUp>
          <p className="section-label">About Axira</p>

          <h2 className="section-title">
            We help brands grow through{' '}
            <span className="gold-text">strategy, creativity</span> and
            performance.
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="section-text">
            Axira Media is a growth-focused digital agency helping businesses
            improve visibility, attract customers and generate measurable ROI.
            We combine design, marketing and performance strategies to create
            impactful digital experiences.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              'Custom Strategies',
              'Transparent Execution',
              'SEO Optimized',
              'Growth Focused',
            ].map((item) => (
              <div key={item} className="premium-card p-5 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}