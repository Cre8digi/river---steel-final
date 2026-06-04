import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Award, Target, Eye, Heart } from "lucide-react";
import about from "@/assets/about-facility.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — River Steels" },
      { name: "description", content: "Learn about River Steels — two decades of manufacturing premium industrial steel and alloys from Mumbai." },
      { property: "og:title", content: "About River Steels" },
      { property: "og:description", content: "Manufacturers, stockists and suppliers of premium industrial raw materials." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader title="About River Steels" subtitle="Two decades of forging trust, one shipment at a time." />
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={about} alt="River Steels facility" loading="lazy" width={1600} height={1100} className="rounded-xl shadow-2xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Story</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-deep">Engineering excellence, delivered worldwide.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              River Steels was founded with a single belief: that critical industries deserve raw materials they can trust without question. From our Mumbai headquarters, we manufacture, stock and supply a comprehensive range of stainless, alloy, carbon and exotic-metal products to clients across India and 25+ countries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We combine deep technical expertise with one of India's largest ready-stock inventories, enabling us to meet urgent project deadlines without compromising on quality, traceability or compliance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-secondary/40">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", text: "To supply world-class industrial raw materials backed by uncompromising quality, transparency and on-time delivery." },
            { icon: Eye, title: "Vision", text: "To be the most trusted name in industrial steels and exotic alloys across emerging and global markets." },
            { icon: Heart, title: "Values", text: "Integrity, technical depth, customer partnership and relentless attention to quality in everything we do." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground"><v.icon className="w-6 h-6" /></div>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Certifications</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-deep">Quality you can verify.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {["ISO 9001:2015", "PED 97/23/EC", "EN 10204 3.1", "NORSOK M-650"].map((c) => (
              <Reveal key={c}>
                <div className="aspect-video rounded-xl border border-border bg-card grid place-items-center text-center p-4">
                  <div>
                    <Award className="w-8 h-8 text-accent mx-auto" />
                    <div className="mt-3 font-semibold">{c}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative bg-navy-deep text-primary-foreground -mt-16 md:-mt-[7.5rem] pt-32 md:pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/95 to-navy/70" />
      <div className="container-x relative">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
