import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Search, P as Phone, X, M as Menu, a as MapPin, b as Mail, c as MessageCircle } from "../_libs/lucide-react.mjs";
import { u as useReducedMotion, m as motion, a as useInView, b as animate } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BfZkGV0l.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const SITE = {
  tagline: "Manufacturers, Stockists & Suppliers of Industrial Raw Materials",
  email: "riversteels316@gmail.com",
  contacts: [
    { name: "Govind Prajapati", phone: "+91 8828471856" },
    { name: "Sharvan Prajapati", phone: "+91 9987231497" },
    { name: "Sharvan Prajapati", phone: "+91 8169949606" }
  ],
  primaryPhone: "+918828471856",
  whatsappPhone: "918828471856",
  address: {
    line1: "Office No. 6, 1st Floor, Plot No. 59/61",
    line2: "Khandke Building, Bhandari Street",
    line3: "Durgadevi Udyan, 1st Kumbharwada",
    line4: "Girgaon, Mumbai - 400004"
  },
  fullAddress: "Office No. 6, 1st Floor, Plot No. 59/61, Khandke Building, Bhandari Street, Durgadevi Udyan, 1st Kumbharwada, Girgaon, Mumbai - 400004"
};
const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" }
];
const make = (p) => p;
const PRODUCTS = [
  make({
    slug: "stainless-steel",
    name: "Stainless Steel",
    category: "Raw Materials",
    tagline: "Corrosion-resistant grades for demanding environments",
    description: "High-quality stainless steel in bars, rods, sheets, and plates engineered for exceptional corrosion resistance, strength, and surface finish across chemical, food, and marine applications.",
    grades: ["SS 304", "SS 304L", "SS 316", "SS 316L", "SS 321", "SS 310", "SS 904L"],
    applications: ["Chemical processing", "Food & dairy", "Pharmaceuticals", "Marine equipment", "Architecture"],
    specs: [
      { label: "Form", value: "Bars, Rods, Sheets, Plates, Coils" },
      { label: "Size Range", value: "6 mm – 600 mm" },
      { label: "Thickness", value: "0.5 mm – 100 mm" },
      { label: "Finish", value: "2B, BA, No.4, Mirror, Hot Rolled" }
    ],
    standards: ["ASTM A276", "ASTM A240", "ASME SA240", "EN 10088"]
  }),
  make({
    slug: "alloy-steel",
    name: "Alloy Steel",
    category: "Raw Materials",
    tagline: "High-strength alloys for high-temperature service",
    description: "Alloy steels engineered with chromium and molybdenum for exceptional creep strength and toughness in power, petrochemical, and structural applications.",
    grades: ["F1", "F5", "F9", "F11", "F22", "F91", "P11", "P22", "P91"],
    applications: ["Power generation", "Petrochemical", "Boilers & heat exchangers", "Pressure vessels"],
    specs: [
      { label: "Form", value: "Round Bars, Plates, Forgings" },
      { label: "Size Range", value: "10 mm – 500 mm" },
      { label: "Hardness", value: "HB 197 – 248" },
      { label: "Condition", value: "Annealed / Normalized & Tempered" }
    ],
    standards: ["ASTM A182", "ASTM A335", "ASME SA387"]
  }),
  make({
    slug: "carbon-steel",
    name: "Carbon Steel",
    category: "Raw Materials",
    tagline: "Reliable strength for structural & pressure applications",
    description: "Carbon steel raw materials with consistent mechanical properties for pipelines, structural work, and pressure-bearing fabrication.",
    grades: ["A105", "A106 Gr B", "A36", "St 37", "St 52", "IS 2062"],
    applications: ["Oil & gas pipelines", "Structural fabrication", "Pressure vessels", "Construction"],
    specs: [
      { label: "Form", value: "Round Bars, Plates, Pipes" },
      { label: "Tensile", value: "415 – 550 MPa" },
      { label: "Yield", value: "≥ 250 MPa" },
      { label: "Condition", value: "Hot Rolled, Normalized" }
    ],
    standards: ["ASTM A105", "ASTM A106", "IS 2062"]
  }),
  make({
    slug: "monel",
    name: "Monel",
    category: "Raw Materials",
    tagline: "Nickel-copper alloy for seawater & acid environments",
    description: "Monel 400 and K500 alloys offering outstanding resistance to seawater, hydrofluoric acid, and reducing media — ideal for marine and chemical equipment.",
    grades: ["Monel 400", "Monel K500"],
    applications: ["Marine engineering", "Heat exchangers", "Valves & pumps", "Oil refining"],
    specs: [
      { label: "Form", value: "Bars, Sheets, Forgings, Wire" },
      { label: "Density", value: "8.80 g/cm³" },
      { label: "Tensile", value: "550 – 690 MPa" },
      { label: "Hardness", value: "HB 110 – 150" }
    ],
    standards: ["ASTM B164", "ASTM B127", "ASME SB164"]
  }),
  make({
    slug: "Plates & Sheets",
    name: "Plates & Sheets",
    category: "Raw Materials",
    tagline: "Nickel-chromium superalloy for extreme heat",
    description: "Plates & Sheets superalloys retain strength and oxidation resistance at very high temperatures — the workhorse of aerospace, turbines, and chemical reactors.",
    grades: ["Plates & Sheets 600", "Plates & Sheets 601", "Plates & Sheets 625", "Plates & Sheets 718", "Plates & Sheets 800"],
    applications: ["Gas turbines", "Aerospace components", "Heat treatment fixtures", "Chemical reactors"],
    specs: [
      { label: "Service Temp", value: "Up to 1100 °C" },
      { label: "Form", value: "Bars, Sheets, Tubes, Forgings" },
      { label: "Density", value: "8.44 g/cm³" },
      { label: "Tensile", value: "830 – 1100 MPa" }
    ],
    standards: ["ASTM B166", "ASTM B168", "ASME SB443"]
  }),
  make({
    slug: "incoloy",
    name: "Incoloy",
    category: "Raw Materials",
    tagline: "Iron-nickel-chromium alloys for corrosive heat",
    description: "Incoloy alloys combine iron-base economy with nickel-grade corrosion and high-temperature resistance for furnace and process equipment.",
    grades: ["Incoloy 800", "Incoloy 800H", "Incoloy 800HT", "Incoloy 825"],
    applications: ["Heat exchangers", "Petrochemical piping", "Pulp & paper digesters", "Acid plants"],
    specs: [
      { label: "Service Temp", value: "Up to 1000 °C" },
      { label: "Form", value: "Bars, Plates, Tubes" },
      { label: "Density", value: "7.94 g/cm³" },
      { label: "Tensile", value: "≥ 520 MPa" }
    ],
    standards: ["ASTM B408", "ASTM B409", "ASTM B423"]
  }),
  make({
    slug: "hastelloy",
    name: "Hastelloy",
    category: "Raw Materials",
    tagline: "Nickel-molybdenum alloys for severe corrosion",
    description: "Hastelloy grades resist a wide range of aggressive chemicals — hydrochloric and sulfuric acids, chlorides, and oxidizing media.",
    grades: ["Hastelloy C-22", "Hastelloy C-276", "Hastelloy B-2", "Hastelloy X"],
    applications: ["Chemical processing", "Pharmaceutical", "Flue-gas desulfurization", "Pollution control"],
    specs: [
      { label: "Form", value: "Bars, Sheets, Plates, Wire" },
      { label: "Density", value: "8.89 g/cm³" },
      { label: "Tensile", value: "≥ 690 MPa" },
      { label: "Hardness", value: "HB ≤ 220" }
    ],
    standards: ["ASTM B574", "ASTM B575", "ASME SB575"]
  }),
  make({
    slug: "duplex",
    name: "Duplex Steel",
    category: "Raw Materials",
    tagline: "Twice the strength of austenitic stainless",
    description: "Duplex stainless steel offers a balanced austenite-ferrite microstructure, delivering higher strength and improved chloride stress-corrosion resistance.",
    grades: ["UNS S31803", "UNS S32205"],
    applications: ["Oil & gas", "Desalination plants", "Pulp & paper", "Marine structures"],
    specs: [
      { label: "Form", value: "Bars, Plates, Tubes, Forgings" },
      { label: "Yield", value: "≥ 450 MPa" },
      { label: "Tensile", value: "620 – 880 MPa" },
      { label: "PREN", value: "≥ 34" }
    ],
    standards: ["ASTM A182 F51", "ASTM A240 UNS S31803"]
  }),
  make({
    slug: "super-duplex",
    name: "Super Duplex",
    category: "Raw Materials",
    tagline: "Premium duplex for the most aggressive media",
    description: "Super duplex grades with PREN > 40 deliver elite corrosion resistance and mechanical strength for subsea and high-chloride service.",
    grades: ["UNS S32750", "UNS S32760", "Zeron 100"],
    applications: ["Subsea oil & gas", "Chemical tankers", "Seawater cooling", "Desalination"],
    specs: [
      { label: "Yield", value: "≥ 550 MPa" },
      { label: "Tensile", value: "750 – 1000 MPa" },
      { label: "PREN", value: "≥ 40" },
      { label: "Form", value: "Bars, Plates, Pipes, Fittings" }
    ],
    standards: ["ASTM A182 F53/F55", "ASTM A790"]
  }),
  make({
    slug: "ss-pipe-fittings",
    name: "SS Pipe Fittings",
    category: "Fittings",
    tagline: "Precision-engineered butt-weld & forged fittings",
    description: "Comprehensive range of stainless steel pipe fittings — elbows, tees, reducers, caps, and stubs — manufactured to international standards.",
    grades: ["SS 304/L", "SS 316/L", "SS 321", "SS 904L", "Duplex"],
    applications: ["Process piping", "Sanitary lines", "Hydraulic systems", "Power piping"],
    specs: [
      { label: "Size Range", value: "1/8″ – 48″" },
      { label: "Schedule", value: "SCH 5S – SCH XXS" },
      { label: "Type", value: "Butt-weld, Socket-weld, Threaded" },
      { label: "End", value: "Plain, Beveled, Threaded" }
    ],
    standards: ["ASME B16.9", "ASME B16.11", "MSS-SP-43"]
  }),
  make({
    slug: "nipple",
    name: "Nipple",
    category: "Fittings",
    tagline: "Threaded & welded pipe nipples in all grades",
    description: "Hex, swage, barrel and welding nipples in stainless, carbon, alloy and nickel alloys for tight connections in process piping.",
    grades: ["SS 304", "SS 316", "Carbon Steel", "Alloy Steel"],
    applications: ["Instrumentation", "Process piping", "Hydraulic lines"],
    specs: [
      { label: "Size", value: "1/8″ – 4″" },
      { label: "Type", value: "Hex, Barrel, Swage, Welding" },
      { label: "Class", value: "3000 / 6000 / 9000 LB" },
      { label: "Thread", value: "NPT, BSP, BSPT" }
    ],
    standards: ["ASME B16.11", "BS 3799"]
  }),
  make({
    slug: "coupling",
    name: "Coupling",
    category: "Fittings",
    tagline: "Full, half & reducing forged couplings",
    description: "Forged threaded and socket-weld couplings for joining pipes and nipples in high-pressure process systems.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Alloy Steel F11/F22"],
    applications: ["High-pressure piping", "Refinery service", "Chemical plants"],
    specs: [
      { label: "Size", value: "1/8″ – 4″" },
      { label: "Type", value: "Full, Half, Reducing" },
      { label: "Class", value: "2000 / 3000 / 6000 LB" },
      { label: "End", value: "Threaded / Socket Weld" }
    ],
    standards: ["ASME B16.11", "MSS-SP-83"]
  }),
  make({
    slug: "flanges",
    name: "Flanges",
    category: "Flanges",
    tagline: "Forged flanges in every class & facing",
    description: "Weld neck, slip-on, blind, socket weld, threaded, and lap joint flanges in a wide range of materials and pressure classes.",
    grades: ["SS 304/L/316/L", "Carbon F-, Alloy F-series", "Plates & Sheets", "Monel", "Duplex"],
    applications: ["Refineries", "Power plants", "Shipbuilding", "Process equipment"],
    specs: [
      { label: "Size", value: "1/2″ – 48″" },
      { label: "Class", value: "150# – 2500#" },
      { label: "Type", value: "WN, SO, BL, SW, TH, LJ" },
      { label: "Facing", value: "RF, FF, RTJ" }
    ],
    standards: ["ASME B16.5", "ASME B16.47", "EN 1092-1"]
  }),
  make({
    slug: "tee",
    name: "Tee",
    category: "Fittings",
    tagline: "Equal & reducing tees for branch connections",
    description: "Seamless and welded equal and reducing tees engineered for smooth flow transitions in pressure piping systems.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Alloy Steel"],
    applications: ["Process piping", "Refineries", "Power plants"],
    specs: [
      { label: "Size", value: "1/2″ – 48″" },
      { label: "Type", value: "Equal Tee, Reducing Tee" },
      { label: "Manufacturing", value: "Seamless / Welded" },
      { label: "Wall", value: "SCH 10 – SCH XXS" }
    ],
    standards: ["ASME B16.9", "MSS-SP-43"]
  }),
  make({
    slug: "reducer",
    name: "Reducer",
    category: "Fittings",
    tagline: "Concentric & eccentric pipe reducers",
    description: "Smooth-flow concentric and eccentric reducers to step pipe diameters in process and utility piping.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Duplex"],
    applications: ["Pump suction lines", "Heat exchanger piping", "Slurry systems"],
    specs: [
      { label: "Size", value: "1/2″ × 1/4″ – 48″ × 42″" },
      { label: "Type", value: "Concentric, Eccentric" },
      { label: "Manufacturing", value: "Seamless / Welded" },
      { label: "End", value: "Beveled" }
    ],
    standards: ["ASME B16.9", "MSS-SP-43"]
  }),
  make({
    slug: "elbow",
    name: "Elbow",
    category: "Fittings",
    tagline: "45°, 90°, 180° long & short radius elbows",
    description: "Butt-weld elbows in long and short radius configurations for changing direction in pressure piping systems.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Alloy Steel"],
    applications: ["Refineries", "Power plants", "Process piping"],
    specs: [
      { label: "Size", value: "1/2″ – 48″" },
      { label: "Angle", value: "45°, 90°, 180°" },
      { label: "Radius", value: "LR (1.5D), SR (1D), 3D, 5D" },
      { label: "Manufacturing", value: "Seamless / Welded" }
    ],
    standards: ["ASME B16.9", "MSS-SP-43"]
  }),
  make({
    slug: "erw-pipes",
    name: "ERW Pipes",
    category: "Pipes",
    tagline: "Electric Resistance Welded pipes for utilities",
    description: "ERW pipes manufactured from hot-rolled coils with high-frequency electric welding — cost-effective for water, gas, and structural applications.",
    grades: ["IS 1239", "IS 3589", "API 5L Gr B", "ASTM A53"],
    applications: ["Water transmission", "Structural use", "Fencing", "Gas distribution"],
    specs: [
      { label: "OD Range", value: "1/2″ – 24″" },
      { label: "Thickness", value: "1.6 – 12.7 mm" },
      { label: "Length", value: "Up to 12 m" },
      { label: "End", value: "Plain, Beveled, Threaded" }
    ],
    standards: ["ASTM A53", "API 5L", "IS 1239", "IS 3589"]
  }),
  make({
    slug: "seamless-pipes",
    name: "Seamless Pipes",
    category: "Pipes",
    tagline: "High-pressure seamless pipes for critical service",
    description: "Seamless pipes hot or cold drawn from solid billets — ideal for high-pressure, high-temperature, and corrosive media.",
    grades: ["ASTM A106 Gr B/C", "A312 TP304/316", "A335 P11/P22/P91"],
    applications: ["Oil & gas", "Power generation", "Refineries", "Boiler tubing"],
    specs: [
      { label: "OD Range", value: "1/8″ – 24″" },
      { label: "Schedule", value: "SCH 5 – SCH XXS" },
      { label: "Length", value: "Single Random / Double Random" },
      { label: "End", value: "Plain, Beveled, Threaded" }
    ],
    standards: ["ASTM A106", "ASTM A312", "ASTM A335", "API 5L"]
  })
];
const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [path]);
  const results = search.trim() ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).slice(0, 6) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-navy-deep text-primary-foreground text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex justify-between py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: "ISO 9001:2015 Certified • Mumbai, India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.primaryPhone}`, className: "hover:text-accent", children: SITE.contacts[0].phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${SITE.email}`, className: "hover:text-accent", children: SITE.email })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex items-center justify-between h-16 md:h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground font-black text-lg shadow-lg", children: "RS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-bold text-base md:text-lg ${scrolled ? "text-foreground" : "text-foreground"}`, children: "River Steels" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Steel & Alloys" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: n.to,
              className: "px-4 py-2 text-sm font-medium text-foreground hover:text-navy relative group",
              activeProps: { className: "px-4 py-2 text-sm font-semibold text-navy" },
              children: [
                n.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 right-4 -bottom-0.5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" })
              ]
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchOpen((s) => !s), className: "p-2 rounded-md hover:bg-secondary", "aria-label": "Search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${SITE.primaryPhone}`, className: "hidden md:inline-flex items-center gap-2 bg-navy text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-navy-deep transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              " Call Now"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden p-2", onClick: () => setOpen((s) => !s), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" }) })
          ] })
        ] }),
        searchOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              autoFocus: true,
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search products, grades, fittings...",
              className: "w-full px-4 py-3 rounded-md border border-input bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring"
            }
          ),
          results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 divide-y divide-border bg-card rounded-md border border-border overflow-hidden", children: results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/$slug", params: { slug: r.slug }, className: "flex justify-between p-3 hover:bg-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: r.category })
          ] }) }, r.slug)) })
        ] }) }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-x py-4 flex flex-col", children: [
          NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "py-3 border-b border-border text-foreground font-medium", children: n.label }, n.to)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.primaryPhone}`, className: "mt-4 bg-navy text-primary-foreground px-4 py-3 rounded-md text-center font-semibold", children: "Call Now" })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-md bg-gradient-to-br from-accent to-gold grid place-items-center text-navy-deep font-black", children: "RS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: "River Steels" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-80 leading-relaxed", children: [
          SITE.tagline,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-60 mt-4", children: "ISO 9001:2015 Certified • Established Trust" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-sm tracking-wider uppercase opacity-90", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm opacity-80", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "hover:text-accent transition", children: n.label }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-sm tracking-wider uppercase opacity-90", children: "Top Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm opacity-80", children: PRODUCTS.slice(0, 7).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: { slug: p.slug }, className: "hover:text-accent transition", children: p.name }) }, p.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-sm tracking-wider uppercase opacity-90", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              SITE.address.line1,
              ", ",
              SITE.address.line2,
              ", ",
              SITE.address.line3,
              ", ",
              SITE.address.line4
            ] })
          ] }),
          SITE.contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 mt-0.5 shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${c.phone.replace(/\s/g, "")}`, className: "hover:text-accent", children: [
              c.name,
              " — ",
              c.phone
            ] })
          ] }, c.phone)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mt-0.5 shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${SITE.email}`, className: "hover:text-accent break-all", children: SITE.email })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-5 flex flex-col md:flex-row justify-between text-xs opacity-70 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " River Steels. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://cre8digi.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Developed By Cre8digi - The Digital Agency"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Manufacturers, Stockists & Suppliers of Industrial Raw Materials." })
    ] }) })
  ] });
}
function FloatingButtons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `https://wa.me/${SITE.whatsappPhone}?text=Hi%20River%20Steels%2C%20I%27d%20like%20a%20quote.`,
        target: "_blank",
        rel: "noopener",
        "aria-label": "WhatsApp",
        className: "w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-7 h-7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: `tel:${SITE.primaryPhone}`,
        "aria-label": "Call Now",
        className: "w-14 h-14 rounded-full bg-navy text-primary-foreground grid place-items-center shadow-2xl hover:scale-110 transition",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-6 h-6" })
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "River Steels — Manufacturers, Stockists & Suppliers of Industrial Raw Materials" },
      { name: "description", content: "River Steels: Mumbai-based manufacturer, stockist & supplier of Stainless Steel, Alloy Steel, Carbon Steel, Monel, Inconel, Hastelloy, Duplex & Super Duplex pipes, fittings and flanges." },
      { name: "author", content: "River Steels" },
      { name: "keywords", content: "River Steels, stainless steel, alloy steel, carbon steel, monel, inconel, incoloy, hastelloy, duplex, super duplex, pipe fittings, flanges, ERW pipes, seamless pipes, Mumbai" },
      { property: "og:title", content: "River Steels — Industrial Raw Materials, Pipes, Fittings & Flanges" },
      { property: "og:description", content: "Manufacturers, Stockists & Suppliers of premium industrial raw materials across India and global markets." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "River Steels" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "River Steels",
          description: "Manufacturers, Stockists & Suppliers of Industrial Raw Materials",
          email: "riversteels316@gmail.com",
          telephone: "+91 8828471856",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office No. 6, 1st Floor, Plot No. 59/61, Khandke Building, Bhandari Street",
            addressLocality: "Girgaon, Mumbai",
            postalCode: "400004",
            addressCountry: "IN"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16 md:pt-[7.5rem] min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingButtons, {})
  ] });
}
const BASE_URL = "";
const Route$7 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/products", changefreq: "weekly", priority: "0.9" },
          { path: "/industries", changefreq: "monthly", priority: "0.7" },
          { path: "/gallery", changefreq: "monthly", priority: "0.6" },
          { path: "/blogs", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...PRODUCTS.map((p) => ({ path: `/products/${p.slug}`, changefreq: "monthly", priority: "0.8" }))
        ];
        const urls = entries.map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$6 = () => import("./products-DWkWftEz.mjs");
const Route$6 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Products — Stainless Steel, Alloys, Pipes & Fittings | River Steels"
    }, {
      name: "description",
      content: "Browse our complete catalogue: Stainless, Alloy, Carbon Steel, Monel, Plates & Sheets, Incoloy, Hastelloy, Duplex, Super Duplex, pipes, fittings, flanges."
    }, {
      property: "og:title",
      content: "Product Catalogue — River Steels"
    }, {
      property: "og:description",
      content: "Complete range of industrial raw materials and pipe products."
    }, {
      property: "og:url",
      content: "/products"
    }],
    links: [{
      rel: "canonical",
      href: "/products"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./industries-D55PUebd.mjs");
const Route$5 = createFileRoute("/industries")({
  head: () => ({
    meta: [{
      title: "Industries We Serve — River Steels"
    }, {
      name: "description",
      content: "River Steels supplies industrial raw materials to oil & gas, power, chemical, marine, construction, aerospace and more."
    }, {
      property: "og:title",
      content: "Industries We Serve"
    }, {
      property: "og:description",
      content: "Powering progress across critical industries worldwide."
    }, {
      property: "og:url",
      content: "/industries"
    }],
    links: [{
      rel: "canonical",
      href: "/industries"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./gallery-DHuvglXR.mjs");
const Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — River Steels"
    }, {
      name: "description",
      content: "Photo gallery of River Steels products and facility."
    }, {
      property: "og:title",
      content: "Gallery — River Steels"
    }, {
      property: "og:description",
      content: "Browse our products and manufacturing facility."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-BR0N5o7G.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact River Steels — Get a Quote"
    }, {
      name: "description",
      content: "Get in touch with River Steels in Mumbai. Email riversteels316@gmail.com or call +91 8828471856 for quotes on steel and alloys."
    }, {
      property: "og:title",
      content: "Contact River Steels"
    }, {
      property: "og:description",
      content: "Office: Girgaon, Mumbai. Email and phone listed."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
function Reveal({ children, delay = 0, y = 24, className }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: reduce ? false : { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
      className,
      children
    }
  );
}
function Counter({ to, suffix = "", duration = 2 }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
const $$splitComponentImporter$2 = () => import("./about-HMNpuExt.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — River Steels"
    }, {
      name: "description",
      content: "Learn about River Steels — two decades of manufacturing premium industrial steel and alloys from Mumbai."
    }, {
      property: "og:title",
      content: "About River Steels"
    }, {
      property: "og:description",
      content: "Manufacturers, stockists and suppliers of premium industrial raw materials."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
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
const $$splitComponentImporter$1 = () => import("./index-DrEw06Ti.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "River Steels — Premium Industrial Steel, Pipes, Fittings & Flanges title: River Steels | Stainless Steel, Alloy Steel, Pipes, Fittings & Flanges Supplier in Mumbai"
    }, {
      name: "description",
      content: "Mumbai-based manufacturer & supplier of Stainless Steel, Alloy, Carbon, Monel, Inconel, Hastelloy, Duplex pipes, fittings & flanges. Request a quote today."
    }, {
      property: "og:title",
      content: "River Steels — Industrial Raw Materials"
    }, {
      property: "og:description",
      content: "Premium industrial steel and alloy products, engineered to international standards."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./products._slug-zsk0nZw8.mjs");
const $$splitNotFoundComponentImporter = () => import("./products._slug-CYiMvJP2.mjs");
const Route = createFileRoute("/products/$slug")({
  loader: ({
    params
  }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.product;
    if (!p) return {
      meta: [{
        title: "Product — River Steels"
      }]
    };
    return {
      meta: [{
        title: `${p.name} — ${p.category} | River Steels`
      }, {
        name: "description",
        content: `${p.name}: ${p.tagline}. Grades, specifications and applications from River Steels, Mumbai.`
      }, {
        property: "og:title",
        content: `${p.name} — River Steels`
      }, {
        property: "og:description",
        content: p.tagline
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: `/products/${p.slug}`
      }],
      links: [{
        rel: "canonical",
        href: `/products/${p.slug}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: p.category,
          brand: {
            "@type": "Brand",
            name: "River Steels"
          }
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$7.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ProductsRoute = Route$6.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$8
});
const IndustriesRoute = Route$5.update({
  id: "/industries",
  path: "/industries",
  getParentRoute: () => Route$8
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ProductsSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProductsRoute
});
const ProductsRouteChildren = {
  ProductsSlugRoute
};
const ProductsRouteWithChildren = ProductsRoute._addFileChildren(
  ProductsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  IndustriesRoute,
  ProductsRoute: ProductsRouteWithChildren,
  SitemapDotxmlRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Counter as C,
  PRODUCTS as P,
  Reveal as R,
  SITE as S,
  PageHeader as a,
  Route as b,
  router as r
};
