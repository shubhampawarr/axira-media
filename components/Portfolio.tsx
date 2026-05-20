'use client';

import FadeUp from './FadeUp';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Restaurant Growth Website',
    category: 'Website Development',
    metric: '+68% Inquiry Growth',
    image: '/portfolio/restaurant.jpg',
  },
  {
    title: 'Fitness Brand Campaign',
    category: 'Meta Ads',
    metric: '3.2x ROAS',
    image: '/portfolio/fitness.jpg',
  },
  {
    title: 'Local Business SEO',
    category: 'SEO Optimization',
    metric: '+140% Organic Reach',
    image: '/portfolio/seo.jpg',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="compact-section bg-[#081424]">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-7">
            <p className="section-label mb-3">Portfolio</p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto">
              Work built to create{' '}
              <span className="gold-text">business outcomes.</span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-3">
              A preview of digital growth projects across websites,
              paid ads and search visibility.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.08}>
              <div className="premium-card overflow-hidden h-full group">
                <div className="relative h-44 md:h-52 overflow-hidden bg-[#0b1628]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/20 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <p className="text-[#d4af37] text-xs font-bold bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-2">
                      {project.category}
                    </p>

                    <span className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[#d4af37] font-black text-lg">
                      {project.metric}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-black">{project.title}</h3>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    Strategy, design and execution focused on measurable
                    business growth.
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