import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MessageCircle, MapPin, Clock3 } from 'lucide-react';

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

        <section className="px-6 pb-16 md:pb-20">
          <div className="container-premium grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-[#dbeafe] bg-[#f8fbff] p-5 shadow-[0_18px_55px_rgba(7,26,61,0.05)] md:p-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563eb]">
                  Start a Conversation
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071a3d] md:text-3xl">
                  Share your business goals with us.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tell us about your brand, service needs and budget range. We
                  will review the details and suggest a practical next step.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-3 rounded-[1.35rem] border border-[#dbeafe] bg-white p-4 shadow-[0_14px_40px_rgba(7,26,61,0.05)] transition hover:-translate-y-0.5 hover:bg-[#f8fbff]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] transition group-hover:bg-[#071a3d]">
                        <Icon
                          className="text-[#2563eb] transition group-hover:text-white"
                          size={20}
                        />
                      </div>

                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#2563eb]">
                          {item.label}
                        </p>

                        <p className="mt-1 break-all text-sm font-bold text-[#071a3d]">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="rounded-[1.75rem] border border-[#dbeafe] bg-[#071a3d] p-5 text-white shadow-[0_24px_70px_rgba(7,26,61,0.18)] md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Clock3 className="text-[#93c5fd]" size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#93c5fd]">
                      Response Time
                    </p>

                    <h3 className="mt-2 text-xl font-black tracking-[-0.03em]">
                      We usually respond quickly.
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      The more specific your inquiry is, the better we can
                      recommend the right service plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#071a3d] p-5 text-white shadow-[0_24px_70px_rgba(7,26,61,0.22)] md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.55),transparent_35%)]" />
              <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#2563eb]/20 blur-3xl" />

              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}