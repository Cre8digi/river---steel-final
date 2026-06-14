import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as Route, P as PRODUCTS, S as SITE, R as Reveal } from "./router-uDuXbu0a.mjs";
import { I as InquiryForm } from "./InquiryForm-ChCtvwqF.mjs";
import { o as ArrowLeft, P as Phone, j as CircleCheck, b as Mail, p as Download } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
function ProductPage() {
  const data = Route.useLoaderData();
  const p = data.product;
  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-navy-deep text-primary-foreground -mt-16 md:-mt-[7.5rem] pt-32 md:pt-40 pb-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 text-sm opacity-80 hover:text-accent transition mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Back to Products"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-semibold", children: p.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-bold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg opacity-85 max-w-xl", children: p.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#inquiry`, className: "bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold", children: "Request a Quote" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${SITE.primaryPhone}`, className: "border border-white/30 px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 hover:bg-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                " Call Now"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square rounded-2xl bg-gradient-to-br from-steel to-navy border border-white/10 grid place-items-center relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl md:text-7xl font-bold text-white/90 text-center px-8 relative", children: p.name })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-navy-deep", children: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: p.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-navy-deep", children: "Technical Specifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 overflow-hidden rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: p.specs.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-secondary/40" : "bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-semibold w-1/3", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: s.value })
          ] }, s.label)) }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-navy-deep", children: "Grades Available" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.grades.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-md bg-secondary border border-border text-sm font-medium", children: g }, g)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-navy-deep", children: "Applications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 grid sm:grid-cols-2 gap-3", children: p.applications.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-accent shrink-0 mt-0.5" }),
            a
          ] }, a)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-navy-deep", children: "Standards & Specifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.standards.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-md bg-navy text-primary-foreground text-sm font-medium", children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-32 h-fit space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-navy-deep text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Need a quotation?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80 mt-1", children: "Talk to our material experts." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${SITE.primaryPhone}`, className: "flex items-center gap-2 hover:text-accent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              " ",
              SITE.contacts[0].phone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${SITE.email}`, className: "flex items-center gap-2 hover:text-accent break-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
              " ",
              SITE.email
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "", download: true, className: "mt-5 w-full bg-accent text-accent-foreground py-3 rounded-md font-semibold inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
            " Download Catalogue"
          ] })
        ] }),
        related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Related Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: {
            slug: r.slug
          }, className: "block py-3 hover:text-navy font-medium", children: r.name }) }, r.slug)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "inquiry", className: "section bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-navy-deep", children: [
          "Request a Quote — ",
          p.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Share your requirement, and we'll respond with pricing and lead time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 bg-card p-6 md:p-8 rounded-xl shadow-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, { defaultProduct: p.name }) })
    ] }) })
  ] });
}
export {
  ProductPage as component
};
