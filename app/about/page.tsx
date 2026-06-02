import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';

const values = [
  {
    title: 'Creativity',
    text: 'We create digital content and campaigns that help brands stand out and connect with the right audience.',
  },
  {
    title: 'Transparency',
    text: 'We believe in clear communication, simple strategies and honest execution throughout every project.',
  },
  {
    title: 'Performance',
    text: 'We focus on measurable outcomes including visibility, engagement, leads, sales and business growth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <section className="px-6 pb-24">
          <div className="container-premium text-center">
            <p className="section-label">About Axira Media</p>

            <h1 className="section-title max-w-4xl mx-auto">
              Your growth partner in the digital world.
            </h1>

            <p className="section-text max-w-3xl mx-auto mt-6">
              Axira Media is a creative digital marketing agency focused on
              helping businesses build a strong online presence, reach the right
              audience and generate measurable results.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="container-premium grid lg:grid-cols-2 gap-8">
            <div className="premium-card p-8">
              <p className="section-label">Mission</p>
              <h2 className="text-3xl font-black text-[#071a3d]">
                Helping businesses grow digitally.
              </h2>
              <p className="section-text mt-5">
                To help businesses grow through innovative marketing strategies,
                creative branding and result-focused campaigns.
              </p>
            </div>

            <div className="premium-card p-8">
              <p className="section-label">Vision</p>
              <h2 className="text-3xl font-black text-[#071a3d]">
                Becoming a trusted digital growth partner.
              </h2>
              <p className="section-text mt-5">
                To become a trusted digital growth partner by delivering
                powerful, affordable and high-performing marketing solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 bg-[#f8fbff]">
          <div className="container-premium">
            <div className="text-center mb-14">
              <p className="section-label">Axira Values</p>

              <h2 className="section-title max-w-4xl mx-auto">
                Values that guide every campaign.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="premium-card p-8">
                  <h3 className="text-2xl font-black text-[#071a3d]">
                    {value.title}
                  </h3>

                  <p className="section-text mt-4">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />

        <Footer />
      </main>
    </>
  );
}