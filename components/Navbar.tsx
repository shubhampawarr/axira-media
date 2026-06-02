'use client';

import Link from 'next/link';
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#dbeafe]">
      <div className="container-premium px-5 md:px-6 py-4 md:py-5 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="logo-font text-lg md:text-2xl font-black tracking-[0.14em] md:tracking-[0.18em]"
        >
          <span className="text-[#071a3d]">AXIRA</span>
          <span className="text-[#2563eb]"> MEDIA</span>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#2563eb] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:block bg-[#071a3d] text-white px-5 py-3 rounded-2xl text-sm font-bold hover:bg-[#0b2a5b] hover:scale-105 transition"
        >
          Let&apos;s Talk
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent text-[#071a3d]"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#dbeafe] px-5 py-5 flex flex-col gap-4 text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#2563eb] transition"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#071a3d] text-white px-5 py-3 rounded-2xl text-sm font-bold mt-2 text-center"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}