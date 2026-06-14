import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as PageHeader, R as Reveal } from "./router-uDuXbu0a.mjs";
import { F as Fuel, Z as Zap, B as Beaker, d as Ship, e as Building2, f as Plane, D as Droplets, C as Cog } from "../_libs/lucide-react.mjs";
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
const ITEMS = [{
  icon: Fuel,
  name: "Oil & Gas",
  desc: "Upstream, midstream and downstream — pipes, flanges and fittings for refineries, pipelines and offshore platforms."
}, {
  icon: Zap,
  name: "Power Generation",
  desc: "Boiler tubes, alloy steel pipes and high-temperature flanges for thermal, nuclear and renewable power plants."
}, {
  icon: Beaker,
  name: "Chemical & Petrochemical",
  desc: "Corrosion-resistant materials including Hastelloy, Duplex and Super Duplex for aggressive process media."
}, {
  icon: Ship,
  name: "Shipbuilding & Marine",
  desc: "Monel, Super Duplex and SS 316L for seawater systems, hull fittings and offshore structures."
}, {
  icon: Building2,
  name: "Construction",
  desc: "Structural and architectural stainless steel for landmark projects across India and abroad."
}, {
  icon: Plane,
  name: "Aerospace & Defence",
  desc: "Inconel and high-spec alloys for jet engines, structural components and defence equipment."
}, {
  icon: Droplets,
  name: "Water & Desalination",
  desc: "Duplex and Super Duplex for high-chloride and brackish-water applications."
}, {
  icon: Cog,
  name: "Heavy Engineering",
  desc: "Carbon and alloy steels for fabrication, forgings and capital equipment manufacture."
}];
function Industries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Industries We Serve", subtitle: "Trusted materials for the most demanding sectors of the modern economy." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: ITEMS.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx % 3 * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 rounded-xl bg-card border border-border h-full hover:border-navy/40 hover:shadow-xl transition group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground group-hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold", children: i.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: i.desc })
    ] }) }, i.name)) }) })
  ] });
}
export {
  Industries as component
};
