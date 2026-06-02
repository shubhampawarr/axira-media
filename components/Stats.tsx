import FadeUp from './FadeUp';

export default function Stats() {
  const stats = [
    {
      number: '30+',
      label: 'Brands Supported',
    },
    {
      number: '100+',
      label: 'Campaigns Managed',
    },
    {
      number: '7',
      label: 'Core Services',
    },
    {
      number: '100%',
      label: 'Growth Focused',
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f8fbff]">
      <div className="container-premium">
        <div className="text-center mb-12">
          <p className="section-label">
            Trusted Growth Partner
          </p>

          <h2 className="section-title">
            Helping businesses scale through
            digital marketing.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.08}>
              <div className="premium-card p-8 text-center h-full">
                <h3 className="text-4xl md:text-5xl font-black text-[#2563eb]">
                  {stat.number}
                </h3>

                <p className="mt-3 text-slate-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}