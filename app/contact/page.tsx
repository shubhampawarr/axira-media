import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 overflow-hidden bg-white">
        <section className="relative px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(219,234,254,0.9),transparent_28%)]" />

          <div className="container-premium relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-label">Contact Axira Media</p>

              <h1 className="section-title">
                Let’s discuss your next{' '}
                <span className="text-[#2563eb]">growth project.</span>
              </h1>

              <p className="section-text mx-auto mt-6 max-w-3xl">
                Tell us what you want to build, improve or grow. We’ll help you
                choose the right digital strategy for your business.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="container-premium grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'axiramarketing@gmail.com',
                  href: 'mailto:axiramarketing@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 83693 12112',
                  href: 'tel:+918369312112',
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '+91 98338 11893',
                  href: 'https://wa.me/919833811893',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Mumbai, Maharashtra',
                  href: '#',
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="premium-card p-5 flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                      <Icon className="text-[#2563eb]" size={22} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2563eb]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm md:text-base font-semibold text-[#071a3d] break-all">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#071a3d] p-6 md:p-8 text-white shadow-[0_30px_90px_rgba(7,26,61,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />

              <form className="relative z-10 space-y-5">
                <div>
                  <label className="text-sm font-bold text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-200">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-200">
                    Service Needed
                  </label>
                  <select className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#93c5fd]">
                    <option>Social Media Management</option>
                    <option>Meta Ads</option>
                    <option>Google Ads</option>
                    <option>SEO Optimization</option>
                    <option>Website Development</option>
                    <option>Branding & Design</option>
                    <option>Google Business Listing</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-200">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your business goals"
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-[#071a3d] transition hover:scale-[1.02]"
                >
                  Send Inquiry <ArrowRight size={18} />
                </button>

                <p className="text-center text-xs text-slate-400">
                  We’ll get back to you as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}