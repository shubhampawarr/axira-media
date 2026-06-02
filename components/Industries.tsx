'use client';

import {
  Building2,
  Utensils,
  Store,
  ShoppingBag,
  UserRound,
  HeartPulse,
  GraduationCap,
  Rocket,
} from 'lucide-react';
import FadeUp from './FadeUp';

const industries = [
  { name: 'Real Estate', icon: Building2 },
  { name: 'Restaurants & Cafes', icon: Utensils },
  { name: 'Local Businesses', icon: Store },
  { name: 'E-Commerce Brands', icon: ShoppingBag },
  { name: 'Personal Brands', icon: UserRound },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Startups', icon: Rocket },
];

export default function Industries() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container-premium">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="section-label">Industries We Work With</p>

            <h2 className="section-title max-w-4xl mx-auto">
              Helping businesses across{' '}
              <span className="text-[#2563eb]">multiple industries.</span>
            </h2>

            <p className="section-text max-w-2xl mx-auto mt-5">
              From local businesses to growing brands, Axira Media creates
              digital strategies based on each industry’s audience, goals and
              growth stage.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <FadeUp key={industry.name} delay={index * 0.06}>
                <div className="premium-card p-6 text-center h-full">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff6ff]">
                    <Icon className="text-[#2563eb]" size={26} />
                  </div>

                  <h3 className="font-bold text-[#071a3d]">
                    {industry.name}
                  </h3>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}