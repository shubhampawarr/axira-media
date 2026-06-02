import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="container-premium">
        <div className="rounded-[2rem] bg-[#071a3d] px-6 py-16 md:px-14 md:py-20 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.38),transparent_35%)]" />

          <div className="relative z-10">
            <p className="text-[#93c5fd] uppercase tracking-[0.26em] text-xs font-black">
              Ready To Grow?
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
              Ready to grow your brand online?
            </h2>

            <p className="mt-5 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let Axira Media help you turn ideas into measurable digital
              growth through strategy, creativity and performance marketing.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-2xl bg-white px-7 py-4 text-sm font-bold text-[#071a3d] transition hover:scale-105"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}