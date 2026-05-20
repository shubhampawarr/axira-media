import FadeUp from './FadeUp';

export default function Contact() {
  return (
    <section id="contact" className="compact-section bg-[#071120]">
      <div className="container-premium grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
        <FadeUp>
          <p className="section-label">Contact</p>

          <h2 className="section-title mb-4">
            Ready to grow your{' '}
            <span className="gold-text">business digitally?</span>
          </h2>

          <p className="section-text mb-6 max-w-xl">
            Tell us what you need. Axira Media will help you choose the right
            digital strategy for visibility, leads and measurable growth.
          </p>

          <div className="premium-card p-5 space-y-4">
            <div>
              <p className="text-slate-400 text-sm">Phone</p>

              <h3 className="text-lg font-black mt-1">
                +91 98338119893
              </h3>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Email</p>

              <h3 className="text-lg font-black mt-1 break-all">
                axiramarketing@gmail.com
              </h3>
            </div>

            <a
              href="https://wa.me/9198338119893"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block premium-button px-6 py-3"
            >
              Contact on WhatsApp
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <form
            action="https://formsubmit.co/axiramarketing@gmail.com"
            method="POST"
            className="premium-card p-5 space-y-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Axira Media Inquiry"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                className="input-premium"
                placeholder="Your Name"
                required
              />

              <input
                name="phone"
                className="input-premium"
                placeholder="Phone Number"
                required
              />
            </div>

            <input
              name="email"
              type="email"
              className="input-premium"
              placeholder="Email Address"
              required
            />

            <input
              name="business"
              className="input-premium"
              placeholder="Business Name"
            />

            <select
              name="service"
              className="input-premium bg-[#101b2d] text-white"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Service Needed
              </option>

              <option value="Website Development">
                Website Development
              </option>

              <option value="SEO Optimization">
                SEO Optimization
              </option>

              <option value="Google Ads">
                Google Ads
              </option>

              <option value="Meta Ads">
                Meta Ads
              </option>

              <option value="Social Media Management">
                Social Media Management
              </option>
            </select>

            <textarea
              name="message"
              className="input-premium min-h-24 resize-none"
              placeholder="Tell us about your business goals"
              required
            />

            <button
              type="submit"
              className="premium-button w-full px-8 py-3"
            >
              Send Inquiry
            </button>

            <p className="text-slate-500 text-xs text-center">
              We usually respond within 24 hours.
            </p>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}