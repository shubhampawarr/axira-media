import FadeUp from './FadeUp';

export default function Stats() {
  const stats = [
    { number: '30+', label: 'Brands Managed' },
    { number: '4+', label: 'Years Experience' },
    { number: '100%', label: 'Growth Focused' },
    { number: '24/7', label: 'Client Support' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.08}>
              <div className="premium-card p-8 text-center h-full">
                <h3 className="text-4xl md:text-5xl font-black text-[#d4af37]">
                  {stat.number}
                </h3>

                <p className="mt-3 text-slate-400">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}