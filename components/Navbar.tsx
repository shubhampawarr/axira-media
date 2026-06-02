'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#dbeafe] bg-white/90 backdrop-blur-xl">
      <div className="container-premium flex items-center justify-between px-5 py-4 md:px-6 md:py-5">
        {/* LOGO */}
        <Link
          href="/"
          scroll={true}
          onClick={handleHomeClick}
          className="logo-font text-lg md:text-2xl font-black tracking-[0.14em] md:tracking-[0.18em]"
        >
          <span className="text-[#071a3d]">AXIRA</span>
          <span className="text-[#2563eb]"> MEDIA</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-9 text-sm">
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
                className={`font-medium transition ${
                  active
                    ? 'text-[#2563eb]'
                    : 'text-slate-600 hover:text-[#2563eb]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:flex items-center justify-center rounded-2xl bg-[#071a3d] px-5 py-3 text-sm font-bold text-white transition hover:scale-105 hover:bg-[#0b2a5b]"
        >
          Let's Talk
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#071a3d]"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-[#dbeafe] bg-white px-5 py-5">
          <div className="flex flex-col gap-4">
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
                  className={`font-medium transition ${
                    active
                      ? 'text-[#2563eb]'
                      : 'text-slate-700 hover:text-[#2563eb]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-[#071a3d] px-5 py-3 text-center text-sm font-bold text-white"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}