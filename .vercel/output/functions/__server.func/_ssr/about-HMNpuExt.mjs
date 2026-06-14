import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./router-uDuXbu0a.mjs";
import { a as about } from "./about-facility-Dt5oOck6.mjs";
import { T as Target, E as Eye, H as Heart, A as Award } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "About River Steels", subtitle: "Two decades of forging trust, one shipment at a time." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: about, alt: "River Steels facility", loading: "lazy", width: 1600, height: 1100, className: "rounded-xl shadow-2xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold text-navy-deep", children: "Engineering excellence, delivered worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "River Steels was founded with a single belief: that critical industries deserve raw materials they can trust without question. From our Mumbai headquarters, we manufacture, stock and supply a comprehensive range of stainless, alloy, carbon and exotic-metal products to clients across India and 25+ countries." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "We combine deep technical expertise with one of India's largest ready-stock inventories, enabling us to meet urgent project deadlines without compromising on quality, traceability or compliance." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid md:grid-cols-3 gap-6", children: [{
      icon: Target,
      title: "Mission",
      text: "To supply world-class industrial raw materials backed by uncompromising quality, transparency and on-time delivery."
    }, {
      icon: Eye,
      title: "Vision",
      text: "To be the most trusted name in industrial steels and exotic alloys across emerging and global markets."
    }, {
      icon: Heart,
      title: "Values",
      text: "Integrity, technical depth, customer partnership and relentless attention to quality in everything we do."
    }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-xl bg-card border border-border h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold", children: v.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: v.text })
    ] }) }, v.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: "Certifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold text-navy-deep", children: "Quality you can verify." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-6", children: ["ISO 9001:2015", "PED 97/23/EC", "EN 10204 3.1", "NORSOK M-650"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded-xl border border-border bg-card grid place-items-center text-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-accent mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: c })
      ] }) }) }, c)) })
    ] }) })
  ] });
}
function PageHeader({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-navy-deep text-primary-foreground -mt-16 md:-mt-[7.5rem] pt-32 md:pt-44 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/95 to-navy/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg opacity-80 max-w-2xl", children: subtitle })
    ] }) })
  ] });
}
export {
  PageHeader,
  About as component
};
