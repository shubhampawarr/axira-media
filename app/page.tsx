import Navbar from '@/components/Navbar';

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyBusinessesChoose from '@/components/WhyBusinessesChoose';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="bg-white text-[#071a3d] overflow-x-hidden">
      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Services />

      <WhyBusinessesChoose />

      <WhyChoose />

      <Process />

      <Portfolio />

      <Testimonials />

      <FinalCTA />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}