import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as PageHeader, S as SITE, R as Reveal } from "./router-uDuXbu0a.mjs";
import { I as InquiryForm } from "./InquiryForm-ChCtvwqF.mjs";
import { a as MapPin, P as Phone, b as Mail, g as Clock } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
function Contact() {
  const mapsQuery = encodeURIComponent(SITE.fullAddress);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Contact Us", subtitle: "Reach out for quotes, technical support or partnership inquiries — we usually reply within an hour." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid lg:grid-cols-3 gap-6 mb-12", children: [{
        icon: MapPin,
        title: "Office",
        lines: [SITE.address.line1, SITE.address.line2, SITE.address.line3, SITE.address.line4]
      }, {
        icon: Phone,
        title: "Phone",
        lines: SITE.contacts.map((c) => `${c.name} — ${c.phone}`)
      }, {
        icon: Mail,
        title: "Email",
        lines: [SITE.email]
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-card border border-border h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold text-lg", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground space-y-1", children: c.lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, l)) })
      ] }) }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-navy-deep", children: "Send us a message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Tell us about your project, grade, size and quantity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 bg-card p-6 md:p-8 rounded-xl shadow-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-navy-deep", children: "Visit our office" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground flex gap-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            " Mon – Sat, 10:00 AM – 7:00 PM IST"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-xl overflow-hidden border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "River Steels Mumbai Location", src: `https://www.google.com/maps?q=${mapsQuery}&output=embed`, width: "100%", height: "450", style: {
            border: 0
          }, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
