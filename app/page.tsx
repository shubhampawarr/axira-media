import Navbar from '@/components/Navbar';
import OnePageScroll from '@/components/OnePageScroll';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="bg-[#071120] text-white overflow-x-hidden">
      <Navbar />

      <OnePageScroll>
        <section className="one-page-section">
          <Hero />
        </section>

        <section className="one-page-section">
          <About />
        </section>

        <section className="one-page-section">
          <Services />
        </section>

        <section className="one-page-section">
          <WhyChoose />
        </section>

        <section className="one-page-section">
          <Portfolio />
        </section>

        <section className="one-page-section">
          <Testimonials />
        </section>

        <section className="one-page-section">
          <Team />
        </section>

        <section className="one-page-section">
          <Contact />
        </section>

        <section className="one-page-section footer-section">
          <Footer />
        </section>
      </OnePageScroll>

      <WhatsAppButton />
    </main>
  );
}