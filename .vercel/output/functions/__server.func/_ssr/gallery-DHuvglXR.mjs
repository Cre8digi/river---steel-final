import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as PageHeader, R as Reveal } from "./router-uDuXbu0a.mjs";
import { r as img1, q as img2, p as img3, o as img4, n as img5, m as img6, l as img7, k as img8, j as img81, h as img9, g as img10, f as img11, e as img12, d as img13, c as img14, b as img15, a as img16, i as img17 } from "./1-xgzMArxD.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const IMAGES = [{
  src: img1,
  alt: "Product 1",
  span: "lg:col-span-2 lg:row-span-2"
}, {
  src: img2,
  alt: "Product 2"
}, {
  src: img3,
  alt: "Product 3"
}, {
  src: img4,
  alt: "Product 4"
}, {
  src: img5,
  alt: "Product 5"
}, {
  src: img6,
  alt: "Product 6"
}, {
  src: img7,
  alt: "Product 7"
}, {
  src: img8,
  alt: "Product 8"
}, {
  src: img81,
  alt: "Product 8.1"
}, {
  src: img9,
  alt: "Product 9"
}, {
  src: img10,
  alt: "Product 10"
}, {
  src: img11,
  alt: "Product 11"
}, {
  src: img12,
  alt: "Product 12"
}, {
  src: img13,
  alt: "Product 13"
}, {
  src: img14,
  alt: "Product 14"
}, {
  src: img15,
  alt: "Product 15"
}, {
  src: img16,
  alt: "Product 16"
}, {
  src: img17,
  alt: "Product 17"
}];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Gallery", subtitle: "Explore our products, inventory and manufacturing excellence." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]", children: IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 0.05, className: `overflow-hidden rounded-xl group cursor-pointer shadow-lg ${img.span ?? ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, loading: "lazy", className: "w-full h-full object-cover transition duration-700 group-hover:scale-110" }) }, i)) }) }) })
  ] });
}
export {
  Gallery as component
};
