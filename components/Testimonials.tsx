'use client';

import FadeUp from './FadeUp';

const testimonials = [
  {
    name: 'Rahul Sharma',
    text: 'Axira Media completely transformed our online presence and lead generation.',
  },
  {
    name: 'Priya Mehta',
    text: 'Professional execution, clear communication and excellent marketing results.',
  },
  {
    name: 'Arjun Patel',
    text: 'Their SEO and advertising strategies significantly improved our visibility.',
  },
];

export default function Testimonials() {
  return (
    <section className="compact-section">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="section-label">Testimonials</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Trusted by growing{' '}
              <span className="gold-text">
                modern businesses.
              </span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <FadeUp key={item.name} delay={index * 0.08}>
              <div className="premium-card p-8 h-full">
                <p className="text-slate-300 leading-relaxed">
                  “{item.text}”
                </p>

                <div className="mt-8">
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}