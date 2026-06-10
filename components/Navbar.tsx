'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleHomeClick = () => {
    setOpen(false);

    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#dbeafe]/80 bg-white/85 shadow-[0_10px_40px_rgba(7,26,61,0.06)] backdrop-blur-2xl">
      <div className="container-premium flex items-center justify-between px-5 py-4 md:px-6">
        <Link
          href="/"
          scroll={true}
          onClick={handleHomeClick}
          className="group flex items-center gap-3"
          aria-label="Axira Media Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#071a3d] text-sm font-black tracking-[-0.04em] text-white shadow-[0_14px_35px_rgba(7,26,61,0.22)]">
            AX
          </div>

          <div className="leading-none">
            <p className="logo-font text-base font-black tracking-[0.16em] text-[#071a3d] md:text-xl">
              AXIRA
            </p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.28em] text-[#2563eb]">
              Media
            </p>
          </div>
        </Link>

        <div className="hidden items-center rounded-full border border-[#dbeafe] bg-white/80 px-2 py-2 shadow-[0_14px_45px_rgba(7,26,61,0.06)] md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={true}
                onClick={() => {
                  if (link.href === '/') {
                    handleHomeClick();
                  }
                }}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? 'bg-[#eff6ff] text-[#2563eb]'
                    : 'text-slate-600 hover:bg-[#f8fbff] hover:text-[#2563eb]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden items-center justify-center gap-2 rounded-2xl bg-[#071a3d] px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(7,26,61,0.2)] transition hover:-translate-y-0.5 hover:bg-[#0b2a5b] md:flex"
        >
          Let&apos;s Talk <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#dbeafe] bg-white text-[#071a3d] shadow-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#dbeafe] bg-white px-5 py-5 shadow-[0_24px_70px_rgba(7,26,61,0.08)] md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={true}
                  onClick={() => {
                    setOpen(false);

                    if (link.href === '/' && pathname === '/') {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className={`rounded-2xl px-4 py-3 text-base font-bold transition ${
                    active
                      ? 'bg-[#eff6ff] text-[#2563eb]'
                      : 'text-slate-700 hover:bg-[#f8fbff] hover:text-[#2563eb]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#071a3d] px-5 py-4 text-center text-sm font-black text-white"
            >
              Let&apos;s Talk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}