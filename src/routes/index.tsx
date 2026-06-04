import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Factory, ShieldCheck, Truck, Award, ArrowRight, CheckCircle2,
  Beaker, Zap, Ship, Building2, Plane, Fuel, ChevronDown, Star,
} from "lucide-react";
import { Reveal, Counter } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";
import hero from "@/assets/hero-steel.jpg";
import about from "@/assets/about-facility.jpg";
import collage from "@/assets/products-collage.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "River Steels — Premium Industrial Steel, Pipes, Fittings & Flanges title: River Steels | Stainless Steel, Alloy Steel, Pipes, Fittings & Flanges Supplier in Mumbai" },
      { name: "description", content: "Mumbai-based manufacturer & supplier of Stainless Steel, Alloy, Carbon, Monel, Inconel, Hastelloy, Duplex pipes, fittings & flanges. Request a quote today." },
      { property: "og:title", content: "River Steels — Industrial Raw Materials" },
      { property: "og:description", content: "Premium industrial steel and alloy products, engineered to international standards." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const STATS = [
  { label: "Years of Trust", value: 20, suffix: "+" },
  { label: "Tons in Stock", value: 5000, suffix: "+" },
  { label: "Happy Clients", value: 800, suffix: "+" },
  { label: "Countries Served", value: 25, suffix: "+" },
];

const WHY = [
  { icon: Factory, title: "In-House Manufacturing", desc: "Modern facility with strict process control and traceability for every batch." },
  { icon: ShieldCheck, title: "Certified Quality", desc: "ISO 9001:2015 systems with material test certificates on every shipment." },
  { icon: Truck, title: "Global Logistics", desc: "Ready stock for fast dispatch across India and exports to 25+ countries." },
  { icon: Award, title: "Competitive Pricing", desc: "Direct mill sourcing and large inventory keep our pricing the most competitive." },
];

const INDUSTRIES = [
  { icon: Fuel, name: "Oil & Gas" },
  { icon: Zap, name: "Power Generation" },
  { icon: Beaker, name: "Chemical & Petrochemical" },
  { icon: Ship, name: "Shipbuilding & Marine" },
  { icon: Building2, name: "Construction & Infrastructure" },
  { icon: Plane, name: "Aerospace & Defence" },
];

const TESTIMONIALS = [
  { name: "Rakesh Mehta", role: "Procurement Head, ChemPro Industries", text: "River Steels has been our reliable partner for 8 years. Their material quality and on-time delivery are unmatched." },
  { name: "Sandeep Verma", role: "Project Engineer, Marine Builders Ltd.", text: "From super duplex to inconel — they always have stock ready with full traceability. Truly a premium supplier." },
  { name: "Anita Joshi", role: "MD, Pharma Equipments Co.", text: "The team is responsive, technical, and absolutely transparent. Pricing is fair and the documentation is flawless." },
];

const FAQ = [
  { q: "What products does River Steels supply?", a: "We manufacture and stock Stainless, Alloy, Carbon Steel, Monel, Inconel, Incoloy, Hastelloy, Duplex and Super Duplex in bars, plates, pipes, fittings and flanges." },
  { q: "Do you provide material test certificates?", a: "Yes. Every shipment is supplied with EN 10204 3.1 MTCs and full traceability to the heat number." },
  { q: "What is your minimum order quantity?", a: "We accommodate both small and bulk orders. There is no fixed MOQ — speak with our sales team for the best pricing." },
  { q: "Do you export internationally?", a: "Yes. We serve clients across the Middle East, Europe, Africa, and South-East Asia with reliable global logistics." },
  { q: "How fast can you dispatch?", a: "Stock items are dispatched within 24–48 hours from Mumbai. Custom requirements are quoted with confirmed lead times." },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center -mt-16 md:-mt-[7.5rem] pt-32 md:pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="River Steels manufacturing facility" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy-deep/75 to-navy/60" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative container-x py-20 text-primary-foreground">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-widest uppercase backdrop-blur"
          >ISO 9001:2015 • Mumbai, India</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl"
          >
            Forging the <span className="text-gradient-steel">backbone</span> of modern industry.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl"
          >
            Manufacturers, stockists and suppliers of premium industrial raw materials — stainless steel, alloy steel, exotic alloys, pipes, fittings and flanges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/products" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:bg-gold transition">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="/catalogue.pdf" download className="inline-flex items-center gap-2 border border-white/30 backdrop-blur bg-white/5 hover:bg-white/10 px-6 py-3 rounded-md font-semibold">
              Download Catalogue
            </a>
          </motion.div>

          <div className="absolute left-0 right-0 bottom-8 container-x hidden md:flex justify-center">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-white/60 text-xs flex flex-col items-center gap-1">
              <span>Scroll</span><ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-navy-deep text-primary-foreground/80 py-6 overflow-hidden border-y border-white/10">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm tracking-widest uppercase">
          {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
            <span key={i} className="flex items-center gap-12">{p.name}<span className="text-accent">●</span></span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="section bg-secondary/50">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={about} alt="River Steels facility" loading="lazy" width={1600} height={1100} className="rounded-xl shadow-2xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">About River Steels</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">Two decades of engineering excellence.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Headquartered in Mumbai, River Steels manufactures and supplies precision-engineered metals to industries worldwide. We combine technical depth, large inventory, and a relentless focus on quality to deliver materials that meet the most demanding specifications.
            </p>
            <ul className="mt-6 space-y-3">
              {["End-to-end traceability with EN 10204 3.1 MTCs", "In-house testing — chemical, mechanical & NDT", "Dedicated export packing & global freight desk", "Engineering support from material selection to delivery"].map((t) => (
                <li key={t} className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span>{t}</span></li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all">Learn more about us <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section bg-navy-deep text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x relative">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Catalogue</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Built for every demanding application.</h2>
            <p className="mt-4 opacity-80">Browse our full range of raw materials, pipes, fittings and flanges.</p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.slice(0, 9).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition h-full">
                  <div className="text-xs text-accent uppercase tracking-wider">{p.category}</div>
                  <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm opacity-75 line-clamp-2">{p.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">View details <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold">View All Products <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Why Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">The trusted partner for critical metals.</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="p-6 rounded-xl border border-border hover:border-navy/40 hover:shadow-xl transition group h-full bg-card">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground group-hover:scale-110 transition">
                    <w.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING PROCESS */}
      <section className="section bg-secondary/40">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Manufacturing Process</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">From raw billet to certified product.</h2>
            <ol className="mt-8 space-y-5">
              {[
                ["Raw Material Sourcing", "Direct from approved mills with verified chemistry."],
                ["Forming & Forging", "Hot rolling, drawing and forging to spec dimensions."],
                ["Heat Treatment", "Solution annealing, normalizing or quench & temper as required."],
                ["Machining & Finishing", "CNC machining, polishing and surface treatments."],
                ["Inspection & Testing", "Chemical, mechanical, hydro, NDT and dimensional checks."],
                ["Packing & Dispatch", "Marked, MTC-attached and export-ready packaging."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-navy text-primary-foreground grid place-items-center text-sm font-bold">{i + 1}</div>
                  <div><div className="font-semibold">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={collage} alt="Manufacturing process" loading="lazy" width={1600} height={1000} className="rounded-xl shadow-2xl" />
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Industries We Serve</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">Powering progress across sectors.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((i, idx) => (
              <Reveal key={i.name} delay={idx * 0.05}>
                <div className="aspect-square rounded-xl bg-secondary hover:bg-navy hover:text-primary-foreground transition flex flex-col items-center justify-center gap-3 p-4 text-center cursor-default group">
                  <i.icon className="w-8 h-8 text-navy group-hover:text-accent transition" />
                  <span className="text-sm font-semibold leading-tight">{i.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-navy-deep text-primary-foreground">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Trusted by industry leaders.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                  <div className="flex gap-1 text-accent">{[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}</div>
                  <p className="mt-4 opacity-90 leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs opacity-70">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_2fr] gap-12">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">Common questions, answered.</h2>
            <p className="mt-4 text-muted-foreground">Can't find what you're looking for? Reach out to our sales team — we usually reply within an hour.</p>
          </Reveal>
          <div>
            {FAQ.map((f, i) => (
              <div key={f.q} className="border-b border-border">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left py-5 font-semibold hover:text-navy transition">
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pb-5 text-muted-foreground leading-relaxed">{f.a}</motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / INQUIRY */}
      <section className="section bg-secondary/50">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Get In Touch</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">Request a quote.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Tell us what you need — grade, size, quantity — and our team will respond with stock availability, pricing and lead time.</p>
            <div className="mt-8 space-y-3 text-sm">
              <div><span className="text-muted-foreground">Email:</span> <a href={`mailto:${SITE.email}`} className="font-semibold text-navy">{SITE.email}</a></div>
              {SITE.contacts.map((c) => (
                <div key={c.phone}><span className="text-muted-foreground">{c.name}:</span> <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="font-semibold text-navy">{c.phone}</a></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-xl border border-border">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
