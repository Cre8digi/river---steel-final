import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";
import { PageHeader } from "./about";

import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.webp";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";
import img7 from "@/assets/7.webp";
import img8 from "@/assets/8.jpg";
import img81 from "@/assets/8.1.jpg";
import img9 from "@/assets/9.webp";
import img10 from "@/assets/10.webp";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.webp";
import img13 from "@/assets/13.jpg";
import img14 from "@/assets/14.jpg";
import img15 from "@/assets/15.webp";
import img16 from "@/assets/16.webp";
import img17 from "@/assets/17.webp";
import img1 from "../assets/1.jpg";


const productImages: Record<string, string> = {
  "stainless-steel": img1,
  "alloy-steel": img2,
  "carbon-steel": img3,
  "monel": img4,
  "inconel": img5,
  "incoloy": img6,
  "hastelloy": img7,
  "duplex": img8,
  "super-duplex": img81,
  "ss-pipe-fittings": img9,
  "nipple": img10,
  "coupling": img11,
  "flanges": img12,
  "tee": img13,
  "reducer": img14,
  "elbow": img15,
  "erw-pipes": img16,
  "seamless-pipes": img17,
};

const CATS = ["All", "Raw Materials", "Pipes", "Fittings", "Flanges"] as const;

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Stainless Steel, Alloys, Pipes & Fittings | River Steels" },
      { name: "description", content: "Browse our complete catalogue: Stainless, Alloy, Carbon Steel, Monel, Inconel, Incoloy, Hastelloy, Duplex, Super Duplex, pipes, fittings, flanges." },
      { property: "og:title", content: "Product Catalogue — River Steels" },
      { property: "og:description", content: "Complete range of industrial raw materials and pipe products." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});


function Products() {
  const [cat, setCat] = useState<typeof CATS[number]>("All");
  const [q, setQ] = useState("");
  const list = useMemo(
    () => PRODUCTS.filter((p) => (cat === "All" || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase())),
    [cat, q],
  );

  return (
    <>
  

      <PageHeader title="Our Products" subtitle="A complete catalogue of industrial raw materials — engineered to international standards." />
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${cat === c ? "bg-navy text-primary-foreground border-navy" : "border-border hover:border-navy/50"}`}>
                  {c}
                </button>
              ))}
            </div>
            <div className="relative md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="w-full pl-10 pr-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 6) * 0.05}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={productImages[p.slug]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-3xl font-bold text-center px-4">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-accent font-semibold uppercase tracking-wider">{p.category}</div>
                    <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:gap-3 transition-all">View details <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {list.length === 0 && <p className="text-center text-muted-foreground py-20">No products match your search.</p>}
        </div>
      </section>
    </>
  );
}
