import Navbar from './components/Navbar';
import Section from './components/Section';
import Card from './components/Card';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-white text-[#121212]">
      <a href="#contact" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-[#121212] focus:border focus:border-[#c9ccd5] focus:px-4 focus:py-2">Skip to contact</a>
      <Navbar />

      {/* Hero */}
      <section id="home" className="bg-white border-b border-[#e6e8ee]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#121212]">Interiors That Stay Cool. Naturally.</h1>
              <p className="mt-6 max-w-2xl text-[#092e61] text-base sm:text-lg leading-relaxed">Climate-adaptive wall & ceiling systems that reduce heat and AC use—without compromising luxury.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex items-center rounded-md bg-[#205db2] px-5 py-2.5 text-white hover:bg-[#092e61] transition-colors">Book a Heat Assessment</a>
                <a href="#" className="inline-flex items-center rounded-md border border-[#c9ccd5] px-5 py-2.5 text-[#121212] hover:text-[#092e61] underline-offset-4 hover:underline transition-colors">Download 1-Page Overview</a>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="relative w-28 h-28" aria-hidden>
                <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-1">
                  <span className="h-4 w-4 bg-[#205db2]" />
                  <span className="h-4 w-4 bg-[#c9ccd5]" />
                  <span className="h-4 w-4 bg-[#c9ccd5]" />
                  <span className="h-4 w-4 bg-[#205db2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Grid */}
      <Section id="value" eyebrow="Value" title="Cool performance. Quiet luxury." background="white">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Cooler by Design" text="PCM absorbs heat by day, releases when cool." />
          <Card title="Lower Energy Bills" text="Cut AC dependence significantly." />
          <Card title="Luxury Aesthetics" text="Performance with quiet, modern interiors." />
        </div>
      </Section>

      {/* Mini Explainer */}
      <Section id="different" eyebrow="Explainer" title="What Makes Clima Different" description="Results over hype. Architecture-grade detailing. End-to-end delivery.">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <ul className="space-y-3 text-[#121212] list-disc pl-5">
              <li>Results over hype</li>
              <li>Architecture-grade detailing</li>
              <li>End-to-end delivery</li>
            </ul>
          </div>
          <div>
            <figure className="border border-[#e6e8ee] rounded-md p-6">
              <div className="h-32 flex items-center justify-center text-[#092e61]">Heat-in / Heat-out diagram</div>
              <figcaption className="mt-3 text-sm text-[#092e61]">Simple PCM action: absorbs heat at peak, releases when cool.</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* Industries Preview */}
      <Section id="industries" eyebrow="Industries" title="Where it performs" background="white">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          <Card title="Offices" text="Cooler afternoons, quieter HVAC, focused teams." />
          <Card title="Hospitality" text="Comfort that feels premium, lower energy spend." />
          <Card title="Healthcare" text="Stable temps for patient comfort." />
          <Card title="Education" text="Better attention with cooler classrooms." />
          <Card title="Residential" text="Heat-smart homes with calm interiors." />
        </div>
      </Section>

      {/* Proof Strip */}
      <Section id="proof" eyebrow="Proof" title="Featured by / Partnered with" description="Logos are placeholders." background="gray">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 border border-[#e6e8ee] rounded bg-white" aria-label="Logo placeholder" />
          ))}
        </div>
      </Section>

      {/* CTA Band */}
      <Section id="cta" title="Design should feel good to live in." cta={{ href: '#contact', label: 'Book a Heat Assessment' }} />

      {/* Solutions */}
      <Section id="solutions" eyebrow="Solutions" title="Systems built around comfort & efficiency" background="gray">
        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-xl font-semibold">ClimaTec Walls</h3>
              <p className="mt-2 text-[#092e61]">PCM-integrated wall panels that stabilize indoor temperatures.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                <li>Benefit: Reduces heat swings</li>
                <li>Use-case: West-facing walls</li>
                <li>Integration: Drywall/Panel systems</li>
              </ul>
              <p className="mt-3 text-xs text-[#092e61]">Technical: Panel cores tuned to local climate bands.</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[#092e61] underline-offset-4 hover:underline">Request details <ArrowRight size={16} /></a>
            </div>
            <div className="border border-[#e6e8ee] rounded-md h-40 bg-white" aria-label="ClimaTec Walls placeholder image" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-xl font-semibold">ClimaTec Ceilings</h3>
              <p className="mt-2 text-[#092e61]">Ceiling systems that quietly manage heat load at peak hours.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                <li>Benefit: Peak load shaving</li>
                <li>Use-case: Top floors</li>
                <li>Integration: Grid/Concealed systems</li>
              </ul>
              <p className="mt-3 text-xs text-[#092e61]">Technical: Thermal coupling with minimal bridging.</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[#092e61] underline-offset-4 hover:underline">Request details <ArrowRight size={16} /></a>
            </div>
            <div className="border border-[#e6e8ee] rounded-md h-40 bg-white" aria-label="ClimaTec Ceilings placeholder image" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-xl font-semibold">IoT Monitoring</h3>
              <p className="mt-2 text-[#092e61]">Real-time comfort + energy insights.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                <li>Benefit: Data-backed comfort</li>
                <li>Use-case: Post-install validation</li>
                <li>Integration: Wi‑Fi sensors</li>
              </ul>
              <p className="mt-3 text-xs text-[#092e61]">Technical: Secure cloud dashboards.</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[#092e61] underline-offset-4 hover:underline">Request details <ArrowRight size={16} /></a>
            </div>
            <div className="border border-[#e6e8ee] rounded-md h-40 bg-white" aria-label="IoT Monitoring placeholder image" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-xl font-semibold">Sustainability Advisory</h3>
              <p className="mt-2 text-[#092e61]">Roadmaps for LEED/IGBC points and measurable savings.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                <li>Benefit: Compliance + Savings</li>
                <li>Use-case: Green certification</li>
                <li>Integration: With design teams</li>
              </ul>
              <p className="mt-3 text-xs text-[#092e61]">Technical: Energy modeling + reporting.</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[#092e61] underline-offset-4 hover:underline">Request details <ArrowRight size={16} /></a>
            </div>
            <div className="border border-[#e6e8ee] rounded-md h-40 bg-white" aria-label="Sustainability Advisory placeholder image" />
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how" eyebrow="Process" title="Simple science. Precise execution." background="white">
        <ol className="grid md:grid-cols-5 gap-4 text-sm">
          {[
            ['Assessment', 'Site, sun, roof, walls, usage patterns.'],
            ['Simulation', 'Thermal model + material pairing.'],
            ['Integration', 'PCM panels; detailing to avoid thermal bridging.'],
            ['Install', 'Clean execution with quality checks.'],
            ['Verify', 'IoT monitors + comfort review.'],
          ].map(([t, d], i) => (
            <li key={t} className="border border-[#e6e8ee] rounded-md p-4 bg-white">
              <span className="text-xs text-[#092e61]">Step {i + 1}</span>
              <h3 className="mt-1 font-semibold">{t}</h3>
              <p className="mt-2 text-[#092e61]">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <details className="group border border-[#e6e8ee] rounded-md">
            <summary className="cursor-pointer p-4 font-medium">FAQ</summary>
            <div className="p-4 border-t border-[#e6e8ee] space-y-4 text-sm text-[#092e61]">
              {[
                'What is PCM?',
                'Will this replace AC?',
                'Maintenance?',
                'Payback?',
                'Retrofit?',
                'Safety/Fire ratings?',
              ].map((q) => (
                <div key={q}>
                  <p className="font-medium text-[#121212]">{q}</p>
                  <p>Answer coming soon.</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </Section>

      {/* About */}
      <Section id="about" eyebrow="About" title="Design + Energy Intelligence" description="Mission: comfort first, with measurable efficiency. Vision: climate-adaptive interiors across modern buildings.">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[#121212] leading-relaxed">We design for comfort, not just looks. Precision detailing, responsibility, and measurable impact guide every project.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {['Clarity','Precision','Responsibility','Measurable Impact'].map((v) => (
                <li key={v} className="border border-[#e6e8ee] rounded-md p-3 bg-white">{v}</li>
              ))}
            </ul>
          </div>
          <div className="border border-[#e6e8ee] rounded-md h-56 bg-white flex items-center justify-center text-[#092e61]" aria-label="Leadership headshot placeholder">Leadership headshot</div>
        </div>
      </Section>

      {/* Resources */}
      <Section id="resources" eyebrow="Resources" title="Articles & Insights" description="Starter posts and future case studies placeholders." background="gray">
        <div className="grid md:grid-cols-3 gap-6">
          {['Understanding PCM in Interiors','Designing for Thermal Comfort','Energy Savings with Peak Load Shaving'].map((t) => (
            <article key={t} className="border border-[#e6e8ee] rounded-md p-6 bg-white">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-[#092e61]">Insight coming soon.</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-[#092e61] underline-offset-4 hover:underline">Read placeholder <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {['Office','Hotel','Clinic'].map((c) => (
            <div key={c} className="border border-dashed border-[#c9ccd5] rounded-md p-6 text-sm text-[#092e61] bg-white">{c} Case Study — Coming Soon</div>
          ))}
        </div>
        <form className="mt-10 border border-[#e6e8ee] rounded-md p-6 bg-white max-w-md" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
          <label htmlFor="newsletter" className="block text-sm font-medium text-[#121212]">Newsletter</label>
          <div className="mt-2 flex gap-2">
            <input id="newsletter" type="email" required placeholder="Your email" className="w-full rounded-md border border-[#c9ccd5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#205db2]" />
            <button className="rounded-md bg-[#205db2] px-4 py-2 text-white hover:bg-[#092e61]">Sign up</button>
          </div>
        </form>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Request a design review" description="Tell us about your project and city. We usually respond within 24 hours." background="white">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="border border-[#e6e8ee] rounded-md p-6 bg-white">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="name">Name</label>
                <input id="name" required className="mt-1 w-full rounded-md border border-[#c9ccd5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#205db2]" />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">Email</label>
                <input id="email" type="email" required className="mt-1 w-full rounded-md border border-[#c9ccd5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#205db2]" />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
                <input id="phone" type="tel" className="mt-1 w-full rounded-md border border-[#c9ccd5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#205db2]" />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="city">City</label>
                <input id="city" className="mt-1 w-full rounded-md border border-[#c9ccd5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#205db2]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium" htmlFor="project">Project Type</label>
                <input id="project" className="mt-1 w-full rounded-md border border-[#c9ccd5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#205db2]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium" htmlFor="message">Message</label>
                <textarea id="message" rows={4} className="mt-1 w-full rounded-md border border-[#c9ccd5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#205db2]"></textarea>
              </div>
            </div>
            <button className="mt-6 inline-flex items-center rounded-md bg-[#205db2] px-5 py-2.5 text-white hover:bg-[#092e61]">Send</button>
            {formStatus === 'success' && (
              <p role="status" className="mt-3 text-sm text-[#092e61]">Thanks — we’ll reply within 24 hours.</p>
            )}
          </form>
          <div>
            <div className="border border-[#e6e8ee] rounded-md p-6 bg-white">
              <h3 className="font-semibold">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#092e61]">
                <li>Email: hello@climasolutions.com</li>
                <li>Phone/WhatsApp: +1 234 567 890</li>
                <li>City: Your City</li>
              </ul>
              <div className="mt-6 h-40 border border-dashed border-[#c9ccd5] rounded flex items-center justify-center text-sm text-[#092e61]">Calendar embed placeholder</div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
