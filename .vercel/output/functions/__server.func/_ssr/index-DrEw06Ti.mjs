import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PRODUCTS, R as Reveal, C as Counter, S as SITE } from "./router-uDuXbu0a.mjs";
import { I as InquiryForm } from "./InquiryForm-ChCtvwqF.mjs";
import { a as about } from "./about-facility-Dt5oOck6.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { h as ArrowRight, i as ChevronDown, j as CircleCheck, k as Factory, l as ShieldCheck, m as Truck, A as Award, F as Fuel, Z as Zap, B as Beaker, d as Ship, e as Building2, f as Plane, n as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
const hero = "/assets/hero-steel-DYR3ANoz.jpg";
const collage = "/assets/products-collage-BLX85xFX.jpg";
const STATS = [{
  label: "Years of Trust",
  value: 20,
  suffix: "+"
}, {
  label: "Tons in Stock",
  value: 5e3,
  suffix: "+"
}, {
  label: "Happy Clients",
  value: 800,
  suffix: "+"
}, {
  label: "Countries Served",
  value: 25,
  suffix: "+"
}];
const WHY = [{
  icon: Factory,
  title: "In-House Manufacturing",
  desc: "Modern facility with strict process control and traceability for every batch."
}, {
  icon: ShieldCheck,
  title: "Certified Quality",
  desc: "ISO 9001:2015 systems with material test certificates on every shipment."
}, {
  icon: Truck,
  title: "Global Logistics",
  desc: "Ready stock for fast dispatch across India and exports to 25+ countries."
}, {
  icon: Award,
  title: "Competitive Pricing",
  desc: "Direct mill sourcing and large inventory keep our pricing the most competitive."
}];
const INDUSTRIES = [{
  icon: Fuel,
  name: "Oil & Gas"
}, {
  icon: Zap,
  name: "Power Generation"
}, {
  icon: Beaker,
  name: "Chemical & Petrochemical"
}, {
  icon: Ship,
  name: "Shipbuilding & Marine"
}, {
  icon: Building2,
  name: "Construction & Infrastructure"
}, {
  icon: Plane,
  name: "Aerospace & Defence"
}];
const TESTIMONIALS = [{
  name: "Rakesh Mehta",
  role: "Procurement Head, ChemPro Industries",
  text: "River Steels has been our reliable partner for 8 years. Their material quality and on-time delivery are unmatched."
}, {
  name: "Sandeep Verma",
  role: "Project Engineer, Marine Builders Ltd.",
  text: "From super duplex to inconel — they always have stock ready with full traceability. Truly a premium supplier."
}, {
  name: "Anita Joshi",
  role: "MD, Pharma Equipments Co.",
  text: "The team is responsive, technical, and absolutely transparent. Pricing is fair and the documentation is flawless."
}];
const FAQ = [{
  q: "What products does River Steels supply?",
  a: "We manufacture and stock Stainless, Alloy, Carbon Steel, Monel, Inconel, Incoloy, Hastelloy, Duplex and Super Duplex in bars, plates, pipes, fittings and flanges."
}, {
  q: "Do you provide material test certificates?",
  a: "Yes. Every shipment is supplied with EN 10204 3.1 MTCs and full traceability to the heat number."
}, {
  q: "What is your minimum order quantity?",
  a: "We accommodate both small and bulk orders. There is no fixed MOQ — speak with our sales team for the best pricing."
}, {
  q: "Do you export internationally?",
  a: "Yes. We serve clients across the Middle East, Europe, Africa, and South-East Asia with reliable global logistics."
}, {
  q: "How fast can you dispatch?",
  a: "Stock items are dispatched within 24–48 hours from Mumbai. Custom requirements are quoted with confirmed lead times."
}];
function Home() {
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[100svh] flex items-center -mt-16 md:-mt-[7.5rem] pt-32 md:pt-40 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "River Steels manufacturing facility", className: "w-full h-full object-cover", width: 1920, height: 1280 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy-deep/75 to-navy/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container-x py-20 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-widest uppercase backdrop-blur", children: "ISO 9001:2015 • Mumbai, India" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.1
        }, className: "mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl", children: [
          "Forging the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-steel", children: "backbone" }),
          " of modern industry."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.2
        }, className: "mt-6 text-lg md:text-xl opacity-90 max-w-2xl", children: "Manufacturers, stockists and suppliers of premium industrial raw materials — stainless steel, alloy steel, exotic alloys, pipes, fittings and flanges." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.3
        }, className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:bg-gold transition", children: [
            "Explore Products ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/catalogue.pdf", download: true, className: "inline-flex items-center gap-2 border border-white/30 backdrop-blur bg-white/5 hover:bg-white/10 px-6 py-3 rounded-md font-semibold", children: "Download Catalogue" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 bottom-8 container-x hidden md:flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
          y: [0, 8, 0]
        }, transition: {
          duration: 2,
          repeat: Infinity
        }, className: "text-white/60 text-xs flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-navy-deep text-primary-foreground/80 py-6 overflow-hidden border-y border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-12 animate-marquee whitespace-nowrap text-sm tracking-widest uppercase", children: [...PRODUCTS, ...PRODUCTS].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
      p.name,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "●" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid grid-cols-2 md:grid-cols-4 gap-8", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-bold text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm uppercase tracking-wider text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: about, alt: "River Steels facility", loading: "lazy", width: 1600, height: 1100, className: "rounded-xl shadow-2xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "About River Steels" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-navy-deep", children: "Two decades of engineering excellence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Headquartered in Mumbai, River Steels manufactures and supplies precision-engineered metals to industries worldwide. We combine technical depth, large inventory, and a relentless focus on quality to deliver materials that meet the most demanding specifications." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["End-to-end traceability with EN 10204 3.1 MTCs", "In-house testing — chemical, mechanical & NDT", "Dedicated export packing & global freight desk", "Engineering support from material selection to delivery"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-accent shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all", children: [
          "Learn more about us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section bg-navy-deep text-primary-foreground relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Our Catalogue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold", children: "Built for every demanding application." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 opacity-80", children: "Browse our full range of raw materials, pipes, fittings and flanges." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: PRODUCTS.slice(0, 9).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/$slug", params: {
          slug: p.slug
        }, className: "group block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-accent uppercase tracking-wider", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm opacity-75 line-clamp-2", children: p.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all", children: [
            "View details ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }) }, p.slug)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold", children: [
          "View All Products ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Why Choose Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-navy-deep", children: "The trusted partner for critical metals." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: WHY.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border border-border hover:border-navy/40 hover:shadow-xl transition group h-full bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground group-hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-bold text-lg", children: w.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: w.desc })
      ] }) }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Manufacturing Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-navy-deep", children: "From raw billet to certified product." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-8 space-y-5", children: [["Raw Material Sourcing", "Direct from approved mills with verified chemistry."], ["Forming & Forging", "Hot rolling, drawing and forging to spec dimensions."], ["Heat Treatment", "Solution annealing, normalizing or quench & temper as required."], ["Machining & Finishing", "CNC machining, polishing and surface treatments."], ["Inspection & Testing", "Chemical, mechanical, hydro, NDT and dimensional checks."], ["Packing & Dispatch", "Marked, MTC-attached and export-ready packaging."]].map(([t, d], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 shrink-0 rounded-full bg-navy text-primary-foreground grid place-items-center text-sm font-bold", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: d })
          ] })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: collage, alt: "Manufacturing process", loading: "lazy", width: 1600, height: 1e3, className: "rounded-xl shadow-2xl" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Industries We Serve" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-navy-deep", children: "Powering progress across sectors." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: INDUSTRIES.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square rounded-xl bg-secondary hover:bg-navy hover:text-primary-foreground transition flex flex-col items-center justify-center gap-3 p-4 text-center cursor-default group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "w-8 h-8 text-navy group-hover:text-accent transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold leading-tight", children: i.name })
      ] }) }, i.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-navy-deep text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold", children: "Trusted by industry leaders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-6 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-accent", children: [...Array(5)].map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 opacity-90 leading-relaxed", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-70", children: t.role })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-[1fr_2fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-navy-deep", children: "Common questions, answered." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Can't find what you're looking for? Reach out to our sales team — we usually reply within an hour." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: FAQ.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full flex justify-between items-center text-left py-5 font-semibold hover:text-navy transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}` })
        ] }),
        openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          height: 0
        }, animate: {
          opacity: 1,
          height: "auto"
        }, className: "pb-5 text-muted-foreground leading-relaxed", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-navy-deep", children: "Request a quote." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Tell us what you need — grade, size, quantity — and our team will respond with stock availability, pricing and lead time." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Email:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${SITE.email}`, className: "font-semibold text-navy", children: SITE.email })
          ] }),
          SITE.contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              c.name,
              ":"
            ] }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${c.phone.replace(/\s/g, "")}`, className: "font-semibold text-navy", children: c.phone })
          ] }, c.phone))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card p-6 md:p-8 rounded-xl shadow-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, {}) }) })
    ] }) })
  ] });
}
export {
  Home as component
};
