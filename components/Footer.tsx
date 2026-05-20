export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 bg-[#050d18]">
      <div className="container-premium flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="logo-font text-xl font-black tracking-[0.25em]">
            AXIRA <span className="text-[#d4af37]">MEDIA</span>
          </h3>

          <p className="text-slate-500 text-sm mt-2">
            Your growth partner in the digital world.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-[#d4af37]">About</a>
          <a href="#services" className="hover:text-[#d4af37]">Services</a>
          <a href="#portfolio" className="hover:text-[#d4af37]">Portfolio</a>
          <a href="#contact" className="hover:text-[#d4af37]">Contact</a>
        </div>

        <p className="text-slate-500 text-sm">
          © 2026 Axira Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}