import {
  BarChart3,
  Eye,
  MousePointerClick,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const results = [
  {
    title: 'Stronger Brand Visibility',
    text: 'We help businesses show up more consistently across social platforms, search and local discovery channels.',
    icon: Eye,
  },
  {
    title: 'Campaign-Ready Creatives',
    text: 'From reels and ad visuals to landing page assets, we create marketing material designed for real platform use.',
    icon: Sparkles,
  },
  {
    title: 'Better Lead Flow Systems',
    text: 'We build simple campaign journeys that help move people from awareness to inquiry with clearer calls-to-action.',
    icon: MousePointerClick,
  },
  {
    title: 'Improved Local Presence',
    text: 'For location-based businesses, we support Google Business Profile visibility, map presence and local search readiness.',
    icon: Search,
  },
  {
    title: 'Performance-Led Decisions',
    text: 'We focus on practical campaign signals such as reach, engagement, inquiries, traffic quality and conversion intent.',
    icon: BarChart3,
  },
  {
    title: 'Long-Term Growth Direction',
    text: 'Our approach is built around steady improvement, better positioning and marketing systems that can grow with the business.',
    icon: TrendingUp,
  },
];

export default function Results() {
  return (
    <section className="relative overflow-hidden bg-[#071a3d] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.45),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />

      <div className="container-premium relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#93c5fd]">
            Results Without Noise
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            We focus on visible progress, not inflated promises.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Axira Media helps businesses build stronger digital foundations
            through strategy, creative execution, advertising, websites and
            measurable campaign improvement.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.14]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <Icon className="text-[#93c5fd]" size={26} />
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center backdrop-blur-xl md:p-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Every business starts at a different stage. Instead of using
            one-size-fits-all promises, we identify what your brand needs next:
            visibility, better creatives, stronger ads, improved search
            presence, a better website or a clearer marketing funnel.
          </p>
        </div>
      </div>
    </section>
  );
}