'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goToSection = (index: number) => {
    window.dispatchEvent(
      new CustomEvent('axira-scroll', {
        detail: index,
      })
    );
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#071120]/90 backdrop-blur-xl border-b border-white/10">
      <div className="container-premium px-5 md:px-6 py-4 md:py-5 flex items-center justify-between">
        <button
          onClick={() => goToSection(0)}
          className="logo-font text-lg md:text-2xl font-black tracking-[0.14em] md:tracking-[0.18em] bg-transparent"
        >
          <span className="text-white">AXIRA</span>
          <span className="text-[#d4af37]"> MEDIA</span>
        </button>

        <div className="hidden md:flex items-center gap-9 text-sm text-slate-300">
          <button onClick={() => goToSection(1)} className="bg-transparent hover:text-[#d4af37] transition">About</button>
          <button onClick={() => goToSection(2)} className="bg-transparent hover:text-[#d4af37] transition">Services</button>
          <button onClick={() => goToSection(3)} className="bg-transparent hover:text-[#d4af37] transition">Why Us</button>
          <button onClick={() => goToSection(4)} className="bg-transparent hover:text-[#d4af37] transition">Portfolio</button>
          <button onClick={() => goToSection(6)} className="bg-transparent hover:text-[#d4af37] transition">Team</button>
          <button onClick={() => goToSection(7)} className="bg-transparent hover:text-[#d4af37] transition">Contact</button>
        </div>

        <button
          onClick={() => goToSection(7)}
          className="hidden md:block bg-[#d4af37] text-black px-5 py-3 rounded-2xl text-sm font-bold hover:scale-105 transition"
        >
          Let&apos;s Talk
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#071120] border-t border-white/10 px-5 py-5 flex flex-col gap-4 text-slate-300">
          <button onClick={() => goToSection(1)} className="text-left bg-transparent">About</button>
          <button onClick={() => goToSection(2)} className="text-left bg-transparent">Services</button>
          <button onClick={() => goToSection(3)} className="text-left bg-transparent">Why Us</button>
          <button onClick={() => goToSection(4)} className="text-left bg-transparent">Portfolio</button>
          <button onClick={() => goToSection(6)} className="text-left bg-transparent">Team</button>
          <button onClick={() => goToSection(7)} className="text-left bg-transparent">Contact</button>

          <button
            onClick={() => goToSection(7)}
            className="bg-[#d4af37] text-black px-5 py-3 rounded-2xl text-sm font-bold mt-2"
          >
            Let&apos;s Talk
          </button>
        </div>
      )}
    </nav>
  );
}