import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contact',
  description:
    'Contact Axira Media to discuss social media marketing, Meta Ads, Google Ads, SEO, website development, branding and digital growth for your business.',
  path: '/contact',
  keywords: [
    'contact Axira Media',
    'hire digital marketing agency',
    'marketing consultation',
    'business growth agency',
    'digital marketing agency Mumbai',
  ],
});

const contactCards = [
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
];

const serviceOptions = [
  'Social Media Management',
  'Meta Ads',
  'Google Ads',
  'SEO Optimization',
  'Website Development',
  'Branding & Design',
  'Google Business Listing',
  'Complete Digital Marketing',
  'Not Sure Yet',
];

const budgetOptions = [
  'Below ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  'Above ₹2,50,000',
  'Need guidance',
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        <PageHero
          label="Contact Axira Media"
          title="Let’s discuss your next"
          highlight="growth project."
          description="Tell us what you want to build, improve or grow. We’ll help you choose the right digital strategy for your business."
        />

        <section className="px-6 pb-24">
          <div className="container-premium grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="premium-card flex items-center gap-4 p-5 transition hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                      <Icon className="text-[#2563eb]" size={22} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2563eb]">
                        {item.label}
                      </p>

                      <p className="mt-1 break-all text-sm font-semibold text-[#071a3d] md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}

              <div className="rounded-[2rem] border border-[#dbeafe] bg-[#f8fbff] p-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563eb]">
                  Response Time
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#071a3d]">
                  We usually respond quickly.
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Share your business details and marketing goals. The more
                  specific your inquiry is, the better we can recommend the
                  right service plan.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#071a3d] p-6 text-white shadow-[0_30px_90px_rgba(7,26,61,0.25)] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />

              <form className="relative z-10 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-slate-200"
                    >
                      Name <span className="text-[#93c5fd]">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="text-sm font-bold text-slate-200"
                    >
                      Business Name <span className="text-[#93c5fd]">*</span>
                    </label>

                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      placeholder="Your business name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-slate-200"
                    >
                      Phone / WhatsApp <span className="text-[#93c5fd]">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-slate-200"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="text-sm font-bold text-slate-200"
                    >
                      Service Needed <span className="text-[#93c5fd]">*</span>
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#93c5fd] [&>option]:bg-[#071a3d] [&>option]:text-white"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="text-sm font-bold text-slate-200"
                    >
                      Budget Range <span className="text-[#93c5fd]">*</span>
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#93c5fd] [&>option]:bg-[#071a3d] [&>option]:text-white"
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>

                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-slate-200"
                  >
                    Project Details <span className="text-[#93c5fd]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your business, goals, target audience, location and what you want to improve."
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
                  Fields marked with * are required.
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