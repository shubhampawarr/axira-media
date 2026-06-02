'use client';

import FadeUp from './FadeUp';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'AF Care Physio',
    industry: 'Healthcare',
    service: 'Social Media Marketing',
    text: 'Professional execution and strong content quality that improved our online presence.',
  },
  {
    name: 'Basyl Cafe Vapi',
    industry: 'Restaurant & Cafe',
    service: 'Content Creation',
    text: 'Creative visuals, timely delivery and a clear understanding of our brand.',
  },
  {
    name: 'Kraft Associate Interior',
    industry: 'Interior Design',
    service: 'Brand Content',
    text: 'High-quality marketing creatives aligned perfectly with our business goals.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#f8fbff]">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Client Feedback</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Businesses trust Axira Media for{' '}
              <span className="text-[#2563eb]">
                creative and measurable growth.
              </span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((item, index) => (
            <FadeUp key={item.name} delay={index * 0.08}>
              <div className="premium-card p-6 md:p-8 h-full bg-white">
                <div className="flex gap-1 text-[#2563eb]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-6 text-sm md:text-base text-slate-600 leading-relaxed">
                  “{item.text}”
                </p>

                <div className="mt-8 border-t border-[#dbeafe] pt-5">
                  <h3 className="font-black text-base md:text-lg text-[#071a3d]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs md:text-sm text-[#2563eb] font-bold">
                    {item.industry}
                  </p>

                  <p className="mt-1 text-xs md:text-sm text-slate-500">
                    {item.service}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}