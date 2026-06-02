import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';

const portfolioSections = [
  {
    section: 'Healthcare',
    projects: [
      {
        client: 'AF Care Physio',
        service: 'Social Media Marketing',
        video: '/videos/af_care.mp4',
      },
    ],
  },
  {
    section: 'Interior & Real Estate',
    projects: [
      {
        client: 'Kraft Associate Interior',
        service: 'Brand Content',
        video: '/videos/kraft-assosiate-interior.mp4',
      },
    ],
  },
  {
    section: 'Restaurants & Cafes',
    projects: [
      {
        client: 'Basyl Cafe Vapi',
        service: 'Social Media Reels',
        video: '/videos/basyl-cafe-vapi.mp4',
      },
      {
        client: "Pete's Pizzeria",
        service: 'Social Media Marketing',
        video: '/videos/petes-pizzeria.mp4',
      },
    ],
  },
  {
    section: 'Beauty & Lifestyle',
    projects: [
      {
        client: 'Nail Express Salon',
        service: 'Content Marketing',
        video: '/videos/nail-express-salon.mp4',
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        {/* HERO */}
        <section className="px-6 pb-20">
          <div className="container-premium text-center">
            <p className="section-label">Portfolio</p>

            <h1 className="section-title max-w-4xl mx-auto">
              Real work for real businesses.
            </h1>

            <p className="section-text max-w-2xl mx-auto mt-6">
              Explore marketing campaigns, social media content,
              brand creatives and promotional videos created
              for businesses across multiple industries.
            </p>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="px-6 pb-20">
          <div className="container-premium">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                'Healthcare',
                'Restaurants',
                'Real Estate',
                'Interior Design',
                'Beauty',
                'Local Businesses',
                'Startups',
                'Retail',
              ].map((industry) => (
                <div
                  key={industry}
                  className="premium-card p-5 text-center font-semibold text-[#071a3d]"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTIONS */}
        <section className="px-6 pb-24">
          <div className="container-premium space-y-20">
            {portfolioSections.map((group) => (
              <div key={group.section}>
                <div className="mb-8">
                  <p className="section-label">
                    {group.section}
                  </p>

                  <h2 className="text-3xl md:text-4xl font-black text-[#071a3d]">
                    Featured Client Work
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {group.projects.map((project) => (
                    <div
                      key={project.client}
                      className="premium-card overflow-hidden"
                    >
                      <div className="aspect-[9/16] bg-black">
                        <video
                          src={project.video}
                          controls
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-black text-[#071a3d]">
                          {project.client}
                        </h3>

                        <p className="mt-2 text-slate-600">
                          {project.service}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />

        <Footer />
      </main>
    </>
  );
}