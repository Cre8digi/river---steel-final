import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
const schema = objectType({
  name: stringType().trim().min(2).max(80),
  email: stringType().trim().email().max(120),
  phone: stringType().trim().min(7).max(20),
  product: stringType().trim().max(120).optional(),
  message: stringType().trim().min(5).max(1e3)
});
function InquiryForm({
  defaultProduct
}) {
  const [sent, setSent] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(
        parsed.error.issues[0]?.message ?? "Please check your inputs."
      );
      return;
    }
    const { name, email, phone, product, message } = parsed.data;
    const whatsappMessage = `
*🔔 New Inquiry - River Steels*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
📦 *Product:* ${product || "-"}

📝 *Requirement:*
${message}
`;
    const whatsappUrl = `https://wa.me/918828471856?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setSent(true);
    e.currentTarget.reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name: "name",
        placeholder: "Full Name *",
        className: "px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name: "email",
        type: "email",
        placeholder: "Email *",
        className: "px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name: "phone",
        placeholder: "Phone *",
        className: "px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name: "product",
        defaultValue: defaultProduct,
        placeholder: "Product of Interest",
        className: "px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        name: "message",
        placeholder: "Your Requirement *",
        rows: 5,
        className: "md:col-span-2 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-2 text-sm text-destructive", children: error }),
    sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-2 text-sm text-green-600", children: "Opening WhatsApp..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        className: "md:col-span-2 bg-navy text-primary-foreground py-3 rounded-md font-semibold hover:bg-navy-deep transition",
        children: "Send Inquiry on WhatsApp"
      }
    )
  ] });
}
export {
  InquiryForm as I
};
