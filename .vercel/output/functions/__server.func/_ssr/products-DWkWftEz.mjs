import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PRODUCTS, a as PageHeader, R as Reveal } from "./router-uDuXbu0a.mjs";
import { i as img17, a as img16, b as img15, c as img14, d as img13, e as img12, f as img11, g as img10, h as img9, j as img81, k as img8, l as img7, m as img6, n as img5, o as img4, p as img3, q as img2, r as img1 } from "./1-xgzMArxD.mjs";
import { S as Search } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const productImages = {
  "stainless-steel": img1,
  "alloy-steel": img2,
  "carbon-steel": img3,
  "monel": img4,
  "Plates & Sheets": img5,
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
  "seamless-pipes": img17
};
const CATS = ["All", "Raw Materials", "Pipes", "Fittings", "Flanges"];
function Products() {
  const [cat, setCat] = reactExports.useState("All");
  const [q, setQ] = reactExports.useState("");
  const list = reactExports.useMemo(() => PRODUCTS.filter((p) => (cat === "All" || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Our Products", subtitle: "A complete catalogue of industrial raw materials — engineered to international standards." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-4 py-2 rounded-full text-sm font-semibold border transition ${cat === c ? "bg-navy text-primary-foreground border-navy" : "border-border hover:border-navy/50"}`, children: c }, c)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:w-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search products...", className: "w-full pl-10 pr-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 6 * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/$slug", params: {
        slug: p.slug
      }, className: "group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: productImages[p.slug], alt: p.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-3xl font-bold text-center px-4", children: p.name }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-accent font-semibold uppercase tracking-wider", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: p.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/918828471856?text=Hello, I am interested in ${p.name}. Please share more details.`, target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation(), className: "mt-4 inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition", children: "WhatsApp Inquiry" })
        ] })
      ] }) }, p.slug)) }),
      list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-20", children: "No products match your search." })
    ] }) })
  ] });
}
export {
  Products as component
};
