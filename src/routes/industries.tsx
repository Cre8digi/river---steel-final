import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "./about";
import { Fuel, Zap, Beaker, Ship, Building2, Plane, Droplets, Cog } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — River Steels" },
      { name: "description", content: "River Steels supplies industrial raw materials to oil & gas, power, chemical, marine, construction, aerospace and more." },
      { property: "og:title", content: "Industries We Serve" },
      { property: "og:description", content: "Powering progress across critical industries worldwide." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const ITEMS = [
  { icon: Fuel, name: "Oil & Gas", desc: "Upstream, midstream and downstream — pipes, flanges and fittings for refineries, pipelines and offshore platforms." },
  { icon: Zap, name: "Power Generation", desc: "Boiler tubes, alloy steel pipes and high-temperature flanges for thermal, nuclear and renewable power plants." },
  { icon: Beaker, name: "Chemical & Petrochemical", desc: "Corrosion-resistant materials including Hastelloy, Duplex and Super Duplex for aggressive process media." },
  { icon: Ship, name: "Shipbuilding & Marine", desc: "Monel, Super Duplex and SS 316L for seawater systems, hull fittings and offshore structures." },
  { icon: Building2, name: "Construction", desc: "Structural and architectural stainless steel for landmark projects across India and abroad." },
  { icon: Plane, name: "Aerospace & Defence", desc: "Inconel and high-spec alloys for jet engines, structural components and defence equipment." },
  { icon: Droplets, name: "Water & Desalination", desc: "Duplex and Super Duplex for high-chloride and brackish-water applications." },
  { icon: Cog, name: "Heavy Engineering", desc: "Carbon and alloy steels for fabrication, forgings and capital equipment manufacture." },
];

function Industries() {
  return (
    <>
      <PageHeader title="Industries We Serve" subtitle="Trusted materials for the most demanding sectors of the modern economy." />
      <section className="section">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((i, idx) => (
            <Reveal key={i.name} delay={(idx % 3) * 0.06}>
              <div className="p-7 rounded-xl bg-card border border-border h-full hover:border-navy/40 hover:shadow-xl transition group">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground group-hover:scale-110 transition">
                  <i.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{i.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
