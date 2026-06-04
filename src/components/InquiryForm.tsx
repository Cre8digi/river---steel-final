import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(20),
  product: z.string().trim().max(120).optional(),
  message: z.string().trim().min(5).max(1000),
});

export function InquiryForm({
  defaultProduct,
}: {
  defaultProduct?: string;
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        name="name"
        placeholder="Full Name *"
        className="px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <input
        name="email"
        type="email"
        placeholder="Email *"
        className="px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <input
        name="phone"
        placeholder="Phone *"
        className="px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <input
        name="product"
        defaultValue={defaultProduct}
        placeholder="Product of Interest"
        className="px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <textarea
        name="message"
        placeholder="Your Requirement *"
        rows={5}
        className="md:col-span-2 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />

      {error && (
        <p className="md:col-span-2 text-sm text-destructive">{error}</p>
      )}

      {sent && (
        <p className="md:col-span-2 text-sm text-green-600">
          Opening WhatsApp...
        </p>
      )}

      <button
        type="submit"
        className="md:col-span-2 bg-navy text-primary-foreground py-3 rounded-md font-semibold hover:bg-navy-deep transition"
      >
        Send Inquiry on WhatsApp
      </button>
    </form>
  );
}