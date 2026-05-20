'use client';

import FadeUp from './FadeUp';

const team = [
  {
    name: 'Labdhi Mehta',
    role: 'Certified Digital Marketer',
    initials: 'LM',
  },
  {
    name: 'Apoorv Kamble',
    role: 'Social Media Manager',
    initials: 'AK',
  },
];

export default function Team() {
  return (
    <section id="team" className="compact-section">
      <div className="max-w-6xl mx-auto text-center">
        <FadeUp>
          <p className="section-label">Our Team</p>

          <h2 className="section-title mb-16">
            Meet the people behind{' '}
            <span className="gold-text">Axira.</span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <FadeUp key={member.name} delay={index * 0.12}>
              <div className="premium-card p-10 h-full">
                <div className="w-28 h-28 rounded-full bg-[#d4af37]/10 mx-auto mb-6 border border-[#d4af37]/20 flex items-center justify-center text-3xl font-black text-[#d4af37]">
                  {member.initials}
                </div>

                <h3 className="text-3xl font-bold">{member.name}</h3>

                <p className="text-slate-400 mt-3">{member.role}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}