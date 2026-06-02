import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071a3d] px-6 py-12 md:py-16 text-white">
      <div className="container-premium">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <h3 className="logo-font text-xl md:text-2xl font-black tracking-[0.18em]">
              <span>AXIRA</span>{' '}
              <span className="text-[#93c5fd]">MEDIA</span>
            </h3>

            <p className="mt-4 max-w-sm text-sm md:text-base leading-relaxed text-slate-300">
              Helping businesses grow through digital marketing, advertising,
              websites and creative strategy.
            </p>

            <div className="mt-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-300">
                Social links coming soon
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#93c5fd]">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 md:flex md:flex-col">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-white transition">
                About
              </Link>

              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>

              <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>

              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#93c5fd]">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="mailto:axiramarketing@gmail.com"
                className="flex items-start gap-3 hover:text-white transition"
              >
                <Mail
                  className="mt-0.5 shrink-0 text-[#93c5fd]"
                  size={17}
                />

                <span className="break-all">
                  axiramarketing@gmail.com
                </span>
              </a>

              <a
                href="tel:+918369312112"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone
                  className="shrink-0 text-[#93c5fd]"
                  size={17}
                />

                <span>+91 83693 12112</span>
              </a>

              <a
                href="tel:+919833811893"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone
                  className="shrink-0 text-[#93c5fd]"
                  size={17}
                />

                <span>+91 98338 11893</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-xs md:text-sm text-slate-400">
            © 2026 Axira Media. All rights reserved.
          </p>

          <p className="text-xs md:text-sm text-slate-400">
            Creative • Strategy • Growth
          </p>
        </div>
      </div>
    </footer>
  );
}