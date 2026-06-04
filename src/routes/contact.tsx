import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "./about";
import { SITE } from "@/data/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact River Steels — Get a Quote" },
      { name: "description", content: "Get in touch with River Steels in Mumbai. Email riversteels316@gmail.com or call +91 8828471856 for quotes on steel and alloys." },
      { property: "og:title", content: "Contact River Steels" },
      { property: "og:description", content: "Office: Girgaon, Mumbai. Email and phone listed." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const mapsQuery = encodeURIComponent(SITE.fullAddress);
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Reach out for quotes, technical support or partnership inquiries — we usually reply within an hour." />

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MapPin, title: "Office", lines: [SITE.address.line1, SITE.address.line2, SITE.address.line3, SITE.address.line4] },
            { icon: Phone, title: "Phone", lines: SITE.contacts.map((c) => `${c.name} — ${c.phone}`) },
            { icon: Mail, title: "Email", lines: [SITE.email] },
          ].map((c) => (
            <Reveal key={c.title}>
              <div className="p-6 rounded-xl bg-card border border-border h-full">
                <div className="w-11 h-11 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground"><c.icon className="w-5 h-5" /></div>
                <h3 className="mt-4 font-bold text-lg">{c.title}</h3>
                <div className="mt-2 text-sm text-muted-foreground space-y-1">
                  {c.lines.map((l) => <div key={l}>{l}</div>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-x grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h2 className="text-3xl font-bold text-navy-deep">Send us a message</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your project, grade, size and quantity.</p>
            <div className="mt-8 bg-card p-6 md:p-8 rounded-xl shadow-xl border border-border">
              <InquiryForm />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold text-navy-deep">Visit our office</h2>
            <p className="mt-3 text-muted-foreground flex gap-2 items-center"><Clock className="w-4 h-4" /> Mon – Sat, 10:00 AM – 7:00 PM IST</p>
            <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-xl">
              <iframe
                title="River Steels Mumbai Location"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
