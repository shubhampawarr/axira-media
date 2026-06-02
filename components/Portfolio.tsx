'use client';

import Link from 'next/link';
import FadeUp from './FadeUp';
import { ArrowUpRight, Play } from 'lucide-react';

const featuredProjects = [
  {
    client: 'AF Care Physio',
    industry: 'Healthcare',
    service: 'Social Media Marketing',
    video:
      'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780390002/af_care_gnbso3.mp4',
  },
  {
    client: 'Basyl Cafe Vapi',
    industry: 'Cafe / Food & Beverage',
    service: 'Social Media Reels',
    video:
      'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780389962/basyl-cafe-vapi_m5ccac.mp4',
  },
  {
    client: 'Kraft Associate Interior',
    industry: 'Interior Design',
    service: 'Brand Video Creation',
    video:
      'https://res.cloudinary.com/dir7hugvf/video/upload/q_auto/f_auto/v1780389960/kraft-assosiate-interior_meakta.mp4',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#f8fbff]">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="section-label">Selected Work</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Real client work across{' '}
              <span className="text-[#2563eb]">industries.</span>
            </h2>

            <p className="section-text max-w-2xl mx-auto mt-5">
              A preview of brand videos, social media creatives and marketing
              content created for growing businesses.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeUp key={project.client} delay={index * 0.08}>
              <article className="premium-card overflow-hidden h-full group bg-white">
                <div className="relative aspect-[9/14] bg-[#071a3d] overflow-hidden">
                  <video
                    src={project.video}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a3d]/70 via-transparent to-transparent" />

                  <div className="pointer-events-none absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="rounded-full bg-white/90 border border-[#dbeafe] px-3 py-2 text-xs font-bold text-[#2563eb] backdrop-blur-md">
                      {project.industry}
                    </span>

                    <span className="w-10 h-10 rounded-full bg-white/90 border border-[#dbeafe] flex items-center justify-center text-[#071a3d] backdrop-blur-md">
                      <Play size={16} />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-black text-[#071a3d]">
                        {project.client}
                      </h4>

                      <p className="mt-2 text-sm text-slate-600">
                        {project.service}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="text-[#2563eb] shrink-0"
                      size={20}
                    />
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-2xl bg-[#071a3d] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0b2a5b] hover:scale-105"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}